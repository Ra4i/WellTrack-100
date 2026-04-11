const API_BASE = 'http://localhost:5001/api';
const USE_API = true;

// ── Utility ───────────────────────────────────────────────
function escapeHtml(text) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// ── Theme ─────────────────────────────────────────────────
function applyTheme() {
  try {
    const settings = JSON.parse(localStorage.getItem('wt_user_settings') || '{}');
    const theme = settings.theme || 'dark';
    if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light');
    else document.documentElement.removeAttribute('data-theme');
  } catch {
    document.documentElement.removeAttribute('data-theme');
  }
}
applyTheme();

// ── Difficulty ────────────────────────────────────────────
const DIFFICULTY_CONFIG = {
  easy:   { label: '🌱 Easy',   repsMultiplier: 0.7, setsMultiplier: 0.8, color: '#16a34a',
            description: 'Lighter sets, longer rest — great for beginners.' },
  normal: { label: '⚡ Normal', repsMultiplier: 1.0, setsMultiplier: 1.0, color: '#ca8a04',
            description: 'Standard 100-day program as designed.' },
  hard:   { label: '🔥 Hard',   repsMultiplier: 1.3, setsMultiplier: 1.2, color: '#dc2626',
            description: 'More sets, higher reps — for experienced athletes.' },
};

function getDifficulty() {
  const s = JSON.parse(localStorage.getItem('wt_user_settings') || '{}');
  return DIFFICULTY_CONFIG[s.difficulty || 'normal'];
}
function getDifficultyName() {
  const s = JSON.parse(localStorage.getItem('wt_user_settings') || '{}');
  return s.difficulty || 'normal';
}

function scaleExercise(exerciseStr, diff) {
  if (diff.repsMultiplier === 1.0 && diff.setsMultiplier === 1.0) return exerciseStr;
  return exerciseStr.replace(/\d+(\.\d+)?/g, (num) => {
    const scaled = Math.round(parseFloat(num) * diff.repsMultiplier);
    return scaled;
  });
}

// ── Streak calculation ────────────────────────────────────
function calculateStreak(entries) {
  if (!entries || !entries.length) return 0;
  const uniqueDays = new Set(
    entries.filter(e => e.workoutCompleted).map(e => e.currentDay)
  );
  if (!uniqueDays.size) return 0;
  const sorted = Array.from(uniqueDays).sort((a, b) => b - a);
  const currentDay = getCurrentDay();
  if (sorted[0] !== currentDay) return 0;
  let streak = 1;
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1] - 1) streak++;
    else break;
  }
  return streak;
}

// ── Level calculation ─────────────────────────────────────
function calculateCurrentLevel(entries) {
  if (!entries || !entries.length) return 0;
  return Math.min(entries.length, 100);
}

