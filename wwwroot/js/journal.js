/* ================================================================
   journal.js — Journal page logic
   ================================================================ */

function applyJournalTranslations() {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (key) {
      el.textContent = t(key);
    }
  });
}

// Fix 2 — Replace requireAuth() call with safe version
const user = getCurrentUser();
if (!user) { window.location.href = '/Home/Login'; }

const JOURNAL_API = `${API_BASE}/journal`;

// ── Local Storage Helper ──────────────────────────────────
function getLocalJournalEntries(userId) {
  try {
    const data = JSON.parse(localStorage.getItem(`wt_journal_${userId}`) || '[]');
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function saveLocalJournalEntry(userId, entry) {
  const entries = getLocalJournalEntries(userId);
  entries.unshift(entry);
  localStorage.setItem(`wt_journal_${userId}`, JSON.stringify(entries));
}

// ── Helpers ──────────────────────────────────────────────
function getUserId() {
  const journalUser = getCurrentUser();
  const id = journalUser?.id ?? journalUser?.Id ?? journalUser?.userId;
  return id && Number(id) > 0 ? Number(id) : null;
}

async function apiFetch(url, options = {}) {
  if (!USE_API) throw new Error('API unavailable');
  const res = await fetch(url, options);
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    const msg  = body?.error || body?.message || `HTTP ${res.status}`;
    throw new Error(msg);
  }
  return res.json();
}

// ── Init ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const userId = getUserId();
  if (!userId) { window.location.href = '/Home/Login'; return; }
  updateCounters();
  loadHistory();
  if (typeof applyTranslations === 'function') applyTranslations();
});

// ── Counters ─────────────────────────────────────────────
async function updateCounters() {
  const userId = getUserId();
  if (!userId) return;
  try {
    let entries;
    if (USE_API) {
      entries = await apiFetch(`${JOURNAL_API}?userId=${userId}`);
    } else {
      entries = getLocalJournalEntries(userId);
    }
    if (!entries?.length) return;
    const latest = entries[0];
    document.getElementById('smokeDays').innerText   = latest.smokeDays   ?? 0;
    document.getElementById('alcoholDays').innerText = latest.alcoholDays ?? 0;
  } catch (err) {
    console.error('Failed to load counters:', err.message);
  }
}

// ── Save entry ────────────────────────────────────────────
async function saveEntry() {
  const userId = getUserId();
  if (!userId) { window.location.href = '/Home/Login'; return; }

  const lang = (typeof getCurrentLanguage === 'function') ? getCurrentLanguage() : 'bg';
  const note = document.getElementById('noteInput').value.trim();

  if (!note) {
    alert(lang === 'en' ? 'Write something in the journal!' : 'Напиши нещо в дневника!');
    return;
  }

  const smokeDays   = (parseInt(document.getElementById('smokeDays').innerText)   || 0)
                      + (document.getElementById('checkSmoke').checked   ? 1 : 0);
  const alcoholDays = (parseInt(document.getElementById('alcoholDays').innerText) || 0)
                      + (document.getElementById('checkAlcohol').checked ? 1 : 0);

  const entry = {
    smokeDays,
    alcoholDays,
    note,
    date: new Date().toLocaleString(lang === 'en' ? 'en-US' : 'bg-BG')
  };

  try {
    if (USE_API) {
      await apiFetch(`${JOURNAL_API}?userId=${userId}`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(entry)
      });
    } else {
      saveLocalJournalEntry(userId, entry);
    }

    document.getElementById('noteInput').value      = '';
    document.getElementById('checkSmoke').checked   = false;
    document.getElementById('checkAlcohol').checked = false;

    if (typeof showToast === 'function')
      showToast(lang === 'en' ? 'Entry saved! 📓' : 'Записът е запазен! 📓');

    updateCounters();
    loadHistory();
  } catch (err) {
    console.error('Failed to save entry:', err.message);
    if (typeof showToast === 'function')
      showToast(lang === 'en' ? `Error: ${err.message}` : `Грешка: ${err.message}`, 'error');
  }
}

// ── Load history ──────────────────────────────────────────
async function loadHistory() {
  const userId     = getUserId();
  const historyDiv = document.getElementById('history');
  if (!userId || !historyDiv) return;

  try {
    let entries;
    if (USE_API) {
      entries = await apiFetch(`${JOURNAL_API}?userId=${userId}`);
    } else {
      entries = getLocalJournalEntries(userId);
    }
    if (!entries?.length) { historyDiv.innerHTML = ''; return; }
    historyDiv.innerHTML = entries.map(e => `
      <div class="entry">
        <div class="entry-date">${e.date}</div>
        <div style="margin-top:8px;">${escapeHtml(e.note)}</div>
      </div>
    `).join('');
  } catch (err) {
    console.error('Failed to load history:', err.message);
  }
}