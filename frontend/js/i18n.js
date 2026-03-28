// ── Multi-Language Support (EN & BG) ───────────────────
const TRANSLATIONS = {
  en: {
    // Navigation
    nav: {
      login: "Login",
      dashboard: "Dashboard",
      levels: "Levels",
      progress: "Progress",
      settings: "Settings",
      messages: "Messages",
      logout: "Log out",
      startChallenge: "Start Challenge →",
    },
    // Auth
    auth: {
      loginTitle: "Welcome Back",
      registerTitle: "Join the Challenge",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      name: "Full Name",
      login: "Login",
      register: "Register",
      alreadyHaveAccount: "Already have an account?",
      noAccount: "Don't have an account?",
      invalidCredentials: "Invalid email or password.",
      emailExists: "Email already registered.",
      passwordMismatch: "Passwords do not match.",
      passwordTooShort: "Password must be at least 6 characters.",
    },
    // Home
    home: {
      tagline: "100 Days to Transform",
      title: "Build habits.<br>Track progress.<br>Change your life.",
      description: "WellTrack 100 is your personal wellness companion for the 100-day challenge.",
      startButton: "Start Your 100 Days",
      loginButton: "I have an account",
      features: {
        hydration: "Hydration Tracking",
        workout: "Workout Logging",
        sleep: "Sleep Analysis",
        progress: "Progress Visualization",
        dashboard: "100-Day Dashboard",
        crossPlatform: "Cross-Platform",
      },
    },
    // Dashboard
    dashboard: {
      title: "Dashboard",
      currentDay: "Day",
      daysRemaining: "days remaining",
      youAreStronger: "You are stronger than any craving 💪",
      dayStreak: "Day Streak",
      resetsIfMissed: "resets if missed",
      level: "Level",
      waterIntake: "Water Intake",
      liters: "liters",
      workoutCompleted: "Workout Completed",
      sleepTrack: "Sleep Tracking",
      hours: "hours",
      cigsSaved: "Cigarettes Avoided",
      moneySaved: "Money Saved",
      packPrice: "Pack Price ($)",
      saveTodayProgress: "Save Today's Progress",
      saved: "Saved!",
    },
    // Levels
    levels: {
      title: "Levels",
      exercises: "Exercises for Today",
      complete: "Complete",
      completed: "Completed",
      resetIn: "Resets in",
      hours: "hours",
    },
    // Settings
    settings: {
      title: "Settings",
      language: "Language",
      theme: "Theme",
      difficulty: "Difficulty Level",
      notifications: "Enable Notifications",
      motivationalQuotes: "Show Motivational Quotes",
      save: "Save Settings",
      saved: "Settings saved!",
      light: "Light",
      dark: "Dark",
      easy: "Easy",
      normal: "Normal",
      hard: "Hard",
    },
    // Messages
    messages: {
      title: "Messages & Chat",
      chatbot: "Wellness Chatbot",
      friends: "Friends",
      typeMessage: "Type your message...",
      send: "Send",
      chatbotPlaceholder: "Ask me tips to quit smoking and drinking...",
      yourMessages: "Your Messages",
    },
    // Common
    common: {
      loading: "Loading...",
      error: "Error",
      success: "Success",
      cancel: "Cancel",
      close: "Close",
      back: "Back",
      next: "Next",
    },
  },
  bg: {
    // Navigation
    nav: {
      login: "Вход",
      dashboard: "Приборна панел",
      levels: "Нива",
      progress: "Прогрес",
      settings: "Настройки",
      messages: "Съобщения",
      logout: "Излез",
      startChallenge: "Започни предизвикателството →",
    },
    // Auth
    auth: {
      loginTitle: "Добре дошел",
      registerTitle: "Присъедини се към предизвикателството",
      email: "Имейл",
      password: "Пароля",
      confirmPassword: "Потвърди пароля",
      name: "Пълно име",
      login: "Вход",
      register: "Регистрация",
      alreadyHaveAccount: "Вече имаш акаунт?",
      noAccount: "Нямаш акаунт?",
      invalidCredentials: "Невалиден имейл или пароля.",
      emailExists: "Имейлът вече е регистриран.",
      passwordMismatch: "Паролите не съвпадат.",
      passwordTooShort: "Пароля трябва да е поне 6 символа.",
    },
    // Home
    home: {
      tagline: "100 дни за трансформация",
      title: "Изграждай навици.<br>Следи прогреса.<br>Промени живота си.",
      description: "WellTrack 100 е твоят личен спътник по оздравяване за 100-дневното предизвикателство.",
      startButton: "Започни 100-дневното преобразуване",
      loginButton: "Имам акаунт",
      features: {
        hydration: "Проследяване на хидратацията",
        workout: "Логване на тренировки",
        sleep: "Анализ на сън",
        progress: "Визуализация на прогреса",
        dashboard: "100-дневна приборна панел",
        crossPlatform: "Кросплатформа",
      },
    },
    // Dashboard
    dashboard: {
      title: "Приборна панел",
      currentDay: "Ден",
      daysRemaining: "дни остават",
      youAreStronger: "Ти си по-силен от всяка глътка 💪",
      dayStreak: "Серия дни",
      resetsIfMissed: "нулира се при пропуск",
      level: "Ниво",
      waterIntake: "Воден баланс",
      liters: "литра",
      workoutCompleted: "Тренировка завършена",
      sleepTrack: "Проследяване на съня",
      hours: "часа",
      cigsSaved: "Избегнати цигари",
      moneySaved: "Спестени пари",
      packPrice: "Цена на пакет ($)",
      saveTodayProgress: "Запази дневния прогрес",
      saved: "Запазено!",
    },
    // Levels
    levels: {
      title: "Нива",
      exercises: "Упражнения за днес",
      complete: "Завърши",
      completed: "Завършено",
      resetIn: "Нулира се за",
      hours: "часа",
    },
    // Settings
    settings: {
      title: "Настройки",
      language: "Език",
      theme: "Тема",
      difficulty: "Ниво на трудност",
      notifications: "Включи известия",
      motivationalQuotes: "Показвай мотивиращи цитати",
      save: "Запази настройките",
      saved: "Настройките са запазени!",
      light: "Светла",
      dark: "Тъмна",
      easy: "Лесно",
      normal: "Нормално",
      hard: "Трудно",
    },
    // Messages
    messages: {
      title: "Съобщения и чат",
      chatbot: "Bot асистент",
      friends: "Приятели",
      typeMessage: "Напиши съобщението си...",
      send: "Изпрати",
      chatbotPlaceholder: "Попитай ме за съвети как да престаниш да пушиш и пиеш...",
      yourMessages: "Твоите съобщения",
    },
    // Common
    common: {
      loading: "Зареждане...",
      error: "Грешка",
      success: "Успех",
      cancel: "Отмяна",
      close: "Затвори",
      back: "Назад",
      next: "Напред",
    },
  },
};

