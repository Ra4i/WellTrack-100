/* ================================================================
   progress.js — Progress page logic
   ================================================================ */

const progressTranslations = {
  en: {
    navMain: "Main",
    challenge: "100-day challenge"
  },
  bg: {
    navMain: "Основно",
    challenge: "100-дневно предизвикателство"
  }
};

function applyProgressTranslations() {
  const currentLang = getCurrentLanguage() || 'bg';
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (progressTranslations[currentLang] && progressTranslations[currentLang][key]) {
      el.textContent = progressTranslations[currentLang][key];
    }
  });
}

// Make function global for i18n.js
window.applyPageTranslations = applyProgressTranslations;

document.addEventListener('DOMContentLoaded', () => {
  if (typeof initProgress === 'function') initProgress();
});