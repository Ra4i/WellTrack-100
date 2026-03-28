// ── Exercise tracking (per-level tracking) ────────────────────────
function getCompletedLevels(userId) {
  try { return JSON.parse(localStorage.getItem(`wt_completed_levels_${userId}`)) || {}; } catch { return {}; }
}
function getLevelKey(levelNumber) {
  const today = new Date().toISOString().split('T')[0];
  return `${today}_level_${levelNumber}`;
}
function saveLevelCompletion(userId, levelNumber) {
  const completions = getCompletedLevels(userId);
  const key = getLevelKey(levelNumber);
  completions[key] = true;
  localStorage.setItem(`wt_completed_levels_${userId}`, JSON.stringify(completions));
}
function canCompleteLevelToday(userId, levelNumber) {
  const completions = getCompletedLevels(userId);
  const key = getLevelKey(levelNumber);
  return !completions[key]; // Can complete if NOT already done today
}
function getLevelsCompletedToday(userId) {
  const completions = getCompletedLevels(userId);
  const today = new Date().toISOString().split('T')[0];
  let count = 0;
  for (const key in completions) {
    if (key.startsWith(today)) count++;
  }
  return count;
}
