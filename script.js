const state = {
  plan1: { pushA: 0, pullA: 0, pushB: 0, pullB: 0 },
  plan2: { plan2: 0 }
};
const total = {
  plan1: { pushA: 7, pullA: 7, pushB: 7, pullB: 7 },
  plan2: { plan2: 7 }
};
let currentUser = 'plan1';
let activeTab = 'pushA';

// Load state from localStorage
function loadState() {
  const saved = localStorage.getItem('trainingsplan-state');
  if (saved) {
    const parsed = JSON.parse(saved);
    // Merge saved state
    if (parsed.plan1) Object.assign(state.plan1, parsed.plan1);
    if (parsed.plan2) Object.assign(state.plan2, parsed.plan2);
    // Update UI
    updateUIForUser(currentUser);
  }
}

// Save state to localStorage
function saveState() {
  localStorage.setItem('trainingsplan-state', JSON.stringify(state));
}

function switchTab(id, btn) {
  // deactivate all
  document.querySelectorAll('.training-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById('panel-' + id).classList.add('active');
  btn.classList.add('active');
  activeTab = id;
  document.getElementById('session-badge').textContent = btn.textContent;
  // update finish button color
  const isPush = id.startsWith('push');
  const btn2 = document.getElementById('btn-finish');
  btn2.className = 'btn-done ' + (isPush ? 'push' : 'pull');
  // Update UI and scroll to current exercise
  updateUIForUser(currentUser);
}

function toggleCard(card, sessionId) {
  if (card.classList.contains('done')) {
    card.classList.remove('done');
    state[currentUser][sessionId]--;
  } else {
    card.classList.add('done');
    state[currentUser][sessionId]++;
  }
  updateProgress(sessionId);
  updateUIForUser(currentUser); // Refresh highlighting after toggle
  saveState();
}

function updateProgress(id) {
  const done = state[currentUser][id];
  const tot = total[currentUser][id];
  const pct = Math.round((done / tot) * 100);
  const circumference = 113.1;
  const offset = circumference - (circumference * pct / 100);

  document.getElementById('ring-' + id).style.strokeDashoffset = offset;
  document.getElementById('pct-' + id).textContent = pct + '%';
  document.getElementById('sub-' + id).textContent = done + ' von ' + tot + ' Übungen erledigt';
}

function stopProp(e) { e.stopPropagation(); }

function resetSession() {
  const panel = document.getElementById('panel-' + activeTab);
  panel.querySelectorAll('.ex-card').forEach(c => {
    c.classList.remove('done', 'expanded', 'current-exercise');
  });
  state[currentUser][activeTab] = 0;
  updateProgress(activeTab);
  updateUIForUser(currentUser); // Refresh highlighting after reset
  saveState();
}

function finishSession() {
  document.getElementById('complete-screen').classList.add('visible');
}

function closeComplete() {
  document.getElementById('complete-screen').classList.remove('visible');
}

function switchUser() {
  if (currentUser === 'plan1') {
    currentUser = 'plan2';
    document.getElementById('tab-row').style.display = 'none';
    // deactivate all panels
    document.querySelectorAll('.training-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('panel-plan2').classList.add('active');
    document.getElementById('session-badge').textContent = 'Plan 2';
    // update finish button to push color
    document.getElementById('btn-finish').className = 'btn-done push';
    activeTab = 'plan2';
  } else {
    currentUser = 'plan1';
    document.getElementById('tab-row').style.display = 'flex';
    // switch to pushA
    const pushABtn = document.querySelector('.tab.push.active') || document.querySelector('.tab.push');
    switchTab('pushA', pushABtn);
  }
  updateButtonText();
  updateUIForUser(currentUser);
}

function updateButtonText() {
  const btn = document.getElementById('user-switch');
  if (currentUser === 'plan1') {
    btn.textContent = 'Plan 1 (aktiv)';
  } else {
    btn.textContent = 'Plan 2 (aktiv)';
  }
}

function updateUIForUser(user) {
  // Clear previous current-exercise highlights
  document.querySelectorAll('.current-exercise').forEach(card => {
    card.classList.remove('current-exercise');
  });

  // Update progress for all sessions in the user
  Object.keys(state[user]).forEach(id => {
    updateProgress(id);
    const panel = document.getElementById('panel-' + id);
    if (panel) {
      const cards = panel.querySelectorAll('.ex-card');
      let firstUncheckedIndex = -1;

      for (let i = 0; i < cards.length; i++) {
        if (i < state[user][id]) {
          cards[i].classList.add('done');
        } else {
          cards[i].classList.remove('done');
          if (firstUncheckedIndex === -1) {
            firstUncheckedIndex = i;
          }
        }
      }

      // Highlight the first unchecked exercise only for the active session
      if (id === activeTab && firstUncheckedIndex !== -1 && cards[firstUncheckedIndex]) {
        const isPush = id.startsWith('push');
        cards[firstUncheckedIndex].classList.add('current-exercise');
        if (!isPush) {
          cards[firstUncheckedIndex].classList.add('pull-card');
        }

        // Scroll to the current exercise
        setTimeout(() => {
          cards[firstUncheckedIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }, 100);
      }
    }
  });
}

// Initialize on load
window.addEventListener('load', () => {
  loadState();
  updateButtonText();
  updateUIForUser(currentUser);
});