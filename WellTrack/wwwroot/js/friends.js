/* ================================================================
   friends.js — Friends page logic
   ================================================================ */

const friendsTranslations = {
  en: {
    navMain: "Main",
    challenge: "100-day challenge",
    "friends.title": "Friends and messages",
    "friends.tabFriends": "Friends",
    "friends.tabRequests": "Requests",
    "friends.addFriend": "Add",
    "friends.searchPlaceholder": "Search friends...",
    "friends.emptyState": "You don't have any friends yet. Add someone! 👋",
    "friends.pendingRequests": "Pending friend requests:",
    "friends.noRequests": "No pending requests 🎉",
    "friends.selectFriendTitle": "Select a friend to chat",
    "friends.selectFriendDescription": "Choose someone from your friend list to start a conversation",
    "friends.friend": "Friend",
    "friends.offline": "Offline",
    "friends.block": "🚫 Block",
    "common.cancel": "Cancel",
    "common.success": "Success"
  },
  bg: {
    navMain: "Основно",
    challenge: "100-дневно предизвикателство",
    "friends.title": "Приятели и съобщения",
    "friends.tabFriends": "Приятели",
    "friends.tabRequests": "Заявки",
    "friends.addFriend": "Добави",
    "friends.searchPlaceholder": "Търси приятели...",
    "friends.emptyState": "Все още нямаш приятели. Добави някого! 👋",
    "friends.pendingRequests": "Очакващи заявки за приятелство:",
    "friends.noRequests": "Няма чакащи заявки 🎉",
    "friends.selectFriendTitle": "Избери приятел за чат",
    "friends.selectFriendDescription": "Избери някого от своя списък с приятели, за да започнеш разговор",
    "friends.friend": "Приятел",
    "friends.offline": "Офлайн",
    "friends.block": "🚫 Блокирай",
    "common.cancel": "Отказ",
    "common.success": "Успех"
  }
};

function applyFriendsTranslations() {
  const currentLang = getCurrentLanguage() || 'bg';
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (friendsTranslations[currentLang] && friendsTranslations[currentLang][key]) {
      el.textContent = friendsTranslations[currentLang][key];
    }
  });
}

// Make function global for i18n.js
window.applyPageTranslations = applyFriendsTranslations;

// Fix 2 — Replace requireAuth() call with safe version
const user = getCurrentUser();
if (!user) { window.location.href = '/Home/Login'; }

const friendsUser = getCurrentUser();
if (friendsUser) {
  document.querySelectorAll('.user-display-name').forEach(el => el.textContent = friendsUser.name || 'User');
  document.querySelector('.user-avatar-init').textContent = (friendsUser.name || 'U').charAt(0).toUpperCase();
}

let selectedFriendEmail = null;
let selectedFriendId    = null;

window.switchTab = function(tab) {
  document.getElementById('tab-friends').style.display  = tab === 'friends'  ? 'block' : 'none';
  document.getElementById('tab-requests').style.display = tab === 'requests' ? 'block' : 'none';
  document.getElementById('tab-btn-friends').classList.toggle('active',  tab === 'friends');
  document.getElementById('tab-btn-requests').classList.toggle('active', tab === 'requests');
  if (tab === 'requests') renderRequests();
};

async function renderFriendsList(filter = '') {
  const friends  = await getFriendsFromAPI(user.id);
  const filtered = friends.filter(f =>
    (f.name  || '').toLowerCase().includes(filter.toLowerCase()) ||
    (f.email || '').toLowerCase().includes(filter.toLowerCase())
  );

  const el = document.getElementById('friends-list');
  el.innerHTML = filtered.length === 0
    ? `<div style="padding:1.5rem;text-align:center;color:var(--text-muted);">${t('friends.emptyState')}</div>`
    : filtered.map(f => `
        <div class="friend-item ${selectedFriendId === f.id ? 'active' : ''}"
             onclick="selectFriend('${escapeAttr(f.email)}','${escapeAttr(f.name)}',${f.id})">
          <div class="friend-avatar offline">
            <span>${(f.name || '?').charAt(0).toUpperCase()}</span>
            <span class="status-dot"></span>
          </div>
          <div class="friend-info">
            <h4>${escapeHtml(f.name)}</h4>
            <p>${escapeHtml(f.email)}</p>
          </div>
        </div>
      `).join('');

  const lang = getCurrentLanguage();
  const word = lang === 'bg'
    ? (friends.length === 1 ? 'приятел' : 'приятели')
    : (friends.length === 1 ? 'friend' : 'friends');
  document.getElementById('friend-count').textContent = `(${friends.length} ${word})`;
}

