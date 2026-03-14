const API_BASE = 'http://localhost:5001/api';
const USE_API = true;

function showToast(msg, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  const icon = type === 'success' ? '✓' : '✕';
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icon}</span> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

function getCurrentUser() {
  try { return JSON.parse(localStorage.getItem('wt_user')); } catch { return null; }
}
function setCurrentUser(user) {
  localStorage.setItem('wt_user', JSON.stringify(user));
}
function logout() {
  localStorage.removeItem('wt_user');
  window.location.href = 'login.html';
}
function requireAuth() {
  if (!getCurrentUser()) { window.location.href = 'login.html'; return false; }
  return true;
}

function getCurrentDay() {
  const user = getCurrentUser();
  if (!user) return 1;
  const startDate = new Date(user.startDate || Date.now());
  const today = new Date();
  const diffMs = today - startDate;
  return Math.min(Math.max(Math.floor(diffMs / 86400000) + 1, 1), 100);
}

// ── localStorage fallbacks (demo mode only) ──────────────
function getAllProgress() {
  try { return JSON.parse(localStorage.getItem('wt_progress')) || []; } catch { return []; }
}
function saveProgressLocal(entry) {
  const all = getAllProgress();
  const existing = all.findIndex(e => e.userId === entry.userId && e.currentDay === entry.currentDay);
  if (existing >= 0) all[existing] = entry; else all.push(entry);
  localStorage.setItem('wt_progress', JSON.stringify(all));
}
function getUserProgressLocal(userId) {
  return getAllProgress().filter(e => e.userId === userId).sort((a, b) => a.currentDay - b.currentDay);
}
function getUsers() {
  try { return JSON.parse(localStorage.getItem('wt_users')) || []; } catch { return []; }
}
function registerUser(name, email, password) {
  const users = getUsers();
  if (users.find(u => u.email === email)) return { error: 'Email already registered.' };
  const user = { id: Date.now(), name, email, password, startDate: new Date().toISOString() };
  users.push(user);
  localStorage.setItem('wt_users', JSON.stringify(users));
  return { user };
}
function loginUser(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return { error: 'Invalid email or password.' };
  return { user };
}