// ── Toast ─────────────────────────────────────────────────
function showToast(msg, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${type === 'success' ? '✓' : '✕'}</span> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

// ── Auth ──────────────────────────────────────────────────
function getCurrentUser() {
  try { return JSON.parse(localStorage.getItem('wt_user')); } catch { return null; }
}
function setCurrentUser(user) { localStorage.setItem('wt_user', JSON.stringify(user)); }
function logout() { localStorage.removeItem('wt_user'); window.location.href = 'login.html'; }
function requireAuth() {
  if (!getCurrentUser()) { window.location.href = 'login.html'; return false; }
  return true;
}

// ── Day logic ─────────────────────────────────────────────
function getCurrentDay() {
  const user = getCurrentUser();
  if (!user) return 1;
  const startDate = new Date(user.startDate || Date.now());
  const diffMs = new Date() - startDate;
  return Math.min(Math.max(Math.floor(diffMs / 86400000) + 1, 1), 100);
}

// ── Progress (LOCAL) ──────────────────────────────────────
function getAllProgress() {
  try { return JSON.parse(localStorage.getItem('wt_progress')) || []; } catch { return []; }
}

function saveProgressLocal(entry) {
  const all = getAllProgress();
  const i = all.findIndex(e => e.userId === entry.userId && e.currentDay === entry.currentDay);
  if (i >= 0) all[i] = entry; else all.push(entry);
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
  users.push(user); localStorage.setItem('wt_users', JSON.stringify(users));
  return { user };
}
function loginUser(email, password) {
  const user = getUsers().find(u => u.email === email && u.password === password);
  return user ? { user } : { error: 'Invalid email or password.' };
}

// ── Exercise tracking ─────────────────────────────────────
function getCompletedLevels(userId) {
  try { return JSON.parse(localStorage.getItem(`wt_completed_levels_${userId}`)) || {}; } catch { return {}; }
}
function getLevelKey(levelNumber) {
  const today = new Date().toISOString().split('T')[0];
  return `${today}_level_${levelNumber}`;
}
function saveLevelCompletion(userId, levelNumber) {
  const completions = getCompletedLevels(userId);
  completions[getLevelKey(levelNumber)] = true;
  localStorage.setItem(`wt_completed_levels_${userId}`, JSON.stringify(completions));
}
function canCompleteLevelToday(userId, levelNumber) {
  return !getCompletedLevels(userId)[getLevelKey(levelNumber)];
}
function getLevelsCompletedToday(userId) {
  const completions = getCompletedLevels(userId);
  const today = new Date().toISOString().split('T')[0];
  return Object.keys(completions).filter(k => k.startsWith(today)).length;
}

// ── Friends / Requests (localStorage, per-email) ──────────
function _friendsKey(email)   { return `wt_friends_${email}`; }
function _inboxKey(email)     { return `wt_requests_in_${email}`; }
function _outboxKey(email)    { return `wt_requests_out_${email}`; }
function _messagesKey(email)  { return `wt_chat_${email}`; }

function getFriends(email)    { try { return JSON.parse(localStorage.getItem(_friendsKey(email)))  || []; } catch { return []; } }
function getInbox(email)      { try { return JSON.parse(localStorage.getItem(_inboxKey(email)))    || []; } catch { return []; } }
function getOutbox(email)     { try { return JSON.parse(localStorage.getItem(_outboxKey(email)))   || []; } catch { return []; } }
function getChats(email)      { try { return JSON.parse(localStorage.getItem(_messagesKey(email))) || {}; } catch { return {}; } }

function saveFriends(email, data)  { localStorage.setItem(_friendsKey(email),   JSON.stringify(data)); }
function saveInbox(email, data)    { localStorage.setItem(_inboxKey(email),     JSON.stringify(data)); }
function saveOutbox(email, data)   { localStorage.setItem(_outboxKey(email),    JSON.stringify(data)); }
function saveChats(email, data)    { localStorage.setItem(_messagesKey(email),  JSON.stringify(data)); }

function sendFriendRequest(fromUser, toEmail) {
  const myFriends = getFriends(fromUser.email);
  if (myFriends.find(f => f.email === toEmail)) return { error: 'Already friends.' };
  const outbox = getOutbox(fromUser.email);
  if (outbox.find(r => r.toEmail === toEmail)) return { error: 'Request already sent.' };
  if (toEmail === fromUser.email) return { error: "You can't add yourself." };
  const inbox = getInbox(toEmail);
  inbox.push({ fromEmail: fromUser.email, fromName: fromUser.name, sentAt: new Date().toISOString() });
  saveInbox(toEmail, inbox);
  outbox.push({ toEmail, sentAt: new Date().toISOString() });
  saveOutbox(fromUser.email, outbox);
  return { ok: true };
}

function acceptFriendRequest(myEmail, myName, fromEmail, fromName) {
  const myFriends = getFriends(myEmail);
  if (!myFriends.find(f => f.email === fromEmail)) {
    myFriends.push({ email: fromEmail, name: fromName, status: 'offline', currentDay: 1 });
    saveFriends(myEmail, myFriends);
  }
  const theirFriends = getFriends(fromEmail);
  if (!theirFriends.find(f => f.email === myEmail)) {
    theirFriends.push({ email: myEmail, name: myName, status: 'offline', currentDay: 1 });
    saveFriends(fromEmail, theirFriends);
  }
  const inbox = getInbox(myEmail).filter(r => r.fromEmail !== fromEmail);
  saveInbox(myEmail, inbox);
  const outbox = getOutbox(fromEmail).filter(r => r.toEmail !== myEmail);
  saveOutbox(fromEmail, outbox);
}

function declineFriendRequest(myEmail, fromEmail) {
  const inbox = getInbox(myEmail).filter(r => r.fromEmail !== fromEmail);
  saveInbox(myEmail, inbox);
  const outbox = getOutbox(fromEmail).filter(r => r.toEmail !== myEmail);
  saveOutbox(fromEmail, outbox);
}

// ── Friends / Messaging API Functions ─────────────────────
async function getFriendsFromAPI(userId) {
  if (!USE_API) return getFriends(getCurrentUser().email);
  try {
    const friends = await apiGet(`/friends/list?userId=${userId}`);
    return friends.map(f => ({
      email: f.friendEmail,
      name: f.friendName,
      id: f.friendUserId
    }));
  } catch (err) {
    console.error('Failed to load friends:', err);
    return [];
  }
}

async function getPendingRequestsFromAPI(userId) {
  if (!USE_API) return getInbox(getCurrentUser().email);
  try {
    const requests = await apiGet(`/friends/requests?userId=${userId}`);
    return requests.map(r => ({
      fromEmail: r.fromEmail,
      fromName: r.fromName,
      fromUserId: r.fromUserId,
      sentAt: r.sentAt
    }));
  } catch (err) {
    console.error('Failed to load requests:', err);
    return [];
  }
}

async function sendFriendRequestViaAPI(fromUserId, toUserEmail) {
  if (!USE_API) return sendFriendRequest({ id: fromUserId, email: getCurrentUser().email }, toUserEmail);
  try {
    await apiPost('/friends/request', { fromUserId, toUserEmail: toUserEmail.toLowerCase() });
    return { ok: true };
  } catch (err) {
    return { error: err.message };
  }
}

async function acceptFriendRequestViaAPI(fromUserId, toUserId) {
  if (!USE_API) {
    const fromUser = await apiGet(`/users/${fromUserId}`).catch(() => null);
    const toUser = getCurrentUser();
    acceptFriendRequest(toUser.email, toUser.name, fromUser?.email || '', fromUser?.name || '');
    return { ok: true };
  }
  try {
    await apiPost('/friends/accept', { fromUserId, toUserId });
    return { ok: true };
  } catch (err) {
    return { error: err.message };
  }
}

async function declineFriendRequestViaAPI(fromUserId, toUserId) {
  if (!USE_API) {
    declineFriendRequest(getCurrentUser().email, '');
    return { ok: true };
  }
  try {
    await apiPost('/friends/decline', { fromUserId, toUserId });
    return { ok: true };
  } catch (err) {
    return { error: err.message };
  }
}

async function getConversationFromAPI(userId, friendId, page = 0, limit = 50) {
  if (!USE_API) {
    const user = getCurrentUser();
    const chats = getChats(user.email);
    const threadId = [user.email, ''].sort().join('__');
    return chats[threadId] || [];
  }
  try {
    const response = await apiGet(`/messages/thread?userId=${userId}&friendId=${friendId}&page=${page}&limit=${limit}`);
    return response.messages || [];
  } catch (err) {
    console.error('Failed to load conversation:', err);
    return [];
  }
}

async function sendMessageViaAPI(senderId, receiverId, content) {
  if (!USE_API) return { ok: true };
  try {
    const response = await apiPost('/messages/send', { senderId, receiverId, content });
    return response;
  } catch (err) {
    return { error: err.message };
  }
}

async function deleteMessageViaAPI(messageId, userId) {
  if (!USE_API) return { ok: true };
  try {
    await fetch(`${API_BASE}/messages/${messageId}?userId=${userId}`, { method: 'DELETE' });
    return { ok: true };
  } catch (err) {
    return { error: err.message };
  }
}

// ── API ───────────────────────────────────────────────────
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

// ── Home ──────────────────────────────────────────────────
function initHome() {
  const user = getCurrentUser();
  const loginLink = document.getElementById('nav-login');
  if (user && loginLink) { loginLink.textContent = 'Dashboard'; loginLink.href = 'dashboard.html'; }
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
      } catch (err) { alertEl.textContent = err.message; alertEl.className = 'alert error show'; }
    } else {
      const result = loginUser(email, password);
      if (result.error) { alertEl.textContent = result.error; alertEl.className = 'alert error show'; return; }
      setCurrentUser(result.user); window.location.href = 'dashboard.html';
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
        alertEl.textContent = '🎉 Your recovery journey starts now!';
        alertEl.className = 'alert success show';
        setTimeout(() => window.location.href = 'dashboard.html', 1500);
      } catch (err) { alertEl.textContent = err.message; alertEl.className = 'alert error show'; }
    } else {
      const result = registerUser(name, email, password);
      if (result.error) { alertEl.textContent = result.error; alertEl.className = 'alert error show'; return; }
      setCurrentUser(result.user);
      alertEl.textContent = '🎉 Your recovery journey starts now!';
      alertEl.className = 'alert success show';
      setTimeout(() => window.location.href = 'dashboard.html', 1500);
    }
  });
}

