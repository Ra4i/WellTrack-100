// ── Multi-Language Support (EN & BG) ───────────────────
const TRANSLATIONS = {
  en: {
    // Navigation
    nav: {
      login: "Login",
      dashboard: "Dashboard",
      levels: "Levels",
      progress: "Progress",
      friends: "Friends",
      settings: "Settings",
      messages: "Messages",
      logout: "Log out",
      startChallenge: "Start Challenge →",
    },
    // Auth
    auth: {
      loginTitle: "Welcome Back",
      loginDescription: "Continue your 100-day wellness journey.",
      registerTitle: "Join the Challenge",
      registerDescription: "Day 1 begins the moment you sign up.",
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
      featuresDesc: {
        hydration: "Log daily water intake and hit your hydration goals every single day.",
        workout: "Mark workout completions and build an unbreakable fitness streak.",
        sleep: "Track sleep hours and discover the patterns that power peak performance.",
        progress: "Beautiful charts and rings show how far you've come on your journey.",
        dashboard: "See exactly where you are in your challenge with real-time progress rings.",
        crossPlatform: "Built to expand to desktop (Electron) and mobile (Capacitor) apps.",
      },
    },
    // Dashboard
    dashboard: {
      title: "Dashboard",
      currentDay: "Day",
      daysRemaining: "{0} days remaining",
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
      difficultyBadge: "⚡ Normal",
      logProgressTitle: "Log your progress today <span class=\"badge\">Day <span id=\"log-day-badge\">1</span></span>",
      everyDayCounts: "Every day counts",
      saveProgressTitle: "Save your progress today",
      keepStreak: "Keep your streak",
      quickTipHtml: "Your streak resets if you miss a day — but your <strong>level progress does not disappear</strong>. See the <a href=\"levels.html\" style=\"color:var(--accent3)\">Levels page</a> for today's exercises — they adapt automatically based on the <a href=\"settings.html\" style=\"color:var(--accent3)\">difficulty setting</a>.",
      visitLevels: "Visit the Levels page",
    },
    // Progress
    progress: {
      loggedDays: "Logged days",
      currentStreak: "Current streak",
      avgWater: "Average water",
      avgSleep: "Average sleep",
      perRecordedDay: "per recorded day",
      historyTitle: "Record history",
      tableDay: "Day",
      tableWater: "Water",
      tableSleep: "Sleep",
      tableActivity: "Activity",
      tableDate: "Date",
    },
    // Levels
    levels: {
      title: "Levels",
      levelLabel: "Level",
      catchUpRule: "Catch-up rule",
      catchUpRuleDesc: "If you miss a day, complete the level the next day — you never lose progress.",
      todayMotivation: "Today's Motivation",
      quitSmoke: "🚬 Quit cigarettes",
      quitAlcohol: "🍺 Quit alcohol",
      motivationHint: "Log your first day to unlock motivation.",
      allLevels: "🗺️ All 100 levels",
      allLevelsHint: "Click a level to read the message",
      modalLevel: "Level {0}",
      modalTitle: "Level title",
      modalExercises: "💪 Today's exercises",
      modalQuitSmoke: "🚬 Quit cigarettes",
      modalQuitAlcohol: "🍺 Quit alcohol",
      exercises: "Exercises for Today",
      complete: "Complete",
      completed: "Completed",
      resetIn: "Resets in",
      hours: "hours",
    },
    // Friends
    friends: {
      title: "Friends & Messages",
      tabFriends: "Friends",
      tabRequests: "Requests",
      friendCount: "(0 friends)",
      addFriend: "+ Add Friend",
      searchPlaceholder: "Search friends...",
      emptyState: "You don't have any friends yet. Add someone! 👋",
      pendingRequests: "Pending friend requests:",
      noRequests: "No pending requests 🎉",
      selectFriendTitle: "Choose a friend to chat",
      selectFriendDescription: "Pick someone from your friends list to start a conversation",
      friend: "Friend",
      offline: "Offline",
      block: "🚫 Block",
      messagePlaceholder: "Type your message...",
      decline: "✗ Decline",
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
      chatbotSubtitle: "Your personal wellness coach",
      friends: "Friends",
      typeMessage: "Type your message...",
      send: "Send",
      chatbotPlaceholder: "Ask me tips to quit smoking and drinking...",
      yourMessages: "Your Messages",
      tipWater: "Drinking water reduces cravings and keeps you healthy. Goal: 8-10 glasses daily.",
      tipExercise: "Physical activity releases endorphins, your body's natural mood boosters.",
      tipSupport: "Share your journey with friends or family. Social support increases your chances of success.",
      tipProgress: "Log your daily wins in WellTrack to see how far you've come.",
    },
    // Common
    common: {
      loading: "Loading...",
      error: "Error",
      success: "Success",
      cancel: "Cancel",
      close: "Close",
      back: "Back",
      day: "Day",
      next: "Next",
    },
  },
  bg: {
    // Navigation
    nav: {
      login: "Вход",
      dashboard: "Табло",
      levels: "Нива",
      progress: "Прогрес",
      friends: "Приятели",
      settings: "Настройки",
      messages: "Съобщения",
      logout: "Излез",
      startChallenge: "Започни предизвикателството →",
    },
    // Auth
    auth: {
      loginTitle: "Добре дошел",
      loginDescription: "Продължи 100-дневното си уелнес пътешествие.",
      registerTitle: "Присъедини се към предизвикателството",
      registerDescription: "Ден 1 започва в момента, в който се регистрираш.",
      email: "Имейл",
      password: "Парола",
      confirmPassword: "Потвърди парола",
      name: "Пълно име",
      login: "Вход",
      register: "Регистрация",
      alreadyHaveAccount: "Вече имаш акаунт?",
      noAccount: "Нямаш акаунт?",
      invalidCredentials: "Невалиден имейл или парола.",
      emailExists: "Имейлът вече е регистриран.",
      passwordMismatch: "Паролите не съвпадат.",
      passwordTooShort: "Паролата трябва да е поне 6 символа.",
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
      featuresDesc: {
        hydration: "Записвай дневната си вода и постигай хидратационните си цели всеки ден.",
        workout: "Маркирай завършените тренировки и изграждай непоклатима серия.",
        sleep: "Проследявай часовете сън и открий моделите, които дават най-добра форма.",
        progress: "Красиви графики и пръстени показват колко далеч си стигнал.",
        dashboard: "Виж точно къде си в предизвикателството с реално време прогрес барове.",
        crossPlatform: "Проектиран за настолни (Electron) и мобилни (Capacitor) приложения.",
      },
    },
    // Dashboard
    dashboard: {
      title: "Приборна панел",
      currentDay: "Ден",
      daysRemaining: "{0} дни остават",
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
      difficultyBadge: "⚡ Нормално",
      logProgressTitle: "Запиши днешния си прогрес <span class=\"badge\">Ден <span id=\"log-day-badge\">1</span></span>",
      everyDayCounts: "Всеки ден има значение",
      saveProgressTitle: "Запази своя прогрес днес",
      keepStreak: "Запази серията си",
      quickTipHtml: "Серията ти се нулира, ако пропуснеш ден — но твоят <strong>прогрес на ниво не изчезва</strong>. Виж <a href=\"levels.html\" style=\"color:var(--accent3)\">страницата Нива</a> за днешните упражнения — те се адаптират автоматично според <a href=\"settings.html\" style=\"color:var(--accent3)\">настройката за трудност</a>.",
      visitLevels: "Виж страницата Нива",
      daySaved: "Ден {0} е запазен!",
      failedSave: "Грешка при запазване: {0}",
      levelNotAvailable: "Ниво {0} все още не е достъпно.",
      levelCompleted: "Ниво {0} завършено!",
      failed: "Грешка: {0}",
      exercisesDone: "Упражненията са готови! 💪 Налични отново в полунощ.",
    },
    // Progress
    progress: {
      loggedDays: "Записани дни",
      currentStreak: "Текуща серия",
      avgWater: "Средно вода",
      avgSleep: "Среден сън",
      perRecordedDay: "на записан ден",
      historyTitle: "История на записите",
      tableDay: "Ден",
      tableWater: "Вода",
      tableSleep: "Сън",
      tableActivity: "Активност",
      tableDate: "Дата",
    },
    // Levels
    levels: {
      title: "Нива",
      levelLabel: "Ниво",
      catchUpRule: "Правило за наваксване",
      catchUpRuleDesc: "Пропуснеш ли ден? Завърши нивото на следващия ден — никога не губиш прогрес.",
      todayMotivation: "Днешна мотивация",
      quitSmoke: "🚬 Откажи цигарите",
      quitAlcohol: "🍺 Откажи алкохола",
      motivationHint: "Запиши първия си ден, за да отключиш мотивацията.",
      allLevels: "🗺️ Всички 100 нива",
      allLevelsHint: "Кликни ниво, за да прочетеш съобщението",
      modalLevel: "Ниво {0}",
      modalTitle: "Заглавие на ниво",
      modalExercises: "💪 Днешни упражнения",
      modalQuitSmoke: "🚬 Откажи цигарите",
      modalQuitAlcohol: "🍺 Откажи алкохола",
      exercises: "Упражнения за днес",
      complete: "Завърши",
      completed: "Завършено",
      resetIn: "Нулира се за",
      hours: "часа",
    },
    // Friends
    friends: {
      title: "Приятели и съобщения",
      tabFriends: "Приятели",
      tabRequests: "Заявки",
      friendCount: "(0 приятел(и))",
      addFriend: "+ Добави приятел",
      searchPlaceholder: "Търси приятели...",
      emptyState: "Все още нямаш приятели. Добави някого! 👋",
      pendingRequests: "Очакващи заявки за приятелство:",
      noRequests: "Няма чакащи заявки 🎉",
      selectFriendTitle: "Избери приятел за чат",
      selectFriendDescription: "Избери някого от своя списък с приятели, за да започнеш разговор",
      friend: "Приятел",
      offline: "Офлайн",
      block: "🚫 Блокирай",
      messagePlaceholder: "Напиши съобщението си...",
      decline: "✗ Откажи",
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
      chatbotSubtitle: "Твоят личен уелнес треньор",
      friends: "Приятели",
      typeMessage: "Напиши съобщението си...",
      send: "Изпрати",
      chatbotPlaceholder: "Попитай ме за съвети как да престанеш да пушиш и пиеш...",
      yourMessages: "Твоите съобщения",
      tipWater: "Пиенето на вода намалява желанията и те държи здрав. Цел: 8-10 чаши дневно.",
      tipExercise: "Физическата активност освобождава ендорфини, естествените ти химикали за добро настроение.",
      tipSupport: "Сподели пътя си с приятели или семейство. Социалната подкрепа увеличава шансовете за успех.",
      tipProgress: "Записвай ежедневните си постижения в WellTrack, за да видиш колко далеч си стигнал.",
    },
    // Common
    common: {
      loading: "Зареждане...",
      error: "Грешка",
      success: "Успех",
      cancel: "Отмяна",
      close: "Затвори",
      back: "Назад",
      day: "Ден",
      next: "Напред",
    },
  },
};

// Get current language from localStorage or user settings, default to Bulgarian
function getCurrentLanguage() {
  const lang = localStorage.getItem('wt_language');
  if (lang) return lang;
  try {
    const settings = JSON.parse(localStorage.getItem('wt_user_settings') || '{}');
    if (settings.language) return settings.language;
  } catch {
    // ignore malformed settings
  }
  return 'bg';
}

// Set language
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'en';
  localStorage.setItem('wt_language', lang);
  try {
    const settings = JSON.parse(localStorage.getItem('wt_user_settings') || '{}');
    settings.language = lang;
    localStorage.setItem('wt_user_settings', JSON.stringify(settings));
  } catch {
    localStorage.setItem('wt_user_settings', JSON.stringify({ language: lang }));
  }
  // Reload page to apply translations
  window.location.reload();
}

function replacePlaceholders(value, args) {
  if (typeof value !== 'string' || !args.length) return value;
  return args.reduce((text, arg, index) => text.replaceAll(`{${index}}`, arg), value);
}

// Get translated string by path (e.g., "auth.loginTitle")
function t(path, ...args) {
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
      break;
    }
  }
  return replacePlaceholders(value, args);
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