// Get current language from localStorage or default to English
function getCurrentLanguage() {
  return localStorage.getItem('wt_language') || 'en';
}

// Set language
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'en';
  localStorage.setItem('wt_language', lang);
  // Reload page to apply translations
  window.location.reload();
}

// Get translated string by path (e.g., "auth.loginTitle")
function t(path) {
  const lang = getCurrentLanguage();
  const parts = path.split('.');
  let value = TRANSLATIONS[lang];

  for (const part of parts) {
    if (value && typeof value === 'object' && part in value) {
      value = value[part];
    } else {
      // Fallback to English if translation not found
      value = TRANSLATIONS.en;
      for (const p of parts) {
        if (value && typeof value === 'object' && p in value) {
          value = value[p];
        } else {
          return path; // Return path if not found
        }
      }
      return value;
    }
  }
  return value;
}

// Apply translations to document on load
function applyTranslations() {
  const lang = getCurrentLanguage();
  document.documentElement.lang = lang;

  // Apply data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if (el.hasAttribute('placeholder')) {
        el.placeholder = text;
      } else {
        el.value = text;
      }
    } else {
      el.textContent = text;
    }
  });

  // Apply data-i18n-html for HTML content
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = t(key);
  });
}

// Call on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyTranslations);
} else {
  applyTranslations();
}
