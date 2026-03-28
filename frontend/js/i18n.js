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
      friends: "Friends",
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
        hydrationDesc: "Log daily water intake and hit your hydration goals every single day.",
        workout: "Workout Logging",
        workoutDesc: "Mark workout completions and build an unbreakable fitness streak.",
        sleep: "Sleep Analysis",
        sleepDesc: "Track sleep hours and discover the patterns that power peak performance.",
        progress: "Progress Visualization",
        progressDesc: "Beautiful charts and rings show how far you've come on your journey.",
        dashboard: "100-Day Dashboard",
        dashboardDesc: "See exactly where you are in your challenge with real-time progress rings.",
        crossPlatform: "Cross-Platform",
        crossPlatformDesc: "Built to expand to desktop (Electron) and mobile (Capacitor) apps.",
      },
      noAccount: "Don't have an account?",
      alreadyHaveAccount: "Already have an account?",
      backToHome: "← Back to home",
      continueJourney: "Continue your 100-day wellness journey.",
      startChallenge: "Start your challenge",
      dayOneBeginsNow: "Day 1 begins the moment you sign up.",
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
      waterIntake: "Water Today",
      goal: "Goal",
      waterGoal: "Goal: 2.5L / day",
      activity: "Activity",
      streakResets: "Streak resets if missed",
      liters: "liters",
      workoutCompleted: "Workout Completed",
      sleepTrack: "Sleep Last Night",
      sleepGoal: "Goal: 7–9h / night",
      hours: "hours",
      cigsSaved: "Cigarettes Avoided",
      moneySaved: "Money Saved",
      packPrice: "Your Local Cigarette Price",
      perPack: "/pack",
      cigSavings: "💰 Cigarette Savings",
      everydayMatters: "Every day counts",
      logTodayProgress: "Log Today's Progress",
      saveTodayProgress: "Save Progress",
      saved: "Saved!",
      logDay: "Day",
      water: "Water Intake",
      sleep: "Sleep Hours",
      activityDone: "Activity Done",
      completedActivity: "Completed today's activity",
      keepStreakAlive: "Keep Your Streak Alive",
      streakResetInfo: "Your activity streak resets to zero if you miss a day — but your level progress never disappears. Miss a day? Catch up the next. Check your Levels page for today's motivation to quit smoking and alcohol.",
      levelsPage: "Levels page",
    },
    // Levels
    levels: {
      title: "Levels",
      exercises: "Exercises for Today",
      complete: "Complete",
      completed: "Completed",
      resetIn: "Resets in",
      hours: "hours",
      yourRecoveryJourney: "Your Recovery Journey",
      level: "Level",
      keepGoing: "Keep going!",
      complete100: "100 levels complete",
      catchUpRule: "Catch-up rule",
      catchUpInfo: "Miss a day? Complete the level the next day — you never lose progress.",
      todaysMotivation: "🌟 Today's Motivation",
      quitSmoking: "🚬 Quit Smoking",
      quitAlcohol: "🍺 Quit Alcohol",
      logFirstDay: "Log your first day to unlock your motivation.",
      all100Levels: "🗺️ All 100 Levels",
      clickToRead: "Click any level to read its message",
      todaysExercises: "💪 Today's Exercises",
      levelTitle: "Level Title",
      levelMessage: "Level Message",
      modal: {
        congratulations: "Congratulations!",
        levelUp: "You've unlocked Level",
        keepPushing: "Keep pushing forward!",
      },
    },
    // Settings
    settings: {
      title: "Settings",
      language: "Language",
      chooseLanguage: "Choose your preferred language",
      theme: "Theme",
      chooseTheme: "Choose your visual theme",
      difficulty: "Difficulty Level",
      adjustExercise: "Adjust exercise intensity",
      notifications: "Enable Notifications",
      getReminders: "Get reminders and updates",
      motivationalQuotes: "Show Motivational Quotes",
      displayMessages: "Display inspiring messages",
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
      coachSubtitle: "Your personal wellness coach",
      friends: "Friends",
      typeMessage: "Type your message...",
      send: "Send",
      chatbotPlaceholder: "Ask me tips to quit smoking and drinking...",
      yourMessages: "Your Messages",
      quickTips: "Quick Tips",
      coachIntro: "Hi! I'm your wellness coach. I'm here to help you quit smoking and alcohol. Ask me anything about staying motivated, managing cravings, or building healthy habits! 💪",
      justNow: "Just now",
    },
    // Progress
    progress: {
      title: "Progress",
      yourRecoveryJourney: "Your Recovery Journey",
      daysLogged: "Days Logged",
      outOf100: "out of 100 days",
      currentStreak: "Current Streak",
      resetsIfMissed: "resets if day missed",
      avgWater: "Avg. Water",
      perLoggedDay: "per logged day",
      avgSleep: "Avg. Sleep",
      dailyLogHistory: "Daily Log History",
      day: "Day",
      water: "Water",
      sleep: "Sleep",
      activity: "Activity",
      date: "Date",
      empty: "No logged data yet. Start tracking on the Dashboard!",
    },
    // Friends
    friends: {
      title: "Friends & Messages",
      friendsMessaging: "Friends & Messages",
      yourRecoveryJourney: "Your Recovery Journey",
      friends: "Friends",
      addFriend: "+ Add",
      searchFriends: "Search friends...",
      noFriendsYet: "No friends yet. Add someone to start chatting! 👋",
      selectFriend: "Select a friend to chat",
      chooseFromList: "Choose someone from your friends list to start a conversation",
      online: "Online",
      away: "Away",
      offline: "Offline",
      block: "🚫 Block",
      addFriendModal: "Add Friend",
      enterFriendEmail: "Enter friend's email:",
      sendRequest: "Send Request",
      willSendRequest: "We'll send them a friend request",
      noMessages: "No messages yet. Start the conversation!",
      typeMessage: "Type your message...",
      blockConfirm: "Are you sure you want to block this friend?",
      blocked: "Friend blocked",
      requestSent: "Friend request sent to",
      enterEmail: "Please enter an email address",
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
      enabled: "Enabled",
      disabled: "Disabled",
      day: "Day",
      or: "or",
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
      friends: "Приятели",
      logout: "Излез",
      startChallenge: "Започни предизвикателството →",
    },
    // Auth
    auth: {
      loginTitle: "Добре дошел",
      registerTitle: "Присъедини се към предизвикателството",
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
      passwordTooShort: "Парола трябва да е поне 6 символа.",
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
        hydrationDesc: "Логирай дневния воден баланс и постигни целите си всеки ден.",
        workout: "Логване на тренировки",
        workoutDesc: "Отбележи завършените тренировки и изграждай непрекъсната серия.",
        sleep: "Анализ на сън",
        sleepDesc: "Проследи часовете на сън и открий модели за оптимална производителност.",
        progress: "Визуализация на прогреса",
        progressDesc: "Красиви графики показват колко далече си дошъл в предизвикателството.",
        dashboard: "100-дневна приборна панел",
        dashboardDesc: "Виж точно къде си в предизвикателството с реални прогресивни пръстени.",
        crossPlatform: "Кросплатформа",
        crossPlatformDesc: "Разработено да се разширява на десктоп (Electron) и мобилни (Capacitor) приложения.",
      },
      noAccount: "Нямаш акаунт?",
      alreadyHaveAccount: "Вече имаш акаунт?",
      backToHome: "← Назад вкъщи",
      continueJourney: "Продължи 100-дневния си път към оздравяване.",
      startChallenge: "Започни предизвикателството",
      dayOneBeginsNow: "Ден 1 начина момента когато се регистрираш.",
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
      waterIntake: "Вода днес",
      goal: "Цел",
      waterGoal: "Цел: 2,5л / ден",
      activity: "Активност",
      streakResets: "Серията се нулира при пропуск",
      liters: "литра",
      workoutCompleted: "Тренировка завършена",
      sleepTrack: "Сън вчера вечер",
      sleepGoal: "Цел: 7–9ч / ноща",
      hours: "часа",
      cigsSaved: "Избегнати цигари",
      moneySaved: "Спестени пари",
      packPrice: "Цена на твоя пакет цигари",
      perPack: "/пакет",
      cigSavings: "💰 Спестяване на цигари",
      everydayMatters: "Всеки ден брой",
      logTodayProgress: "Логирай дневния прогрес",
      saveTodayProgress: "Запази прогреса",
      saved: "Запазено!",
      logDay: "Ден",
      water: "Воден баланс",
      sleep: "Часове сън",
      activityDone: "Активност завършена",
      completedActivity: "Завършил съм днешната активност",
      keepStreakAlive: "Держи серията живо",
      streakResetInfo: "Серията ти се нулира на нула ако пропуснеш ден — но прогресът ти на ниво никога не изчезва. Пропуснал ли си ден? Наверши го следващия. Проверете страницата Нива за днешната мотивация да престаниш да пушиш и пиеш.",
      levelsPage: "Страница Нива",
    },
    // Levels
    levels: {
      title: "Нива",
      exercises: "Упражнения за днес",
      complete: "Завърши",
      completed: "Завършено",
      resetIn: "Нулира се за",
      hours: "часа",
      yourRecoveryJourney: "Твоят път към оздравяване",
      level: "Ниво",
      keepGoing: "Продължи напред!",
      complete100: "100 нива завършени",
      catchUpRule: "Правило за наверждане",
      catchUpInfo: "Пропуснал ли си ден? Завърши нивото следващия ден — никога не губиш прогрес.",
      todaysMotivation: "🌟 Днешна мотивация",
      quitSmoking: "🚬 Престани да пушиш",
      quitAlcohol: "🍺 Престани да пиеш",
      logFirstDay: "Логирай първия ден, за да разблокираш мотивацията.",
      all100Levels: "🗺️ Всички 100 нива",
      clickToRead: "Щракни на всяко ниво, за да прочетеш съобщението",
      todaysExercises: "💪 Днешни упражнения",
      levelTitle: "Заглавие на ниво",
      levelMessage: "Съобщение на ниво",
      modal: {
        congratulations: "Поздравления!",
        levelUp: "Отблокирал си ниво",
        keepPushing: "Продължи да се бориш!",
      },
    },
    // Settings
    settings: {
      title: "Настройки",
      language: "Език",
      chooseLanguage: "Избери предпочитания език",
      theme: "Тема",
      chooseTheme: "Избери визуална тема",
      difficulty: "Ниво на трудност",
      adjustExercise: "Коригирай интензитета на упражненията",
      notifications: "Включи известия",
      getReminders: "Получи напомняния и актуализации",
      motivationalQuotes: "Показвай мотивиращи цитати",
      displayMessages: "Показвай вдъхновяващи съобщения",
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
      coachSubtitle: "Твоят личен тренер по благосъстояние",
      friends: "Приятели",
      typeMessage: "Напиши съобщението си...",
      send: "Изпрати",
      chatbotPlaceholder: "Попитай ме за съвети как да престаниш да пушиш и пиеш...",
      yourMessages: "Твоите съобщения",
      quickTips: "Бързи съвети",
      coachIntro: "Здравей! Аз съм твой тренер по благосъстояние. Тук съм, за да ти помогна да престанеш да пушиш и пиеш. Попитай ме всичко за това как да останеш мотивиран, управление на желанията или изграждане на здравословни навици! 💪",
      justNow: "Преди момент",
    },
    // Progress
    progress: {
      title: "Прогрес",
      yourRecoveryJourney: "Твоят път към оздравяване",
      daysLogged: "Дни логирани",
      outOf100: "от 100 дни",
      currentStreak: "Текуща серия",
      resetsIfMissed: "нулира се при пропуск",
      avgWater: "Средна вода",
      perLoggedDay: "за логиран ден",
      avgSleep: "Средният сън",
      dailyLogHistory: "История на дневния дневник",
      day: "Ден",
      water: "Вода",
      sleep: "Сън",
      activity: "Активност",
      date: "Дата",
      empty: "Още няма логирани данни. Започни проследяване на приборната панел!",
    },
    // Friends
    friends: {
      title: "Приятели и съобщения",
      friendsMessaging: "Приятели и съобщения",
      yourRecoveryJourney: "Твоят път към оздравяване",
      friends: "Приятели",
      addFriend: "+ Добавяне",
      searchFriends: "Търси приятели...",
      noFriendsYet: "Няма приятели все още. Добави някого, за да начнеш чат! 👋",
      selectFriend: "Избери приятел, за да чатиш",
      chooseFromList: "Избери някого от списъка на приятелите, за да начнеш разговор",
      online: "Онлайн",
      away: "Отсъства",
      offline: "Офлайн",
      block: "🚫 Блокирай",
      addFriendModal: "Добавяне на приятел",
      enterFriendEmail: "Въведи имейла на приятеля:",
      sendRequest: "Изпрати заявка",
      willSendRequest: "Ще им изпратим молба за приятелство",
      noMessages: "Няма съобщения все още. Начни разговора!",
      typeMessage: "Напиши съобщението...",
      blockConfirm: "Сигурен ли си, че искаш да блокираш този приятел?",
      blocked: "Приятелят е блокиран",
      requestSent: "Молба за приятелство изпратена до",
      enterEmail: "Моля, въведи имейл адрес",
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
      enabled: "Включено",
      disabled: "Отключено",
      day: "Ден",
      or: "или",
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
