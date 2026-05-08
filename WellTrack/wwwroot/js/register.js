/* ================================================================
   register.js — Register page logic
   ================================================================ */

const registerTranslations = {
  en: {
    documentTitle: 'Register · WellTrack 100',
    'auth.registerTitle': 'Start the challenge',
    'auth.registerDescription': 'Day 1 begins the moment you register.',
    'auth.name': 'Full name',
    'auth.namePlaceholder': 'Alex Johnson',
    'auth.age': 'Age',
    'auth.agePlaceholder': '25',
    'auth.email': 'Email',
    'auth.emailPlaceholder': 'you@example.com',
    'auth.password': 'Password',
    'auth.passwordPlaceholder': 'Min. 6 characters',
    'auth.confirmPassword': 'Confirm password',
    'auth.confirmPasswordPlaceholder': '••••••••',
    'auth.register': 'Start the 100-day challenge 🚀',
    'auth.alreadyHaveAccount': 'Already have an account?',
    'auth.login': 'Log in',
    'auth.languageToggle': 'EN / BG'
  },
  bg: {
    documentTitle: 'Регистрация · WellTrack 100',
    'auth.registerTitle': 'Започни предизвикателството',
    'auth.registerDescription': 'Ден 1 започва в момента, в който се регистрираш.',
    'auth.name': 'Пълно име',
    'auth.namePlaceholder': 'Alex Johnson',
    'auth.age': 'Години',
    'auth.agePlaceholder': '25',
    'auth.email': 'Имейл',
    'auth.emailPlaceholder': 'you@example.com',
    'auth.password': 'Парола',
    'auth.passwordPlaceholder': 'Мин. 6 символа',
    'auth.confirmPassword': 'Потвърди парола',
    'auth.confirmPasswordPlaceholder': '••••••••',
    'auth.register': 'Започни 100-дневното предизвикателство 🚀',
    'auth.alreadyHaveAccount': 'Вече имаш акаунт?',
    'auth.login': 'Вход',
    'auth.languageToggle': 'BG / EN'
  }
};

const REGISTER_LANGUAGE_KEY = 'authRegisterLanguage';
let currentRegisterLanguage = 'en';

function applyRegisterTranslations(lang) {
  const strings = registerTranslations[lang] || registerTranslations.en;
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

  currentRegisterLanguage = lang;
  localStorage.setItem(REGISTER_LANGUAGE_KEY, lang);
}

function initRegisterPageLanguage() {
  const storedLang = localStorage.getItem(REGISTER_LANGUAGE_KEY);
  const lang = storedLang === 'bg' ? 'bg' : 'en';
  applyRegisterTranslations(lang);
  document.getElementById('lang-toggle-btn').addEventListener('click', () => {
    applyRegisterTranslations(currentRegisterLanguage === 'en' ? 'bg' : 'en');
  });
}

// Make function global for i18n.js
window.applyRegisterTranslations = applyRegisterTranslations;

document.addEventListener('DOMContentLoaded', () => {
  initRegisterPageLanguage();
  // Ensure initRegister runs
  if (typeof initRegister === 'function') initRegister();
});