async function renderRequests() {
  const requests = await getPendingRequestsFromAPI(user.id);
  const el       = document.getElementById('requests-list');
  const badge    = document.getElementById('req-badge');

  badge.style.display = requests.length > 0 ? 'inline' : 'none';
  badge.textContent   = requests.length;

  el.innerHTML = requests.length === 0
    ? `<div style="padding:1rem;text-align:center;color:var(--text-muted);">${t('friends.noRequests')}</div>`
    : requests.map(r => `
        <div class="request-item">
          <div class="friend-avatar offline">
            <span>${(r.fromName || r.fromEmail).charAt(0).toUpperCase()}</span>
          </div>
          <div class="req-info">
            <h4>${escapeHtml(r.fromName || r.fromEmail)}</h4>
            <p>${escapeHtml(r.fromEmail)}</p>
          </div>
          <div class="req-actions">
            <button class="btn-accept"  onclick="handleAccept(${r.fromUserId},'${escapeAttr(r.fromName)}')">✓</button>
            <button class="btn-decline" onclick="handleDecline(${r.fromUserId})">✕</button>
          </div>
        </div>
      `).join('');
}

async function updateBadge() {
  const requests = await getPendingRequestsFromAPI(user.id);
  const badge    = document.getElementById('req-badge');
  badge.style.display = requests.length > 0 ? 'inline' : 'none';
  badge.textContent   = requests.length;
}

window.handleAccept = async function(fromUserId, fromName) {
  await acceptFriendRequestViaAPI(fromUserId, user.id);
  await renderRequests();
  await renderFriendsList();
  await updateBadge();
  showToast(`${t('common.success')}! 🎉`, 'success');
};

window.handleDecline = async function(fromUserId) {
  await declineFriendRequestViaAPI(fromUserId, user.id);
  await renderRequests();
  await updateBadge();
  showToast(t('common.success'), 'success');
};

window.selectFriend = async function(friendEmail, friendName, friendId) {
  friendId = Number(friendId);
  if (selectedFriendId === friendId) return;

  selectedFriendEmail = friendEmail;
  selectedFriendId    = friendId;

  document.getElementById('chat-area').style.display          = 'flex';
  document.getElementById('no-friend-selected').style.display = 'none';
  document.getElementById('conv-friend-name').textContent     = friendName;
  document.getElementById('conv-friend-status').textContent   = '⚫ ' + t('friends.offline');

  document.querySelectorAll('.friend-item').forEach(el => el.classList.remove('active'));
  if (event && event.currentTarget) event.currentTarget.classList.add('active');

  await renderConversation();
  document.getElementById('friend-message-input').focus();
};

async function renderConversation() {
  if (!selectedFriendId) return;
  try {
    const messages = await getConversationFromAPI(user.id, selectedFriendId, 0, 50);
    const el = document.getElementById('conversation-messages');
    el.innerHTML = messages.length === 0
      ? `<div style="padding:3rem 1rem;text-align:center;color:var(--text-muted);">👋</div>`
      : messages.map(m => `
          <div class="conv-message ${m.senderId === user.id ? 'from-me' : 'from-friend'}">
            <div class="msg-avatar">${(m.senderName || '?').charAt(0).toUpperCase()}</div>
            <div class="msg-content">
              <p>${escapeHtml(m.content)}</p>
              <small>${new Date(m.createdAt).toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' })}</small>
            </div>
          </div>
        `).join('');
    el.scrollTop = el.scrollHeight;
  } catch (err) { console.error('renderConversation failed:', err); }
}

async function sendFriendMessage() {
  const input = document.getElementById('friend-message-input');
  const msg   = input.value.trim();
  if (!msg || !selectedFriendId) return;

  try {
    await sendConversationMessageViaAPI(user.id, selectedFriendId, msg);
    input.value = '';
    await renderConversation();
  } catch (err) {
    showToast(err.message || 'Failed to send message', 'error');
  }
}

window.closeAddFriendModal = function() {
  document.getElementById('add-friend-modal').style.display = 'none';
};

window.openAddFriendModal = function() {
  document.getElementById('add-friend-modal').style.display = 'block';
};

document.addEventListener('DOMContentLoaded', () => {
  renderFriendsList();
  updateBadge();

  // Search
  document.getElementById('friend-search').addEventListener('input', e => renderFriendsList(e.target.value));

  // Add friend form
  document.getElementById('send-friend-request-btn').addEventListener('click', async () => {
    const email = document.getElementById('friend-email-input').value.trim();
    if (!email) {
      showToast('Please enter an email', 'error');
      return;
    }
    try {
      await sendFriendRequestViaAPI(user.id, email);
      document.getElementById('friend-email-input').value = '';
      window.closeAddFriendModal();
      showToast('Friend request sent!', 'success');
    } catch (err) {
      showToast(err.message || 'Failed to send request', 'error');
    }
  });

  // Send message on Enter
  document.getElementById('friend-message-input').addEventListener('keypress', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendFriendMessage();
    }
  });

  document.getElementById('send-friend-btn').addEventListener('click', sendFriendMessage);

  // Open modal on button click
  document.getElementById('add-friend-btn').addEventListener('click', window.openAddFriendModal);
});