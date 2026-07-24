/* ================================================================
   register.js — Register page logic
   ================================================================ */

function applyRegisterTranslations() {
  const lang = getCurrentLanguage() || 'bg';
  document.title = t('auth.registerDocumentTitle');
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

function initRegisterPageLanguage() {
  applyRegisterTranslations();
  document.getElementById('lang-toggle-btn').addEventListener('click', () => {
    const newLang = getCurrentLanguage() === 'en' ? 'bg' : 'en';
    setLanguage(newLang);
    applyRegisterTranslations();
  });
}

// Make function global for i18n.js
// window.applyRegisterTranslations = applyRegisterTranslations; // removed as not needed

document.addEventListener('DOMContentLoaded', () => {
  initRegisterPageLanguage();
  // Ensure initRegister runs
  if (typeof initRegister === 'function') initRegister();
});