/* ================================================================
   login.js — Login page logic
   ================================================================ */

function applyLoginTranslations() {
  const lang = getCurrentLanguage() || 'bg';
  document.title = t('auth.documentTitle');
  document.documentElement.lang = lang === 'bg' ? 'bg' : 'en';
  document.getElementById('lang-toggle-btn').textContent = t('auth.languageToggle');

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (!key) return;
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
      return;
    }
    element.textContent = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const placeholderKey = element.getAttribute('data-i18n-placeholder');
    if (!placeholderKey) return;
    element.placeholder = t(placeholderKey);
  });
}

function translateLoginError(errorCode, fallback) {
  if (errorCode === 'NoUser') return t('auth.errorNoUser') || fallback;
  if (errorCode === 'WrongPassword') return t('auth.errorWrongPassword') || fallback;
  return fallback;
}

function handleLoginError(err) {
  const body = err.body || {};
  const code = body.errorCode;
  const message = body.error || err.message || 'Login failed';
  return translateLoginError(code, message);
}

function initLoginPageLanguage() {
  applyLoginTranslations();
  document.getElementById('lang-toggle-btn').addEventListener('click', () => {
    const newLang = getCurrentLanguage() === 'en' ? 'bg' : 'en';
    setLanguage(newLang);
    applyLoginTranslations();
  });
}

// Make functions global for i18n.js
window.handleLoginError = handleLoginError;

document.addEventListener('DOMContentLoaded', () => {
  initLoginPageLanguage();
  // Ensure initLogin runs
  if (typeof initLogin === 'function') initLogin();
});