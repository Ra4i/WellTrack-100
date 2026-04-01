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
      daySaved: "Day {0} saved!",
      failedSave: "Failed to save: {0}",
      levelNotAvailable: "Level {0} is not available yet.",
      levelCompleted: "Level {0} completed!",
      failed: "Error: {0}",
      exercisesDone: "Exercises done! 💪 Available again at midnight.",
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
    // Levels data
    levelsData: [
      { level: 1,  title: "First Step",         smoke: "Your lungs begin healing within 20 minutes of your last cigarette. Blood pressure is already dropping.", alcohol: "Your liver starts recovering. Celebrate with water — your body will thank you.", exercises: ["5 pushups", "10 squats", "30 second plank"] },
      { level: 2,  title: "Carbon Free",        smoke: "Carbon monoxide has left your blood. Your oxygen levels are back to normal.", alcohol: "Sleep quality improves tonight. Alcohol was robbing you of deep sleep every night.", exercises: ["6 pushups", "12 squats", "40 second plank"] },
      { level: 3,  title: "Nerve Repair",       smoke: "Nerve endings start regrowing. You may notice taste and smell improving.", alcohol: "Anxiety begins to lift. Alcohol was amplifying it — not solving it.", exercises: ["7 pushups", "14 squats", "45 second plank"] },
      { level: 4,  title: "Breathing Easy",     smoke: "Bronchial tubes relax. Breathing is getting easier already.", alcohol: "Your blood sugar is stabilizing. Cravings will start to feel less intense.", exercises: ["8 pushups", "16 squats", "50 second plank"] },
      { level: 5,  title: "Day 5 Fighter",      smoke: "Most nicotine is out of your body. The physical addiction is weakening.", alcohol: "Hydration improves. Your skin, joints, and organs are drinking deeply again.", exercises: ["10 pushups", "20 squats", "1 minute plank"] },
      { level: 6,  title: "One Week Soon",      smoke: "Cilia in your lungs are recovering — they sweep toxins out.", alcohol: "Mental clarity is returning. Alcohol was fogging your thinking every single day.", exercises: ["12 pushups", "25 squats", "10 burpees", "1 min plank"] },
      { level: 7,  title: "Week Warrior",       smoke: "7 days smoke-free. Your heart attack risk has already started to drop.", alcohol: "One week alcohol-free. Your liver has begun serious repair work.", exercises: ["15 pushups", "30 squats", "15 burpees"] },
      { level: 8,  title: "Taste Revival",      smoke: "Food tastes different — better. Your taste buds are healing.", alcohol: "Your immune system is strengthening. Alcohol was suppressing it constantly.", exercises: ["20 pushups", "35 squats", "20 burpees"] },
      { level: 9,  title: "Lung Cleanser",      smoke: "Mucus production normalizes. Your lungs are actively cleaning themselves.", alcohol: "Blood pressure is dropping toward healthy levels.", exercises: ["25 pushups", "40 squats", "25 burpees"] },
      { level: 10, title: "Double Digits",      smoke: "10 days in — the habit loop is weakening. You are rewriting your brain.", alcohol: "10 days clean. The worst withdrawal is behind you. You did it.", exercises: ["30 pushups", "50 squats", "30 burpees"] },
      { level: 11, title: "Circulation Boost",  smoke: "Circulation improves. Hands and feet feel warmer.", alcohol: "Digestion is improving. Alcohol was inflaming your gut every day.", exercises: ["10 pushups", "40 squats", "2 min plank"] },
      { level: 12, title: "Energy Rising",      smoke: "Energy levels increase as oxygen delivery improves.", alcohol: "Your mood is stabilizing. Alcohol is a depressant — you are escaping its grip.", exercises: ["12 pushups", "45 squats", "2 min plank", "stretching"] },
      { level: 13, title: "Lucky 13",           smoke: "Coughing decreases. Your airways are clearing.", alcohol: "Social confidence without alcohol. You are stronger than you think.", exercises: ["15 pushups", "50 squats", "1.5 mile walk"] },
      { level: 14, title: "Two Weeks",          smoke: "2 weeks smoke-free. Lung function improves up to 30%.", alcohol: "Two weeks clean. Your brain chemistry is rebalancing.", exercises: ["18 pushups", "50 squats", "5 pullups"] },
      { level: 15, title: "Halfway Month",      smoke: "Risk of infection drops as immune function improves.", alcohol: "Weight stabilizing — alcohol has hundreds of empty calories.", exercises: ["20 pushups", "60 squats", "8 pullups"] },
      { level: 16, title: "Deep Breath",        smoke: "Breathing during exercise is noticeably easier.", alcohol: "Memory and concentration are sharpening day by day.", exercises: ["25 pushups", "70 squats", "10 pullups"] },
      { level: 17, title: "Heart Hero",         smoke: "Heart rate has normalized. Your heart is under less stress.", alcohol: "Relationships are improving. Alcohol hurts the people we love too.", exercises: ["30 pushups", "80 squats", "12 pullups"] },
      { level: 18, title: "Skin Glow",          smoke: "Skin begins to glow as blood flow improves.", alcohol: "Skin is clearer and more hydrated. Alcohol was drying you out.", exercises: ["35 pushups", "90 squats", "15 pullups"] },
      { level: 19, title: "Almost 3 Weeks",     smoke: "Irritability from nicotine withdrawal is fading.", alcohol: "You are proving to yourself you have real control. That is powerful.", exercises: ["40 pushups", "100 squats", "20 pullups"] },
      { level: 20, title: "20 Day Legend",      smoke: "20 days! Physical cravings are significantly reduced.", alcohol: "20 days alcohol-free. Your liver enzymes are returning to normal.", exercises: ["45 pushups", "110 squats", "25 pullups"] },
      { level: 21, title: "3 Week Champion",    smoke: "3 weeks in — habits take 21 days to break. You broke it.", alcohol: "3 weeks clean. Science says habits begin to rewire at 21 days.", exercises: ["50 pushups", "130 squats", "30 pullups"] },
      { level: 22, title: "Lung Power",         smoke: "Lung capacity continues to grow. Exercise feels easier.", alcohol: "Emotional regulation improves. Alcohol was numbing feelings, not solving them.", exercises: ["2 mile run", "60 pushups", "35 pullups"] },
      { level: 23, title: "Money Saved",        smoke: "Count the money saved. Use it for something that matters.", alcohol: "Count the money saved on alcohol. It adds up to hundreds.", exercises: ["2.5 mile run", "70 pushups", "40 pullups"] },
      { level: 24, title: "Social Strength",    smoke: "Social situations without cigarettes feel more natural now.", alcohol: "You can have fun without alcohol. Your personality was never the bottle.", exercises: ["75 pushups", "150 squats", "20 pullups", "yoga session"] },
      { level: 25, title: "Quarter Century",    smoke: "25 days. A quarter of your journey done. Keep going.", alcohol: "25 days sober. You are in the top percentage of people who tried.", exercises: ["HIIT: 5 rounds of 20 sec sprint + 40 sec rest", "80 pushups", "50 squats"] },
      { level: 26, title: "Sleep Deeper",       smoke: "Sleep quality has dramatically improved.", alcohol: "Deep sleep restored. Your brain is repairing itself every night now.", exercises: ["3 mile run", "90 pushups", "2 min plank", "yoga"] },
      { level: 27, title: "Immune Shield",      smoke: "Immune system is significantly stronger.", alcohol: "Your body fights illness better now. Alcohol was your immune system's enemy.", exercises: ["3.5 mile run", "100 pushups", "25 pullups"] },
      { level: 28, title: "4 Week Titan",       smoke: "4 weeks smoke-free. Your risk of heart disease is already lower.", alcohol: "4 weeks alcohol-free. A genuine achievement most people never reach.", exercises: ["4 mile run", "110 pushups", "30 pullups"] },
      { level: 29, title: "Almost a Month",     smoke: "One more day to a full month. You are almost there.", alcohol: "One more day to a full month. The momentum is on your side.", exercises: ["4.5 mile run", "120 pushups", "35 pullups"] },
      { level: 30, title: "30 Day Master",      smoke: "30 DAYS SMOKE-FREE. Your lungs are functioning like a non-smoker's.", alcohol: "30 DAYS ALCOHOL-FREE. This is a milestone millions struggle to reach.", exercises: ["5 mile run", "150 pushups", "50 pullups", "strength session"] },
      { level: 31, title: "Month Plus",         smoke: "Beyond a month. This is your new identity now.", alcohol: "Beyond a month. Sobriety is becoming who you are.", exercises: ["5.5 mile run", "160 pushups", "40 pullups"] },
      { level: 32, title: "Habit Breaker",      smoke: "The habit is broken. What remains is the choice — and you keep choosing right.", alcohol: "The habit is broken. Every day now is a choice you are winning.", exercises: ["6 mile run", "170 pushups", "45 pullups"] },
      { level: 33, title: "Oxygen Rich",        smoke: "Your blood oxygen levels are fully normalized.", alcohol: "Your organs are receiving full blood oxygen. Alcohol reduced this.", exercises: ["HIIT: 10 rounds of 30 sec sprint + 30 sec rest", "180 pushups", "150 squats"] },
      { level: 34, title: "Nerve Growth",       smoke: "Nerve endings continue regenerating. Sensation improves.", alcohol: "Nerve damage from alcohol is slowly reversing.", exercises: ["6.5 mile run", "190 pushups", "50 pullups"] },
      { level: 35, title: "5 Week Strong",      smoke: "5 weeks in. The cravings are rare and manageable now.", alcohol: "5 weeks sober. You have built something real.", exercises: ["7 mile run", "200 pushups", "55 pullups"] },
      { level: 36, title: "Mind Clear",         smoke: "Mental fog from nicotine is gone. Think clearly.", alcohol: "Brain fog is lifting. Alcohol was dulling your sharpest tool — your mind.", exercises: ["7.5 mile run", "210 pushups", "60 pullups"] },
      { level: 37, title: "Heart Protector",    smoke: "Heart disease risk continues to fall every day.", alcohol: "Heart health improving. Alcohol causes cardiac damage over time.", exercises: ["8 mile run", "220 pushups", "200 squats"] },
      { level: 38, title: "Lung Climber",       smoke: "Climb stairs without getting winded. Feel the difference.", alcohol: "Physical endurance is building. Your body has more fuel now.", exercises: ["8.5 mile run", "230 pushups", "70 pullups"] },
      { level: 39, title: "Almost 40",          smoke: "Nearly 40 days. You have built extraordinary willpower.", alcohol: "Nearly 40 days. You are in rare company.", exercises: ["9 mile run", "240 pushups", "2:30 plank"] },
      { level: 40, title: "40 Day Warrior",     smoke: "40 days smoke-free. Circulation is dramatically improved.", alcohol: "40 days sober. Your liver has made remarkable progress.", exercises: ["9.5 mile run", "250 pushups", "80 pullups"] },
      { level: 41, title: "6 Week Hero",        smoke: "6 weeks. Your body has fundamentally changed.", alcohol: "6 weeks alcohol-free. Your brain has fundamentally changed.", exercises: ["10 mile run", "260 pushups", "250 squats"] },
      { level: 42, title: "Taste Master",       smoke: "Food has never tasted this good. Enjoy every meal.", alcohol: "Appetite has normalized. Alcohol disrupted hunger hormones.", exercises: ["10.5 mile run", "270 pushups", "90 pullups"] },
      { level: 43, title: "Skin Winner",        smoke: "Wrinkles are softening. Skin is plumper and more hydrated.", alcohol: "Skin is glowing. Alcohol causes premature aging — you are reversing it.", exercises: ["11 mile run", "280 pushups", "3 min plank"] },
      { level: 44, title: "Stress Fighter",     smoke: "You handle stress without nicotine. You are stronger.", alcohol: "You handle stress without alcohol. That is true strength.", exercises: ["11.5 mile run", "300 pushups", "100 pullups"] },
      { level: 45, title: "45 Day Giant",       smoke: "45 days. Almost halfway. The hardest part is behind you.", alcohol: "45 days. Almost halfway through your 100-day challenge.", exercises: ["12 mile run", "310 pushups", "300 squats"] },
      { level: 46, title: "Halfway Soon",       smoke: "4 more days to the halfway point. Sprint.", alcohol: "4 more days to 50. You can see it from here.", exercises: ["HIIT: 15 rounds of 30 sec sprint + 30 sec rest"] },
      { level: 47, title: "Deep Healer",        smoke: "Deep lung tissue continues to heal.", alcohol: "Deep liver repair continues every single night you sleep sober.", exercises: ["12.5 mile run", "320 pushups", "110 pullups"] },
      { level: 48, title: "Energy Peak",        smoke: "Energy levels at their highest since you started.", alcohol: "Energy is peaking as your body runs clean.", exercises: ["13 mile run", "330 pushups", "3:30 plank"] },
      { level: 49, title: "Eve of 50",          smoke: "Tomorrow is Day 50. You are extraordinary.", alcohol: "Tomorrow is Day 50. Most people never get here. You did.", exercises: ["13.5 mile run", "340 pushups", "120 pullups"] },
      { level: 50, title: "HALFWAY LEGEND",     smoke: "50 DAYS SMOKE-FREE. You have done something incredible. Your risk of stroke is now half of a smoker's.", alcohol: "50 DAYS ALCOHOL-FREE. Your liver is 50% recovered. You are halfway to 100.", exercises: ["14 mile run", "350 pushups", "125 pullups", "3 min plank"] },
      { level: 51, title: "Second Half",        smoke: "The second half begins. You know you can do this.", alcohol: "The second half begins. You have proven you can do this.", exercises: ["HIIT: 15 rounds of 40 sec sprint + 20 sec rest", "300 squats"] },
      { level: 52, title: "Immune Champion",    smoke: "Your immune system is now as strong as a non-smoker's.", alcohol: "Immune function is fully restored.", exercises: ["14.5 mile run", "360 pushups", "130 pullups"] },
      { level: 53, title: "Lung Capacity",      smoke: "Lung capacity at its highest point yet.", alcohol: "Lung health improving — alcohol affects breathing too.", exercises: ["15 mile run", "370 pushups", "350 squats"] },
      { level: 54, title: "Heart Shield",       smoke: "Coronary artery disease risk drops significantly.", alcohol: "Blood pressure in healthy range. Heart working efficiently.", exercises: ["15.5 mile run", "380 pushups", "140 pullups"] },
      { level: 55, title: "55 Day Titan",       smoke: "55 days. You have built a new life.", alcohol: "55 days. Your new sober life is becoming your real life.", exercises: ["16 mile run", "390 pushups", "400 squats"] },
      { level: 56, title: "8 Week Legend",      smoke: "8 weeks smoke-free. Most ex-smokers cite this as the turning point.", alcohol: "8 weeks sober. Your brain chemistry has largely rebalanced.", exercises: ["HIIT: 20 rounds of 40 sec sprint + 20 sec rest", "4 min plank"] },
      { level: 57, title: "Focus Sharp",        smoke: "Mental focus is razor sharp without nicotine.", alcohol: "Cognitive function restored. Alcohol was stealing your sharpness.", exercises: ["16.5 mile run", "400 pushups", "150 pullups"] },
      { level: 58, title: "Social Free",        smoke: "Social smoking triggers have lost their power.", alcohol: "Social drinking pressure rolls off you. You are solid.", exercises: ["17 mile run", "410 pushups", "mountain climbers set"] },
      { level: 59, title: "Almost 60",          smoke: "One more day to 60. You are unstoppable.", alcohol: "One more day to 60. Nothing can stop you now.", exercises: ["17.5 mile run", "420 pushups", "160 pullups"] },
      { level: 60, title: "60 Day Champion",    smoke: "60 DAYS. Your body has undergone a transformation.", alcohol: "60 DAYS SOBER. Two full months of choosing yourself.", exercises: ["18 mile run", "450 pushups", "500 squats"] },
      { level: 61, title: "New Normal",         smoke: "Not smoking is your new normal. Embrace it.", alcohol: "Sobriety is your new normal. It fits you well.", exercises: ["HIIT: 20 rounds of 45 sec sprint + 15 sec rest", "4:30 plank"] },
      { level: 62, title: "Smell Revival",      smoke: "Your sense of smell is fully restored.", alcohol: "Senses are fully sharpened. Life is more vivid sober.", exercises: ["18.5 mile run", "460 pushups", "170 pullups"] },
      { level: 63, title: "9 Week Strong",      smoke: "9 weeks. Your lungs have healed more than you know.", alcohol: "9 weeks. Your body has healed more than you know.", exercises: ["19 mile run", "470 pushups", "yoga advanced"] },
      { level: 64, title: "Circulation Elite",  smoke: "Circulation is now as good as a lifelong non-smoker.", alcohol: "Blood flow is optimal. Every organ benefits.", exercises: ["19.5 mile run", "480 pushups", "180 pullups"] },
      { level: 65, title: "65 Day Giant",       smoke: "65 days of choosing your health over a habit.", alcohol: "65 days of choosing clarity over escape.", exercises: ["20 mile run", "500 pushups", "550 squats"] },
      { level: 66, title: "Cancer Risk Drop",   smoke: "Risk of mouth, throat, and esophageal cancer is halving.", alcohol: "Risk of alcohol-related cancers is dropping significantly.", exercises: ["HIIT: 25 rounds of 45 sec sprint + 15 sec rest", "5 min plank"] },
      { level: 67, title: "10 Week Hero",       smoke: "10 weeks smoke-free. A milestone worth celebrating.", alcohol: "10 weeks sober. Celebrate — you have earned it.", exercises: ["20.5 mile run", "520 pushups", "190 pullups"] },
      { level: 68, title: "Lung Elite",         smoke: "Lung function nearing that of a lifetime non-smoker.", alcohol: "Your organs are performing at their best in years.", exercises: ["21 mile run", "530 pushups", "cycling or swimming"] },
      { level: 69, title: "Almost 70",          smoke: "One more day to 70. You have come so far.", alcohol: "One more day to 70. The finish line is visible.", exercises: ["21.5 mile run", "540 pushups", "200 pullups"] },
      { level: 70, title: "70 Day Legend",      smoke: "70 DAYS. You have changed your life.", alcohol: "70 DAYS SOBER. You have genuinely changed your life.", exercises: ["22 mile run", "550 pushups", "600 squats"] },
      { level: 71, title: "Strong Mind",        smoke: "Psychological dependence on nicotine is nearly gone.", alcohol: "Psychological dependence on alcohol is fading. You are free.", exercises: ["HIIT: 25 rounds of 45 sec sprint + 15 sec rest", "5:30 plank"] },
      { level: 72, title: "Heart Winner",       smoke: "Heart attack risk is now half of a smoker's.", alcohol: "Cardiac health is excellent. Keep protecting it.", exercises: ["22.5 mile run", "560 pushups", "210 pullups"] },
      { level: 73, title: "Almost 11 Weeks",    smoke: "Approaching 11 weeks. Consistency is your superpower.", alcohol: "Approaching 11 weeks. Your consistency is remarkable.", exercises: ["23 mile run", "570 pushups", "rock climbing"] },
      { level: 74, title: "Deep Repair",        smoke: "DNA repair in lung cells accelerating.", alcohol: "Liver cell regeneration is in full swing.", exercises: ["23.5 mile run", "580 pushups", "650 squats"] },
      { level: 75, title: "75 Day Titan",       smoke: "75 days. Three quarters done. You are extraordinary.", alcohol: "75 days. Three quarters of the challenge complete.", exercises: ["24 mile run", "600 pushups", "220 pullups"] },
      { level: 76, title: "Last Quarter",       smoke: "Final stretch begins. Do not stop now.", alcohol: "Final stretch. You are so close to 100.", exercises: ["HIIT: 30 rounds of 50 sec sprint + 10 sec rest", "700 squats"] },
      { level: 77, title: "Lucky 77",           smoke: "Lucky 77. Keep your streak alive.", alcohol: "Lucky 77. Your streak is your strength.", exercises: ["24.5 mile run", "620 pushups", "230 pullups"] },
      { level: 78, title: "Endurance King",     smoke: "Your physical endurance rivals a non-smoker's.", alcohol: "Physical and mental endurance are at their peak.", exercises: ["25 mile run", "640 pushups", "cycling session"] },
      { level: 79, title: "Almost 80",          smoke: "One more day to 80. You are almost there.", alcohol: "One more day to 80. Do not let up now.", exercises: ["25.5 mile run", "660 pushups", "240 pullups"] },
      { level: 80, title: "80 Day Master",      smoke: "80 DAYS SMOKE-FREE. A genuine life transformation.", alcohol: "80 DAYS SOBER. Most people never reach this. You did.", exercises: ["26 mile run", "700 pushups", "6 min plank"] },
      { level: 81, title: "New You",            smoke: "You are not the person who smoked. You are new.", alcohol: "You are not who you were on Day 1. You are new.", exercises: ["HIIT: 30 rounds of 50 sec sprint + 10 sec rest", "800 squats"] },
      { level: 82, title: "Cancer Defender",    smoke: "Lung cancer risk dropping every single day.", alcohol: "Liver cancer risk dropping every single day.", exercises: ["26.5 mile run", "720 pushups", "250 pullups"] },
      { level: 83, title: "Almost 12 Weeks",    smoke: "Approaching 12 weeks. Three months in sight.", alcohol: "Approaching 12 weeks. Three months in sight.", exercises: ["27 mile run", "740 pushups", "yoga session"] },
      { level: 84, title: "12 Week Giant",      smoke: "12 weeks — 3 full months smoke-free. Remarkable.", alcohol: "12 weeks — 3 full months alcohol-free. Remarkable.", exercises: ["27.5 mile run", "760 pushups", "260 pullups"] },
      { level: 85, title: "85 Day Hero",        smoke: "85 days. The habit is a memory. You are the winner.", alcohol: "85 days. The addiction is a memory. You are the winner.", exercises: ["28 mile run", "800 pushups", "900 squats"] },
      { level: 86, title: "Vital Signs Win",    smoke: "All vital signs now match a healthy non-smoker.", alcohol: "All vital signs now match a healthy non-drinker.", exercises: ["HIIT: 35 rounds of 55 sec sprint + 5 sec rest", "6:30 plank"] },
      { level: 87, title: "Almost 13 Weeks",    smoke: "13 weeks approaching. Your commitment is inspiring.", alcohol: "13 weeks approaching. You are an inspiration.", exercises: ["28.5 mile run", "820 pushups", "270 pullups"] },
      { level: 88, title: "88 Day Legend",      smoke: "88 days. You have built an unbreakable identity.", alcohol: "88 days. Your sober identity is unshakeable.", exercises: ["29 mile run", "840 pushups", "swimming or biking"] },
      { level: 89, title: "Almost 90",          smoke: "One more day to 90. The last push is here.", alcohol: "One more day to 90. Give everything you have.", exercises: ["29.5 mile run", "860 pushups", "280 pullups"] },
      { level: 90, title: "90 Day TITAN",       smoke: "90 DAYS SMOKE-FREE. You are in the top 1% of people who tried to quit.", alcohol: "90 DAYS SOBER. You have done something most people only dream of.", exercises: ["30 mile run", "900 pushups", "7 min plank"] },
      { level: 91, title: "Final 10",           smoke: "10 days left. Do not stop now. Finish what you started.", alcohol: "10 days left. The finish line is right there.", exercises: ["HIIT: 40 rounds of 55 sec sprint + 5 sec rest", "1000 squats"] },
      { level: 92, title: "92 Day Strong",      smoke: "92 days of choosing life over a cigarette.", alcohol: "92 days of choosing clarity over escape.", exercises: ["30.5 mile run", "920 pushups", "290 pullups"] },
      { level: 93, title: "One Week Left",      smoke: "One week remaining. Sprint to the finish.", alcohol: "One week remaining. Sprint to the finish.", exercises: ["31 mile run", "950 pushups", "yoga or stretching"] },
      { level: 94, title: "94 Day Champion",    smoke: "94 days. Your lungs are cleaner than they have been in years.", alcohol: "94 days. Your liver is cleaner than it has been in years.", exercises: ["31.5 mile run", "980 pushups", "300 pullups"] },
      { level: 95, title: "5 Days Left",        smoke: "5 days to 100. You can feel the finish line.", alcohol: "5 days to 100. You can feel the finish line.", exercises: ["32 mile run", "1000 pushups", "7:30 plank"] },
      { level: 96, title: "96 Day Warrior",     smoke: "96 days. Almost there. Do not blink.", alcohol: "96 days. Almost there. Do not blink.", exercises: ["HIIT: 40 rounds of 1 min sprint + rest", "310 pullups"] },
      { level: 97, title: "3 Days Left",        smoke: "3 days. You have already won. Just keep going.", alcohol: "3 days. You have already won. Just keep going.", exercises: ["32.5 mile run", "1020 pushups", "1000 squats"] },
      { level: 98, title: "2 Days Left",        smoke: "2 days. You will finish this. You always were going to.", alcohol: "2 days. You will finish this. You always were going to.", exercises: ["33 mile run", "recovery session or light yoga"] },
      { level: 99, title: "Final Day Eve",      smoke: "Tomorrow is Day 100. You are about to complete something most people never will.", alcohol: "Tomorrow is Day 100. You are about to complete something most people never will.", exercises: ["33.5 mile run", "1050 pushups", "320 pullups"] },
      { level: 100, title: "100 DAY CHAMPION",  smoke: "100 DAYS SMOKE-FREE. You have transformed your life. Your lung cancer risk has halved. Your heart is healthier. You are free.", alcohol: "100 DAYS ALCOHOL-FREE. You have transformed your life. Your liver is healed. Your mind is clear. You are completely free.", exercises: ["VICTORY CELEBRATION", "Celebrate your triumph", "Reflect on your incredible transformation"] },
    ],
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
    // Levels data (Bulgarian)
    levelsData: [
      { level: 1,  title: "Първата стъпка",        smoke: "Белите ти дробове започват да се лекуват само 20 минути след последната цигара. Кръвното налягане вече пада.", alcohol: "Черният ти дроб започва да се възстановява. Отпразнувай с вода — тялото ти ще се отблагодари.", exercises: ["5 лицеви опори", "10 клека", "30 секунди планк"] },
      { level: 2,  title: "Без въглероден окис",    smoke: "Въглеродният окис е напуснал кръвта ти. Нивото на кислород е отново нормално.", alcohol: "Качеството на съня се подобрява тази вечер. Алкохолът те лишаваше от дълбок сън всяка нощ.", exercises: ["6 лицеви опори", "12 клека", "40 секунди планк"] },
      { level: 3,  title: "Нервна регенерация",     smoke: "Нервните окончания започват да се възстановяват. Вкусът и обонянието може да се подобрят.", alcohol: "Тревожността започва да отшумява. Алкохолът я усилваше — не я решаваше.", exercises: ["7 лицеви опори", "14 клека", "45 секунди планк"] },
      { level: 4,  title: "Дишане без усилие",      smoke: "Бронхиалните тръби се отпускат. Дишането вече е по-лесно.", alcohol: "Кръвната ти захар се стабилизира. Желанията ще стават все по-слаби.", exercises: ["8 лицеви опори", "16 клека", "50 секунди планк"] },
      { level: 5,  title: "Борец от ден 5",         smoke: "По-голямата част от никотина е изчезнала от тялото ти. Физическата зависимост отслабва.", alcohol: "Хидратацията се подобрява. Кожата, ставите и органите ти се напояват отново.", exercises: ["10 лицеви опори", "20 клека", "1 минута планк"] },
      { level: 6,  title: "Скоро цяла седмица",     smoke: "Ресничките в белите ти дробове се възстановяват — те изчистват токсините.", alcohol: "Умствената яснота се завръща. Алкохолът замъглявше мисленето ти всеки ден.", exercises: ["12 лицеви опори", "25 клека", "10 бурпита", "1 мин планк"] },
      { level: 7,  title: "Воин на седмицата",      smoke: "7 дни без цигари. Рискът от инфаркт вече е намалял.", alcohol: "Една седмица без алкохол. Черният ти дроб е започнал сериозно възстановяване.", exercises: ["15 лицеви опори", "30 клека", "15 бурпита"] },
      { level: 8,  title: "Завръщане на вкуса",     smoke: "Храната има различен вкус — по-добър. Вкусовите рецептори се лекуват.", alcohol: "Имунната ти система се укрепва. Алкохолът я потискаше непрекъснато.", exercises: ["20 лицеви опори", "35 клека", "20 бурпита"] },
      { level: 9,  title: "Пречиствател на белите дробове", smoke: "Производството на слуз се нормализира. Белите ти дробове се самопочистват активно.", alcohol: "Кръвното налягане спада към здравословни нива.", exercises: ["25 лицеви опори", "40 клека", "25 бурпита"] },
      { level: 10, title: "Двуцифрен",              smoke: "10 дни — примката на навика отслабва. Ти пренаписваш мозъка си.", alcohol: "10 дни чист. Най-тежкото от отнемането е зад теб. Успя.", exercises: ["30 лицеви опори", "50 клека", "30 бурпита"] },
      { level: 11, title: "Подобрено кръвообращение", smoke: "Кръвообращението се подобрява. Ръцете и краката усещат топлина.", alcohol: "Храносмилането се подобрява. Алкохолът разпалваше червата ти всеки ден.", exercises: ["10 лицеви опори", "40 клека", "2 мин планк"] },
      { level: 12, title: "Ниво на енергия нараства", smoke: "Нивата на енергия се увеличават с подобряването на доставката на кислород.", alcohol: "Настроението ти се стабилизира. Алкохолът е депресант — ти се измъкваш от хватката му.", exercises: ["12 лицеви опори", "45 клека", "2 мин планк", "разтягане"] },
      { level: 13, title: "Щастливото 13",          smoke: "Кашлицата намалява. Дихателните ти пътища се прочистват.", alcohol: "Социална увереност без алкохол. Ти си по-силен, отколкото мислиш.", exercises: ["15 лицеви опори", "50 клека", "разходка 2.5 км"] },
      { level: 14, title: "Две седмици",             smoke: "2 седмици без цигари. Белодробната функция се подобрява с до 30%.", alcohol: "Две седмици чист. Мозъчната ти химия се балансира отново.", exercises: ["18 лицеви опори", "50 клека", "5 набирания"] },
      { level: 15, title: "По средата на месеца",    smoke: "Рискът от инфекция намалява с подобряването на имунната функция.", alcohol: "Теглото се стабилизира — алкохолът има стотици празни калории.", exercises: ["20 лицеви опори", "60 клека", "8 набирания"] },
      { level: 16, title: "Дълбоко дъх",             smoke: "Дишането по време на упражнения е забележимо по-лесно.", alcohol: "Паметта и концентрацията се изострят ден след ден.", exercises: ["25 лицеви опори", "70 клека", "10 набирания"] },
      { level: 17, title: "Герой на сърцето",        smoke: "Сърдечната честота се нормализира. Сърцето ти е под по-малко стрес.", alcohol: "Отношенията се подобряват. Алкохолът наранява и хората, които обичаме.", exercises: ["30 лицеви опори", "80 клека", "12 набирания"] },
      { level: 18, title: "Сияние на кожата",        smoke: "Кожата започва да свети с подобряването на кръвотока.", alcohol: "Кожата е по-чиста и по-хидратирана. Алкохолът те изсушаваше.", exercises: ["35 лицеви опори", "90 клека", "15 набирания"] },
      { level: 19, title: "Почти 3 седмици",         smoke: "Раздразнителността от никотиновото отнемане избледнява.", alcohol: "Доказваш на себе си, че имаш истински контрол. Това е силно.", exercises: ["40 лицеви опори", "100 клека", "20 набирания"] },
      { level: 20, title: "Легенда на 20-ия ден",    smoke: "20 дни! Физическите желания са значително намалели.", alcohol: "20 дни без алкохол. Чернодробните ти ензими се нормализират.", exercises: ["45 лицеви опори", "110 клека", "25 набирания"] },
      { level: 21, title: "Шампион на 3 седмици",    smoke: "3 седмици — навиците отнемат 21 дни, за да се счупят. Ти го счупи.", alcohol: "3 седмици чист. Науката казва, че навиците започват да се пренастройват на 21 дни.", exercises: ["50 лицеви опори", "130 клека", "30 набирания"] },
      { level: 22, title: "Мощ на белите дробове",   smoke: "Белодробният капацитет продължава да расте. Упражненията стават по-лесни.", alcohol: "Емоционалната регулация се подобрява. Алкохолът вцепеняваше чувствата, не ги решаваше.", exercises: ["бягане 3 км", "60 лицеви опори", "35 набирания"] },
      { level: 23, title: "Спестени пари",            smoke: "Преброй спестените пари. Използвай ги за нещо важно.", alcohol: "Преброй спестените пари от алкохол. Натрупват се до стотици.", exercises: ["бягане 4 км", "70 лицеви опори", "40 набирания"] },
      { level: 24, title: "Социална сила",            smoke: "Социалните ситуации без цигари се чувстват по-естествени.", alcohol: "Можеш да се забавляваш без алкохол. Личността ти никога не е била в бутилката.", exercises: ["75 лицеви опори", "150 клека", "20 набирания", "йога сесия"] },
      { level: 25, title: "Четвърт от пътя",          smoke: "25 дни. Четвърт от пътуването е направено. Продължи.", alcohol: "25 дни трезвен. Ти си в топ процента на хората, опитали се.", exercises: ["HIIT: 5 рунда по 20 сек спринт + 40 сек почивка", "80 лицеви опори", "50 клека"] },
      { level: 26, title: "По-дълбок сън",            smoke: "Качеството на съня се е подобрило драстично.", alcohol: "Дълбокият сън е възстановен. Мозъкът ти се поправя всяка нощ.", exercises: ["бягане 5 км", "90 лицеви опори", "2 мин планк", "йога"] },
      { level: 27, title: "Имунен щит",               smoke: "Имунната система е значително по-силна.", alcohol: "Тялото ти се бори по-добре с болести. Алкохолът беше врагът на имунната ти система.", exercises: ["бягане 5.5 км", "100 лицеви опори", "25 набирания"] },
      { level: 28, title: "Титан на 4 седмици",       smoke: "4 седмици без цигари. Рискът от сърдечни заболявания вече е по-нисък.", alcohol: "4 седмици без алкохол. Истинско постижение, до което повечето хора не стигат.", exercises: ["бягане 6.5 км", "110 лицеви опори", "30 набирания"] },
      { level: 29, title: "Почти месец",               smoke: "Още един ден до пълен месец. Почти си там.", alcohol: "Още един ден до пълен месец. Инерцията е на твоя страна.", exercises: ["бягане 7 км", "120 лицеви опори", "35 набирания"] },
      { level: 30, title: "Господар на 30 дни",       smoke: "30 ДНИ БЕЗ ЦИГАРИ. Белите ти дробове функционират като тези на непушач.", alcohol: "30 ДНИ БЕЗ АЛКОХОЛ. Това е крайъгълен камък, с който милиони се борят.", exercises: ["бягане 8 км", "150 лицеви опори", "50 набирания", "силова сесия"] },
      { level: 31, title: "Повече от месец",           smoke: "Над месец. Това вече е твоята нова идентичност.", alcohol: "Над месец. Трезвеността се превръща в това, което си.", exercises: ["бягане 9 км", "160 лицеви опори", "40 набирания"] },
      { level: 32, title: "Счупвач на навици",        smoke: "Навикът е счупен. Остава изборът — и ти продължаваш да избираш правилно.", alcohol: "Навикът е счупен. Всеки ден вече е избор, който печелиш.", exercises: ["бягане 10 км", "170 лицеви опори", "45 набирания"] },
      { level: 33, title: "Богат на кислород",        smoke: "Нивата на кислород в кръвта ти са напълно нормализирани.", alcohol: "Органите ти получават пълен кислород в кръвта. Алкохолът намаляваше това.", exercises: ["HIIT: 10 рунда по 30 сек спринт + 30 сек почивка", "180 лицеви опори", "150 клека"] },
      { level: 34, title: "Нервен растеж",            smoke: "Нервните окончания продължават да се регенерират. Усещането се подобрява.", alcohol: "Нервните увреждания от алкохола бавно се обръщат.", exercises: ["бягане 10.5 км", "190 лицеви опори", "50 набирания"] },
      { level: 35, title: "5 седмици силен",          smoke: "5 седмици. Желанията вече са редки и управляеми.", alcohol: "5 седмици трезвен. Изгради нещо истинско.", exercises: ["бягане 11 км", "200 лицеви опори", "55 набирания"] },
      { level: 36, title: "Ясен ум",                  smoke: "Умствената мъгла от никотина е изчезнала. Мисли ясно.", alcohol: "Мозъчната мъгла се вдига. Алкохолът тъпеше най-острото ти оръжие — ума.", exercises: ["бягане 12 км", "210 лицеви опори", "60 набирания"] },
      { level: 37, title: "Защитник на сърцето",      smoke: "Рискът от сърдечни заболявания продължава да пада всеки ден.", alcohol: "Здравето на сърцето се подобрява. Алкохолът причинява сърдечни увреждания.", exercises: ["бягане 13.5 км", "220 лицеви опори", "200 клека"] },
      { level: 38, title: "Катерач на белите дробове", smoke: "Качвай стълби без задух. Усети разликата.", alcohol: "Физическата издръжливост се гради. Тялото ти има повече гориво.", exercises: ["бягане 13.5 км", "230 лицеви опори", "70 набирания"] },
      { level: 39, title: "Почти 40",                 smoke: "Близо до 40 дни. Изгради изключителна сила на волята.", alcohol: "Близо до 40 дни. Ти си в рядка компания.", exercises: ["бягане 14.5 км", "240 лицеви опори", "2:30 планк"] },
      { level: 40, title: "Воин на 40 дни",           smoke: "40 дни без цигари. Кръвообращението е драматично подобрено.", alcohol: "40 дни трезвен. Черният ти дроб е направил забележителен напредък.", exercises: ["бягане 15 км", "250 лицеви опори", "80 набирания"] },
      { level: 41, title: "Герой на 6 седмици",       smoke: "6 седмици. Тялото ти се е фундаментално променило.", alcohol: "6 седмици без алкохол. Мозъкът ти се е фундаментално променил.", exercises: ["бягане 16 км", "260 лицеви опори", "250 клека"] },
      { level: 42, title: "Майстор на вкуса",         smoke: "Храната никога не е имала толкова добър вкус. Наслади се на всяко хранене.", alcohol: "Апетитът се нормализира. Алкохолът нарушаваше хормоните на глада.", exercises: ["бягане 17 км", "270 лицеви опори", "90 набирания"] },
      { level: 43, title: "Победител на кожата",      smoke: "Бръчките омекват. Кожата е по-пълна и хидратирана.", alcohol: "Кожата свети. Алкохолът причинява преждевременно стареене — ти го обръщаш.", exercises: ["бягане 17.5 км", "280 лицеви опори", "3 мин планк"] },
      { level: 44, title: "Борец срещу стреса",       smoke: "Справяш се с стреса без никотин. Ти си по-силен.", alcohol: "Справяш се с стреса без алкохол. Това е истинска сила.", exercises: ["бягане 18.5 км", "300 лицеви опори", "100 набирания"] },
      { level: 45, title: "Гигант на 45 дни",         smoke: "45 дни. Почти по средата. Най-трудното е зад теб.", alcohol: "45 дни. Почти по средата на 100-дневното предизвикателство.", exercises: ["бягане 19 км", "310 лицеви опори", "300 клека"] },
      { level: 46, title: "Скоро по средата",         smoke: "Още 4 дни до средата. Ускори.", alcohol: "Още 4 дни до 50. Виждаш го оттук.", exercises: ["HIIT: 15 рунда по 30 сек спринт + 30 сек почивка"] },
      { level: 47, title: "Дълбок лечител",           smoke: "Дълбоката белодробна тъкан продължава да зараства.", alcohol: "Дълбокото чернодробно възстановяване продължава всяка нощ, в която спиш трезвен.", exercises: ["бягане 20 км", "320 лицеви опори", "110 набирания"] },
      { level: 48, title: "Пик на енергията",         smoke: "Нивата на енергия са на най-висока точка от началото.", alcohol: "Енергията достига връх, докато тялото ти работи чисто.", exercises: ["бягане 21 км", "330 лицеви опори", "3:30 планк"] },
      { level: 49, title: "Навечерие на 50",          smoke: "Утре е ден 50. Ти си изключителен.", alcohol: "Утре е ден 50. Повечето хора не стигат дотук. Ти стигна.", exercises: ["бягане 22 км", "340 лицеви опори", "120 набирания"] },
      { level: 50, title: "ЛЕГЕНДА НА ПОЛОВИНАТА",    smoke: "50 ДНИ БЕЗ ЦИГАРИ. Направи нещо невероятно. Рискът от инсулт е наполовина на пушач.", alcohol: "50 ДНИ БЕЗ АЛКОХОЛ. Черният ти дроб е 50% възстановен. По средата си.", exercises: ["бягане 22.5 км", "350 лицеви опори", "125 набирания", "3 мин планк"] },
      { level: 51, title: "Втората половина",         smoke: "Втората половина започва. Знаеш, че можеш да го направиш.", alcohol: "Втората половина започва. Доказа, че можеш да го направиш.", exercises: ["HIIT: 15 рунда по 40 сек спринт + 20 сек почивка", "300 клека"] },
      { level: 52, title: "Имунен шампион",           smoke: "Имунната ти система вече е толкова силна, колкото тази на непушач.", alcohol: "Имунната функция е напълно възстановена.", exercises: ["бягане 23 км", "360 лицеви опори", "130 набирания"] },
      { level: 53, title: "Белодробен капацитет",     smoke: "Белодробният капацитет е на най-висока точка досега.", alcohol: "Здравето на белите дробове се подобрява — алкохолът засяга и дишането.", exercises: ["бягане 24 км", "370 лицеви опори", "350 клека"] },
      { level: 54, title: "Сърдечен щит",             smoke: "Рискът от коронарна артериална болест намалява значително.", alcohol: "Кръвното налягане е в здравословни граници. Сърцето работи ефективно.", exercises: ["бягане 25 км", "380 лицеви опори", "140 набирания"] },
      { level: 55, title: "Титан на 55 дни",          smoke: "55 дни. Изгради нов живот.", alcohol: "55 дни. Новият ти трезвен живот се превръща в твой истински живот.", exercises: ["бягане 25.5 км", "390 лицеви опори", "400 клека"] },
      { level: 56, title: "Легенда на 8 седмици",     smoke: "8 седмици без цигари. Повечето бивши пушачи сочат това като повратна точка.", alcohol: "8 седмици трезвен. Мозъчната ти химия е до голяма степен балансирана.", exercises: ["HIIT: 20 рунда по 40 сек спринт + 20 сек почивка", "4 мин планк"] },
      { level: 57, title: "Остър фокус",              smoke: "Умственият фокус е изострен без никотин.", alcohol: "Когнитивната функция е възстановена. Алкохолът краде остротата ти.", exercises: ["бягане 26.5 км", "400 лицеви опори", "150 набирания"] },
      { level: 58, title: "Социална свобода",         smoke: "Социалните тригери за пушене са загубили силата си.", alcohol: "Натискът за социална употреба на алкохол се отскача от теб. Ти си здрав.", exercises: ["бягане 27 км", "410 лицеви опори", "серия планински катерачи"] },
      { level: 59, title: "Почти 60",                 smoke: "Още един ден до 60. Ти си неудържим.", alcohol: "Още един ден до 60. Нищо не може да те спре.", exercises: ["бягане 28 км", "420 лицеви опори", "160 набирания"] },
      { level: 60, title: "Шампион на 60 дни",        smoke: "60 ДНИ. Тялото ти е претърпяло трансформация.", alcohol: "60 ДНИ ТРЕЗВЕН. Два пълни месеца на избор в твоя полза.", exercises: ["бягане 29 км", "450 лицеви опори", "500 клека"] },
      { level: 61, title: "Нова норма",               smoke: "Непушенето е твоята нова норма. Прегърни я.", alcohol: "Трезвеността е твоята нова норма. Подхожда ти добре.", exercises: ["HIIT: 20 рунда по 45 сек спринт + 15 сек почивка", "4:30 планк"] },
      { level: 62, title: "Завръщане на мириса",      smoke: "Обонянието ти е напълно възстановено.", alcohol: "Сетивата са напълно изострени. Животът е по-ярък трезвен.", exercises: ["бягане 30 км", "460 лицеви опори", "170 набирания"] },
      { level: 63, title: "9 седмици силен",          smoke: "9 седмици. Белите ти дробове са зараснали повече, отколкото знаеш.", alcohol: "9 седмици. Тялото ти е зараснало повече, отколкото знаеш.", exercises: ["бягане 30.5 км", "470 лицеви опори", "напреднала йога"] },
      { level: 64, title: "Елитно кръвообращение",    smoke: "Кръвообращението е толкова добро, колкото на доживотен непушач.", alcohol: "Кръвотокът е оптимален. Всеки орган се възползва.", exercises: ["бягане 31 км", "480 лицеви опори", "180 набирания"] },
      { level: 65, title: "Гигант на 65 дни",         smoke: "65 дни на избор на здравето пред навика.", alcohol: "65 дни на избор на яснота пред бягство.", exercises: ["бягане 32 км", "500 лицеви опори", "550 клека"] },
      { level: 66, title: "Намален риск от рак",      smoke: "Рискът от рак на устата, гърлото и хранопровода се преполовява.", alcohol: "Рискът от ракови заболявания, свързани с алкохол, намалява значително.", exercises: ["HIIT: 25 рунда по 45 сек спринт + 15 сек почивка", "5 мин планк"] },
      { level: 67, title: "Герой на 10 седмици",      smoke: "10 седмици без цигари. Крайъгълен камък, достоен за отбелязване.", alcohol: "10 седмици трезвен. Отпразнувай — заслужил си го.", exercises: ["бягане 33 км", "520 лицеви опори", "190 набирания"] },
      { level: 68, title: "Елит на белите дробове",   smoke: "Белодробната функция се доближава до тази на доживотен непушач.", alcohol: "Органите ти работят на най-доброто си ниво от години.", exercises: ["бягане 34 км", "530 лицеви опори", "колоездене или плуване"] },
      { level: 69, title: "Почти 70",                 smoke: "Още един ден до 70. Изминал си толкова дълъг път.", alcohol: "Още един ден до 70. Финалната линия е видима.", exercises: ["бягане 34.5 км", "540 лицеви опори", "200 набирания"] },
      { level: 70, title: "Легенда на 70 дни",        smoke: "70 ДНИ. Промени живота си.", alcohol: "70 ДНИ ТРЕЗВЕН. Истински промени живота си.", exercises: ["бягане 35 км", "550 лицеви опори", "600 клека"] },
      { level: 71, title: "Силен ум",                 smoke: "Психологическата зависимост от никотина почти е изчезнала.", alcohol: "Психологическата зависимост от алкохола избледнява. Ти си свободен.", exercises: ["HIIT: 25 рунда по 45 сек спринт + 15 сек почивка", "5:30 планк"] },
      { level: 72, title: "Победител за сърцето",     smoke: "Рискът от инфаркт е наполовина на пушач.", alcohol: "Сърдечното здраве е отлично. Продължи да го пазиш.", exercises: ["бягане 36 км", "560 лицеви опори", "210 набирания"] },
      { level: 73, title: "Почти 11 седмици",         smoke: "Наближаваш 11 седмици. Последователността е твоята суперсила.", alcohol: "Наближаваш 11 седмици. Последователността ти е забележителна.", exercises: ["бягане 37 км", "570 лицеви опори", "катерене"] },
      { level: 74, title: "Дълбоко възстановяване",   smoke: "ДНК поправката в клетките на белите дробове се ускорява.", alcohol: "Регенерацията на чернодробните клетки е в пълен ход.", exercises: ["бягане 38 км", "580 лицеви опори", "650 клека"] },
      { level: 75, title: "Титан на 75 дни",          smoke: "75 дни. Три четвърти готово. Ти си изключителен.", alcohol: "75 дни. Три четвърти от предизвикателството завършено.", exercises: ["бягане 38.5 км", "600 лицеви опори", "220 набирания"] },
      { level: 76, title: "Последното тримесечие",    smoke: "Финалният участък започва. Не спирай сега.", alcohol: "Финален участък. Толкова близо до 100.", exercises: ["HIIT: 30 рунда по 50 сек спринт + 10 сек почивка", "700 клека"] },
      { level: 77, title: "Щастливото 77",            smoke: "Щастливото 77. Пази серията си жива.", alcohol: "Щастливото 77. Серията ти е твоята сила.", exercises: ["бягане 39.5 км", "620 лицеви опори", "230 набирания"] },
      { level: 78, title: "Крал на издръжливостта",   smoke: "Физическата ти издръжливост съперничи на непушач.", alcohol: "Физическата и умствена издръжливост са на върха.", exercises: ["бягане 40 км", "640 лицеви опори", "сесия колоездене"] },
      { level: 79, title: "Почти 80",                 smoke: "Още един ден до 80. Почти си там.", alcohol: "Още един ден до 80. Не отпускай сега.", exercises: ["бягане 41 км", "660 лицеви опори", "240 набирания"] },
      { level: 80, title: "Господар на 80 дни",       smoke: "80 ДНИ БЕЗ ЦИГАРИ. Истинска житейска трансформация.", alcohol: "80 ДНИ ТРЕЗВЕН. Повечето хора никога не стигат до тук. Ти стигна.", exercises: ["бягане 42 км", "700 лицеви опори", "6 мин планк"] },
      { level: 81, title: "Нов ти",                  smoke: "Ти не си човекът, който пушеше. Ти си нов.", alcohol: "Ти не си този, който беше на ден 1. Ти си нов.", exercises: ["HIIT: 30 рунда по 50 сек спринт + 10 сек почивка", "800 клека"] },
      { level: 82, title: "Защитник срещу рака",     smoke: "Рискът от рак на белите дробове намалява всеки ден.", alcohol: "Рискът от рак на черния дроб намалява всеки ден.", exercises: ["бягане 42.5 км", "720 лицеви опори", "250 набирания"] },
      { level: 83, title: "Почти 12 седмици",        smoke: "Наближаваш 12 седмици. Три месеца на хоризонта.", alcohol: "Наближаваш 12 седмици. Три месеца на хоризонта.", exercises: ["бягане 43.5 км", "740 лицеви опори", "йога сесия"] },
      { level: 84, title: "Гигант на 12 седмици",    smoke: "12 седмици — 3 пълни месеца без цигари. Забележително.", alcohol: "12 седмици — 3 пълни месеца без алкохол. Забележително.", exercises: ["бягане 44 км", "760 лицеви опори", "260 набирания"] },
      { level: 85, title: "Герой на 85 дни",         smoke: "85 дни. Навикът е спомен. Ти си победителят.", alcohol: "85 дни. Зависимостта е спомен. Ти си победителят.", exercises: ["бягане 45 км", "800 лицеви опори", "900 клека"] },
      { level: 86, title: "Победа на жизнените показатели", smoke: "Всички жизнени показатели вече съответстват на здрав непушач.", alcohol: "Всички жизнени показатели вече съответстват на здрав непиещ.", exercises: ["HIIT: 35 рунда по 55 сек спринт + 5 сек почивка", "6:30 планк"] },
      { level: 87, title: "Почти 13 седмици",        smoke: "Наближаваш 13 седмици. Ангажираността ти е вдъхновяваща.", alcohol: "Наближаваш 13 седмици. Ти си вдъхновение.", exercises: ["бягане 46 км", "820 лицеви опори", "270 набирания"] },
      { level: 88, title: "Легенда на 88 дни",       smoke: "88 дни. Изгради несъкрушима идентичност.", alcohol: "88 дни. Трезвената ти идентичност е непоклатима.", exercises: ["бягане 46.5 км", "840 лицеви опори", "плуване или колоездене"] },
      { level: 89, title: "Почти 90",                smoke: "Още един ден до 90. Последното натискане е тук.", alcohol: "Още един ден до 90. Дай всичко от себе си.", exercises: ["бягане 47.5 км", "860 лицеви опори", "280 набирания"] },
      { level: 90, title: "ТИТАН НА 90 ДНИ",         smoke: "90 ДНИ БЕЗ ЦИГАРИ. Ти си в топ 1% от хората, опитали се да откажат.", alcohol: "90 ДНИ ТРЕЗВЕН. Направи нещо, за което повечето хора само мечтаят.", exercises: ["бягане 48 км", "900 лицеви опори", "7 мин планк"] },
      { level: 91, title: "Последните 10",           smoke: "Остават 10 дни. Не спирай сега. Завърши каквото си започнал.", alcohol: "Остават 10 дни. Финалната линия е точно там.", exercises: ["HIIT: 40 рунда по 55 сек спринт + 5 сек почивка", "1000 клека"] },
      { level: 92, title: "92 дни силен",            smoke: "92 дни на избор на живот пред цигарата.", alcohol: "92 дни на избор на яснота пред бягство.", exercises: ["бягане 49 км", "920 лицеви опори", "290 набирания"] },
      { level: 93, title: "Остава една седмица",     smoke: "Остава една седмица. Спринт до финала.", alcohol: "Остава една седмица. Спринт до финала.", exercises: ["бягане 50 км", "950 лицеви опори", "йога или разтягане"] },
      { level: 94, title: "Шампион на 94 дни",       smoke: "94 дни. Белите ти дробове са по-чисти, отколкото са били от години.", alcohol: "94 дни. Черният ти дроб е по-чист, отколкото е бил от години.", exercises: ["бягане 50.5 км", "980 лицеви опори", "300 набирания"] },
      { level: 95, title: "Остават 5 дни",           smoke: "5 дни до 100. Усещаш финалната линия.", alcohol: "5 дни до 100. Усещаш финалната линия.", exercises: ["бягане 51.5 км", "1000 лицеви опори", "7:30 планк"] },
      { level: 96, title: "Воин на 96 дни",          smoke: "96 дни. Почти там. Не мигай.", alcohol: "96 дни. Почти там. Не мигай.", exercises: ["HIIT: 40 рунда по 1 мин спринт + почивка", "310 набирания"] },
      { level: 97, title: "Остават 3 дни",           smoke: "3 дни. Вече си спечелил. Просто продължавай.", alcohol: "3 дни. Вече си спечелил. Просто продължавай.", exercises: ["бягане 52 км", "1020 лицеви опори", "1000 клека"] },
      { level: 98, title: "Остават 2 дни",           smoke: "2 дни. Ще завършиш това. Винаги беше така.", alcohol: "2 дни. Ще завършиш това. Винаги беше така.", exercises: ["бягане 53 км", "сесия за възстановяване или лека йога"] },
      { level: 99, title: "Навечерие на финала",     smoke: "Утре е ден 100. На прага си да завършиш нещо, което повечето хора никога не правят.", alcohol: "Утре е ден 100. На прага си да завършиш нещо, което повечето хора никога не правят.", exercises: ["бягане 54 км", "1050 лицеви опори", "320 набирания"] },
      { level: 100, title: "ШАМПИОН НА 100 ДНИ",     smoke: "100 ДНИ БЕЗ ЦИГАРИ. Трансформира живота си. Рискът от рак на белите дробове е преполовен. Сърцето е по-здраво. Ти си свободен.", alcohol: "100 ДНИ БЕЗ АЛКОХОЛ. Трансформира живота си. Черният дроб е оздравял. Умът е ясен. Ти си напълно свободен.", exercises: ["ТЪРЖЕСТВО НА ПОБЕДАТА", "Отпразнувай триумфа си", "Размисли върху невероятната си трансформация"] },
    ],
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

// ── Get the LEVELS array in the current language ──────────
// Use this instead of the hardcoded LEVELS constant in app.js
function getLevels() {
  const lang = getCurrentLanguage();
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang].levelsData)
    ? TRANSLATIONS[lang].levelsData
    : TRANSLATIONS.en.levelsData;
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