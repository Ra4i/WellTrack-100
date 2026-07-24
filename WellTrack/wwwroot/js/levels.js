/* ================================================================
   levels.js — 100 Progressive Levels for WellTrack 100
   Each level has: level, title, smoke, alcohol, exercises[]
   Exercises scale with app.js difficulty system automatically.
   ================================================================ */

function applyLevelsTranslations() {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (key) {
      el.textContent = t(key);
    }
  });
}

function getLevels() {
  const lang = (typeof getCurrentLanguage === 'function') ? getCurrentLanguage() : 'bg';

  const levels = [
    // ── WEEK 1 — Days 1–7: First Steps ──────────────────────────
    {
      level: 1,
      title:   lang === 'en' ? 'First Step'          : 'Първата стъпка',
      smoke:   lang === 'en'
        ? 'The first 24 hours are the hardest. Your heart rate and blood pressure are already dropping. You did it!'
        : 'Първите 24 часа са най-трудни. Кръвното ти налягане вече спада. Направи го!',
      alcohol: lang === 'en'
        ? 'One day without alcohol — your liver is already starting to recover. That\'s real progress!'
        : 'Един ден без алкохол — черният ти дроб вече започва да се възстановява. Това е истински напредък!',
      exercises: ['10 бавни клякания', '5 лицеви опори (на колене е ок)', '1 минута дълбоко дишане']
    },
    {
      level: 2,
      title:   lang === 'en' ? 'Building Momentum'   : 'Набиране на скорост',
      smoke:   lang === 'en'
        ? 'Carbon monoxide is leaving your blood. Your oxygen levels are rising. Feel that energy!'
        : 'Въглеродният окис напуска кръвта ти. Нивата на кислород растат. Усети тази енергия!',
      alcohol: lang === 'en'
        ? 'Day 2 sober — sleep is already improving. Your brain chemistry is rebalancing itself.'
        : 'Ден 2 трезвен — сънят вече се подобрява. Мозъкът ти се балансира отново.',
      exercises: ['15 клякания', '8 лицеви опори', '20 секунди планк']
    },
    {
      level: 3,
      title:   lang === 'en' ? 'Breathing Easier'    : 'По-лесно дишане',
      smoke:   lang === 'en'
        ? 'Your sense of smell and taste are beginning to return. Small victories every hour!'
        : 'Обонянието и вкусът ти започват да се връщат. Малки победи всеки час!',
      alcohol: lang === 'en'
        ? 'Day 3 — the hardest physical withdrawal phase is passing. You are incredibly strong!'
        : 'Ден 3 — най-трудната физическа фаза минава. Ти си невероятно силен!',
      exercises: ['20 клякания', '10 лицеви опори', '30 секунди планк']
    },
    {
      level: 4,
      title:   lang === 'en' ? 'Growing Stronger'    : 'Ставаш по-силен',
      smoke:   lang === 'en'
        ? 'Nicotine is nearly gone from your system. Cravings are about habit now — and habits can be changed!'
        : 'Никотинът почти е напуснал тялото ти. Желанията вече са навик — а навиците можем да променим!',
      alcohol: lang === 'en'
        ? 'Your hydration levels are improving. Skin looks better. Energy is returning!'
        : 'Хидратацията ти се подобрява. Кожата изглежда по-добре. Енергията се завръща!',
      exercises: ['25 клякания', '10 лицеви опори', '40 секунди планк', '10 коремни преси']
    },
    {
      level: 5,
      title:   lang === 'en' ? 'Five Days Strong'    : 'Пет дни силен',
      smoke:   lang === 'en'
        ? 'Five days! Your lung capacity is already increasing. Every breath is healing.'
        : 'Пет дни! Капацитетът на белите ти дробове вече нараства. Всяко вдишване лекува.',
      alcohol: lang === 'en'
        ? 'Five days sober! Mental clarity is improving. Your mind is sharper than it\'s been in a long time.'
        : 'Пет дни трезвен! Умственото ти яснота се подобрява. Умът ти е по-остър от дълго насам.',
      exercises: ['30 клякания', '12 лицеви опори', '45 секунди планк', '15 коремни преси']
    },
    {
      level: 6,
      title:   lang === 'en' ? 'Almost a Week'       : 'Почти седмица',
      smoke:   lang === 'en'
        ? 'Your cilia are regrowing — tiny hairs that clean your lungs. Healing is happening right now!'
        : 'Ресничките в белите ти дробове се възстановяват — те изчистват токсините. Лечението се случва сега!',
      alcohol: lang === 'en'
        ? 'Almost a week! Anxiety and irritability are starting to subside. The storm is passing.'
        : 'Почти седмица! Тревожността и раздразнителността започват да отшумяват. Бурята отминава.',
      exercises: ['30 клякания', '15 лицеви опори', '50 секунди планк', '15 коремни преси']
    },
    {
      level: 7,
      title:   lang === 'en' ? 'One Full Week!'      : 'Цяла седмица!',
      smoke:   lang === 'en'
        ? 'ONE WEEK smoke-free! Your risk of heart attack is already dropping. You are a champion!'
        : 'ЦЯЛА СЕДМИЦА без цигари! Рискът от инфаркт вече спада. Ти си шампион!',
      alcohol: lang === 'en'
        ? 'One full week sober! Celebrate this milestone — you\'ve broken the daily habit cycle!'
        : 'Цяла седмица трезвен! Отпразнувай — счупил си ежедневния цикъл на навика!',
      exercises: ['35 клякания', '15 лицеви опори', '1 минута планк', '20 коремни преси']
    },

    // ── WEEK 2 — Days 8–14 ──────────────────────────────────────
    {
      level: 8,
      title:   lang === 'en' ? 'New Week, New Power' : 'Нова седмица, нова сила',
      smoke:   lang === 'en'
        ? 'Week 2 begins! Your circulation is improving — hands and feet are warmer now.'
        : 'Втората седмица започва! Кръвообращението ти се подобрява — ръцете и краката ти са по-топли.',
      alcohol: lang === 'en'
        ? 'Week 2! Your liver enzymes are normalizing. The body is healing faster than you think!'
        : 'Втора седмица! Чернодробните ензими се нормализират. Тялото се лекува по-бързо, отколкото мислиш!',
      exercises: ['35 клякания', '15 лицеви опори', '1 минута планк', '20 коремни преси', '10 напади напред']
    },
    {
      level: 9,
      title:   lang === 'en' ? 'Forming New Habits'  : 'Нови навици',
      smoke:   lang === 'en'
        ? 'Replace every smoking moment with a healthy habit. Walk, stretch, drink water — reprogram yourself!'
        : 'Замени всеки момент за цигара с здравословен навик. Разходи се, разтегни се, пий вода!',
      alcohol: lang === 'en'
        ? 'Find your triggers and plan around them. Awareness is the most powerful tool you have.'
        : 'Открий тригерите си и планирай около тях. Осъзнатостта е най-мощният ти инструмент.',
      exercises: ['40 клякания', '18 лицеви опори', '1 минута планк', '20 коремни преси', '12 напади напред']
    },
    {
      level: 10,
      title:   lang === 'en' ? '10 Days — Milestone!' : '10 Дни — Важен момент!',
      smoke:   lang === 'en'
        ? '10 days! Double digits! Your lungs are visibly healing. Keep going — the best is ahead!'
        : '10 дни! Двуцифрено число! Белите ти дробове видимо се лекуват. Продължавай — най-доброто предстои!',
      alcohol: lang === 'en'
        ? '10 days sober is huge! Your mood stability is improving day by day. You are doing this!'
        : '10 дни трезвен е огромно! Стабилността на настроението ти се подобрява всеки ден. Ти го правиш!',
      exercises: ['40 клякания', '20 лицеви опори', '1.5 минути планк', '25 коремни преси', '15 напади напред']
    },
    {
      level: 11,
      title:   lang === 'en' ? 'Getting Easier'      : 'Става по-лесно',
      smoke:   lang === 'en'
        ? 'Cravings are shorter and less frequent now. Your brain is rewiring. Trust the process!'
        : 'Желанията са по-кратки и по-редки. Мозъкът ти се пренастройва. Доверявай се на процеса!',
      alcohol: lang === 'en'
        ? 'Social situations feel more manageable. You are proving to yourself that sober is powerful!'
        : 'Социалните ситуации стават по-управляеми. Доказваш си, че трезвостта е мощна!',
      exercises: ['45 клякания', '20 лицеви опори', '1.5 минути планк', '25 коремни преси', '15 напади']
    },
    {
      level: 12,
      title:   lang === 'en' ? 'Sleep is Better'     : 'По-добър сън',
      smoke:   lang === 'en'
        ? 'Your sleep quality is improving. No more waking up for nicotine. Rest and recover!'
        : 'Качеството на съня ти се подобрява. Вече не се събуждаш заради никотин. Почивай и се възстановявай!',
      alcohol: lang === 'en'
        ? 'Deep sleep is returning. Without alcohol suppressing REM sleep, dreams are vivid and rest is real.'
        : 'Дълбокият сън се завръща. Без алкохол, потискащ REM съня, почивката е истинска.',
      exercises: ['45 клякания', '22 лицеви опори', '1.5 минути планк', '30 коремни преси', '20 напади']
    },
    {
      level: 13,
      title:   lang === 'en' ? 'Two Weeks Coming Up' : 'Две седмици наближават',
      smoke:   lang === 'en'
        ? 'Almost two weeks! Your blood circulation has dramatically improved. Feel the difference!'
        : 'Почти две седмици! Кръвообращението ти се е подобрило драматично. Усети разликата!',
      alcohol: lang === 'en'
        ? 'Almost two weeks sober! You have resisted more than you know. Every NO is a victory.'
        : 'Почти две седмици трезвен! Устоял си повече, отколкото осъзнаваш. Всяко НЕ е победа.',
      exercises: ['50 клякания', '22 лицеви опори', '2 минути планк', '30 коремни преси', '20 напади']
    },
    {
      level: 14,
      title:   lang === 'en' ? 'Two Weeks!'          : 'Две седмици!',
      smoke:   lang === 'en'
        ? 'TWO WEEKS! Lung function has improved by up to 10%. You are genuinely healing!'
        : 'ДВЕ СЕДМИЦИ! Функцията на белите дробове се е подобрила с до 10%. Истински се лекуваш!',
      alcohol: lang === 'en'
        ? 'TWO WEEKS! Your brain chemistry is significantly more balanced. Emotions are stabilizing.'
        : 'ДВЕ СЕДМИЦИ! Мозъчната ти химия е значително по-балансирана. Емоциите се стабилизират.',
      exercises: ['50 клякания', '25 лицеви опори', '2 минути планк', '30 коремни преси', '20 напади', '10 бурпита']
    },

    // ── WEEK 3 — Days 15–21 ─────────────────────────────────────
    {
      level: 15,
      title:   lang === 'en' ? 'Week 3 Warrior'      : 'Воин на 3-та седмица',
      smoke:   lang === 'en'
        ? 'Week 3! The psychological cravings will peak this week — but you\'ve already beaten the physical ones!'
        : 'Трета седмица! Психологическите желания ще достигнат върха си тази седмица — но физическите вече победи!',
      alcohol: lang === 'en'
        ? 'Week 3 sober! Your concentration is sharper. Completing tasks feels easier. You are on fire!'
        : 'Трета седмица трезвен! Концентрацията ти е по-остра. Задачите се изпълняват по-лесно. Браво!',
      exercises: ['55 клякания', '25 лицеви опори', '2 минути планк', '35 коремни преси', '25 напади', '10 бурпита']
    },
    {
      level: 16,
      title:   lang === 'en' ? 'Mind Over Matter'    : 'Умът над материята',
      smoke:   lang === 'en'
        ? 'Every craving you beat makes the next one weaker. Your willpower is literally growing!'
        : 'Всяко победено желание прави следващото по-слабо. Волята ти буквално расте!',
      alcohol: lang === 'en'
        ? 'Your liver is significantly less inflamed. Blood tests are improving silently inside you.'
        : 'Черният ти дроб е значително по-малко възпален. Кръвните показатели се подобряват тихо.',
      exercises: ['55 клякания', '28 лицеви опори', '2 минути планк', '35 коремни преси', '25 напади', '12 бурпита']
    },
    {
      level: 17,
      title:   lang === 'en' ? 'Feeling the Change'  : 'Усещаш промяната',
      smoke:   lang === 'en'
        ? 'You can breathe deeper than a month ago. Stairs feel easier. Your body is saying thank you!'
        : 'Дишаш по-дълбоко от преди месец. Стълбите стават по-лесни. Тялото ти казва благодаря!',
      alcohol: lang === 'en'
        ? 'Your face looks less puffy. Eyes are clearer. People around you can see the difference too!'
        : 'Лицето ти изглежда по-малко подуто. Очите са по-ясни. Хората около теб също виждат разликата!',
      exercises: ['60 клякания', '28 лицеви опори', '2.5 минути планк', '35 коремни преси', '30 напади', '12 бурпита']
    },
    {
      level: 18,
      title:   lang === 'en' ? 'Saving Money'        : 'Спестяваш пари',
      smoke:   lang === 'en'
        ? 'Count how much money you\'ve saved! Cigarettes are expensive — your wallet is healing too!'
        : 'Преброй колко пари си спестил! Цигарите са скъпи — портфейлът ти също се лекува!',
      alcohol: lang === 'en'
        ? 'Think of the money you\'ve saved on alcohol. Reward yourself with something meaningful!'
        : 'Помисли за парите, спестени от алкохол. Награди се с нещо смислено!',
      exercises: ['60 клякания', '30 лицеви опори', '2.5 минути планк', '40 коремни преси', '30 напади', '15 бурпита']
    },
    {
      level: 19,
      title:   lang === 'en' ? 'Stronger Every Day'  : 'По-силен всеки ден',
      smoke:   lang === 'en'
        ? 'Your immune system is stronger. You\'ll get sick less often. Your body is fighting for you!'
        : 'Имунната ти система е по-силна. Ще се разболяваш по-рядко. Тялото ти се бори за теб!',
      alcohol: lang === 'en'
        ? 'Your immune system is recovering rapidly. Alcohol suppressed it — now it\'s fighting back!'
        : 'Имунната ти система се възстановява бързо. Алкохолът я потискаше — сега тя се завръща!',
      exercises: ['65 клякания', '30 лицеви опори', '2.5 минути планк', '40 коремни преси', '30 напади', '15 бурпита']
    },
    {
      level: 20,
      title:   lang === 'en' ? '20 Days — Incredible!' : '20 Дни — Невероятно!',
      smoke:   lang === 'en'
        ? '20 days! You have avoided hundreds of cigarettes. That\'s hundreds of victories stacked up!'
        : '20 дни! Избегнал си стотици цигари. Това са стотици наредени победи!',
      alcohol: lang === 'en'
        ? '20 days sober! You\'ve made it through the toughest phase. Now comes the rewarding part!'
        : '20 дни трезвен! Преминал си през най-трудната фаза. Сега идва наградата!',
      exercises: ['65 клякания', '32 лицеви опори', '3 минути планк', '40 коремни преси', '35 напади', '15 бурпита']
    },
    {
      level: 21,
      title:   lang === 'en' ? 'Three Weeks Done!'   : 'Три седмици готово!',
      smoke:   lang === 'en'
        ? 'THREE WEEKS! Research shows cravings significantly reduce after 21 days. You\'re over the hardest hill!'
        : 'ТРИ СЕДМИЦИ! Изследванията показват, че желанията значително намаляват след 21 дни. Мина върха!',
      alcohol: lang === 'en'
        ? 'Three weeks is a proven habit-breaking milestone. Your new normal is taking shape!'
        : 'Три седмици е доказан праг за счупване на навика. Новото ти нормално се оформя!',
      exercises: ['70 клякания', '32 лицеви опори', '3 минути планк', '45 коремни преси', '35 напади', '18 бурпита']
    },

    // ── MONTH 1 — Days 22–30 ────────────────────────────────────
    {
      level: 22,
      title:   lang === 'en' ? 'Finding Your Rhythm' : 'Намираш ритъма си',
      smoke:   lang === 'en'
        ? 'You have a rhythm now. Morning without a cigarette feels normal. Keep building on this!'
        : 'Вече имаш ритъм. Сутринта без цигара се чувства нормално. Продължавай да надграждаш!',
      alcohol: lang === 'en'
        ? 'Social drinking situations are becoming easier to navigate. Your confidence is growing!'
        : 'Социалните ситуации с алкохол стават по-лесни за управление. Самочувствието ти расте!',
      exercises: ['70 клякания', '35 лицеви опори', '3 минути планк', '45 коремни преси', '35 напади', '18 бурпита']
    },
    {
      level: 23,
      title:   lang === 'en' ? 'Investing in Health'  : 'Инвестираш в здраве',
      smoke:   lang === 'en'
        ? 'Every smoke-free day is an investment in a longer, healthier life. The returns are enormous!'
        : 'Всеки ден без цигари е инвестиция в по-дълъг, по-здравословен живот. Ползите са огромни!',
      alcohol: lang === 'en'
        ? 'Your brain\'s reward system is recalibrating. Natural pleasures are becoming more enjoyable again!'
        : 'Системата за награди на мозъка ти се рекалибрира. Естествените удоволствия отново стават приятни!',
      exercises: ['75 клякания', '35 лицеви опори', '3 минути планк', '50 коремни преси', '40 напади', '20 бурпита']
    },
    {
      level: 24,
      title:   lang === 'en' ? 'Identity Shift'      : 'Смяна на идентичността',
      smoke:   lang === 'en'
        ? 'You are no longer a smoker who is quitting — you are a non-smoker. Own that identity!'
        : 'Вече не си пушач, който се отказва — ти си непушач. Притежавай тази идентичност!',
      alcohol: lang === 'en'
        ? 'You are becoming someone who doesn\'t need alcohol to enjoy life. That is freedom!'
        : 'Ставаш човек, който не се нуждае от алкохол, за да се наслаждава на живота. Това е свобода!',
      exercises: ['75 клякания', '38 лицеви опори', '3.5 минути планк', '50 коремни преси', '40 напади', '20 бурпита']
    },
    {
      level: 25,
      title:   lang === 'en' ? 'Quarter Century!'    : 'Четвърт сто!',
      smoke:   lang === 'en'
        ? '25 days! A quarter of the challenge complete! You have proven you can do this. Now go further!'
        : '25 дни! Четвърт от предизвикателството! Доказал си, че можеш. Сега върви по-далеч!',
      alcohol: lang === 'en'
        ? '25 days sober! Your energy levels are noticeably higher. You\'re getting your life back!'
        : '25 дни трезвен! Нивата на енергия са забележимо по-високи. Получаваш живота си обратно!',
      exercises: ['80 клякания', '38 лицеви опори', '3.5 минути планк', '50 коремни преси', '40 напади', '22 бурпита']
    },
    {
      level: 26,
      title:   lang === 'en' ? 'Lungs Clearing'      : 'Дробовете се изчистват',
      smoke:   lang === 'en'
        ? 'Phlegm is reducing. You\'re coughing less. That\'s your lungs cleaning themselves out!'
        : 'Слузта намалява. Кашляш по-малко. Белите ти дробове се самопочистват!',
      alcohol: lang === 'en'
        ? 'Blood pressure has normalized. Your heart is working more efficiently every single day.'
        : 'Кръвното налягане се е нормализирало. Сърцето ти работи по-ефективно всеки ден.',
      exercises: ['80 клякания', '40 лицеви опори', '3.5 минути планк', '55 коремни преси', '45 напади', '22 бурпита']
    },
    {
      level: 27,
      title:   lang === 'en' ? 'Pride and Progress'  : 'Гордост и прогрес',
      smoke:   lang === 'en'
        ? 'Are you proud of yourself? You should be! Not everyone has what it takes. You do.'
        : 'Гордееш ли се със себе си? Трябва да го правиш! Не всеки притежава необходимото. Ти го имаш.',
      alcohol: lang === 'en'
        ? 'Your relationships are improving. You show up more present, more reliable. People notice!'
        : 'Отношенията ти се подобряват. Присъстваш повече, по-надежден си. Хората забелязват!',
      exercises: ['85 клякания', '40 лицеви опори', '4 минути планк', '55 коремни преси', '45 напади', '25 бурпита']
    },
    {
      level: 28,
      title:   lang === 'en' ? 'Almost One Month'    : 'Почти един месец',
      smoke:   lang === 'en'
        ? 'Almost a full month! Your risk of smoking-related diseases is already decreasing!'
        : 'Почти цял месец! Рискът от болести, свързани с тютюнопушенето, вече намалява!',
      alcohol: lang === 'en'
        ? 'Almost a month! Your pancreas is healing. Digestion is improving. Body systems are recovering.'
        : 'Почти месец! Панкреасът ти се лекува. Храносмилането се подобрява. Системите на тялото се възстановяват.',
      exercises: ['85 клякания', '42 лицеви опори', '4 минути планк', '60 коремни преси', '45 напади', '25 бурпита']
    },
    {
      level: 29,
      title:   lang === 'en' ? 'Last Day of Month 1' : 'Последен ден на месец 1',
      smoke:   lang === 'en'
        ? 'Tomorrow marks one month! Your lungs have removed significant amounts of tar already!'
        : 'Утре е един месец! Белите ти дробове вече са премахнали значителни количества катран!',
      alcohol: lang === 'en'
        ? 'Tomorrow is one month sober! Your liver has begun substantial regeneration. You\'ve done the hard part!'
        : 'Утре е един месец трезвен! Черният ти дроб е started значителна регенерация. Свърши трудната работа!',
      exercises: ['90 клякания', '42 лицеви опори', '4 минути планк', '60 коремни преси', '50 напади', '25 бурпита']
    },
    {
      level: 30,
      title:   lang === 'en' ? 'ONE MONTH! 🎉'       : 'ЕДИН МЕСЕЦ! 🎉',
      smoke:   lang === 'en'
        ? 'ONE MONTH SMOKE-FREE! Lung function has improved 30%! You are a completely different person already!'
        : 'ЕДИН МЕСЕЦ БЕЗ ЦИГАРИ! Функцията на белите дробове е подобрена с 30%! Вече си напълно различен човек!',
      alcohol: lang === 'en'
        ? 'ONE MONTH SOBER! Your liver has regenerated significantly. Brain fog is gone. You are thriving!'
        : 'ЕДИН МЕСЕЦ ТРЕЗВЕН! Черният ти дроб се е регенерирал значително. Мозъчната мъгла е изчезнала. Процъфтяваш!',
      exercises: ['90 клякания', '45 лицеви опори', '4 минути планк', '60 коремни преси', '50 напади', '30 бурпита']
    },

    // ── MONTH 2 — Days 31–60 ────────────────────────────────────
    {
      level: 31,
      title:   lang === 'en' ? 'Month 2 Begins'      : 'Месец 2 започва',
      smoke:   lang === 'en'
        ? 'Month 2 starts now! The cravings are manageable. You have the tools to beat every single one.'
        : 'Месец 2 стартира! Желанията са управляеми. Имаш инструментите да победиш всяко едно от тях.',
      alcohol: lang === 'en'
        ? 'Month 2 begins! Your emotional regulation is dramatically better. Life feels more even.'
        : 'Месец 2 започва! Емоционалната ти регулация е драматично по-добра. Животът се чувства по-равен.',
      exercises: ['90 клякания', '45 лицеви опори', '4 минути планк', '65 коремни преси', '50 напади', '30 бурпита']
    },
    {
      level: 32,
      title:   lang === 'en' ? 'Taste & Smell Return' : 'Вкус и обоняние се връщат',
      smoke:   lang === 'en'
        ? 'Food tastes incredible now, doesn\'t it? Your taste buds have fully regenerated. Enjoy every meal!'
        : 'Храната вкусва невероятно сега, нали? Вкусовите рецептори са напълно регенерирани. Насладиш на всяко ястие!',
      alcohol: lang === 'en'
        ? 'Your appetite is normalized. Nutrition absorption has improved significantly. Body is thriving!'
        : 'Апетитът ти е нормализиран. Усвояването на хранителни вещества се е подобрило значително.',
      exercises: ['95 клякания', '45 лицеви опори', '4.5 минути планк', '65 коремни преси', '55 напади', '30 бурпита']
    },
    {
      level: 33,
      title:   lang === 'en' ? 'Energy Surge'        : 'Прилив на енергия',
      smoke:   lang === 'en'
        ? 'Feel that energy? Without carbon monoxide stealing your oxygen, your stamina is surging!'
        : 'Усещаш ли тази енергия? Без въглероден окис, крадящ кислорода ти, издръжливостта ти расте!',
      alcohol: lang === 'en'
        ? 'Without alcohol draining your B vitamins, energy levels are soaring. You feel more alive!'
        : 'Без алкохол, изчерпващ витамините ти, нивата на енергия се издигат. Чувстваш се по-жив!',
      exercises: ['95 клякания', '48 лицеви опори', '4.5 минути планк', '70 коремни преси', '55 напади', '32 бурпита']
    },
    {
      level: 34,
      title:   lang === 'en' ? 'Social Confidence'   : 'Социална увереност',
      smoke:   lang === 'en'
        ? 'No more stepping outside for cigarettes. No more cigarette smell. You fit everywhere now!'
        : 'Не повече излизане навън за цигари. Не повече миризма на цигари. Сега се вписваш навсякъде!',
      alcohol: lang === 'en'
        ? 'Conversations without alcohol feel more authentic. Your true personality shines through!'
        : 'Разговорите без алкохол се чувстват по-автентични. Истинската ти личност блести!',
      exercises: ['100 клякания', '48 лицеви опори', '4.5 минути планк', '70 коремни преси', '55 напади', '32 бурпита']
    },
    {
      level: 35,
      title:   lang === 'en' ? '35 Days — Unstoppable' : '35 Дни — Неспираем',
      smoke:   lang === 'en'
        ? '35 days! You have saved a significant amount of money. What will you spend it on?'
        : '35 дни! Спестил си значителна сума. За какво ще я похарчиш?',
      alcohol: lang === 'en'
        ? '35 days sober! Your kidneys are functioning better. You\'re urinating less frequently at night.'
        : '35 дни трезвен! Бъбреците ти функционират по-добре. Ставаш по-рядко нощем.',
      exercises: ['100 клякания', '50 лицеви опори', '5 минути планк', '70 коремни преси', '60 напади', '35 бурпита']
    },
    {
      level: 36,
      title:   lang === 'en' ? 'Mental Clarity'      : 'Умствена яснота',
      smoke:   lang === 'en'
        ? 'Think clearer. Focus longer. Without nicotine spikes and crashes, your brain works better!'
        : 'Мислиш по-ясно. Фокусираш се по-дълго. Без никотинови пикове и спадове, мозъкът ти работи по-добре!',
      alcohol: lang === 'en'
        ? 'Your memory is sharpening. Alcohol damaged short-term memory — it\'s rebuilding itself now!'
        : 'Паметта ти се изостря. Алкохолът уврежда краткосрочната памет — тя се възстановява сега!',
      exercises: ['100 клякания', '50 лицеви опори', '5 минути планк', '75 коремни преси', '60 напади', '35 бурпита']
    },
    {
      level: 37,
      title:   lang === 'en' ? 'You Inspire Others'  : 'Вдъхновяваш другите',
      smoke:   lang === 'en'
        ? 'People around you notice. You might be inspiring someone to quit without even knowing it!'
        : 'Хората около теб забелязват. Може би вдъхновяваш някого да се откаже, без дори да знаеш!',
      alcohol: lang === 'en'
        ? 'Your discipline is contagious. Others look at you and believe they can do it too!'
        : 'Дисциплината ти е заразна. Другите гледат към теб и вярват, че и те могат!',
      exercises: ['105 клякания', '50 лицеви опори', '5 минути планк', '75 коремни преси', '60 напади', '35 бурпита']
    },
    {
      level: 38,
      title:   lang === 'en' ? 'Stronger Lungs'      : 'По-силни бели дробове',
      smoke:   lang === 'en'
        ? 'Lung capacity continues to grow. Exercise feels easier. You are genuinely fitter now!'
        : 'Капацитетът на белите дробове продължава да расте. Упражненията стават по-лесни. Наистина си по-fit!',
      alcohol: lang === 'en'
        ? 'Your cardiovascular system is improving. Heart rate is more regular and efficient.'
        : 'Сърдечно-съдовата ти система се подобрява. Сърдечният ритъм е по-редовен и ефективен.',
      exercises: ['105 клякания', '52 лицеви опори', '5 минути планк', '80 коремни преси', '65 напади', '38 бурпита']
    },
    {
      level: 39,
      title:   lang === 'en' ? 'Habit Stack Master'  : 'Майстор на навиците',
      smoke:   lang === 'en'
        ? 'You\'ve replaced a bad habit with many good ones. That\'s habit stacking — and you\'re a master!'
        : 'Заменил си лош навик с много добри. Това е набиране на навици — и ти си майстор!',
      alcohol: lang === 'en'
        ? 'Morning routines feel natural now. Starting the day clear-headed is your new superpower!'
        : 'Сутрешните рутини се чувстват естествени. Започването на деня с ясна глава е новата ти суперсила!',
      exercises: ['105 клякания', '52 лицеви опори', '5.5 минути планк', '80 коремни преси', '65 напади', '38 бурпита']
    },
    {
      level: 40,
      title:   lang === 'en' ? '40 Days — Phenomenal!' : '40 Дни — Феноменално!',
      smoke:   lang === 'en'
        ? '40 days smoke-free! You\'ve avoided over 800 cigarettes. Think about that number for a moment!'
        : '40 дни без цигари! Избегнал си над 800 цигари. Помисли за това число за момент!',
      alcohol: lang === 'en'
        ? '40 days sober! Your willpower muscle is stronger than ever. You can handle anything!'
        : '40 дни трезвен! Мускулът на волята ти е по-силен от всякога. Можеш да се справиш с всичко!',
      exercises: ['110 клякания', '55 лицеви опори', '5.5 минути планк', '80 коремни преси', '65 напади', '40 бурпита']
    },
    {
      level: 41,
      title:   lang === 'en' ? 'New You Emerging'    : 'Нов ти се появява',
      smoke:   lang === 'en'
        ? 'Who are you becoming? Healthier, wealthier, more confident. The new you is emerging!'
        : 'Кой ставаш? По-здрав, по-богат, по-уверен. Новият ти се появява!',
      alcohol: lang === 'en'
        ? 'Your relationships are deeper. Presence matters more than numbing. Connection is everything!'
        : 'Отношенията ти са по-дълбоки. Присъствието е по-важно от вцепеняването. Свързаността е всичко!',
      exercises: ['110 клякания', '55 лицеви опори', '5.5 минути планк', '85 коремни преси', '70 напади', '40 бурпита']
    },
    {
      level: 42,
      title:   lang === 'en' ? 'Halfway to 3 Months' : 'Половин път до 3 месеца',
      smoke:   lang === 'en'
        ? 'Six weeks in! Cravings are now occasional blips, not constant battles. You\'ve won the war!'
        : 'Шест седмици! Желанията вече са случайни проблясъци, а не постоянни битки. Спечели войната!',
      alcohol: lang === 'en'
        ? 'Six weeks sober — your neurological healing is accelerating. Brain function is significantly restored!'
        : 'Шест седмици трезвен — неврологичното лечение се ускорява. Мозъчната функция е значително възстановена!',
      exercises: ['110 клякания', '58 лицеви опори', '6 минути планк', '85 коремни преси', '70 напади', '42 бурпита']
    },
    {
      level: 43,
      title:   lang === 'en' ? 'Consistency Champion' : 'Шампион на постоянството',
      smoke:   lang === 'en'
        ? 'Consistency is the key. You\'ve been consistent for 43 days. That\'s extraordinary!'
        : 'Постоянството е ключът. Бил си последователен 43 дни. Това е извънредно!',
      alcohol: lang === 'en'
        ? 'Consistent days lead to consistent weeks lead to a consistent life. You\'re building it!'
        : 'Последователните дни водят до последователни седмици водят до последователен живот. Ти го изграждаш!',
      exercises: ['115 клякания', '58 лицеви опори', '6 минути планк', '85 коремни преси', '70 напади', '42 бурпита']
    },
    {
      level: 44,
      title:   lang === 'en' ? 'Heart Health Soaring' : 'Здраве на сърцето',
      smoke:   lang === 'en'
        ? 'Your heart attack risk has dropped by over 50% compared to a heavy smoker. That is life-saving!'
        : 'Рискът ти от инфаркт е паднал с над 50% спрямо запален пушач. Това е животоспасяващо!',
      alcohol: lang === 'en'
        ? 'Your heart is working more efficiently with every passing day. Cardio feels so much better!'
        : 'Сърцето ти работи по-ефективно с всеки изминал ден. Кардиото се чувства много по-добре!',
      exercises: ['115 клякания', '60 лицеви опори', '6 минути планк', '90 коремни преси', '75 напади', '45 бурпита']
    },
    {
      level: 45,
      title:   lang === 'en' ? 'Almost Halfway!'     : 'Почти половината!',
      smoke:   lang === 'en'
        ? 'Nearly halfway through the 100-day challenge! You are unstoppable. Keep your momentum!'
        : 'Почти половината от 100-дневното предизвикателство! Ти си неудържим. Пази темпото си!',
      alcohol: lang === 'en'
        ? 'Almost halfway sober! What seemed impossible on Day 1 is now just your daily reality!'
        : 'Почти наполовина трезвен! Това, което изглеждаше невъзможно на Ден 1, сега е просто ежедневието ти!',
      exercises: ['115 клякания', '60 лицеви опори', '6 минути планк', '90 коремни преси', '75 напади', '45 бурпита']
    },
    {
      level: 46,
      title:   lang === 'en' ? 'New Routines Rock'   : 'Нови рутини работят',
      smoke:   lang === 'en'
        ? 'Your new routines are solid. Morning walks, water, deep breathing — these are your new cigarettes!'
        : 'Новите ти рутини са здрави. Сутрешни разходки, вода, дълбоко дишане — това са новите ти цигари!',
      alcohol: lang === 'en'
        ? 'Weekend sober feels normal now. You\'ve proven you can enjoy life fully without drinking!'
        : 'Трезвеният уикенд се чувства нормален. Доказал си, че можеш да се наслаждаваш на живота без пиене!',
      exercises: ['120 клякания', '60 лицеви опори', '6.5 минути планк', '90 коремни преси', '75 напади', '45 бурпита']
    },
    {
      level: 47,
      title:   lang === 'en' ? 'Discipline = Freedom' : 'Дисциплина = Свобода',
      smoke:   lang === 'en'
        ? 'True freedom is not needing a cigarette to feel okay. You have earned that freedom!'
        : 'Истинската свобода е да не се нуждаеш от цигара, за да се чувстваш добре. Ти заслужи тази свобода!',
      alcohol: lang === 'en'
        ? 'Real confidence doesn\'t come from a bottle — it comes from within. You\'ve found yours!'
        : 'Истинското самочувствие не идва от бутилката — идва отвътре. Намерил си своето!',
      exercises: ['120 клякания', '62 лицеви опори', '6.5 минути планк', '95 коремни преси', '80 напади', '48 бурпита']
    },
    {
      level: 48,
      title:   lang === 'en' ? 'Body Transformation' : 'Трансформация на тялото',
      smoke:   lang === 'en'
        ? 'Your body has been silently healing for 48 days. The transformation inside is immense!'
        : 'Тялото ти се лекува тихо от 48 дни. Трансформацията вътре е огромна!',
      alcohol: lang === 'en'
        ? 'Skin is clearer, eyes are brighter, weight may be normalizing. The outside reflects the inside!'
        : 'Кожата е по-чиста, очите са по-ясни, теглото може да се нормализира. Външното отразява вътрешното!',
      exercises: ['120 клякания', '62 лицеви опори', '6.5 минути планк', '95 коремни преси', '80 напади', '48 бурпита']
    },
    {
      level: 49,
      title:   lang === 'en' ? 'One Day to 50!'      : 'Един ден до 50!',
      smoke:   lang === 'en'
        ? 'Tomorrow is 50 days! Prepare to celebrate — you\'ve earned every bit of that milestone!'
        : 'Утре са 50 дни! Готви се да отпразнуваш — заслужил си всяка частица от тази важна дата!',
      alcohol: lang === 'en'
        ? 'Tomorrow is 50 days sober! Half a century of days. You are a completely different person!'
        : 'Утре са 50 дни трезвен! Половин сто дни. Ти си напълно различен човек!',
      exercises: ['125 клякания', '65 лицеви опори', '7 минути планк', '95 коремни преси', '80 напади', '48 бурпита']
    },
    {
      level: 50,
      title:   lang === 'en' ? 'HALFWAY! 50 Days! 🏆' : 'ПОЛОВИНАТА! 50 Дни! 🏆',
      smoke:   lang === 'en'
        ? '50 DAYS SMOKE-FREE! You are halfway! Your lungs have cleared dramatically. Your life has changed!'
        : '50 ДНИ БЕЗ ЦИГАРИ! Ти си на половината! Белите ти дробове са драматично изчистени. Животът ти се е променил!',
      alcohol: lang === 'en'
        ? '50 DAYS SOBER! Halfway! Your brain has significantly healed. You are the living proof it\'s possible!'
        : '50 ДНИ ТРЕЗВЕН! Половината! Мозъкът ти е значително излекуван. Ти си живото доказателство, че е възможно!',
      exercises: ['125 клякания', '65 лицеви опори', '7 минути планк', '100 коремни преси', '85 напади', '50 бурпита']
    },

    // ── MONTH 3 — Days 51–75 ────────────────────────────────────
    {
      level: 51,
      title:   lang === 'en' ? 'Second Half Begins'  : 'Втората половина започва',
      smoke:   lang === 'en'
        ? 'The second half begins and you\'re stronger than ever. Carry that momentum all the way!'
        : 'Втората половина започва и ти си по-силен от всякога. Носи това темпо до края!',
      alcohol: lang === 'en'
        ? 'Second half! The hardest days are behind you. Now you run toward the finish line!'
        : 'Втора половина! Най-трудните дни са зад теб. Сега тичаш към финала!',
      exercises: ['125 клякания', '65 лицеви опори', '7 минути планк', '100 коремни преси', '85 напади', '50 бурпита']
    },
    {
      level: 52,
      title:   lang === 'en' ? 'Unstoppable Force'   : 'Неудържима сила',
      smoke:   lang === 'en'
        ? 'Nothing can stop you now. Every day proves you are bigger than this addiction!'
        : 'Нищо не може да те спре сега. Всеки ден доказва, че си по-голям от тази зависимост!',
      alcohol: lang === 'en'
        ? 'You are an unstoppable force. The person who started Day 1 wouldn\'t recognize you now!'
        : 'Ти си неудържима сила. Човекът, започнал Ден 1, не би те познал сега!',
      exercises: ['130 клякания', '68 лицеви опори', '7 минути планк', '100 коремни преси', '85 напади', '52 бурпита']
    },
    {
      level: 53,
      title:   lang === 'en' ? 'Clear Head Champion' : 'Шампион с ясна глава',
      smoke:   lang === 'en'
        ? 'Your focus is remarkable. Tasks that seemed hard before now feel achievable and clear.'
        : 'Фокусът ти е забележителен. Задачите, изглеждали трудни преди, сега изглеждат постижими и ясни.',
      alcohol: lang === 'en'
        ? 'Waking up clear-headed every day is now your baseline. This is what healthy feels like!'
        : 'Събуждането с ясна глава всеки ден е вече твоят baseline. Ето как се чувства здравето!',
      exercises: ['130 клякания', '68 лицеви опори', '7.5 минути планк', '105 коремни преси', '90 напади', '52 бурпита']
    },
    {
      level: 54,
      title:   lang === 'en' ? 'Athletic You'        : 'Атлетичният ти',
      smoke:   lang === 'en'
        ? 'You can exercise longer without getting winded. Your lungs are performing at a new level!'
        : 'Можеш да тренираш по-дълго без да се задъхваш. Белите ти дробове работят на ново ниво!',
      alcohol: lang === 'en'
        ? 'Your body composition is improving. Alcohol stores fat differently — now your metabolism is efficient!'
        : 'Телесният ти състав се подобрява. Алкохолът съхранява мазнини по различен начин — сега метаболизмът ти е ефективен!',
      exercises: ['130 клякания', '70 лицеви опори', '7.5 минути планк', '105 коремни преси', '90 напади', '55 бурпита']
    },
    {
      level: 55,
      title:   lang === 'en' ? '55 Days of Power'    : '55 Дни на сила',
      smoke:   lang === 'en'
        ? '55 days! You\'ve proven that every day is a choice — and you keep choosing right!'
        : '55 дни! Доказал си, че всеки ден е избор — и ти продължаваш да избираш правилно!',
      alcohol: lang === 'en'
        ? '55 days sober! Over half a sober life has been lived. The momentum is all yours!'
        : '55 дни трезвен! Повече от половин трезвен живот е изживян. Темпото е изцяло твое!',
      exercises: ['135 клякания', '70 лицеви опори', '7.5 минути планк', '110 коремни преси', '90 напади', '55 бурпита']
    },
    {
      level: 56,
      title:   lang === 'en' ? 'Your Future is Bright' : 'Бъдещето ти е светло',
      smoke:   lang === 'en'
        ? 'Visualize yourself 5 years from now — healthier, wealthier, prouder. You\'re already on that path!'
        : 'Представи си себе си след 5 години — по-здрав, по-богат, по-горд. Вече си по този път!',
      alcohol: lang === 'en'
        ? 'The future version of you is grateful for every sober day you\'re living right now!'
        : 'Бъдещата версия на теб е благодарна за всеки трезвен ден, който живееш сега!',
      exercises: ['135 клякания', '72 лицеви опори', '8 минути планк', '110 коремни преси', '95 напади', '55 бурпита']
    },
    {
      level: 57,
      title:   lang === 'en' ? 'Detox Complete'      : 'Детоксификацията завършена',
      smoke:   lang === 'en'
        ? 'Your body has fully detoxed from nicotine and tobacco chemicals. You are clean!'
        : 'Тялото ти е напълно детоксикирано от никотин и тютюневи химикали. Ти си чист!',
      alcohol: lang === 'en'
        ? 'Your body has cleared the physical toxins. The psychological work continues — and you\'re winning!'
        : 'Тялото ти е изчистило физическите токсини. Психологическата работа продължава — и ти печелиш!',
      exercises: ['135 клякания', '72 лицеви опори', '8 минути планк', '110 коремни преси', '95 напади', '58 бурпита']
    },
    {
      level: 58,
      title:   lang === 'en' ? 'Role Model'          : 'Ролеви модел',
      smoke:   lang === 'en'
        ? 'You are now a role model for everyone around you. Your example is more powerful than words!'
        : 'Ти вече си ролеви модел за всички около теб. Твоят пример е по-мощен от думите!',
      alcohol: lang === 'en'
        ? 'People see your transformation and it gives them hope. Your journey matters beyond yourself!'
        : 'Хората виждат трансформацията ти и тя им дава надежда. Пътуването ти има значение отвъд теб!',
      exercises: ['140 клякания', '75 лицеви опори', '8 минути планк', '115 коремни преси', '95 напади', '58 бурпита']
    },
    {
      level: 59,
      title:   lang === 'en' ? 'Two Months Coming!'  : 'Два месеца наближават!',
      smoke:   lang === 'en'
        ? 'Two months smoke-free is almost here! Your lung capacity is near its full recovery!'
        : 'Два месеца без цигари е почти тук! Капацитетът на белите ти дробове е близо до пълно възстановяване!',
      alcohol: lang === 'en'
        ? 'Almost two months sober! Your kidney function has dramatically improved. Body is thriving!'
        : 'Почти два месеца трезвен! Бъбречната функция е драматично подобрена. Тялото процъфтява!',
      exercises: ['140 клякания', '75 лицеви опори', '8.5 минути планк', '115 коремни преси', '100 напади', '60 бурпита']
    },
    {
      level: 60,
      title:   lang === 'en' ? 'TWO MONTHS! 🌟'      : 'ДВА МЕСЕЦА! 🌟',
      smoke:   lang === 'en'
        ? 'TWO MONTHS SMOKE-FREE! The risk of several cancers is already reduced. You are saving your life!'
        : 'ДВА МЕСЕЦА БЕЗ ЦИГАРИ! Рискът от няколко вида рак вече е намален. Спасяваш живота си!',
      alcohol: lang === 'en'
        ? 'TWO MONTHS SOBER! Your liver has regenerated by over 60%. You are a medical miracle!'
        : 'ДВА МЕСЕЦА ТРЕЗВЕН! Черният ти дроб е регенериран с над 60%. Ти си медицинско чудо!',
      exercises: ['140 клякания', '75 лицеви опори', '8.5 минути планк', '120 коремни преси', '100 напади', '60 бурпита']
    },

    // ── FINAL STRETCH — Days 61–100 ─────────────────────────────
    {
      level: 61,
      title:   lang === 'en' ? 'Final Stretch Starts' : 'Финалното отсечение',
      smoke:   lang === 'en'
        ? '40 days to go! You can see the finish line. Sprint toward it — you\'ve earned this!'
        : '40 дни до края! Виждаш финала. Спринтирай към него — заслужил си го!',
      alcohol: lang === 'en'
        ? 'Final stretch! The person who completes this will be unrecognizable from who you were on Day 1!'
        : 'Финално отсечение! Човекът, завършил това, ще бъде неузнаваем от Ден 1!',
      exercises: ['145 клякания', '78 лицеви опори', '8.5 минути планк', '120 коремни преси', '100 напади', '62 бурпита']
    },
    {
      level: 62,
      title:   lang === 'en' ? 'No Going Back'       : 'Няма връщане назад',
      smoke:   lang === 'en'
        ? 'There is no going back now. You\'ve come too far to quit. Push forward!'
        : 'Вече няма връщане назад. Изминал си прекалено много, за да се откажеш. Напред!',
      alcohol: lang === 'en'
        ? 'You\'ve built something precious — don\'t let one bad moment tear it down. Protect your progress!'
        : 'Изгради нещо ценно — не позволявай на един лош момент да го разруши. Защити прогреса си!',
      exercises: ['145 клякания', '78 лицеви опори', '9 минути планк', '120 коремни преси', '105 напади', '62 бурпита']
    },
    {
      level: 63,
      title:   lang === 'en' ? 'Deep Healing'        : 'Дълбоко лечение',
      smoke:   lang === 'en'
        ? 'Deep cellular healing is happening. Your DNA is repairing smoking damage. Science is on your side!'
        : 'Дълбоко клетъчно лечение се случва. ДНК-то ти поправя щетите от пушенето. Науката е на твоя страна!',
      alcohol: lang === 'en'
        ? 'Deep neurological healing is occurring. Pathways damaged by alcohol are regrowing. You\'re healing!'
        : 'Дълбоко неврологично лечение се извършва. Пътеките, увредени от алкохола, прерастват. Лекуваш се!',
      exercises: ['145 клякания', '80 лицеви опори', '9 минути планк', '125 коремни преси', '105 напади', '65 бурпита']
    },
    {
      level: 64,
      title:   lang === 'en' ? 'Running Strong'      : 'Тичаш силно',
      smoke:   lang === 'en'
        ? 'Can you run further than before? Try it! Your lungs will surprise you with their capacity!'
        : 'Можеш ли да тичаш по-далеч от преди? Опитай! Белите ти дробове ще те изненадат с капацитета им!',
      alcohol: lang === 'en'
        ? 'Physical endurance is at a new high. Without alcohol taxing your system, performance soars!'
        : 'Физическата издръжливост е на ново ниво. Без алкохол, облагащ системата ти, представянето расте!',
      exercises: ['150 клякания', '80 лицеви опори', '9 минути планк', '125 коремни преси', '105 напади', '65 бурпита']
    },
    {
      level: 65,
      title:   lang === 'en' ? '65 Days — Elite!'    : '65 Дни — Елит!',
      smoke:   lang === 'en'
        ? '65 days! Only a tiny percentage of people make it this far. You are elite!'
        : '65 дни! Само малък процент от хората стигат дотук. Ти си елит!',
      alcohol: lang === 'en'
        ? '65 days sober — you belong to a very special group of people. Wear that with pride!'
        : '65 дни трезвен — принадлежиш към много специална група хора. Носи това с гордост!',
      exercises: ['150 клякания', '82 лицеви опори', '9.5 минути планк', '130 коремни преси', '110 напади', '68 бурпита']
    },
    {
      level: 66,
      title:   lang === 'en' ? 'Gratitude Mode'      : 'Режим на благодарност',
      smoke:   lang === 'en'
        ? 'Be grateful for every breath. Your lungs are a gift — and you\'re finally treating them like one!'
        : 'Бъди благодарен за всяко дихание. Белите ти дробове са дар — и накрая се отнасяш с тях така!',
      alcohol: lang === 'en'
        ? 'Be grateful for every clear morning. Every sober sunset. Every authentic connection. It\'s all yours now!'
        : 'Бъди благодарен за всяка ясна сутрин. Всеки трезвен залез. Всяка автентична връзка. Всичко е твое сега!',
      exercises: ['150 клякания', '82 лицеви опори', '9.5 минути планк', '130 коремни преси', '110 напади', '68 бурпита']
    },
    {
      level: 67,
      title:   lang === 'en' ? 'Powerhouse'          : 'Електроцентрала',
      smoke:   lang === 'en'
        ? 'Your body is a powerhouse now — fueled by clean air and healthy habits instead of addiction!'
        : 'Тялото ти е електроцентрала сега — захранвана от чист въздух и здравословни навици вместо зависимост!',
      alcohol: lang === 'en'
        ? 'Your mind is a powerhouse — clear, focused, and unfogged by alcohol for over two months!'
        : 'Умът ти е електроцентрала — ясен, фокусиран и незамъглен от алкохол вече над два месеца!',
      exercises: ['155 клякания', '85 лицеви опори', '9.5 минути планк', '130 коремни преси', '110 напади', '70 бурпита']
    },
    {
      level: 68,
      title:   lang === 'en' ? 'Breathing Champion'  : 'Шампион на дишането',
      smoke:   lang === 'en'
        ? 'Take a deep breath. Fill your lungs completely. Feel that? That\'s what health feels like!'
        : 'Поеми дълбоко дъх. Напълни белите дробове напълно. Чувстваш ли го? Ето как се чувства здравето!',
      alcohol: lang === 'en'
        ? 'Your breathing during sleep has normalized. No more alcohol-induced sleep apnea disruptions!'
        : 'Дишането ти по време на сън се е нормализирало. Не повече нарушения от алкохолна сънна апнея!',
      exercises: ['155 клякания', '85 лицеви опори', '10 минути планк', '135 коремни преси', '115 напади', '70 бурпита']
    },
    {
      level: 69,
      title:   lang === 'en' ? 'Almost 70!'          : 'Почти 70!',
      smoke:   lang === 'en'
        ? 'Almost 70 days! You\'re in the top tier of people who attempt this. Extraordinary!'
        : 'Почти 70 дни! Ти си сред горните нива на хората, опитващи се с това. Извънредно!',
      alcohol: lang === 'en'
        ? 'Nearly 70 days sober! Your neural pathways have significantly rewired. You are stronger!'
        : 'Почти 70 дни трезвен! Невронните ти пътеки са значително преначертани. Ти си по-силен!',
      exercises: ['155 клякания', '88 лицеви опори', '10 минути планк', '135 коремни преси', '115 напади', '72 бурпита']
    },
    {
      level: 70,
      title:   lang === 'en' ? '70 Days — Legend!'   : '70 Дни — Легенда!',
      smoke:   lang === 'en'
        ? '70 DAYS! You are a legend. Your body, your wallet, your relationships — all dramatically better!'
        : '70 ДНИ! Ти си легенда. Тялото ти, портфейлът ти, отношенията ти — всичко е драматично по-добро!',
      alcohol: lang === 'en'
        ? '70 DAYS SOBER! You are a LEGEND. The brain healing at this stage is truly remarkable!'
        : '70 ДНИ ТРЕЗВЕН! Ти си ЛЕГЕНДА. Мозъчното лечение на този етап е наистина забележително!',
      exercises: ['160 клякания', '88 лицеви опори', '10 минути планк', '140 коремни преси', '120 напади', '75 бурпита']
    },
    {
      level: 71,
      title:   lang === 'en' ? 'Home Stretch'        : 'Финална права',
      smoke:   lang === 'en'
        ? 'You are in the home stretch! 30 days to a completely new life. Dig deep and finish strong!'
        : 'Ти си в финалната права! 30 дни до напълно нов живот. Влез дълбоко и завърши силно!',
      alcohol: lang === 'en'
        ? 'Home stretch! 30 more days and you will have reset your entire relationship with alcohol!'
        : 'Финална права! Още 30 дни и ще си рестартирал цялата си връзка с алкохола!',
      exercises: ['160 клякания', '90 лицеви опори', '10 минути планк', '140 коремни преси', '120 напади', '75 бурпита']
    },
    {
      level: 72,
      title:   lang === 'en' ? 'Superhuman Willpower' : 'Свръхчовешка воля',
      smoke:   lang === 'en'
        ? 'The willpower you\'ve built is extraordinary. This skill transfers to every area of your life!'
        : 'Волята, която си изградил, е извънредна. Това умение се прехвърля към всяка сфера на живота ти!',
      alcohol: lang === 'en'
        ? 'Your willpower is superhuman now. Challenges that seemed impossible are now routine for you!'
        : 'Волята ти е свръхчовешка сега. Предизвикателства, изглеждали невъзможни, са вече рутина за теб!',
      exercises: ['160 клякания', '90 лицеви опори', '10 минути планк', '145 коремни преси', '125 напади', '78 бурпита']
    },
    {
      level: 73,
      title:   lang === 'en' ? 'Peak Performance'    : 'Пикова производителност',
      smoke:   lang === 'en'
        ? 'You are performing at a level you haven\'t seen in years — possibly ever. Peak you is here!'
        : 'Изпълняваш се на ниво, което не си виждал от години — може би никога. Пиковият ти е тук!',
      alcohol: lang === 'en'
        ? 'Cognitive performance is at its peak. Memory, focus, creativity — all operating at full capacity!'
        : 'Когнитивното представяне е на върха. Памет, фокус, креативност — всичко работи с пълен капацитет!',
      exercises: ['165 клякания', '92 лицеви опори', '10 минути планк', '145 коремни преси', '125 напади', '78 бурпита']
    },
    {
      level: 74,
      title:   lang === 'en' ? 'Three Quarters Done!' : 'Три четвърти готово!',
      smoke:   lang === 'en'
        ? '75% of the challenge complete! Three quarters done! The finish line is within sight now!'
        : '75% от предизвикателството завършено! Три четвърти готово! Финалът е вече видим!',
      alcohol: lang === 'en'
        ? 'Three quarters of the way to 100 sober days! You are doing something truly remarkable!'
        : 'Три четвърти от пътя към 100 трезвени дни! Правиш нещо наистина забележително!',
      exercises: ['165 клякания', '92 лицеви опори', '10 минути планк', '150 коремни преси', '130 напади', '80 бурпита']
    },
    {
      level: 75,
      title:   lang === 'en' ? '75 Days — PHENOMENAL' : '75 Дни — ФЕНОМЕНАЛЕН',
      smoke:   lang === 'en'
        ? '75 DAYS! You are phenomenal. Three-quarters to freedom — keep going with everything you have!'
        : '75 ДНИ! Ти си феноменален. Три четвърти към свободата — продължавай с всичко, което имаш!',
      alcohol: lang === 'en'
        ? '75 DAYS SOBER! PHENOMENAL! Your liver is operating near normal function. You\'ve done the work!'
        : '75 ДНИ ТРЕЗВЕН! ФЕНОМЕНАЛЕН! Черният ти дроб работи почти нормално. Свършил си работата!',
      exercises: ['165 клякания', '95 лицеви опори', '10 минути планк', '150 коремни преси', '130 напади', '80 бурпита']
    },
    {
      level: 76,
      title:   lang === 'en' ? 'Last 25 Days!'       : 'Последните 25 дни!',
      smoke:   lang === 'en'
        ? 'Only 25 days remain! Every cigarette you didn\'t smoke is a gift to your future self!'
        : 'Само 25 дни остават! Всяка цигара, която не запали, е подарък за бъдещия ти аз!',
      alcohol: lang === 'en'
        ? '25 days left! Picture yourself on Day 100 — healthy, proud, free. Run toward that person!'
        : '25 дни останали! Представи си себе си на Ден 100 — здрав, горд, свободен. Тичай към него!',
      exercises: ['170 клякания', '95 лицеви опори', '10 минути планк', '150 коремни преси', '130 напади', '82 бурпита']
    },
    {
      level: 77,
      title:   lang === 'en' ? 'Nearly Free'         : 'Почти свободен',
      smoke:   lang === 'en'
        ? 'You are nearly free from nicotine\'s grip forever. Just keep walking forward, one day at a time!'
        : 'Вече си почти свободен от хватката на никотина завинаги. Просто продължавай напред, ден по ден!',
      alcohol: lang === 'en'
        ? 'Freedom from alcohol dependency is nearly complete. You\'ve done the hard miles — sprint now!'
        : 'Свободата от алкохолната зависимост е почти завършена. Изминал си трудните километри — спринтирай сега!',
      exercises: ['170 клякания', '98 лицеви опори', '10 минути планк', '155 коремни преси', '135 напади', '82 бурпита']
    },
    {
      level: 78,
      title:   lang === 'en' ? 'Your Health Restored' : 'Здравето ти е възстановено',
      smoke:   lang === 'en'
        ? 'Your health has been substantially restored. Doctors would see the difference in your tests!'
        : 'Здравето ти е съществено възстановено. Лекарите биха видели разликата в анализите ти!',
      alcohol: lang === 'en'
        ? 'Your health is restored. Schedule a check-up and see your blood work — the numbers will amaze you!'
        : 'Здравето ти е възстановено. Запиши за преглед и виж кръвните си показатели — числата ще те изумят!',
      exercises: ['170 клякания', '98 лицеви опори', '10 минути планк', '155 коремни преси', '135 напади', '85 бурпита']
    },
    {
      level: 79,
      title:   lang === 'en' ? 'One More Push'       : 'Още един тласък',
      smoke:   lang === 'en'
        ? '79 days! One more push and you\'ll reach 80. And then 90. And then 100. You\'ve got this!'
        : '79 дни! Още един тласък и ще стигнеш 80. После 90. После 100. Можеш го!',
      alcohol: lang === 'en'
        ? '79 days! Close enough to taste 80. The final days will be your greatest victory yet!'
        : '79 дни! Достатъчно близо, за да усетиш 80. Последните дни ще бъдат най-голямата ти победа!',
      exercises: ['175 клякания', '100 лицеви опори', '10 минути планк', '155 коремни преси', '135 напади', '85 бурпита']
    },
    {
      level: 80,
      title:   lang === 'en' ? '80 Days — INCREDIBLE' : '80 Дни — НЕВЕРОЯТНО',
      smoke:   lang === 'en'
        ? '80 DAYS SMOKE-FREE! INCREDIBLE! You have transformed your health, your mind, and your identity!'
        : '80 ДНИ БЕЗ ЦИГАРИ! НЕВЕРОЯТНО! Трансформирал си здравето, ума и идентичността си!',
      alcohol: lang === 'en'
        ? '80 DAYS SOBER! INCREDIBLE! The new you is no longer a goal — it\'s a reality you\'re living!'
        : '80 ДНИ ТРЕЗВЕН! НЕВЕРОЯТНО! Новият ти вече не е цел — а реалност, която живееш!',
      exercises: ['175 клякания', '100 лицеви опори', '10 минути планк', '160 коремни преси', '140 напади', '88 бурпита']
    },
    {
      level: 81,
      title:   lang === 'en' ? 'Victory Lap'         : 'Обиколка на победата',
      smoke:   lang === 'en'
        ? '20 days to go. This is your victory lap. Enjoy every single remaining day — you earned them!'
        : '20 дни до края. Това е обиколката на победата. Насладиш на всеки останал ден — заслужи ги!',
      alcohol: lang === 'en'
        ? 'Victory lap time! 20 days left to cement a 100-day milestone that will define you forever!'
        : 'Обиколка на победата! 20 дни остават до 100-дневен milestone, който ще те дефинира завинаги!',
      exercises: ['175 клякания', '100 лицеви опори', '10 минути планк', '160 коремни преси', '140 напади', '88 бурпита']
    },
    {
      level: 82,
      title:   lang === 'en' ? 'Diamond Mindset'     : 'Диамантено мислене',
      smoke:   lang === 'en'
        ? 'Your mindset is diamond — formed under pressure, unbreakable. Nothing will take you back!'
        : 'Мисленето ти е диамантено — формирано под натиск, нечупливо. Нищо няма да те върне назад!',
      alcohol: lang === 'en'
        ? 'Diamond mindset forged over 82 days of choosing yourself. That strength is permanent!'
        : 'Диамантено мислене, ковано над 82 дни на избор за себе си. Тази сила е постоянна!',
      exercises: ['180 клякания', '100 лицеви опори', '10 минути планк', '165 коремни преси', '145 напади', '90 бурпита']
    },
    {
      level: 83,
      title:   lang === 'en' ? 'Evidence of Change'  : 'Доказателство за промяна',
      smoke:   lang === 'en'
        ? 'Look in the mirror. Look at your habits. Look at your energy. The evidence of change is everywhere!'
        : 'Погледни в огледалото. Погледни навиците си. Погледни енергията си. Доказателствата за промяна са навсякъде!',
      alcohol: lang === 'en'
        ? 'The evidence is undeniable — you are different. Better. Stronger. More yourself than ever!'
        : 'Доказателствата са неоспорими — ти си различен. По-добър. По-силен. По-ти от всякога!',
      exercises: ['180 клякания', '100 лицеви опори', '10 минути планк', '165 коремни преси', '145 напади', '90 бурпита']
    },
    {
      level: 84,
      title:   lang === 'en' ? '12 Weeks of Freedom' : '12 Седмици свобода',
      smoke:   lang === 'en'
        ? '12 full weeks smoke-free! Your body is essentially reset. You are breathing free!'
        : '12 пълни седмици без цигари! Тялото ти е основно рестартирано. Дишаш свободно!',
      alcohol: lang === 'en'
        ? '12 weeks sober! That\'s 3 full months — an achievement that puts you in a special category!'
        : '12 седмици трезвен! Това са 3 пълни месеца — постижение, което те поставя в специална категория!',
      exercises: ['180 клякания', '100 лицеви опори', '10 минути планк', '170 коремни преси', '150 напади', '92 бурпита']
    },
    {
      level: 85,
      title:   lang === 'en' ? '85 Days — Almost There!' : '85 Дни — Почти там!',
      smoke:   lang === 'en'
        ? '85 days! 15 to go! You can almost touch Day 100. Keep your head down and push!'
        : '85 дни! 15 до края! Почти можеш да докоснеш Ден 100. Дръж главата надолу и натискай!',
      alcohol: lang === 'en'
        ? '85 DAYS SOBER! 15 to go! You are so close to completing this incredible challenge!'
        : '85 ДНИ ТРЕЗВЕН! 15 до края! Толкова си близо до завършването на това невероятно предизвикателство!',
      exercises: ['185 клякания', '100 лицеви опори', '10 минути планк', '170 коремни преси', '150 напади', '95 бурпита']
    },
    {
      level: 86,
      title:   lang === 'en' ? 'Strong Finish Mode'  : 'Режим на силно завършване',
      smoke:   lang === 'en'
        ? 'Activate strong finish mode! Every remaining day counts double. Sprint to that finish line!'
        : 'Активирай режим на силно завършване! Всеки останал ден се брои двойно. Спринтирай до финала!',
      alcohol: lang === 'en'
        ? 'Strong finish mode activated! Your legacy of these 100 days will inspire you for years!'
        : 'Режим на силно завършване активиран! Наследството на тези 100 дни ще те вдъхновява с години!',
      exercises: ['185 клякания', '100 лицеви опори', '10 минути планк', '175 коремни преси', '155 напади', '95 бурпита']
    },
    {
      level: 87,
      title:   lang === 'en' ? 'Days Become Legacy'  : 'Дните стават наследство',
      smoke:   lang === 'en'
        ? 'These 87 days are your legacy. A record of who you became. No one can take that from you!'
        : 'Тези 87 дни са твоето наследство. Запис на това, кой си станал. Никой не може да го вземе от теб!',
      alcohol: lang === 'en'
        ? '87 days of choosing yourself. That\'s your legacy — and it\'s just getting started!'
        : '87 дни на избор за себе си. Това е твоето наследство — и то тепърва започва!',
      exercises: ['185 клякания', '100 лицеви опори', '10 минути планк', '175 коремни преси', '155 напади', '98 бурпита']
    },
    {
      level: 88,
      title:   lang === 'en' ? 'Incredible Journey'  : 'Невероятно пътешествие',
      smoke:   lang === 'en'
        ? 'What an incredible journey these 88 days have been! You\'ve grown more than you know!'
        : 'Какво невероятно пътешествие са тези 88 дни! Израснал си повече, отколкото осъзнаваш!',
      alcohol: lang === 'en'
        ? 'The journey of 88 days has transformed you inside and out. The finish line is calling!'
        : 'Пътешествието от 88 дни те е трансформирало отвътре и отвън. Финалната линия зове!',
      exercises: ['190 клякания', '100 лицеви опори', '10 минути планк', '175 коремни преси', '155 напади', '98 бурпита']
    },
    {
      level: 89,
      title:   lang === 'en' ? 'Last 11 Days!'       : 'Последните 11 дни!',
      smoke:   lang === 'en'
        ? '11 days! Less than 2 weeks! Focus everything you have on crossing that finish line!'
        : '11 дни! По-малко от 2 седмици! Насочи всичко, което имаш, към пресичане на финала!',
      alcohol: lang === 'en'
        ? '11 days to go! You have come further than you ever imagined. Now finish what you started!'
        : '11 дни до края! Изминал си по-далеч, отколкото си мислел. Сега завърши, което си започнал!',
      exercises: ['190 клякания', '100 лицеви опори', '10 минути планк', '180 коремни преси', '160 напади', '100 бурпита']
    },
    {
      level: 90,
      title:   lang === 'en' ? '90 DAYS — ELITE! 🔥'  : '90 ДНИ — ЕЛИТ! 🔥',
      smoke:   lang === 'en'
        ? '90 DAYS SMOKE-FREE! ELITE STATUS! 90 days is a clinically significant milestone — you\'ve beaten addiction!'
        : '90 ДНИ БЕЗ ЦИГАРИ! ЕЛИТЕН СТАТУС! 90 дни е клинично значим milestone — победил си зависимостта!',
      alcohol: lang === 'en'
        ? '90 DAYS SOBER! ELITE! At 90 days, alcohol dependency is clinically considered broken. YOU DID IT!'
        : '90 ДНИ ТРЕЗВЕН! ЕЛИТ! На 90 дни, алкохолната зависимост клинично се счита за преодоляна. НАПРАВИ ГО!',
      exercises: ['190 клякания', '100 лицеви опори', '10 минути планк', '180 коремни преси', '160 напади', '100 бурпита']
    },
    {
      level: 91,
      title:   lang === 'en' ? 'Single Digits Left!'  : 'Единствени цифри останали!',
      smoke:   lang === 'en'
        ? 'Single digit days remaining! 9 days to complete one of the greatest things you\'ve ever done!'
        : 'Едноцифрени дни остават! 9 дни до завършване на едно от най-великите неща, правени от теб!',
      alcohol: lang === 'en'
        ? '9 days left! Single digits! You are about to join the most exclusive club — 100 days sober!'
        : '9 дни останали! Единствени цифри! Готвиш се да се присъединиш към най-ексклузивния клуб — 100 дни трезвен!',
      exercises: ['195 клякания', '100 лицеви опори', '10 минути планк', '180 коремни преси', '160 напади', '100 бурпита']
    },
    {
      level: 92,
      title:   lang === 'en' ? 'You Are the Story'   : 'Ти си историята',
      smoke:   lang === 'en'
        ? 'You ARE the success story. The one people read about and think "I wish I could do that." You did!'
        : 'Ти СИ историята на успеха. Онази, която хората четат и мислят "Иска ми се да мога". Ти го направи!',
      alcohol: lang === 'en'
        ? 'You are writing a story of resilience that will inspire everyone who knows you. Keep going!'
        : 'Пишеш история на устойчивост, която ще вдъхнови всеки, който те познава. Продължавай!',
      exercises: ['195 клякания', '100 лицеви опори', '10 минути планк', '185 коремни преси', '165 напади', '100 бурпита']
    },
    {
      level: 93,
      title:   lang === 'en' ? 'Seven Days to Glory'  : 'Седем дни до слава',
      smoke:   lang === 'en'
        ? 'One week left! Your lungs have achieved near-complete recovery of their pre-smoking function!'
        : 'Една седмица остана! Белите ти дробове са постигнали близо пълно възстановяване на функцията им!',
      alcohol: lang === 'en'
        ? 'One week to glory! Your liver, brain, and cardiovascular system are all operating optimally!'
        : 'Една седмица до слава! Черният дроб, мозъкът и сърдечно-съдовата ти система работят оптимално!',
      exercises: ['195 клякания', '100 лицеви опори', '10 минути планк', '185 коремни преси', '165 напади', '100 бурпита']
    },
    {
      level: 94,
      title:   lang === 'en' ? 'Almost Legendary'    : 'Почти легендарен',
      smoke:   lang === 'en'
        ? '94 days! You are days away from legendary. How does it feel to be this powerful?'
        : '94 дни! На дни разстояние от легендарен. Как се чувства да си толкова мощен?',
      alcohol: lang === 'en'
        ? '94 days sober! Almost legendary! The transformation you\'ve achieved is permanent!'
        : '94 дни трезвен! Почти легендарен! Трансформацията, постигната от теб, е постоянна!',
      exercises: ['195 клякания', '100 лицеви опори', '10 минути планк', '190 коремни преси', '170 напади', '100 бурпита']
    },
    {
      level: 95,
      title:   lang === 'en' ? '95 Days — UNSTOPPABLE' : '95 Дни — НЕУДЪРЖИМ',
      smoke:   lang === 'en'
        ? '95 DAYS! UNSTOPPABLE! 5 days left. Every single hour now is proof of who you truly are!'
        : '95 ДНИ! НЕУДЪРЖИМ! 5 дни остават. Всеки час сега е доказателство за това кой си наистина!',
      alcohol: lang === 'en'
        ? '95 DAYS SOBER! UNSTOPPABLE! 5 days to 100. You are going to make it — and make it matter!'
        : '95 ДНИ ТРЕЗВЕН! НЕУДЪРЖИМ! 5 дни до 100. Ще го направиш — и ще го направиш значимо!',
      exercises: ['195 клякания', '100 лицеви опори', '10 минути планк', '190 коремни преси', '170 напади', '100 бурпита']
    },
    {
      level: 96,
      title:   lang === 'en' ? 'Four Days to History' : 'Четири дни до история',
      smoke:   lang === 'en'
        ? '4 days! Don\'t slow down — accelerate! You are four days from rewriting your personal history!'
        : '4 дни! Не забавяй — ускорявай! На четири дни от пренаписването на личната си история!',
      alcohol: lang === 'en'
        ? 'Four days! History is being made with every decision you take. Stay the course!'
        : 'Четири дни! История се прави с всяко решение, което вземаш. Остани на курса!',
      exercises: ['200 клякания', '100 лицеви опори', '10 минути планк', '190 коремни преси', '170 напади', '100 бурпита']
    },
    {
      level: 97,
      title:   lang === 'en' ? 'Three Days Left!'    : 'Три дни остават!',
      smoke:   lang === 'en'
        ? '3 days! Your lungs, heart, and entire body are thanking you for the greatest gift you\'ve given them!'
        : '3 дни! Белите дробове, сърцето и цялото ти тяло ти благодарят за най-великия дар, даден им!',
      alcohol: lang === 'en'
        ? '3 days left! Three days of pure commitment and you will have done what few people ever do!'
        : '3 дни остават! Три дни чиста отдаденост и ще си направил това, което малцина правят!',
      exercises: ['200 клякания', '100 лицеви опори', '10 минути планк', '195 коремни преси', '175 напади', '100 бурпита']
    },
    {
      level: 98,
      title:   lang === 'en' ? 'Two Days to Legend'  : 'Два дни до легенда',
      smoke:   lang === 'en'
        ? '2 days! Two days! After everything you\'ve been through, two days is nothing. Finish this!'
        : '2 дни! Два дни! След всичко, което си преминал, два дни е нищо. Завърши го!',
      alcohol: lang === 'en'
        ? '2 days left! You have fought so hard for this. Two more days. That\'s all. Don\'t stop now!'
        : '2 дни остават! Борил си се толкова упорито за това. Още два дни. Това е всичко. Не спирай сега!',
      exercises: ['200 клякания', '100 лицеви опори', '10 минути планк', '195 коремни преси', '175 напади', '100 бурпита']
    },
    {
      level: 99,
      title:   lang === 'en' ? 'One Day to Glory!'   : 'Един ден до слава!',
      smoke:   lang === 'en'
        ? 'ONE DAY LEFT! Tomorrow you complete 100 days smoke-free. You have already won. Just one more sleep!'
        : 'ЕДИН ДЕН ОСТАВА! Утре завършваш 100 дни без цигари. Вече си спечелил. Само още един сън!',
      alcohol: lang === 'en'
        ? 'ONE DAY TO 100! Tomorrow you join the elite. Sleep well tonight — you\'re about to make history!'
        : 'ЕДИН ДЕН ДО 100! Утре се присъединяваш към елита. Спи добре тази нощ — готвиш се да направиш история!',
      exercises: ['200 клякания', '100 лицеви опори', '10 минути планк', '200 коремни преси', '180 напади', '100 бурпита']
    },
    {
      level: 100,
      title:   lang === 'en' ? '100 DAYS — CHAMPION! 🏆🎉' : '100 ДНИ — ШАМПИОН! 🏆🎉',
      smoke:   lang === 'en'
        ? '100 DAYS SMOKE-FREE! YOU ARE A CHAMPION! Your lungs have healed. Your heart is stronger. Your life is yours again. You did it — and now it\'s forever!'
        : '100 ДНИ БЕЗ ЦИГАРИ! ТИ СИ ШАМПИОН! Белите ти дробове са излекувани. Сърцето ти е по-силно. Животът ти е твой отново. Направи го — и сега е завинаги!',
      alcohol: lang === 'en'
        ? '100 DAYS SOBER! YOU ARE A CHAMPION! Your brain, liver, and heart have been transformed. You proved that freedom from addiction is possible — and you lived it every single day!'
        : '100 ДНИ ТРЕЗВЕН! ТИ СИ ШАМПИОН! Мозъкът, черният дроб и сърцето ти са трансформирани. Доказа, че свободата от зависимостта е възможна — и я живя всеки един ден!',
      exercises: ['200 клякания', '100 лицеви опори', '10 минути планк', '200 коремни преси', '200 напади', '100 бурпита', '🎉 ЧЕСТИТО — ТИ СИ ШАМПИОН!']
    }
  ];

  return levels;
}

// Make applyLevelsTranslations global
window.applyPageTranslations = applyLevelsTranslations;