// ── API helpers ───────────────────────────────────────────
async function apiPost(endpoint, body) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  return res.json();
}
async function apiGet(endpoint) {
  const res = await fetch(`${API_BASE}${endpoint}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

function setRingProgress(el, pct) {
  const fill = el.querySelector('.ring-fill');
  if (!fill) return;
  const circ = parseFloat(fill.getAttribute('stroke-dasharray'));
  fill.style.strokeDashoffset = circ * (1 - pct / 100);
}

// ── Home ──────────────────────────────────────────────────
function initHome() {
  const user = getCurrentUser();
  const loginLink = document.getElementById('nav-login');
  const dashLink = document.getElementById('nav-dashboard');
  if (user) {
    if (loginLink) { loginLink.textContent = 'Dashboard'; loginLink.href = 'dashboard.html'; }
    if (dashLink) dashLink.classList.remove('hidden');
  }
}

// ── Login ─────────────────────────────────────────────────
function initLogin() {
  if (getCurrentUser()) { window.location.href = 'dashboard.html'; return; }
  const form = document.getElementById('login-form');
  const alertEl = document.getElementById('alert');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    alertEl.className = 'alert';

    if (USE_API) {
      try {
        const data = await apiPost('/users/login', { email, password });
        setCurrentUser(data);
        window.location.href = 'dashboard.html';
      } catch (err) {
        alertEl.textContent = err.message;
        alertEl.className = 'alert error show';
      }
    } else {
      const result = loginUser(email, password);
      if (result.error) { alertEl.textContent = result.error; alertEl.className = 'alert error show'; return; }
      setCurrentUser(result.user);
      window.location.href = 'dashboard.html';
    }
  });
}

// ── Register ──────────────────────────────────────────────
function initRegister() {
  if (getCurrentUser()) { window.location.href = 'dashboard.html'; return; }
  const form = document.getElementById('register-form');
  const alertEl = document.getElementById('alert');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm').value;
    alertEl.className = 'alert';

    if (password !== confirm) { alertEl.textContent = 'Passwords do not match.'; alertEl.className = 'alert error show'; return; }
    if (password.length < 6) { alertEl.textContent = 'Password must be at least 6 characters.'; alertEl.className = 'alert error show'; return; }

    if (USE_API) {
      try {
        const data = await apiPost('/users/register', { name, email, password });
        setCurrentUser(data);
        alertEl.textContent = '🎉 Account created! Starting your 100-day journey...';
        alertEl.className = 'alert success show';
        setTimeout(() => window.location.href = 'dashboard.html', 1500);
      } catch (err) {
        alertEl.textContent = err.message;
        alertEl.className = 'alert error show';
      }
    } else {
      const result = registerUser(name, email, password);
      if (result.error) { alertEl.textContent = result.error; alertEl.className = 'alert error show'; return; }
      setCurrentUser(result.user);
      alertEl.textContent = '🎉 Account created! Starting your 100-day journey...';
      alertEl.className = 'alert success show';
      setTimeout(() => window.location.href = 'dashboard.html', 1500);
    }
  });
}

// ── Dashboard ─────────────────────────────────────────────
function initDashboard() {
  if (!requireAuth()) return;
  const user = getCurrentUser();

  document.querySelectorAll('.user-display-name').forEach(el => el.textContent = user.name);
  document.querySelectorAll('.user-avatar-init').forEach(el => el.textContent = user.name.charAt(0).toUpperCase());

  const currentDay = getCurrentDay();
  document.getElementById('current-day').textContent = `Day ${currentDay}`;
  document.getElementById('days-remaining').textContent = `${100 - currentDay} days remaining`;

  const ring = document.getElementById('day-ring');
  if (ring) setRingProgress(ring, currentDay);

  // Load today's existing entry from API
  if (USE_API) {
    apiGet(`/progress?userId=${user.id}`)
      .then(entries => {
        const today = entries.find(e => Number(e.currentDay) === Number(currentDay));
        if (today) {
          document.getElementById('water-input').value = today.waterIntake || 0;
          document.getElementById('sleep-input').value = today.sleepHours || 0;
          document.getElementById('workout-input').checked = today.workoutCompleted || false;
          updateStatCards(today);
        }
      })
      .catch(err => console.error('Could not load today entry:', err));
  } else {
    const today = entries => entries.find(e => Number(e.currentDay) === Number(currentDay));
    const entry = today(getAllProgress().filter(e => Number(e.userId) === Number(user.id)));
    if (entry) {
      document.getElementById('water-input').value = entry.waterIntake || 0;
      document.getElementById('sleep-input').value = entry.sleepHours || 0;
      document.getElementById('workout-input').checked = entry.workoutCompleted || false;
      updateStatCards(entry);
    }
  }

  const logForm = document.getElementById('log-form');
  if (!logForm) return;

  logForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const entry = {
      userId: user.id,
      currentDay,
      waterIntake: parseFloat(document.getElementById('water-input').value) || 0,
      sleepHours: parseFloat(document.getElementById('sleep-input').value) || 0,
      workoutCompleted: document.getElementById('workout-input').checked,
      date: new Date().toISOString()
    };

    if (USE_API) {
      try {
        await apiPost('/progress/update', entry);
        showToast(`Progress saved for Day ${currentDay}!`);
        updateStatCards(entry);
      } catch (err) {
        console.error('Save error:', err);
        showToast('Failed to save: ' + err.message, 'error');
      }
    } else {
      saveProgressLocal(entry);
      showToast(`Progress saved for Day ${currentDay}!`);
      updateStatCards(entry);
    }
  });
}

function updateStatCards(entry) {
  const waterVal = document.getElementById('water-stat');
  const sleepVal = document.getElementById('sleep-stat');
  const workoutVal = document.getElementById('workout-stat');
  if (waterVal) waterVal.textContent = (entry.waterIntake || 0).toFixed(1);
  if (sleepVal) sleepVal.textContent = (entry.sleepHours || 0).toFixed(1);
  if (workoutVal) workoutVal.textContent = entry.workoutCompleted ? '✓' : '—';
}

// ── Progress page ─────────────────────────────────────────
async function initProgress() {
  if (!requireAuth()) return;
  const user = getCurrentUser();

  document.querySelectorAll('.user-display-name').forEach(el => el.textContent = user.name);
  document.querySelectorAll('.user-avatar-init').forEach(el => el.textContent = user.name.charAt(0).toUpperCase());

  const currentDay = getCurrentDay();

  const bigRing = document.getElementById('big-ring');
  if (bigRing) setRingProgress(bigRing, currentDay);
  document.getElementById('ring-pct').textContent = `${currentDay}%`;
  document.getElementById('ring-day').textContent = `Day ${currentDay}`;

  let history = [];

  if (USE_API) {
    try {
      history = await apiGet(`/progress?userId=${user.id}`);
    } catch (err) {
      console.error('Could not load progress:', err);
    }
  } else {
    history = getUserProgressLocal(user.id);
  }

  const completedDays = history.length;
  const workoutDays = history.filter(e => e.workoutCompleted).length;
  const avgWater = history.length ? (history.reduce((s, e) => s + (e.waterIntake || 0), 0) / history.length).toFixed(1) : 0;
  const avgSleep = history.length ? (history.reduce((s, e) => s + (e.sleepHours || 0), 0) / history.length).toFixed(1) : 0;

  const el = id => document.getElementById(id);
  if (el('prog-completed')) el('prog-completed').textContent = completedDays;
  if (el('prog-workouts')) el('prog-workouts').textContent = workoutDays;
  if (el('prog-avg-water')) el('prog-avg-water').textContent = `${avgWater}L`;
  if (el('prog-avg-sleep')) el('prog-avg-sleep').textContent = `${avgSleep}h`;

  renderHistoryTable(history);
}

function renderHistoryTable(history) {
  const tbody = document.getElementById('history-tbody');
  if (!tbody) return;
  if (!history.length) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:2rem">No entries yet. Start logging on the Dashboard!</td></tr>';
    return;
  }
  tbody.innerHTML = history.slice().reverse().map(e => `
    <tr>
      <td class="day-num">Day ${e.currentDay}</td>
      <td>
        <div class="mini-bar">
          <div class="mini-bar-track"><div class="mini-bar-fill" style="width:${Math.min((e.waterIntake/3)*100,100)}%;background:var(--accent2)"></div></div>
          <span>${(e.waterIntake||0).toFixed(1)}L</span>
        </div>
      </td>
      <td>
        <div class="mini-bar">
          <div class="mini-bar-track"><div class="mini-bar-fill" style="width:${Math.min((e.sleepHours/9)*100,100)}%;background:var(--accent3)"></div></div>
          <span>${(e.sleepHours||0).toFixed(1)}h</span>
        </div>
      </td>
      <td class="${e.workoutCompleted ? 'workout-check' : 'workout-no'}">${e.workoutCompleted ? '✓ Done' : '✕ Rest'}</td>
      <td style="color:var(--text-muted);font-size:0.8rem">${new Date(e.date||Date.now()).toLocaleDateString()}</td>
    </tr>
  `).join('');
}

function setActiveNav() {
  const page = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-item').forEach(item => {
    const href = item.getAttribute('href') || item.dataset.page;
    if (href && page.includes(href.replace('.html', ''))) item.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.logout-btn').forEach(btn => btn.addEventListener('click', logout));
  if (page === 'index.html' || page === '') initHome();
  else if (page === 'login.html') initLogin();
  else if (page === 'register.html') initRegister();
  else if (page === 'dashboard.html') initDashboard();
  else if (page === 'progress.html') initProgress();
  setActiveNav();
});