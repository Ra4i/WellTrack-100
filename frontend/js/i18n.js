/* ================================================================
   i18n.js — Internationalization / Translation System
   WellTrack 100 — BG / EN
   ================================================================ */

(function () {
  'use strict';

  // ── Translation strings ───────────────────────────────────────
  const TRANSLATIONS = {
    en: {
      nav: {
        dashboard:        'Dashboard',
        levels:           'Levels',
        progress:         'Progress',
        journal:          'Journal',
        friends:          'Friends',
        messages:         'Messages',
        settings:         'Settings',
        login:            'Login',
        startChallenge:   'Start Challenge →'
      },
      common: {
        day:    'Day',
        back:   'Back',
        save:   'Save',
        cancel: 'Cancel',
        loading:'Loading...'
      },
      home: {
        tagline:     '100 days to change',
        title:       'Build habits.<br>Track <span class="highlight">progress</span>.<br>Change your life.',
        description: 'WellTrack 100 is your personal wellness companion for the 100-day challenge. Log water, workouts and sleep — watch yourself transform day by day.',
        startButton: 'Start your 100 days',
        loginButton: 'I have an account',
        features: {
          hydration:   'Hydration Tracking',
          workout:     'Workout Logging',
          sleep:       'Sleep Analysis',
          progress:    'Progress Visualization',
          dashboard:   '100-Day Dashboard',
          crossPlatform:'Cross-Platform'
        },
        featuresDesc: {
          hydration:    'Log your daily water intake and hit your hydration goals every day.',
          workout:      'Mark completed workouts and build an unbroken fitness streak.',
          sleep:        'Track sleep hours and discover the patterns that give you maximum energy.',
          progress:     'Beautiful charts and rings show how far you\'ve come.',
          dashboard:    'See exactly where you are in the challenge with real-time progress rings.',
          crossPlatform:'Built to expand to desktop and mobile apps.'
        }
      },
      dashboard: {
        title:            'Dashboard',
        youAreStronger:   'You are stronger than every craving 💪',
        dayStreak:        'Day Streak',
        resetsIfMissed:   'Resets if missed',
        level:            'Level',
        waterIntake:      'Water Today',
        workoutCompleted: 'Activity',
        sleepTrack:       'Sleep Last Night',
        moneySaved:       '💰 Money Saved',
        everyDayCounts:   'Every day counts',
        cigsSaved:        'Cigarettes Avoided',
        packPrice:        'Cigarette price in your city',
        liters:           'L',
        hours:            'h',
        saveTodayProgress:'Save Progress',
        keepStreak:       'Keep your streak',
        quickTipHtml:     'Your streak resets if you miss a day — but your <strong>level progress is never lost</strong>.',
        daySaved:         'Day {0} saved! Keep going! 🎉',
        daysRemaining:    '{0} days remaining',
        failedSave:       'Failed to save: {0}',
        levelNotAvailable:'Level {0} is not available yet.',
        levelCompleted:   'Level {0} completed! 🏆',
        exercisesDone:    'Exercises marked as done! 💪',
        failed:           'Error: {0}'
      },
      progress: {
        title:      'Progress',
        completed:  'Days Completed',
        workouts:   'Workouts Done',
        streak:     'Current Streak',
        avgWater:   'Avg. Water',
        avgSleep:   'Avg. Sleep'
      },
      levels: {
        title:      'Levels',
        levelLabel: 'Level',
        complete:   'Complete',
        completed:  'Completed today',
        resetIn:    'Try again tomorrow',
        exercises:  'Exercises'
      },
      messages: {
        title:          'Messages & Chat',
        chatbot:        'Wellness Chatbot',
        chatbotSubtitle:'Your personal wellness coach',
        yourMessages:   'Quick Tips',
        tipWater:       'Drinking water reduces cravings and keeps you healthy.',
        tipExercise:    'Physical activity releases endorphins — your natural mood boosters.',
        tipSupport:     'Share your journey with friends or family.',
        tipProgress:    'Log your daily achievements in WellTrack.'
      },
      friends: {
        title:        'Friends',
        addFriend:    'Add Friend',
        searchFriends:'Search friends...',
        noFriends:    'No friends yet',
        requests:     'Requests',
        online:       'Online',
        away:         'Away',
        offline:      'Offline'
      },
      settings: {
        title:              'Settings',
        language:           'Language',
        theme:              'Theme',
        light:              'Light',
        dark:               'Dark',
        difficulty:         'Difficulty',
        easy:               '🌱 Easy',
        normal:             '⚡ Normal',
        hard:               '🔥 Hard',
        notifications:      'Notifications',
        motivationalQuotes: 'Motivational Quotes',
        save:               'Save Settings',
        saved:              '✓ Settings saved!',
        enabled:            'Enabled',
        disabled:           'Disabled'
      },
      journal: {
        title:        'Journal — Path to Freedom',
        cigarettes:   '🚭 Cigarettes',
        alcohol:      '🍷 Alcohol',
        reset:        'Reset',
        dailyReport:  'Daily Report',
        smokeCheck:   'I managed cigarettes today',
        alcoholCheck: 'I managed alcohol today',
        notePlaceholder:'How are you feeling today? Were there any temptations?',
        saveEntry:    'Save to History',
        resetConfirm: 'Are you sure you want to reset progress for {0}?',
        resetMsg:     'Progress reset for {0}. New beginning!',
        emptyNote:    'Write something in the journal!'
      }
    },

    bg: {
      nav: {
        dashboard:        'Табло',
        levels:           'Нива',
        progress:         'Прогрес',
        journal:          'Журнал',
        friends:          'Приятели',
        messages:         'Съобщения',
        settings:         'Настройки',
        login:            'Вход',
        startChallenge:   'Започни предизвикателството →'
      },
      common: {
        day:    'Ден',
        back:   'Обратно',
        save:   'Запази',
        cancel: 'Отказ',
        loading:'Зареждане...'
      },
      home: {
        tagline:     '100 дни до промяна',
        title:       'Създай навици.<br>Следи <span class="highlight">прогреса</span>.<br>Промени живота си.',
        description: 'WellTrack 100 е твоят личен уелнес спътник за 100-дневното предизвикателство. Записвай вода, тренировки и сън — виж как се променяш ден след ден.',
        startButton: 'Започни своите 100 дни',
        loginButton: 'Имам акаунт',
        features: {
          hydration:    'Проследяване на хидратация',
          workout:      'Записване на тренировки',
          sleep:        'Анализ на сън',
          progress:     'Визуализиране на прогрес',
          dashboard:    '100-дневно табло',
          crossPlatform:'Крос-платформено'
        },
        featuresDesc: {
          hydration:    'Записвай дневния прием на вода и изпълнявай целите си за хидратация всеки ден.',
          workout:      'Отбелязвай завършените тренировки и изграждай непрекъсната серия за фитнес.',
          sleep:        'Следи часовете сън и открий моделите, които ти дават максимална енергия.',
          progress:     'Красиви графики и кръгове показват колко далеч си стигнал.',
          dashboard:    'Виж точно къде си в предизвикателството с реално време прогрес кръгове.',
          crossPlatform:'Създадено да се разшири до десктоп и мобилни приложения.'
        }
      },
      dashboard: {
        title:            'Табло',
        youAreStronger:   'Ти си по-силен от всяко желание 💪',
        dayStreak:        'Серия',
        resetsIfMissed:   'Нулира се при пропуск',
        level:            'Ниво',
        waterIntake:      'Вода днес',
        workoutCompleted: 'Активност',
        sleepTrack:       'Сън снощи',
        moneySaved:       '💰 Спестени пари',
        everyDayCounts:   'Всеки ден има значение',
        cigsSaved:        'Избегнати цигари',
        packPrice:        'Цена на цигари в твоя град',
        liters:           'л',
        hours:            'ч',
        saveTodayProgress:'Запази прогрес',
        keepStreak:       'Запази серията си',
        quickTipHtml:     'Серията ти се нулира, ако пропуснеш ден — но твоят <strong>прогрес на ниво не изчезва</strong>.',
        daySaved:         'Ден {0} записан! Продължавай! 🎉',
        daysRemaining:    'Остават {0} дни',
        failedSave:       'Грешка при запис: {0}',
        levelNotAvailable:'Ниво {0} все още не е достъпно.',
        levelCompleted:   'Ниво {0} завършено! 🏆',
        exercisesDone:    'Упражненията са отбелязани! 💪',
        failed:           'Грешка: {0}'
      },
      progress: {
        title:      'Прогрес',
        completed:  'Завършени дни',
        workouts:   'Тренировки',
        streak:     'Текуща серия',
        avgWater:   'Средно вода',
        avgSleep:   'Средно сън'
      },
      levels: {
        title:      'Нива',
        levelLabel: 'Ниво',
        complete:   'Завърши',
        completed:  'Завършено днес',
        resetIn:    'Опитай утре',
        exercises:  'Упражнения'
      },
      messages: {
        title:          'Съобщения и чат',
        chatbot:        'Wellness Chatbot',
        chatbotSubtitle:'Твоят личен уелнес треньор',
        yourMessages:   'Бързи съвети',
        tipWater:       'Пиенето на вода намалява желанията и те държи здрав.',
        tipExercise:    'Физическата активност освобождава ендорфини — естествените ти стимулатори.',
        tipSupport:     'Сподели пътя си с приятели или семейство.',
        tipProgress:    'Записвай ежедневните си постижения в WellTrack.'
      },
      friends: {
        title:        'Приятели',
        addFriend:    'Добави приятел',
        searchFriends:'Търси приятели...',
        noFriends:    'Все още няма приятели',
        requests:     'Заявки',
        online:       'Онлайн',
        away:         'Отдалечен',
        offline:      'Офлайн'
      },
      settings: {
        title:              'Настройки',
        language:           'Език',
        theme:              'Тема',
        light:              'Светла',
        dark:               'Тъмна',
        difficulty:         'Ниво на трудност',
        easy:               '🌱 Лесно',
        normal:             '⚡ Нормално',
        hard:               '🔥 Трудно',
        notifications:      'Известия',
        motivationalQuotes: 'Мотивиращи цитати',
        save:               'Запази настройките',
        saved:              '✓ Настройките са запазени!',
        enabled:            'Включено',
        disabled:           'Изключено'
      },
      journal: {
        title:        'Журнал — Пътят към Свободата',
        cigarettes:   '🚭 Цигари',
        alcohol:      '🍷 Алкохол',
        reset:        'Нулирай',
        dailyReport:  'Дневен отчет',
        smokeCheck:   'Справих се с цигарите',
        alcoholCheck: 'Справих се с алкохола',
        notePlaceholder:'Как се чувстваш днес? Имаше ли изкушения?',
        saveEntry:    'Запази в историята',
        resetConfirm: 'Сигурен ли си, че искаш да нулираш прогреса за {0}?',
        resetMsg:     'Нулиране на прогреса за {0}. Ново начало!',
        emptyNote:    'Напиши нещо в дневника!'
      }
    }
  };

  // ── Core language helpers ─────────────────────────────────────
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
    } catch (_) {}
    applyTranslations();
    // update active lang button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.textContent.trim().toLowerCase() === lang);
    });
    // update html lang attribute
    document.documentElement.lang = lang;
  }

  // ── Translation lookup ────────────────────────────────────────
  function t(key, ...args) {
    const lang  = getCurrentLanguage();
    const parts = key.split('.');
    let node = TRANSLATIONS[lang] || TRANSLATIONS['bg'];
    for (const p of parts) {
      if (node == null) break;
      node = node[p];
    }
    if (node == null) {
      // Fallback to bg
      let fallback = TRANSLATIONS['bg'];
      for (const p of parts) { if (!fallback) break; fallback = fallback[p]; }
      node = fallback;
    }
    if (typeof node !== 'string') return key;
    // Replace {0}, {1} placeholders
    return node.replace(/\{(\d+)\}/g, (_, i) => args[i] !== undefined ? args[i] : '');
  }

  // ── Apply all data-i18n attributes ───────────────────────────
  function applyTranslations() {
    const lang = getCurrentLanguage();

    // data-i18n — text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val && val !== key) el.textContent = val;
    });

    // data-i18n-html — inner HTML (for bold tags etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const val = t(key);
      if (val && val !== key) el.innerHTML = val;
    });

    // data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = t(key);
      if (val && val !== key) el.placeholder = val;
    });

    // Update lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.textContent.trim().toLowerCase() === lang);
    });

    document.documentElement.lang = lang;
  }

  // ── Expose globals ────────────────────────────────────────────
  window.t                  = t;
  window.getCurrentLanguage = getCurrentLanguage;
  window.setLanguage        = setLanguage;
  window.applyTranslations  = applyTranslations;

  // Auto-apply on load
  document.addEventListener('DOMContentLoaded', applyTranslations);

})();