// ── Savings ───────────────────────────────────────────────
function updateSavingsDisplay(cigPrice) {
  const currentDay = getCurrentDay();
  const packCost = parseFloat(cigPrice) || 7.50;
  const cigsAvoided = currentDay * 20;
  const totalSaved = (cigsAvoided / 20) * packCost;
  const moneyEl = document.getElementById('money-saved');
  const cigsEl  = document.getElementById('cigs-avoided');
  if (moneyEl) moneyEl.textContent = `$${totalSaved.toFixed(2)}`;
  if (cigsEl)  cigsEl.textContent  = cigsAvoided.toLocaleString();
}

// ── Dashboard ─────────────────────────────────────────────
function initDashboard() {
  if (!requireAuth()) return;
  const user = getCurrentUser();

  document.querySelectorAll('.user-display-name').forEach(el => el.textContent = user.name);
  document.querySelectorAll('.user-avatar-init').forEach(el => el.textContent = user.name.charAt(0).toUpperCase());

  const currentDay = getCurrentDay();
  const dayEl = document.getElementById('current-day');
  const remEl = document.getElementById('days-remaining');
  if (dayEl) dayEl.textContent = `${t('common.day')} ${currentDay}`;
  if (remEl) remEl.textContent = t('dashboard.daysRemaining', 100 - currentDay);

  const diff = getDifficulty();
  const diffBadge = document.getElementById('difficulty-badge');
  if (diffBadge) {
    diffBadge.textContent = diff.label;
    diffBadge.style.color = diff.color;
    diffBadge.title = diff.description;
  }

  const loadEntries = USE_API
    ? apiGet(`/progress?userId=${user.id}`)
    : Promise.resolve(getUserProgressLocal(user.id));

  loadEntries.then(entries => {
    const today = entries.find(e => Number(e.currentDay) === Number(currentDay));
    if (today) {
      document.getElementById('water-input').value   = today.waterIntake || 0;
      document.getElementById('sleep-input').value   = today.sleepHours || 0;
      document.getElementById('workout-input').checked = today.workoutCompleted || false;
      updateStatCards(today);
    }
    const streak = calculateStreak(entries);
    const streakEl = document.getElementById('workout-streak');
    if (streakEl) streakEl.textContent = streak;
    const levelEl = document.getElementById('current-level');
    if (levelEl) levelEl.textContent = calculateCurrentLevel(entries);
  }).catch(err => console.error('Could not load entries:', err));

  const logForm = document.getElementById('log-form');
  if (!logForm) return;

  logForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const entry = {
      userId: user.id,
      currentDay,
      waterIntake:      parseFloat(document.getElementById('water-input').value) || 0,
      sleepHours:       parseFloat(document.getElementById('sleep-input').value) || 0,
      workoutCompleted: document.getElementById('workout-input').checked,
      date: new Date().toISOString()
    };
    if (USE_API) {
      try {
        await apiPost('/progress/update', entry);
        showToast(t('dashboard.daySaved', currentDay));
        updateStatCards(entry);
        const entries = await apiGet(`/progress?userId=${user.id}`);
        const streakEl = document.getElementById('workout-streak');
        if (streakEl) streakEl.textContent = calculateStreak(entries);
        const levelEl = document.getElementById('current-level');
        if (levelEl) levelEl.textContent = calculateCurrentLevel(entries);
        updateSavingsDisplay(localStorage.getItem('wt_cig_price') || '7.50');
      } catch (err) { showToast(t('dashboard.failedSave', err.message), 'error'); }
    } else {
      saveProgressLocal(entry);
      showToast(t('dashboard.daySaved', currentDay));
      updateStatCards(entry);
      updateSavingsDisplay(localStorage.getItem('wt_cig_price') || '7.50');
    }
  });

  const cigPriceInput = document.getElementById('cig-price');
  if (cigPriceInput) {
    const savedPrice = localStorage.getItem('wt_cig_price') || '7.50';
    cigPriceInput.value = savedPrice;
    updateSavingsDisplay(savedPrice);
    cigPriceInput.addEventListener('change', e => { localStorage.setItem('wt_cig_price', e.target.value); updateSavingsDisplay(e.target.value); });
    cigPriceInput.addEventListener('input',  e => updateSavingsDisplay(e.target.value));
  }
}

