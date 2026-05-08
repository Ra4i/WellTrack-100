/* ================================================================
   settings.js — Settings page logic
   ================================================================ */

const settingsTranslations = {
  en: {
    navMain: "Main",
    challenge: "100-day challenge",
    "settings.title": "Settings",
    "settings.language": "Language",
    "settings.theme": "Theme",
    "settings.light": "Light",
    "settings.dark": "Dark",
    "settings.difficulty": "Difficulty Level",
    "settings.easy": "🌱 Easy",
    "settings.normal": "⚡ Normal",
    "settings.hard": "🔥 Hard",
    "settings.notifications": "Notifications",
    "settings.motivationalQuotes": "Motivational Quotes",
    "settings.save": "Save settings",
    "common.back": "Back"
  },
  bg: {
    navMain: "Основно",
    challenge: "100-дневно предизвикателство",
    "settings.title": "Настройки",
    "settings.language": "Език",
    "settings.theme": "Тема",
    "settings.light": "Светла",
    "settings.dark": "Тъмна",
    "settings.difficulty": "Ниво на трудност",
    "settings.easy": "🌱 Лесно",
    "settings.normal": "⚡ Нормално",
    "settings.hard": "🔥 Трудно",
    "settings.notifications": "Известия",
    "settings.motivationalQuotes": "Мотивиращи цитати",
    "settings.save": "Запази настройките",
    "common.back": "Обратно"
  }
};

function applySettingsTranslations() {
  const currentLang = getCurrentLanguage() || 'bg';
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (settingsTranslations[currentLang] && settingsTranslations[currentLang][key]) {
      el.textContent = settingsTranslations[currentLang][key];
    }
  });
}

// Make function global for i18n.js
window.applyPageTranslations = applySettingsTranslations;

// Fix 2 — Replace requireAuth() call with safe version
const user = getCurrentUser();
if (!user) { window.location.href = '/Home/Login'; }

// Fetch user settings from backend
async function loadUserSettings() {
  if (!USE_API) return null;
  try {
    const response = await fetch(`/api/users/${user.id}`);
    if (response.ok) {
      const userData = await response.json();
      return userData;
    }
  } catch (err) {
    console.error('Failed to load user settings:', err);
  }
  return null;
}

const storedSettings = JSON.parse(localStorage.getItem('wt_user_settings') || '{}');

// Load settings with priority: backend > localStorage > defaults
loadUserSettings().then(userData => {
  const settings = {
    language:      userData?.language      || storedSettings.language      || getCurrentLanguage() || 'bg',
    theme:         userData?.theme         || storedSettings.theme         || 'dark',
    difficulty:    userData?.difficulty    || storedSettings.difficulty    || 'normal',
    notifications: userData?.notifications !== undefined ? userData.notifications : (typeof storedSettings.notifications === 'boolean' ? storedSettings.notifications : true),
    quotes:        userData?.quotes        !== undefined ? userData.quotes        : (typeof storedSettings.quotes        === 'boolean' ? storedSettings.quotes        : true)
  };

  // Load saved settings into form
  document.getElementById(`lang-${settings.language}`).checked    = true;
  document.getElementById(`theme-${settings.theme}`).checked      = true;
  document.getElementById(`diff-${settings.difficulty}`).checked  = true;
  document.getElementById('toggle-notifications').checked          = settings.notifications;
  document.getElementById('toggle-quotes').checked                 = settings.quotes;

  // Status labels
  function updateStatus(id, checked) {
    const lang = getCurrentLanguage();
    document.getElementById(id).textContent = checked
      ? (lang === 'bg' ? 'Включено' : 'Enabled')
      : (lang === 'bg' ? 'Изключено' : 'Disabled');
  }

  updateStatus('notif-status',  settings.notifications);
  updateStatus('quotes-status', settings.quotes);

  document.getElementById('toggle-notifications').addEventListener('change', e => updateStatus('notif-status',  e.target.checked));
  document.getElementById('toggle-quotes').addEventListener('change',        e => updateStatus('quotes-status', e.target.checked));

  // Save
  document.getElementById('save-settings').addEventListener('click', async () => {
    const newSettings = {
      language:      document.querySelector('input[name="language"]:checked').value,
      theme:         document.querySelector('input[name="theme"]:checked').value,
      difficulty:    document.querySelector('input[name="difficulty"]:checked').value,
      notifications: document.getElementById('toggle-notifications').checked,
      quotes:        document.getElementById('toggle-quotes').checked
    };

    // Save to backend
    if (USE_API) {
      try {
        const response = await fetch(`/api/users/${user.id}/settings`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newSettings)
        });
        if (!response.ok) throw new Error('Failed to save settings');
        const result = await response.json();
        showToast(result.message || 'Settings saved successfully', 'success');
      } catch (err) {
        showToast('Failed to save settings, please try again', 'error');
        console.error('Save error:', err);
        return;
      }
    }

    // Update localStorage
    localStorage.setItem('wt_user_settings', JSON.stringify(newSettings));

    // Apply theme immediately across the page
    if (newSettings.theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    const oldLang = settings.language;
    if (oldLang !== newSettings.language) {
      setTimeout(() => setLanguage(newSettings.language), 500);
    }
  });
});

// Load user display
if (user) {
  document.querySelectorAll('.user-display-name').forEach(el => el.textContent = user.name || 'User');
  document.querySelector('.user-avatar-init').textContent = (user.name || 'U').charAt(0).toUpperCase();
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
});