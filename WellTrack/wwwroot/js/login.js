/* ================================================================
   login.js — Login page logic
   ================================================================ */

const loginTranslations = {
  en: {
    documentTitle: 'Login · WellTrack 100',
    'auth.loginTitle': 'Welcome back',
    'auth.loginDescription': 'Continue your 100-day wellness journey.',
    'auth.email': 'Email',
    'auth.emailPlaceholder': 'you@example.com',
    'auth.password': 'Password',
    'auth.passwordPlaceholder': '••••••••',
    'auth.login': 'Log in',
    'auth.noAccount': "Don't have an account?",
    'nav.startChallenge': 'Start the challenge →',
    'common.back': 'Back',
    'auth.languageToggle': 'EN / BG',
    'errorNoUser': 'No account found with this email address',
    'errorWrongPassword': 'Incorrect password, please try again'
  },
  bg: {
    documentTitle: 'Вход · WellTrack 100',
    'auth.loginTitle': 'Добре дошли',
    'auth.loginDescription': 'Продължи 100-дневното си уелнес пътешествие.',
    'auth.email': 'Имейл',
    'auth.emailPlaceholder': 'you@example.com',
    'auth.password': 'Парола',
    'auth.passwordPlaceholder': '••••••••',
    'auth.login': 'Вход',
    'auth.noAccount': 'Нямаш акаунт?',
    'nav.startChallenge': 'Започни предизвикателството →',
    'common.back': 'Обратно',
    'auth.languageToggle': 'BG / EN',
    'errorNoUser': 'Няма намерен акаунт с този имейл адрес',
    'errorWrongPassword': 'Грешна парола, моля опитайте отново'
  }
};

const LOGIN_LANGUAGE_KEY = 'authLoginLanguage';
let currentLoginLanguage = 'en';

function applyLoginTranslations(lang) {
  const strings = loginTranslations[lang] || loginTranslations.en;
  document.title = strings.documentTitle;
  document.documentElement.lang = lang === 'bg' ? 'bg' : 'en';
  document.getElementById('lang-toggle-btn').textContent = strings['auth.languageToggle'];

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (!key || !(key in strings)) return;
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
      return;
    }
    element.textContent = strings[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const placeholderKey = element.getAttribute('data-i18n-placeholder');
    if (!placeholderKey || !(placeholderKey in strings)) return;
    element.placeholder = strings[placeholderKey];
  });

  currentLoginLanguage = lang;
  localStorage.setItem(LOGIN_LANGUAGE_KEY, lang);
}

function translateLoginError(errorCode, fallback) {
  const strings = loginTranslations[currentLoginLanguage] || loginTranslations.en;
  if (errorCode === 'NoUser') return strings.errorNoUser || fallback;
  if (errorCode === 'WrongPassword') return strings.errorWrongPassword || fallback;
  return fallback;
}

function handleLoginError(err) {
  const body = err.body || {};
  const code = body.errorCode;
  const message = body.error || err.message || 'Login failed';
  return translateLoginError(code, message);
}

function initLoginPageLanguage() {
  const storedLang = localStorage.getItem(LOGIN_LANGUAGE_KEY);
  const lang = storedLang === 'bg' ? 'bg' : 'en';
  applyLoginTranslations(lang);
  document.getElementById('lang-toggle-btn').addEventListener('click', () => {
    applyLoginTranslations(currentLoginLanguage === 'en' ? 'bg' : 'en');
  });
}

// Make functions global for i18n.js
window.applyLoginTranslations = applyLoginTranslations;
window.handleLoginError = handleLoginError;

document.addEventListener('DOMContentLoaded', () => {
  initLoginPageLanguage();
  // Ensure initLogin runs
  if (typeof initLogin === 'function') initLogin();
});