const API_BASE = 'http://localhost:5001/api';
const USE_API = true;

// ── 100 Levels with smoking & alcohol motivation ──────────
const LEVELS = [
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
  { level: 11, title: "Circulation Boost",  smoke: "Circulation improves. Hands and feet feel warmer.", alcohol: "Digestion is improving. Alcohol was inflaming your gut every day.", exercises: ["10 pullups", "40 squats", "2 min plank"] },
  { level: 12, title: "Energy Rising",      smoke: "Energy levels increase as oxygen delivery improves.", alcohol: "Your mood is stabilizing. Alcohol is a depressant — you are escaping its grip.", exercises: ["15 pullups", "50 squats", "15 lunges"] },
  { level: 13, title: "Lucky 13",           smoke: "Coughing decreases. Your airways are clearing.", alcohol: "Social confidence without alcohol. You are stronger than you think.", exercises: ["20 pushups", "35 squats", "2 mile run"] },
  { level: 14, title: "Two Weeks",          smoke: "2 weeks smoke-free. Lung function improves up to 30%.", alcohol: "Two weeks clean. Your brain chemistry is rebalancing.", exercises: ["25 pushups", "40 squats", "20 pullups"] },
  { level: 15, title: "Halfway Month",      smoke: "Risk of infection drops as immune function improves.", alcohol: "Weight stabilizing — alcohol has hundreds of empty calories.", exercises: ["30 pushups", "50 squats", "25 pullups"] },
  { level: 16, title: "Deep Breath",        smoke: "Breathing during exercise is noticeably easier.", alcohol: "Memory and concentration are sharpening day by day.", exercises: ["35 pushups", "60 squats", "15 pullups"] },
  { level: 17, title: "Heart Hero",         smoke: "Heart rate has normalized. Your heart is under less stress.", alcohol: "Relationships are improving. Alcohol hurts the people we love too.", exercises: ["40 pushups", "70 squats", "20 pullups"] },
  { level: 18, title: "Skin Glow",          smoke: "Skin begins to glow as blood flow improves.", alcohol: "Skin is clearer and more hydrated. Alcohol was drying you out.", exercises: ["45 pushups", "80 squats", "25 pullups"] },
  { level: 19, title: "Almost 3 Weeks",     smoke: "Irritability from nicotine withdrawal is fading.", alcohol: "You are proving to yourself you have real control. That is powerful.", exercises: ["50 pushups", "100 squats", "30 pullups"] },
  { level: 20, title: "20 Day Legend",      smoke: "20 days! Physical cravings are significantly reduced.", alcohol: "20 days alcohol-free. Your liver enzymes are returning to normal.", exercises: ["55 pushups", "120 squats", "35 pullups"] },
  { level: 21, title: "3 Week Champion",    smoke: "3 weeks in — habits take 21 days to break. You broke it.", alcohol: "3 weeks clean. Science says habits begin to rewire at 21 days.", exercises: ["60 pushups", "150 squats", "40 pullups"] },
  { level: 22, title: "Lung Power",         smoke: "Lung capacity continues to grow. Exercise feels easier.", alcohol: "Emotional regulation improves. Alcohol was numbing feelings, not solving them.", exercises: ["3 mile run", "50 pushups", "30 pullups"] },
  { level: 23, title: "Money Saved",        smoke: "Count the money saved. Use it for something that matters.", alcohol: "Count the money saved on alcohol. It adds up to hundreds.", exercises: ["4 mile run", "60 pushups", "40 pullups"] },
  { level: 24, title: "Social Strength",    smoke: "Social situations without cigarettes feel more natural now.", alcohol: "You can have fun without alcohol. Your personality was never the bottle.", exercises: ["50 pushups", "75 squats", "35 pullups", "yoga session"] },
  { level: 25, title: "Quarter Century",    smoke: "25 days. A quarter of your journey done. Keep going.", alcohol: "25 days sober. You are in the top percentage of people who tried.", exercises: ["HIIT: 10 rounds of 20 sec sprint + 10 sec rest", "50 squats", "50 pushups"] },
  { level: 26, title: "Sleep Deeper",       smoke: "Sleep quality has dramatically improved.", alcohol: "Deep sleep restored. Your brain is repairing itself every night now.", exercises: ["5 pullups", "100 squats", "2 min plank", "yoga"] },
  { level: 27, title: "Immune Shield",      smoke: "Immune system is significantly stronger.", alcohol: "Your body fights illness better now. Alcohol was your immune system's enemy.", exercises: ["10 pullups", "120 squats", "3 min plank"] },
  { level: 28, title: "4 Week Titan",       smoke: "4 weeks smoke-free. Your risk of heart disease is already lower.", alcohol: "4 weeks alcohol-free. A genuine achievement most people never reach.", exercises: ["15 pullups", "150 squats", "20 burpees"] },
  { level: 29, title: "Almost a Month",     smoke: "One more day to a full month. You are almost there.", alcohol: "One more day to a full month. The momentum is on your side.", exercises: ["5 mile run", "100 squats", "50 pushups"] },
  { level: 30, title: "30 Day Master",      smoke: "30 DAYS SMOKE-FREE. Your lungs are functioning like a non-smoker's.", alcohol: "30 DAYS ALCOHOL-FREE. This is a milestone millions struggle to reach.", exercises: ["20 pullups", "200 squats", "100 pushups"] },
  { level: 31, title: "Month Plus",         smoke: "Beyond a month. This is your new identity now.", alcohol: "Beyond a month. Sobriety is becoming who you are.", exercises: ["6 mile run", "25 pullups", "150 squats"] },
  { level: 32, title: "Habit Breaker",      smoke: "The habit is broken. What remains is the choice — and you keep choosing right.", alcohol: "The habit is broken. Every day now is a choice you are winning.", exercises: ["30 pushups", "30 pullups", "3 min plank"] },
  { level: 33, title: "Oxygen Rich",        smoke: "Your blood oxygen levels are fully normalized.", alcohol: "Your organs are receiving full blood oxygen. Alcohol reduced this.", exercises: ["HIIT: 15 rounds of 30 sec sprint + 30 sec rest", "100 pushups"] },
  { level: 34, title: "Nerve Growth",       smoke: "Nerve endings continue regenerating. Sensation improves.", alcohol: "Nerve damage from alcohol is slowly reversing.", exercises: ["40 pushups", "40 pullups", "50 lunges"] },
  { level: 35, title: "5 Week Strong",      smoke: "5 weeks in. The cravings are rare and manageable now.", alcohol: "5 weeks sober. You have built something real.", exercises: ["50 pushups", "50 pullups", "100 squats"] },
  { level: 36, title: "Mind Clear",         smoke: "Mental fog from nicotine is gone. Think clearly.", alcohol: "Brain fog is lifting. Alcohol was dulling your sharpest tool — your mind.", exercises: ["7 mile run", "60 pushups", "30 pullups"] },
  { level: 37, title: "Heart Protector",    smoke: "Heart disease risk continues to fall every day.", alcohol: "Heart health improving. Alcohol causes cardiac damage over time.", exercises: ["70 pushups", "40 pullups", "150 squats"] },
  { level: 38, title: "Lung Climber",       smoke: "Climb stairs without getting winded. Feel the difference.", alcohol: "Physical endurance is building. Your body has more fuel now.", exercises: ["8 mile run", "80 pushups", "50 pullups"] },
  { level: 39, title: "Almost 40",          smoke: "Nearly 40 days. You have built extraordinary willpower.", alcohol: "Nearly 40 days. You are in rare company.", exercises: ["90 pushups", "60 pullups", "3:30 plank"] },
  { level: 40, title: "40 Day Warrior",     smoke: "40 days smoke-free. Circulation is dramatically improved.", alcohol: "40 days sober. Your liver has made remarkable progress.", exercises: ["100 pushups", "75 pullups", "4 min plank"] },
  { level: 41, title: "6 Week Hero",        smoke: "6 weeks. Your body has fundamentally changed.", alcohol: "6 weeks alcohol-free. Your brain has fundamentally changed.", exercises: ["9 mile run", "100 pushups", "50 pullups"] },
  { level: 42, title: "Taste Master",       smoke: "Food has never tasted this good. Enjoy every meal.", alcohol: "Appetite has normalized. Alcohol disrupted hunger hormones.", exercises: ["20 pullups", "200 squats", "HIIT session"] },
  { level: 43, title: "Skin Winner",        smoke: "Wrinkles are softening. Skin is plumper and more hydrated.", alcohol: "Skin is glowing. Alcohol causes premature aging — you are reversing it.", exercises: ["10 mile run", "120 pushups", "60 pullups"] },
  { level: 44, title: "Stress Fighter",     smoke: "You handle stress without nicotine. You are stronger.", alcohol: "You handle stress without alcohol. That is true strength.", exercises: ["150 pushups", "75 pullups", "250 squats"] },
  { level: 45, title: "45 Day Giant",       smoke: "45 days. Almost halfway. The hardest part is behind you.", alcohol: "45 days. Almost halfway through your 100-day challenge.", exercises: ["11 mile run", "160 pushups", "80 pullups"] },
  { level: 46, title: "Halfway Soon",       smoke: "4 more days to the halfway point. Sprint.", alcohol: "4 more days to 50. You can see it from here.", exercises: ["HIIT: 20 rounds of 30 sec sprint + 30 sec rest"] },
  { level: 47, title: "Deep Healer",        smoke: "Deep lung tissue continues to heal.", alcohol: "Deep liver repair continues every single night you sleep sober.", exercises: ["200 pushups", "100 pullups", "5 min plank"] },
  { level: 48, title: "Energy Peak",        smoke: "Energy levels at their highest since you started.", alcohol: "Energy is peaking as your body runs clean.", exercises: ["12 mile run", "250 squats", "yoga session"] },
  { level: 49, title: "Eve of 50",          smoke: "Tomorrow is Day 50. You are extraordinary.", alcohol: "Tomorrow is Day 50. Most people never get here. You did.", exercises: ["15 pullups variations", "300 squats", "150 pushups"] },
  { level: 50, title: "HALFWAY LEGEND",     smoke: "50 DAYS SMOKE-FREE. You have done something incredible. Your risk of stroke is now half of a smoker's.", alcohol: "50 DAYS ALCOHOL-FREE. Your liver is 50% recovered. You are halfway to 100.", exercises: ["13 mile run", "250 pushups", "100 pullups", "5:30 plank"] },
  { level: 51, title: "Second Half",        smoke: "The second half begins. You know you can do this.", alcohol: "The second half begins. You have proven you can do this.", exercises: ["HIIT: 25 rounds of 40 sec sprint + 20 sec rest"] },
  { level: 52, title: "Immune Champion",    smoke: "Your immune system is now as strong as a non-smoker's.", alcohol: "Immune function is fully restored.", exercises: ["300 pushups", "120 pullups", "400 squats"] },
  { level: 53, title: "Lung Capacity",      smoke: "Lung capacity at its highest point yet.", alcohol: "Lung health improving — alcohol affects breathing too.", exercises: ["14 mile run", "swimming session"] },
  { level: 54, title: "Heart Shield",       smoke: "Coronary artery disease risk drops significantly.", alcohol: "Blood pressure in healthy range. Heart working efficiently.", exercises: ["350 pushups", "150 pullups", "6 min plank"] },
  { level: 55, title: "55 Day Titan",       smoke: "55 days. You have built a new life.", alcohol: "55 days. Your new sober life is becoming your real life.", exercises: ["15 mile run", "500 squats", "200 pushups"] },
  { level: 56, title: "8 Week Legend",      smoke: "8 weeks smoke-free. Most ex-smokers cite this as the turning point.", alcohol: "8 weeks sober. Your brain chemistry has largely rebalanced.", exercises: ["HIIT: 30 rounds of 40 sec sprint + 20 sec rest"] },
  { level: 57, title: "Focus Sharp",        smoke: "Mental focus is razor sharp without nicotine.", alcohol: "Cognitive function restored. Alcohol was stealing your sharpness.", exercises: ["400 pushups", "200 pullups", "box jumps"] },
  { level: 58, title: "Social Free",        smoke: "Social smoking triggers have lost their power.", alcohol: "Social drinking pressure rolls off you. You are solid.", exercises: ["16 mile run", "mountain climbers", "burpee challenge"] },
  { level: 59, title: "Almost 60",          smoke: "One more day to 60. You are unstoppable.", alcohol: "One more day to 60. Nothing can stop you now.", exercises: ["450 pushups", "250 pullups", "7 min plank"] },
  { level: 60, title: "60 Day Champion",    smoke: "60 DAYS. Your body has undergone a transformation.", alcohol: "60 DAYS SOBER. Two full months of choosing yourself.", exercises: ["17 mile run", "600 squats", "500 pushups"] },
  { level: 61, title: "New Normal",         smoke: "Not smoking is your new normal. Embrace it.", alcohol: "Sobriety is your new normal. It fits you well.", exercises: ["HIIT: 35 rounds of 45 sec sprint + 15 sec rest"] },
  { level: 62, title: "Smell Revival",      smoke: "Your sense of smell is fully restored.", alcohol: "Senses are fully sharpened. Life is more vivid sober.", exercises: ["500 pushups", "300 pullups", "swimming"] },
  { level: 63, title: "9 Week Strong",      smoke: "9 weeks. Your lungs have healed more than you know.", alcohol: "9 weeks. Your body has healed more than you know.", exercises: ["18 mile run", "crossfit WOD", "yoga advanced"] },
  { level: 64, title: "Circulation Elite",  smoke: "Circulation is now as good as a lifelong non-smoker.", alcohol: "Blood flow is optimal. Every organ benefits.", exercises: ["550 pushups", "350 pullups", "8 min plank"] },
  { level: 65, title: "65 Day Giant",       smoke: "65 days of choosing your health over a habit.", alcohol: "65 days of choosing clarity over escape.", exercises: ["19 mile run", "800 squats", "600 pushups"] },
  { level: 66, title: "Cancer Risk Drop",   smoke: "Risk of mouth, throat, and esophageal cancer is halving.", alcohol: "Risk of alcohol-related cancers is dropping significantly.", exercises: ["HIIT: 40 rounds of 45 sec sprint + 15 sec rest"] },
  { level: 67, title: "10 Week Hero",       smoke: "10 weeks smoke-free. A milestone worth celebrating.", alcohol: "10 weeks sober. Celebrate — you have earned it.", exercises: ["600 pushups", "400 pullups", "advanced gymnastics"] },
  { level: 68, title: "Lung Elite",         smoke: "Lung function nearing that of a lifetime non-smoker.", alcohol: "Your organs are performing at their best in years.", exercises: ["20 mile run", "parkour session"] },
  { level: 69, title: "Almost 70",          smoke: "One more day to 70. You have come so far.", alcohol: "One more day to 70. The finish line is visible.", exercises: ["650 pushups", "450 pullups", "9 min plank"] },
  { level: 70, title: "70 Day Legend",      smoke: "70 DAYS. You have changed your life.", alcohol: "70 DAYS SOBER. You have genuinely changed your life.", exercises: ["21 mile run", "1000 squats", "extreme crossfit"] },
  { level: 71, title: "Strong Mind",        smoke: "Psychological dependence on nicotine is nearly gone.", alcohol: "Psychological dependence on alcohol is fading. You are free.", exercises: ["HIIT: 45 rounds of 45 sec sprint + 15 sec rest"] },
  { level: 72, title: "Heart Winner",       smoke: "Heart attack risk is now half of a smoker's.", alcohol: "Cardiac health is excellent. Keep protecting it.", exercises: ["700 pushups", "500 pullups", "10 min plank"] },
  { level: 73, title: "Almost 11 Weeks",    smoke: "Approaching 11 weeks. Consistency is your superpower.", alcohol: "Approaching 11 weeks. Your consistency is remarkable.", exercises: ["22 mile run", "parkour advanced", "rock climbing"] },
  { level: 74, title: "Deep Repair",        smoke: "DNA repair in lung cells accelerating.", alcohol: "Liver cell regeneration is in full swing.", exercises: ["800 pushups", "600 pullups", "extreme training"] },
  { level: 75, title: "75 Day Titan",       smoke: "75 days. Three quarters done. You are extraordinary.", alcohol: "75 days. Three quarters of the challenge complete.", exercises: ["23 mile run", "1500 squats", "warrior workout"] },
  { level: 76, title: "Last Quarter",       smoke: "Final stretch begins. Do not stop now.", alcohol: "Final stretch. You are so close to 100.", exercises: ["HIIT: 50 rounds of 50 sec sprint + 10 sec rest"] },
  { level: 77, title: "Lucky 77",           smoke: "Lucky 77. Keep your streak alive.", alcohol: "Lucky 77. Your streak is your strength.", exercises: ["900 pushups", "700 pullups", "11:30 plank"] },
  { level: 78, title: "Endurance King",     smoke: "Your physical endurance rivals a non-smoker's.", alcohol: "Physical and mental endurance are at their peak.", exercises: ["24 mile run", "ultramarathon training"] },
  { level: 79, title: "Almost 80",          smoke: "One more day to 80. You are almost there.", alcohol: "One more day to 80. Do not let up now.", exercises: ["1000 pushups", "800 pullups", "extreme fitness"] },
  { level: 80, title: "80 Day Master",      smoke: "80 DAYS SMOKE-FREE. A genuine life transformation.", alcohol: "80 DAYS SOBER. Most people never reach this. You did.", exercises: ["25 mile run", "2000 squats", "12 min plank"] },
  { level: 81, title: "New You",            smoke: "You are not the person who smoked. You are new.", alcohol: "You are not who you were on Day 1. You are new.", exercises: ["HIIT: 55 rounds of 50 sec sprint + 10 sec rest"] },
  { level: 82, title: "Cancer Defender",    smoke: "Lung cancer risk dropping every single day.", alcohol: "Liver cancer risk dropping every single day.", exercises: ["1100 pushups", "900 pullups", "advanced gymnastics"] },
  { level: 83, title: "Almost 12 Weeks",    smoke: "Approaching 12 weeks. Three months in sight.", alcohol: "Approaching 12 weeks. Three months in sight.", exercises: ["26 mile run", "triathalon training"] },
  { level: 84, title: "12 Week Giant",      smoke: "12 weeks — 3 full months smoke-free. Remarkable.", alcohol: "12 weeks — 3 full months alcohol-free. Remarkable.", exercises: ["1200 pushups", "1000 pullups", "extreme endurance"] },
  { level: 85, title: "85 Day Hero",        smoke: "85 days. The habit is a memory. You are the winner.", alcohol: "85 days. The addiction is a memory. You are the winner.", exercises: ["27 mile run", "2500 squats", "12:30 plank"] },
  { level: 86, title: "Vital Signs Win",    smoke: "All vital signs now match a healthy non-smoker.", alcohol: "All vital signs now match a healthy non-drinker.", exercises: ["HIIT: 60 rounds of 55 sec sprint + 5 sec rest"] },
  { level: 87, title: "Almost 13 Weeks",    smoke: "13 weeks approaching. Your commitment is inspiring.", alcohol: "13 weeks approaching. You are an inspiration.", exercises: ["1300 pushups", "1100 pullups", "crossfit max"] },
  { level: 88, title: "88 Day Legend",      smoke: "88 days. You have built an unbreakable identity.", alcohol: "88 days. Your sober identity is unshakeable.", exercises: ["28 mile run", "ultramarathon", "mountain expedition"] },
  { level: 89, title: "Almost 90",          smoke: "One more day to 90. The last push is here.", alcohol: "One more day to 90. Give everything you have.", exercises: ["1500 pushups", "1200 pullups", "13 min plank"] },
  { level: 90, title: "90 Day TITAN",       smoke: "90 DAYS SMOKE-FREE. You are in the top 1% of people who tried to quit.", alcohol: "90 DAYS SOBER. You have done something most people only dream of.", exercises: ["FINAL HIIT: 60 rounds of 1 min sprint + 0 sec rest"] },
  { level: 91, title: "Final 10",           smoke: "10 days left. Do not stop now. Finish what you started.", alcohol: "10 days left. The finish line is right there.", exercises: ["1600 pushups", "1300 pullups", "champion workout"] },
  { level: 92, title: "92 Day Strong",      smoke: "92 days of choosing life over a cigarette.", alcohol: "92 days of choosing clarity over escape.", exercises: ["29 mile run", "advanced parkour"] },
  { level: 93, title: "One Week Left",      smoke: "One week remaining. Sprint to the finish.", alcohol: "One week remaining. Sprint to the finish.", exercises: ["1800 pushups", "1500 pullups", "13:30 plank"] },
  { level: 94, title: "94 Day Champion",    smoke: "94 days. Your lungs are cleaner than they have been in years.", alcohol: "94 days. Your liver is cleaner than it has been in years.", exercises: ["30 mile run", "extreme endurance test"] },
  { level: 95, title: "5 Days Left",        smoke: "5 days to 100. You can feel the finish line.", alcohol: "5 days to 100. You can feel the finish line.", exercises: ["2000 pushups", "1600 pullups", "warrior challenge"] },
  { level: 96, title: "96 Day Warrior",     smoke: "96 days. Almost there. Do not blink.", alcohol: "96 days. Almost there. Do not blink.", exercises: ["FINAL CIRCUIT: 100 rounds of all-out sprints"] },
  { level: 97, title: "3 Days Left",        smoke: "3 days. You have already won. Just keep going.", alcohol: "3 days. You have already won. Just keep going.", exercises: ["2200 pushups", "1800 pullups", "14 min plank"] },
  { level: 98, title: "2 Days Left",        smoke: "2 days. You will finish this. You always were going to.", alcohol: "2 days. You will finish this. You always were going to.", exercises: ["31 mile run", "BEAST MODE"] },
  { level: 99, title: "Final Day Eve",      smoke: "Tomorrow is Day 100. You are about to complete something most people never will.", alcohol: "Tomorrow is Day 100. You are about to complete something most people never will.", exercises: ["2500 pushups", "2000 pullups", "15 min plank"] },
  { level: 100, title: "100 DAY CHAMPION",  smoke: "100 DAYS SMOKE-FREE. You have transformed your life. Your lung cancer risk has halved. Your heart is healthier. You are free.", alcohol: "100 DAYS ALCOHOL-FREE. You have transformed your life. Your liver is healed. Your mind is clear. You are completely free.", exercises: ["CHAMPION WORKOUT", "Celebrate your victory", "Reflect on your transformation"] },
];

