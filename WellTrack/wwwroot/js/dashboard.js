/* ================================================================
   dashboard.js — Dashboard page logic
   ================================================================ */

const dashboardTranslations = {
  en: {
    navMain: "Main",
    challenge: "100-day challenge",
    logoutTitle: "Logout",
    difficultyTooltip: "Change in Settings",
    difficultyNormal: "Normal",
    waterTarget: "Goal: 2.5 L / day",
    sleepTarget: "Goal: 7–9 h / night",
    currency: "$",
    packUnit: "/pack",
    dayLabel: "Day",
    levelCatchUp: "catching up is allowed"
  },
  bg: {
    navMain: "Основно",
    challenge: "100-дневно предизвикателство",
    logoutTitle: "Изход",
    difficultyTooltip: "Промени в Настройки",
    difficultyNormal: "Нормално",
    waterTarget: "Цел: 2.5 л / ден",
    sleepTarget: "Цел: 7–9 ч / нощ",
    currency: "$",
    packUnit: "/pack",
    dayLabel: "Ден",
    levelCatchUp: "наваксването е допустимо"
  }
};

function applyDashboardTranslations() {
  const currentLang = getCurrentLanguage() || 'bg';
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (dashboardTranslations[currentLang] && dashboardTranslations[currentLang][key]) {
      el.textContent = dashboardTranslations[currentLang][key];
    }
  });
  document.querySelectorAll("[data-translate-title]").forEach(el => {
    const key = el.getAttribute("data-translate-title");
    if (dashboardTranslations[currentLang] && dashboardTranslations[currentLang][key]) {
      el.setAttribute("title", dashboardTranslations[currentLang][key]);
    }
  });
}

// Make function global for i18n.js
window.applyPageTranslations = applyDashboardTranslations;

document.addEventListener('DOMContentLoaded', () => {
  // Set log day badge
  setTimeout(() => {
    const user = JSON.parse(localStorage.getItem('wt_user') || 'null');
    if (!user) return;
    const startDate = new Date(user.startDate || Date.now());
    const day = Math.min(Math.max(Math.floor((new Date() - startDate) / 86400000) + 1, 1), 100);
    const badge = document.getElementById('log-day-badge');
    if (badge) badge.textContent = day;
  }, 150);

  // Ensure initDashboard runs
  if (typeof initDashboard === 'function') initDashboard();
});