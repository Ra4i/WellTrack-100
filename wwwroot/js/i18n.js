/* ================================================================
   i18n.js — Internationalization / Translation System
   WellTrack 100 — BG / EN
   ================================================================ */

(function () {
  'use strict';

  const TRANSLATIONS = {
    en: {
      nav: {
        dashboard: 'Dashboard',
        levels: 'Levels',
        progress: 'Progress',
        journal: 'Journal',
        friends: 'Friends',
        messages: 'Messages',
        settings: 'Settings',
        login: 'Login',
        startChallenge: 'Start Challenge →'
      },
      common: {
        day: 'Day',
        back: 'Back',
        save: 'Save',
        cancel: 'Cancel',
        loading: 'Loading...',
        success: 'Success'
      },
      home: {
        tagline: '100 days to change',
        title: 'Build habits.<br>Track <span class="highlight">progress</span>.<br>Change your life.',
        description: 'WellTrack 100 is your personal wellness companion for the 100-day challenge. Log water, workouts and sleep — watch yourself transform day by day.',
        startButton: 'Start your 100 days',
        loginButton: 'I have an account',
        features: {
          hydration: 'Hydration Tracking',
          workout: 'Workout Logging',
          sleep: 'Sleep Analysis',
          progress: 'Progress Visualization',
          dashboard: '100-Day Dashboard',
          crossPlatform: 'Cross-Platform'
        },
        featuresDesc: {
          hydration: 'Log your daily water intake and hit your hydration goals every day.',
          workout: 'Mark completed workouts and build an unbroken fitness streak.',
          sleep: 'Track sleep hours and discover the patterns that give you maximum energy.',
          progress: 'Beautiful charts and rings show how far you\'ve come.',
          dashboard: 'See exactly where you are in the challenge with real-time progress rings.',
          crossPlatform: 'Built to expand to desktop and mobile apps.'
        }
      },
      auth: {
        loginTitle: 'Welcome Back',
        loginDescription: 'Continue your 100-day wellness journey.',
        registerTitle: 'Start the Challenge',
        registerDescription: 'Day 1 starts the moment you register.',
        email: 'Email',
        emailPlaceholder: 'you@example.com',
        password: 'Password',
        passwordPlaceholder: 'Min. 6 characters',
        name: 'Full Name',
        namePlaceholder: 'Alex Johnson',
        age: 'Age',
        agePlaceholder: '25',
        confirmPassword: 'Confirm Password',
        confirmPasswordPlaceholder: '••••••••',
        login: 'Login',
        register: 'Start the 100-Day Challenge 🚀',
        noAccount: "Don't have an account?",
        alreadyHaveAccount: 'Already have an account?',
        documentTitle: 'Login · WellTrack 100',
        registerDocumentTitle: 'Register · WellTrack 100',
        languageToggle: 'EN / BG',
        errorNoUser: 'No account found with this email address',
        errorWrongPassword: 'Incorrect password, please try again'
      },
      dashboard: {
        title: 'Dashboard',
        youAreStronger: 'You are stronger than every craving 💪',
        dayStreak: 'Day Streak',
        resetsIfMissed: 'Resets if missed',
        level: 'Level',
        waterIntake: 'Water Today',
        workoutCompleted: 'Activity',
        sleepTrack: 'Sleep Last Night',
        moneySaved: '💰 Money Saved',
        everyDayCounts: 'Every day counts',
        cigsSaved: 'Cigarettes Avoided',
        packPrice: 'Cigarette price in your city',
        liters: 'L',
        hours: 'h',
        saveTodayProgress: 'Save Progress',
        keepStreak: 'Keep your streak',
        quickTipHtml: 'Your streak resets if you miss a day — but your <strong>level progress is never lost</strong>.',
        daySaved: 'Day {0} saved! Keep going! 🎉',
        daysRemaining: '{0} days remaining',
        failedSave: 'Failed to save: {0}',
        levelNotAvailable: 'Level {0} is not available yet.',
        levelCompleted: 'Level {0} completed! 🏆',
        exercisesDone: 'Exercises marked as done! 💪',
        failed: 'Error: {0}',
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
      progress: {
        title: 'Progress',
        loggedDays: 'Logged Days',
        completed: 'Days Completed',
        workouts: 'Workouts Done',
        currentStreak: 'Current Streak',
        streak: 'Current Streak',
        avgWater: 'Avg. Water',
        avgSleep: 'Avg. Sleep',
        perRecordedDay: 'per recorded day',
        historyTitle: 'Entry History',
        tableDay: 'Day',
        tableWater: 'Water',
        tableSleep: 'Sleep',
        tableActivity: 'Activity',
        tableDate: 'Date',
        navMain: "Main",
        challenge: "100-day challenge"
      },
      levels: {
        title: 'Levels',
        levelLabel: 'Level',
        complete: 'Complete',
        completed: 'Completed today',
        resetIn: 'Try again tomorrow',
        exercises: 'Exercises',
        allLevels: 'All 100 Levels',
        allLevelsHint: 'Click a level to read the message',
        catchUpRule: 'Catch-up Rule',
        catchUpRuleDesc: 'Miss a day? Complete the level the next day — you never lose progress.',
        todayMotivation: 'Today\'s Motivation',
        modalExercises: '💪 Today\'s Exercises',
        quitAlcohol: '🍺 Quit Alcohol',
        modalQuitSmoke: '🚬 Quit Smoking',
        modalQuitAlcohol: '🍺 Quit Alcohol',
        motivationHint: 'Log your first day to unlock motivation.',
        navMain: "Main",
        challenge: "100-day challenge"
      },
      messages: {
        title: 'Messages & Chat',
        chatbot: 'Wellness Chatbot',
        chatbotSubtitle: 'Your personal wellness coach',
        yourMessages: 'Quick Tips',
        tipWater: 'Drinking water reduces cravings and keeps you healthy.',
        tipExercise: 'Physical activity releases endorphins — your natural mood boosters.',
        tipSupport: 'Share your journey with friends or family.',
        tipProgress: 'Log your daily achievements in WellTrack.',
        navMain: "Main",
        challenge: "100-day challenge"
      },
      friends: {
        title: 'Friends & Messages',
        addFriend: 'Add',
        searchPlaceholder: 'Search friends...',
        noFriends: 'No friends yet',
        emptyState: 'No friends yet. Add someone! 👋',
        requests: 'Requests',
        online: 'Online',
        away: 'Away',
        offline: 'Offline',
        noRequests: 'No pending requests 🎉',
        tabFriends: 'Friends',
        tabRequests: 'Requests',
        pendingRequests: 'Pending friend requests:',
        selectFriendTitle: 'Select a friend to chat',
        selectFriendDescription: 'Choose someone from your friends list to start a conversation',
        friend: 'Friend',
        block: '🚫 Block',
        navMain: "Main",
        challenge: "100-day challenge"
      },
      settings: {
        title: 'Settings',
        language: 'Language',
        theme: 'Theme',
        light: 'Light',
        dark: 'Dark',
        difficulty: 'Difficulty',
        easy: '🌱 Easy',
        normal: '⚡ Normal',
        hard: '🔥 Hard',
        notifications: 'Notifications',
        motivationalQuotes: 'Motivational Quotes',
        save: 'Save Settings',
        saved: '✓ Settings saved!',
        enabled: 'Enabled',
        disabled: 'Disabled',
        navMain: "Main",
        challenge: "100-day challenge"
      },
      journal: {
        title: 'Journal — Path to Freedom',
        cigarettes: '🚭 Cigarettes',
        alcohol: '🍷 Alcohol',
        reset: 'Reset',
        dailyReport: 'Daily Report',
        smokeCheck: 'I managed cigarettes today',
        alcoholCheck: 'I managed alcohol today',
        notePlaceholder: 'How are you feeling today? Were there any temptations?',
        saveEntry: 'Save to History',
        resetConfirm: 'Are you sure you want to reset progress for {0}?',
        resetMsg: 'Progress reset for {0}. New beginning!',
        emptyNote: 'Write something in the journal!',
        navMain: "Main",
        challenge: "100-day challenge"
      }
    },

    bg: {
      nav: {
        dashboard: 'Табло',
        levels: 'Нива',
        progress: 'Прогрес',
        journal: 'Журнал',
        friends: 'Приятели',
        messages: 'Съобщения',
        settings: 'Настройки',
        login: 'Вход',
        startChallenge: 'Започни предизвикателството →'
      },
      common: {
        day: 'Ден',
        back: 'Обратно',
        save: 'Запази',
        cancel: 'Отказ',
        loading: 'Зареждане...',
        success: 'Успех'
      },
      home: {
        tagline: '100 дни до промяна',
        title: 'Създай навици.<br>Следи <span class="highlight">прогреса</span>.<br>Промени живота си.',
        description: 'WellTrack 100 е твоят личен уелнес спътник за 100-дневното предизвикателство. Записвай вода, тренировки и сън — виж как се променяш ден след ден.',
        startButton: 'Започни своите 100 дни',
        loginButton: 'Имам акаунт',
        features: {
          hydration: 'Проследяване на хидратация',
          workout: 'Записване на тренировки',
          sleep: 'Анализ на сън',
          progress: 'Визуализиране на прогрес',
          dashboard: '100-дневно табло',
          crossPlatform: 'Крос-платформено'
        },
        featuresDesc: {
          hydration: 'Записвай дневния прием на вода и изпълнявай целите си за хидратация всеки ден.',
          workout: 'Отбелязвай завършените тренировки и изграждай непрекъсната серия за фитнес.',
          sleep: 'Следи часовете сън и открий моделите, които ти дават максимална енергия.',
          progress: 'Красиви графики и кръгове показват колко далеч си стигнал.',
          dashboard: 'Виж точно къде си в предизвикателството с реално време прогрес кръгове.',
          crossPlatform: 'Създадено да се разшири до десктоп и мобилни приложения.'
        }
      },
      auth: {
        loginTitle: 'Добре дошли',
        loginDescription: 'Продължи 100-дневното си уелнес пътешествие.',
        registerTitle: 'Започни предизвикателството',
        registerDescription: 'Ден 1 започва в момента, в който се регистрираш.',
        email: 'Имейл',
        emailPlaceholder: 'you@example.com',
        password: 'Парола',
        passwordPlaceholder: 'Мин. 6 символа',
        name: 'Пълно име',
        namePlaceholder: 'Alex Johnson',
        age: 'Години',
        agePlaceholder: '25',
        confirmPassword: 'Потвърди парола',
        confirmPasswordPlaceholder: '••••••••',
        login: 'Вход',
        register: 'Започни 100-дневното предизвикателство 🚀',
        noAccount: 'Нямаш акаунт?',
        alreadyHaveAccount: 'Вече имаш акаунт?',
        documentTitle: 'Вход · WellTrack 100',
        registerDocumentTitle: 'Регистрация · WellTrack 100',
        languageToggle: 'BG / EN',
        errorNoUser: 'Няма намерен акаунт с този имейл адрес',
        errorWrongPassword: 'Грешна парола, моля опитайте отново'
      },
      dashboard: {
        title: 'Табло',
        youAreStronger: 'Ти си по-силен от всяко желание 💪',
        dayStreak: 'Серия',
        resetsIfMissed: 'Нулира се при пропуск',
        level: 'Ниво',
        waterIntake: 'Вода днес',
        workoutCompleted: 'Активност',
        sleepTrack: 'Сън снощи',
        moneySaved: '💰 Спестени пари',
        everyDayCounts: 'Всеки ден има значение',
        cigsSaved: 'Избегнати цигари',
        packPrice: 'Цена на цигари в твоя град',
        liters: 'л',
        hours: 'ч',
        saveTodayProgress: 'Запази прогрес',
        keepStreak: 'Запази серията си',
        quickTipHtml: 'Серията ти се нулира, ако пропуснеш ден — но твоят <strong>прогрес на ниво не изчезва</strong>.',
        daySaved: 'Ден {0} записан! Продължавай! 🎉',
        daysRemaining: 'Остават {0} дни',
        failedSave: 'Грешка при запис: {0}',
        levelNotAvailable: 'Ниво {0} все още не е достъпно.',
        levelCompleted: 'Ниво {0} завършено! 🏆',
        exercisesDone: 'Упражненията са отбелязани! 💪',
        failed: 'Грешка: {0}',
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
      },
      progress: {
        title: 'Прогрес',
        loggedDays: 'Записани дни',
        completed: 'Завършени дни',
        workouts: 'Тренировки',
        currentStreak: 'Текуща серия',
        streak: 'Текуща серия',
        avgWater: 'Средно вода',
        avgSleep: 'Средно сън',
        perRecordedDay: 'на записан ден',
        historyTitle: 'История на записите',
        tableDay: 'Ден',
        tableWater: 'Вода',
        tableSleep: 'Сън',
        tableActivity: 'Активност',
        tableDate: 'Дата',
        navMain: "Основно",
        challenge: "100-дневно предизвикателство"
      },
      levels: {
        title: 'Нива',
        levelLabel: 'Ниво',
        complete: 'Завърши',
        completed: 'Завършено днес',
        resetIn: 'Опитай утре',
        exercises: 'Упражнения',
        allLevels: 'Всички 100 нива',
        allLevelsHint: 'Кликни ниво, за да прочетеш съобщението',
        catchUpRule: 'Правило за наваксване',
        catchUpRuleDesc: 'Пропуснеш ли ден? Завърши нивото на следващия ден — никога не губиш прогрес.',
        todayMotivation: 'Днешна мотивация',
        modalExercises: '💪 Днешни упражнения',
        quitAlcohol: '🍺 Откажи алкохола',
        modalQuitSmoke: '🚬 Откажи цигарите',
        modalQuitAlcohol: '🍺 Откажи алкохола',
        motivationHint: 'Запиши първия си ден, за да отключиш мотивацията.',
        navMain: "Основно",
        challenge: "100-дневно предизвикателство"
      },
      messages: {
        title: 'Съобщения и чат',
        chatbot: 'Wellness Chatbot',
        chatbotSubtitle: 'Твоят личен уелнес треньор',
        yourMessages: 'Бързи съвети',
        tipWater: 'Пиенето на вода намалява желанията и те държи здрав.',
        tipExercise: 'Физическата активност освобождава ендорфини — естествените ти стимулатори.',
        tipSupport: 'Сподели пътя си с приятели или семейство.',
        tipProgress: 'Записвай ежедневните си постижения в WellTrack.',
        navMain: "Основно",
        challenge: "100-дневно предизвикателство"
      },
      friends: {
        title: 'Приятели и съобщения',
        addFriend: 'Добави',
        searchPlaceholder: 'Търси приятели...',
        noFriends: 'Все още няма приятели',
        emptyState: 'Все още нямаш приятели. Добави някого! 👋',
        requests: 'Заявки',
        online: 'Онлайн',
        away: 'Отдалечен',
        offline: 'Офлайн',
        noRequests: 'Няма чакащи заявки 🎉',
        tabFriends: 'Приятели',
        tabRequests: 'Заявки',
        pendingRequests: 'Очакващи заявки за приятелство:',
        selectFriendTitle: 'Избери приятел за чат',
        selectFriendDescription: 'Избери някого от своя списък с приятели, за да започнеш разговор',
        friend: 'Приятел',
        block: '🚫 Блокирай',
        navMain: "Основно",
        challenge: "100-дневно предизвикателство"
      },
      settings: {
        title: 'Настройки',
        language: 'Език',
        theme: 'Тема',
        light: 'Светла',
        dark: 'Тъмна',
        difficulty: 'Ниво на трудност',
        easy: '🌱 Лесно',
        normal: '⚡ Нормално',
        hard: '🔥 Трудно',
        notifications: 'Известия',
        motivationalQuotes: 'Мотивиращи цитати',
        save: 'Запази настройките',
        saved: '✓ Настройките са запазени!',
        enabled: 'Включено',
        disabled: 'Изключено',
        navMain: "Основно",
        challenge: "100-дневно предизвикателство"
      },
      journal: {
        title: 'Журнал — Пътят към Свободата',
        cigarettes: '🚭 Цигари',
        alcohol: '🍷 Алкохол',
        reset: 'Нулирай',
        dailyReport: 'Дневен отчет',
        smokeCheck: 'Справих се с цигарите',
        alcoholCheck: 'Справих се с алкохола',
        notePlaceholder: 'Как се чувстваш днес? Имаше ли изкушения?',
        saveEntry: 'Запази в историята',
        resetConfirm: 'Сигурен ли си, че искаш да нулираш прогреса за {0}?',
        resetMsg: 'Нулиране на прогреса за {0}. Ново начало!',
        emptyNote: 'Напиши нещо в дневника!',
        navMain: "Основно",
        challenge: "100-дневно предизвикателство"
      }
    }
  };

  function getCurrentLanguage() {
    try {
      const s = JSON.parse(localStorage.getItem('wt_user_settings') || '{}');
      return s.language || 'bg';
    } catch (_) { return 'bg'; }
  }

  function setLanguage(lang) {
    try {
      const s = JSON.parse(localStorage.getItem('wt_user_settings') || '{}');
      s.language = lang;
      localStorage.setItem('wt_user_settings', JSON.stringify(s));
    } catch (_) { }
    applyTranslations();
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.textContent.trim().toLowerCase() === lang);
    });
    document.documentElement.lang = lang;
  }

  function t(key, ...args) {
    const lang = getCurrentLanguage();
    const parts = key.split('.');
    let node = TRANSLATIONS[lang] || TRANSLATIONS['bg'];
    for (const p of parts) {
      if (node == null) break;
      node = node[p];
    }
    if (node == null) {
      let fallback = TRANSLATIONS['bg'];
      for (const p of parts) { if (!fallback) break; fallback = fallback[p]; }
      node = fallback;
    }
    if (typeof node !== 'string') return key;
    return node.replace(/\{(\d+)\}/g, (_, i) => args[i] !== undefined ? args[i] : '');
  }

  function applyTranslations() {
    const lang = getCurrentLanguage();
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (!val || val === key) return;
      const tag = el.tagName.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select') {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const val = t(key);
      if (val && val !== key) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = t(key);
      if (val && val !== key) el.placeholder = val;
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.textContent.trim().toLowerCase() === lang);
    });
    document.documentElement.lang = lang;
    // Call page-specific translations if available
    if (window.applyPageTranslations) window.applyPageTranslations();
  }

  window.t = t;
  window.getCurrentLanguage = getCurrentLanguage;
  window.setLanguage = setLanguage;
  window.applyTranslations = applyTranslations;

  document.addEventListener('DOMContentLoaded', applyTranslations);

})();