// ── Streak calculation ────────────────────────────────────
function calculateStreak(entries) {
  if (!entries || !entries.length) return 0;
  // Get unique days where workout was completed (prevents same-day duplicates from affecting streak)
  const uniqueDays = new Set(
    entries
      .filter(e => e.workoutCompleted)
      .map(e => e.currentDay)
  );

  if (!uniqueDays.size) return 0;

  const sorted = Array.from(uniqueDays).sort((a, b) => b - a); // descending

  const currentDay = getCurrentDay();
  // Streak only continues if logged today - resets if missed a day
  if (sorted[0] !== currentDay) return 0;

  let streak = 1;
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1] - 1) streak++;
    else break;
  }
  return streak;
}

// ── Level calculation ─────────────────────────────────────
function calculateCurrentLevel(entries) {
  if (!entries || !entries.length) return 0;
  // Level = number of distinct days logged (completed)
  // Can catch up: if you missed day 8, you can do it on day 9
  return Math.min(entries.length, 100);
}

// ── Toast ─────────────────────────────────────────────────
function showToast(msg, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${type === 'success' ? '✓' : '✕'}</span> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

// ── Auth ──────────────────────────────────────────────────
function getCurrentUser() {
  try { return JSON.parse(localStorage.getItem('wt_user')); } catch { return null; }
}
function setCurrentUser(user) { localStorage.setItem('wt_user', JSON.stringify(user)); }
function logout() { localStorage.removeItem('wt_user'); window.location.href = 'login.html'; }
function requireAuth() {
  if (!getCurrentUser()) { window.location.href = 'login.html'; return false; }
  return true;
}

function getCurrentDay() {
  const user = getCurrentUser();
  if (!user) return 1;
  const startDate = new Date(user.startDate || Date.now());
  const diffMs = new Date() - startDate;
  return Math.min(Math.max(Math.floor(diffMs / 86400000) + 1, 1), 100);
}

// ── localStorage fallbacks ────────────────────────────────
function getAllProgress() {
  try { return JSON.parse(localStorage.getItem('wt_progress')) || []; } catch { return []; }
}
function saveProgressLocal(entry) {
  const all = getAllProgress();
  const i = all.findIndex(e => e.userId === entry.userId && e.currentDay === entry.currentDay);
  if (i >= 0) all[i] = entry; else all.push(entry);
  localStorage.setItem('wt_progress', JSON.stringify(all));
}
function getUserProgressLocal(userId) {
  return getAllProgress().filter(e => e.userId === userId).sort((a, b) => a.currentDay - b.currentDay);
}
function getUsers() {
  try { return JSON.parse(localStorage.getItem('wt_users')) || []; } catch { return []; }
}
function registerUser(name, email, password) {
  const users = getUsers();
  if (users.find(u => u.email === email)) return { error: 'Email already registered.' };
  const user = { id: Date.now(), name, email, password, startDate: new Date().toISOString() };
  users.push(user); localStorage.setItem('wt_users', JSON.stringify(users));
  return { user };
}
function loginUser(email, password) {
  const user = getUsers().find(u => u.email === email && u.password === password);
  return user ? { user } : { error: 'Invalid email or password.' };
}

// ── API ───────────────────────────────────────────────────
async function apiPost(endpoint, body) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  return res.json();
}
async function apiGet(endpoint) {
  const res = await fetch(`${API_BASE}${endpoint}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}


// ── Home ──────────────────────────────────────────────────
function initHome() {
  const user = getCurrentUser();
  const loginLink = document.getElementById('nav-login');
  const dashLink = document.getElementById('nav-dashboard');
  if (user) {
    if (loginLink) { loginLink.textContent = 'Dashboard'; loginLink.href = 'dashboard.html'; }
    if (dashLink) dashLink.classList.remove('hidden');
  }
}

// ── Login ─────────────────────────────────────────────────
function initLogin() {
  if (getCurrentUser()) { window.location.href = 'dashboard.html'; return; }
  const form = document.getElementById('login-form');
  const alertEl = document.getElementById('alert');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    alertEl.className = 'alert';
    if (USE_API) {
      try {
        const data = await apiPost('/users/login', { email, password });
        setCurrentUser(data);
        window.location.href = 'dashboard.html';
      } catch (err) { alertEl.textContent = err.message; alertEl.className = 'alert error show'; }
    } else {
      const result = loginUser(email, password);
      if (result.error) { alertEl.textContent = result.error; alertEl.className = 'alert error show'; return; }
      setCurrentUser(result.user); window.location.href = 'dashboard.html';
    }
  });
}

// ── Register ──────────────────────────────────────────────
function initRegister() {
  if (getCurrentUser()) { window.location.href = 'dashboard.html'; return; }
  const form = document.getElementById('register-form');
  const alertEl = document.getElementById('alert');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm').value;
    alertEl.className = 'alert';
    if (password !== confirm) { alertEl.textContent = 'Passwords do not match.'; alertEl.className = 'alert error show'; return; }
    if (password.length < 6) { alertEl.textContent = 'Password must be at least 6 characters.'; alertEl.className = 'alert error show'; return; }
    if (USE_API) {
      try {
        const data = await apiPost('/users/register', { name, email, password });
        setCurrentUser(data);
        alertEl.textContent = '🎉 Your recovery journey starts now!';
        alertEl.className = 'alert success show';
        setTimeout(() => window.location.href = 'dashboard.html', 1500);
      } catch (err) { alertEl.textContent = err.message; alertEl.className = 'alert error show'; }
    } else {
      const result = registerUser(name, email, password);
      if (result.error) { alertEl.textContent = result.error; alertEl.className = 'alert error show'; return; }
      setCurrentUser(result.user);
      alertEl.textContent = '🎉 Your recovery journey starts now!';
      alertEl.className = 'alert success show';
      setTimeout(() => window.location.href = 'dashboard.html', 1500);
    }
  });
}

// ── Savings Calculation ────────────────────────────
function updateSavingsDisplay(cigPrice) {
  const currentDay = getCurrentDay();
  const packCost = parseFloat(cigPrice) || 7.50;
  const cigsPerPack = 20;

  // Calculate total cigarettes avoided
  const cigsAvoided = currentDay * cigsPerPack;

  // Calculate money saved: (Cigarettes Avoided / 20) * Pack Price
  const packsAvoided = cigsAvoided / cigsPerPack;
  const totalSaved = packsAvoided * packCost;

  const moneyEl = document.getElementById('money-saved');
  const cigsEl = document.getElementById('cigs-avoided');

  if (moneyEl) moneyEl.textContent = `$${totalSaved.toFixed(2)}`;
  if (cigsEl) cigsEl.textContent = cigsAvoided.toLocaleString();
}

// ── Dashboard ─────────────────────────────────────────────
function initDashboard() {
  if (!requireAuth()) return;
  const user = getCurrentUser();

  document.querySelectorAll('.user-display-name').forEach(el => el.textContent = user.name);
  document.querySelectorAll('.user-avatar-init').forEach(el => el.textContent = user.name.charAt(0).toUpperCase());

  const currentDay = getCurrentDay();
  document.getElementById('current-day').textContent = `Day ${currentDay}`;
  document.getElementById('days-remaining').textContent = `${100 - currentDay} days remaining`;

  const loadEntries = USE_API
    ? apiGet(`/progress?userId=${user.id}`)
    : Promise.resolve(getUserProgressLocal(user.id));

  loadEntries.then(entries => {
    // Load today's entry into form
    const today = entries.find(e => Number(e.currentDay) === Number(currentDay));
    if (today) {
      document.getElementById('water-input').value = today.waterIntake || 0;
      document.getElementById('sleep-input').value = today.sleepHours || 0;
      document.getElementById('workout-input').checked = today.workoutCompleted || false;
      updateStatCards(today);
    }

    // Update streak
    const streak = calculateStreak(entries);
    const streakEl = document.getElementById('workout-streak');
    if (streakEl) streakEl.textContent = streak;

    // Update level
    const level = calculateCurrentLevel(entries);
    const levelEl = document.getElementById('current-level');
    if (levelEl) levelEl.textContent = level;

  }).catch(err => console.error('Could not load entries:', err));

  const logForm = document.getElementById('log-form');
  if (!logForm) return;

  logForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const entry = {
      userId: user.id,
      currentDay,
      waterIntake: parseFloat(document.getElementById('water-input').value) || 0,
      sleepHours: parseFloat(document.getElementById('sleep-input').value) || 0,
      workoutCompleted: document.getElementById('workout-input').checked,
      date: new Date().toISOString()
    };

    if (USE_API) {
      try {
        await apiPost('/progress/update', entry);
        showToast(`Day ${currentDay} saved!`);
        updateStatCards(entry);
        // Refresh streak after save
        const entries = await apiGet(`/progress?userId=${user.id}`);
        const streak = calculateStreak(entries);
        const streakEl = document.getElementById('workout-streak');
        if (streakEl) streakEl.textContent = streak;
        const levelEl = document.getElementById('current-level');
        if (levelEl) levelEl.textContent = calculateCurrentLevel(entries);
        // Update savings display
        const cigPrice = localStorage.getItem('wt_cig_price') || '7.50';
        updateSavingsDisplay(cigPrice);
      } catch (err) {
        showToast('Failed to save: ' + err.message, 'error');
      }
    } else {
      saveProgressLocal(entry);
      showToast(`Day ${currentDay} saved!`);
      updateStatCards(entry);
      // Update savings display
      const cigPrice = localStorage.getItem('wt_cig_price') || '7.50';
      updateSavingsDisplay(cigPrice);
    }
  });

  // Initialize cigarette savings display
  const cigPriceInput = document.getElementById('cig-price');
  if (cigPriceInput) {
    // Load saved price from localStorage or use default
    const savedPrice = localStorage.getItem('wt_cig_price') || '7.50';
    cigPriceInput.value = savedPrice;

    // Initial calculation
    updateSavingsDisplay(savedPrice);

    // Update when price changes
    cigPriceInput.addEventListener('change', (e) => {
      const newPrice = e.target.value;
      localStorage.setItem('wt_cig_price', newPrice);
      updateSavingsDisplay(newPrice);
    });

    // Update on input (real-time preview)
    cigPriceInput.addEventListener('input', (e) => {
      updateSavingsDisplay(e.target.value);
    });
  }
}

function updateStatCards(entry) {
  const waterVal = document.getElementById('water-stat');
  const sleepVal = document.getElementById('sleep-stat');
  const workoutVal = document.getElementById('workout-stat');
  if (waterVal) waterVal.textContent = (entry.waterIntake || 0).toFixed(1);
  if (sleepVal) sleepVal.textContent = (entry.sleepHours || 0).toFixed(1);
  if (workoutVal) workoutVal.textContent = entry.workoutCompleted ? '✓' : '—';
}

// ── Progress page ─────────────────────────────────────────
async function initProgress() {
  if (!requireAuth()) return;
  const user = getCurrentUser();
  document.querySelectorAll('.user-display-name').forEach(el => el.textContent = user.name);
  document.querySelectorAll('.user-avatar-init').forEach(el => el.textContent = user.name.charAt(0).toUpperCase());

  const currentDay = getCurrentDay();

  let history = [];
  try {
    history = USE_API ? await apiGet(`/progress?userId=${user.id}`) : getUserProgressLocal(user.id);
  } catch (err) { console.error('Could not load progress:', err); }

  const completedDays = history.length;
  const workoutDays = history.filter(e => e.workoutCompleted).length;
  const streak = calculateStreak(history);
  const avgWater = completedDays ? (history.reduce((s, e) => s + (e.waterIntake || 0), 0) / completedDays).toFixed(1) : 0;
  const avgSleep = completedDays ? (history.reduce((s, e) => s + (e.sleepHours || 0), 0) / completedDays).toFixed(1) : 0;

  const el = id => document.getElementById(id);
  if (el('prog-completed')) el('prog-completed').textContent = completedDays;
  if (el('prog-workouts')) el('prog-workouts').textContent = workoutDays;
  if (el('prog-streak')) el('prog-streak').textContent = streak;
  if (el('prog-avg-water')) el('prog-avg-water').textContent = `${avgWater}L`;
  if (el('prog-avg-sleep')) el('prog-avg-sleep').textContent = `${avgSleep}h`;

  renderHistoryTable(history);
}

function renderHistoryTable(history) {
  const tbody = document.getElementById('history-tbody');
  if (!tbody) return;
  if (!history.length) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:2rem">No entries yet. Start logging on the Dashboard!</td></tr>';
    return;
  }
  tbody.innerHTML = history.slice().reverse().map(e => `
    <tr>
      <td class="day-num">Day ${e.currentDay}</td>
      <td><div class="mini-bar"><div class="mini-bar-track"><div class="mini-bar-fill" style="width:${Math.min((e.waterIntake/3)*100,100)}%;background:var(--accent2)"></div></div><span>${(e.waterIntake||0).toFixed(1)}L</span></div></td>
      <td><div class="mini-bar"><div class="mini-bar-track"><div class="mini-bar-fill" style="width:${Math.min((e.sleepHours/9)*100,100)}%;background:var(--accent3)"></div></div><span>${(e.sleepHours||0).toFixed(1)}h</span></div></td>
      <td class="${e.workoutCompleted ? 'workout-check' : 'workout-no'}">${e.workoutCompleted ? '✓ Done' : '✕ Rest'}</td>
      <td style="color:var(--text-muted);font-size:0.8rem">${new Date(e.date||Date.now()).toLocaleDateString()}</td>
    </tr>
  `).join('');
}

// ── Levels page ───────────────────────────────────────────
async function initLevels() {
  if (!requireAuth()) return;
  const user = getCurrentUser();
  document.querySelectorAll('.user-display-name').forEach(el => el.textContent = user.name);
  document.querySelectorAll('.user-avatar-init').forEach(el => el.textContent = user.name.charAt(0).toUpperCase());

  let history = [];
  try {
    history = USE_API ? await apiGet(`/progress?userId=${user.id}`) : getUserProgressLocal(user.id);
  } catch (err) { console.error('Could not load levels:', err); }

  const completedLevel = calculateCurrentLevel(history);
  const currentDay = getCurrentDay();

  // Next level the user can complete today
  const nextLevel = Math.min(completedLevel + 1, 100);

  // Update header
  const lvlEl = document.getElementById('level-number');
  const lvlTitle = document.getElementById('level-title');
  const lvlBar = document.getElementById('level-bar-fill');
  const lvlPct = document.getElementById('level-pct');

  if (lvlEl) lvlEl.textContent = completedLevel;
  if (lvlTitle) lvlTitle.textContent = LEVELS[completedLevel]?.title || 'Complete!';
  if (lvlBar) lvlBar.style.width = `${completedLevel}%`;
  if (lvlPct) lvlPct.textContent = `${completedLevel}/100`;

  // Show motivation for current level
  renderMotivation(completedLevel > 0 ? completedLevel : 1);

  // Render level grid
  renderLevelGrid(completedLevel, nextLevel, currentDay);
}

function completeLevel(levelNum) {
  // Prevent event propagation to avoid showing modal
  event.stopPropagation();

  const user = getCurrentUser();
  if (!user) return;

  const currentDay = getCurrentDay();

  // Can only complete levels up to and including the current day
  // Cannot do levels beyond the current day
  if (levelNum > currentDay) {
    showToast(`Level ${levelNum} is not yet available. You can do levels 1-${currentDay}.`, 'error');
    return;
  }

  // Create entry with this level as the day
  const entry = {
    userId: user.id,
    currentDay: levelNum,
    waterIntake: 0,
    sleepHours: 0,
    workoutCompleted: true,
    date: new Date().toISOString()
  };

  if (USE_API) {
    apiPost('/progress/update', entry)
      .then(() => {
        showToast(`Level ${levelNum} completed!`);
        initLevels();
      })
      .catch(err => showToast('Failed to complete level: ' + err.message, 'error'));
  } else {
    saveProgressLocal(entry);
    showToast(`Level ${levelNum} completed!`);
    initLevels();
  }
}

function renderMotivation(levelNum) {
  const lvl = LEVELS[levelNum - 1];
  if (!lvl) return;

  const smokeEl = document.getElementById('motivation-smoke');
  const alcoholEl = document.getElementById('motivation-alcohol');
  const motTitle = document.getElementById('motivation-title');

  if (motTitle) motTitle.textContent = `Level ${levelNum} — ${lvl.title}`;
  if (smokeEl) smokeEl.textContent = lvl.smoke;
  if (alcoholEl) alcoholEl.textContent = lvl.alcohol;
}

function renderLevelGrid(completedLevel, nextLevel, currentDay) {
  const grid = document.getElementById('level-grid');
  if (!grid) return;

  grid.innerHTML = LEVELS.map(lvl => {
    let state = 'locked';
    if (lvl.level <= completedLevel) state = 'done';
    else if (lvl.level === nextLevel) state = 'current';

    // Show complete button on the next incomplete level if it's available (up to and including current day)
    const completeBtn = lvl.level === nextLevel && lvl.level <= currentDay
      ? `<button class="level-complete-btn" onclick="completeLevel(${lvl.level})" title="Mark level as complete">✓ Complete</button>`
      : '';

    return `
      <div class="level-card ${state}" onclick="showLevelDetail(${lvl.level})" title="${lvl.title}">
        <div class="level-card-num">${lvl.level}</div>
        <div class="level-card-icon">${state === 'done' ? '✓' : state === 'current' ? '▶' : '🔒'}</div>
        <div class="level-card-title">${lvl.title}</div>
        ${completeBtn}
      </div>
    `;
  }).join('');
}

function showLevelDetail(levelNum) {
  const currentDay = getCurrentDay();

  // Prevent viewing levels beyond the current day
  if (levelNum > currentDay) {
    showToast(`Level ${levelNum} is not yet available. You can view levels 1-${currentDay}.`, 'error');
    return;
  }

  const lvl = LEVELS[levelNum - 1];
  if (!lvl) return;

  const modal = document.getElementById('level-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalSmoke = document.getElementById('modal-smoke');
  const modalAlcohol = document.getElementById('modal-alcohol');
  const modalLevel = document.getElementById('modal-level-num');
  const modalExercises = document.getElementById('modal-exercises');

  if (modalLevel) modalLevel.textContent = `Level ${levelNum}`;
  if (modalTitle) modalTitle.textContent = lvl.title;
  if (modalSmoke) modalSmoke.textContent = lvl.smoke;
  if (modalAlcohol) modalAlcohol.textContent = lvl.alcohol;

  // Display exercises
  if (modalExercises) {
    if (lvl.exercises && lvl.exercises.length) {
      modalExercises.innerHTML = lvl.exercises.map(ex => `<li style="padding: 0.4rem 0; font-size: 0.9rem; color: var(--text-dim); line-height: 1.6;">✓ ${ex}</li>`).join('');
    } else {
      modalExercises.innerHTML = '<li style="padding: 0.4rem 0; color: var(--text-muted);">No exercises assigned</li>';
    }
  }

  if (modal) modal.classList.add('show');
}

function closeLevelModal() {
  const modal = document.getElementById('level-modal');
  if (modal) modal.classList.remove('show');
}

// ── Nav ───────────────────────────────────────────────────
function setActiveNav() {
  const page = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-item').forEach(item => {
    const href = item.getAttribute('href') || item.dataset.page;
    if (href && page.includes(href.replace('.html', ''))) item.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.logout-btn').forEach(btn => btn.addEventListener('click', logout));
  if (page === 'index.html' || page === '') initHome();
  else if (page === 'login.html') initLogin();
  else if (page === 'register.html') initRegister();
  else if (page === 'dashboard.html') initDashboard();
  else if (page === 'progress.html') initProgress();
  else if (page === 'levels.html') initLevels();
  setActiveNav();
});