function updateStatCards(entry) {
  const waterVal   = document.getElementById('water-stat');
  const sleepVal   = document.getElementById('sleep-stat');
  const workoutVal = document.getElementById('workout-stat');
  if (waterVal)   waterVal.textContent   = (entry.waterIntake || 0).toFixed(1);
  if (sleepVal)   sleepVal.textContent   = (entry.sleepHours  || 0).toFixed(1);
  if (workoutVal) workoutVal.textContent = entry.workoutCompleted ? '✓' : '—';
}

// ── Progress page ─────────────────────────────────────────
async function initProgress() {
  if (!requireAuth()) return;
  const user = getCurrentUser();
  document.querySelectorAll('.user-display-name').forEach(el => el.textContent = user.name);
  document.querySelectorAll('.user-avatar-init').forEach(el => el.textContent = user.name.charAt(0).toUpperCase());

  let history = [];
  try {
    history = USE_API ? await apiGet(`/progress?userId=${user.id}`) : getUserProgressLocal(user.id);
  } catch (err) { console.error('Could not load progress:', err); }

  const completedDays = history.length;
  const workoutDays   = history.filter(e => e.workoutCompleted).length;
  const streak        = calculateStreak(history);
  const avgWater      = completedDays ? (history.reduce((s, e) => s + (e.waterIntake || 0), 0) / completedDays).toFixed(1) : 0;
  const avgSleep      = completedDays ? (history.reduce((s, e) => s + (e.sleepHours  || 0), 0) / completedDays).toFixed(1) : 0;

  const el = id => document.getElementById(id);
  if (el('prog-completed'))  el('prog-completed').textContent  = completedDays;
  if (el('prog-workouts'))   el('prog-workouts').textContent   = workoutDays;
  if (el('prog-streak'))     el('prog-streak').textContent     = streak;
  if (el('prog-avg-water'))  el('prog-avg-water').textContent  = `${avgWater}L`;
  if (el('prog-avg-sleep'))  el('prog-avg-sleep').textContent  = `${avgSleep}h`;
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
      <td><div class="mini-bar"><div class="mini-bar-track"><div class="mini-bar-fill" style="width:${Math.min((e.waterIntake/3)*100,100)}%;background:var(--accent2)"></div></div><span>${(e.waterIntake||0).toFixed(1)}L</span></div></td>
      <td><div class="mini-bar"><div class="mini-bar-track"><div class="mini-bar-fill" style="width:${Math.min((e.sleepHours/9)*100,100)}%;background:var(--accent3)"></div></div><span>${(e.sleepHours||0).toFixed(1)}h</span></div></td>
      <td class="${e.workoutCompleted ? 'workout-check' : 'workout-no'}">${e.workoutCompleted ? '✓ Done' : '✕ Rest'}</td>
      <td style="color:var(--text-muted);font-size:0.8rem">${new Date(e.date||Date.now()).toLocaleDateString()}</td>
    </tr>
  `).join('');
}

// ── Levels page ───────────────────────────────────────────
async function initLevels() {
  if (!requireAuth()) return;
  const user = getCurrentUser();
  document.querySelectorAll('.user-display-name').forEach(el => el.textContent = user.name);
  document.querySelectorAll('.user-avatar-init').forEach(el => el.textContent = user.name.charAt(0).toUpperCase());

  const diff = getDifficulty();
  const diffBadge = document.getElementById('difficulty-badge');
  if (diffBadge) {
    diffBadge.textContent = diff.label;
    diffBadge.style.color = diff.color;
    diffBadge.title = diff.description;
  }

  let history = [];
  try {
    history = USE_API ? await apiGet(`/progress?userId=${user.id}`) : getUserProgressLocal(user.id);
  } catch (err) { console.error('Could not load levels:', err); }

  const completedLevel = calculateCurrentLevel(history);
  const currentDay     = getCurrentDay();
  const nextLevel      = Math.min(completedLevel + 1, 100);

  const lvlEl    = document.getElementById('level-number');
  const lvlTitle = document.getElementById('level-title');
  const lvlBar   = document.getElementById('level-bar-fill');
  const lvlPct   = document.getElementById('level-pct');

  if (lvlEl)    lvlEl.textContent    = completedLevel;
  if (lvlTitle) lvlTitle.textContent = getLevels()[completedLevel]?.title || 'Complete!';
  if (lvlBar)   lvlBar.style.width   = `${completedLevel}%`;
  if (lvlPct)   lvlPct.textContent   = `${completedLevel}/100`;

  renderMotivation(completedLevel > 0 ? completedLevel : 1);
  renderLevelGrid(completedLevel, nextLevel, currentDay);

  // Store completedLevel globally for use in showLevelDetail
  window.completedLevel = completedLevel;
}

function completeLevel(levelNum) {
  event.stopPropagation();
  const user = getCurrentUser();
  if (!user) return;
  const currentDay = getCurrentDay();
  if (levelNum > currentDay) {
    showToast(t('dashboard.levelNotAvailable', levelNum), 'error');
    return;
  }
  const entry = { userId: user.id, currentDay: levelNum, waterIntake: 0, sleepHours: 0, workoutCompleted: true, date: new Date().toISOString() };
  if (USE_API) {
    apiPost('/progress/update', entry).then(() => { showToast(t('dashboard.levelCompleted', levelNum)); initLevels(); })
      .catch(err => showToast(t('dashboard.failed', err.message), 'error'));
  } else {
    saveProgressLocal(entry);
    showToast(t('dashboard.levelCompleted', levelNum));
    initLevels();
  }
}

function renderMotivation(levelNum) {
  const lvl = getLevels()[levelNum - 1];
  if (!lvl) return;
  const smokeEl   = document.getElementById('motivation-smoke');
  const alcoholEl = document.getElementById('motivation-alcohol');
  const motTitle  = document.getElementById('motivation-title');
  if (motTitle)  motTitle.textContent  = `${t('levels.levelLabel')} ${levelNum} — ${lvl.title}`;
  if (smokeEl)   smokeEl.textContent   = lvl.smoke;
  if (alcoholEl) alcoholEl.textContent = lvl.alcohol;
}

function renderLevelGrid(completedLevel, nextLevel, currentDay) {
  const grid = document.getElementById('level-grid');
  if (!grid) return;
  const user    = getCurrentUser();
  const canDoEx = user ? getLevelsCompletedToday(user.id) < 5 : false;

  grid.innerHTML = getLevels().map(lvl => {
    let state = 'locked';
    if (lvl.level <= completedLevel) state = 'done';
    else if (lvl.level === nextLevel) state = 'current';

    const exerciseIndicator = canDoEx && lvl.level <= currentDay && lvl.exercises?.length
      ? `<div style="position:absolute;top:4px;right:4px;width:8px;height:8px;background:var(--accent);border-radius:50%;animation:pulse 2s infinite;" title="${t('levels.exercises')}"></div>`
      : '';

    return `
      <div class="level-card ${state}" onclick="showLevelDetail(${lvl.level})" title="${lvl.title}" style="position:relative;">
        <div class="level-card-num">${lvl.level}</div>
        <div class="level-card-icon">${state === 'done' ? '✓' : state === 'current' ? '▶' : '🔒'}</div>
        <div class="level-card-title">${lvl.title}</div>
        ${exerciseIndicator}
      </div>
    `;
  }).join('');
}

function showLevelDetail(levelNum) {
  const currentDay = getCurrentDay();
  const user = getCurrentUser();
  if (levelNum > currentDay) {
    showToast(t('dashboard.levelNotAvailable', levelNum), 'error');
    return;
  }
  const lvl = getLevels()[levelNum - 1];
  if (!lvl) return;

  const diff = getDifficulty();
  const modal          = document.getElementById('level-modal');
  const modalTitle     = document.getElementById('modal-title');
  const modalSmoke     = document.getElementById('modal-smoke');
  const modalAlcohol   = document.getElementById('modal-alcohol');
  const modalLevel     = document.getElementById('modal-level-num');
  const modalExercises = document.getElementById('modal-exercises');

  if (modalLevel)   modalLevel.textContent   = `${t('levels.levelLabel')} ${levelNum}`;
  if (modalTitle)   modalTitle.textContent   = lvl.title;
  if (modalSmoke)   modalSmoke.textContent   = lvl.smoke;
  if (modalAlcohol) modalAlcohol.textContent = lvl.alcohol;

  const isLevelCompleted = levelNum <= window.completedLevel;

  if (modalExercises) {
    if (lvl.exercises?.length) {
      const canDo = canCompleteLevelToday(user.id, levelNum);

      const scaledExercises = lvl.exercises.map(ex => {
        const scaled = scaleExercise(ex, diff);
        const changed = scaled !== ex;
        return `<li style="padding:0.4rem 0;font-size:0.9rem;color:var(--text-dim);line-height:1.6;">
          ✓ ${scaled}${changed ? ` <span style="font-size:0.75rem;color:${diff.color};margin-left:4px;">(${diff.label})</span>` : ''}
        </li>`;
      }).join('');

      const statusBox = isLevelCompleted
        ? `<div style="margin-top:0.8rem;padding:0.8rem;background:var(--surface);border-left:3px solid var(--accent-warn);border-radius:4px;font-size:0.85rem;color:var(--text-muted);">${t('levels.completed')}! ${t('levels.resetIn')} 🔄</div>`
        : canDo
        ? `<div style="margin-top:0.8rem;padding:0.8rem;background:var(--surface);border-left:3px solid var(--accent);border-radius:4px;font-size:0.85rem;color:var(--accent);">✓ ${t('levels.exercises')} — ${t('levels.complete')}!</div>`
        : `<div style="margin-top:0.8rem;padding:0.8rem;background:var(--surface);border-left:3px solid var(--accent-warn);border-radius:4px;font-size:0.85rem;color:var(--text-muted);">${t('levels.completed')}! ${t('levels.resetIn')} 🔄</div>`;

      modalExercises.innerHTML = scaledExercises + statusBox;

      if (!isLevelCompleted && canDo && user) {
        const btn = document.createElement('button');
        btn.textContent = `✓ ${t('levels.complete')}`;
        btn.style.cssText = 'margin-top:0.8rem;width:100%;padding:0.6rem;background:var(--accent);color:#0a0a0f;border:none;border-radius:4px;cursor:pointer;font-weight:500;font-family:Syne,sans-serif;';
        btn.onclick = (e) => {
          e.stopPropagation();
          saveLevelCompletion(user.id, levelNum);
          showToast(t('dashboard.exercisesDone'));
          setTimeout(() => showLevelDetail(levelNum), 500);
        };
        modalExercises.appendChild(btn);
      }
    } else {
      modalExercises.innerHTML = `<li style="padding:0.4rem 0;color:var(--text-muted);">No exercises assigned</li>`;
    }
  }

  // Add complete level button if level is unlocked and not already completed
  if (levelNum <= currentDay && levelNum > window.completedLevel && modalExercises) {
    // Remove any existing complete button first
    const existingBtn = document.querySelector('.level-complete-main-btn');
    if (existingBtn) existingBtn.remove();

    const completeLevelBtn = document.createElement('button');
    completeLevelBtn.className = 'level-complete-main-btn';
    completeLevelBtn.textContent = `▶ Complete & Next Level`;
    completeLevelBtn.style.cssText = 'width:100%;padding:0.8rem;background:var(--accent);color:#0a0a0f;border:none;border-radius:4px;cursor:pointer;font-weight:600;font-size:1rem;font-family:Syne,sans-serif;margin-top:1rem;';
    completeLevelBtn.onclick = (e) => {
      e.stopPropagation();
      completeLevel(levelNum);
      closeLevelModal();
    };
    modalExercises.parentElement.appendChild(completeLevelBtn);
  }

  if (modal) modal.classList.add('show');
}

function closeLevelModal() {
  const modal = document.getElementById('level-modal');
  if (modal) modal.classList.remove('show');
}

// ── Nav ───────────────────────────────────────────────────
function setActiveNav() {
  const page = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-item').forEach(item => {
    const href = item.getAttribute('href') || item.dataset.page;
    if (href && page.includes(href.replace('.html', ''))) item.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.logout-btn').forEach(btn => btn.addEventListener('click', logout));
  if (page === 'index.html' || page === '') initHome();
  else if (page === 'login.html')     initLogin();
  else if (page === 'register.html')  initRegister();
  else if (page === 'dashboard.html') initDashboard();
  else if (page === 'progress.html')  initProgress();
  else if (page === 'levels.html')    initLevels();
  setActiveNav();
});
