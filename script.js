const state = { pushA:0, pullA:0, pushB:0, pullB:0 };
const total = { pushA:7, pullA:7, pushB:7, pullB:7 };
let activeTab = 'pushA';

// Load state from localStorage
function loadState() {
  const saved = localStorage.getItem('trainingsplan-state');
  if (saved) {
    Object.assign(state, JSON.parse(saved));
    // Update UI to reflect saved state
    Object.keys(state).forEach(id => {
      updateProgress(id);
      const panel = document.getElementById('panel-' + id);
      const cards = panel.querySelectorAll('.ex-card');
      for (let i = 0; i < state[id]; i++) {
        if (cards[i]) cards[i].classList.add('done');
      }
    });
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
  document.getElementById('main-scroll').scrollTop = 0;
}

function toggleCard(card, sessionId) {
  const wasDone = card.classList.contains('done');
  const isExpanded = card.classList.contains('expanded');

  // If already done → toggle expanded only (to log weights)
  if (wasDone) {
    card.classList.toggle('expanded');
    return;
  }

  if (!isExpanded) {
    // First tap: expand to show set tracker
    card.classList.add('expanded');
    return;
  }

  // Second tap when expanded: mark done
  card.classList.remove('expanded');
  card.classList.add('done');
  state[sessionId]++;
  updateProgress(sessionId);
  saveState();
}

function updateProgress(id) {
  const done = state[id];
  const tot  = total[id];
  const pct  = Math.round((done / tot) * 100);
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
    c.classList.remove('done', 'expanded');
  });
  state[activeTab] = 0;
  updateProgress(activeTab);
  saveState();
}

function finishSession() {
  document.getElementById('complete-screen').classList.add('visible');
}

function closeComplete() {
  document.getElementById('complete-screen').classList.remove('visible');
}

// Initialize on load
document.addEventListener('DOMContentLoaded', loadState);