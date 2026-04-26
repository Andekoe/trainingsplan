const state = {
  plan1: {
    pushA: {}, // Will store exercise indices as keys (0-6)
    pullA: {},
    pushB: {},
    pullB: {}
  },
  plan2: {
    plan2: {} // Will store exercise indices as keys (0-6)
  }
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
    // Migrate old format (numbers) to new format (objects)
    if (parsed.plan1) {
      Object.keys(parsed.plan1).forEach(sessionId => {
        const value = parsed.plan1[sessionId];
        if (typeof value === 'number') {
          // Convert number to object format
          const exerciseStates = {};
          for (let i = 0; i < value; i++) {
            exerciseStates[i] = true;
          }
          state.plan1[sessionId] = exerciseStates;
        } else {
          // Already in new format
          state.plan1[sessionId] = value || {};
        }
      });
    }
    if (parsed.plan2) {
      Object.keys(parsed.plan2).forEach(sessionId => {
        const value = parsed.plan2[sessionId];
        if (typeof value === 'number') {
          // Convert number to object format
          const exerciseStates = {};
          for (let i = 0; i < value; i++) {
            exerciseStates[i] = true;
          }
          state.plan2[sessionId] = exerciseStates;
        } else {
          // Already in new format
          state.plan2[sessionId] = value || {};
        }
      });
    }
    // Update UI
    updateUIForUser(currentUser, null);
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
  updateUIForUser(currentUser, null);
}

function toggleCard(card, sessionId) {
  // Find the index of this card within its panel
  const panel = document.getElementById('panel-' + sessionId);
  const cards = Array.from(panel.querySelectorAll('.ex-card'));
  const exerciseIndex = cards.indexOf(card);

  if (exerciseIndex === -1) {
    return;
  }

  // Toggle the exercise state
  if (card.classList.contains('done')) {
    card.classList.remove('done');
    delete state[currentUser][sessionId][exerciseIndex];
  } else {
    card.classList.add('done');
    state[currentUser][sessionId][exerciseIndex] = true;
  }

  updateProgress(sessionId);
  updateUIForUser(currentUser, sessionId); // Update UI for this session only
  saveState();
}

function updateProgress(id) {
  const exerciseStates = state[currentUser][id];
  const done = Object.keys(exerciseStates).length; // Count done exercises
  const tot = total[currentUser][id];
  const pct = Math.round((done / tot) * 100);
  const circumference = 113.1;
  const offset = circumference - (circumference * pct / 100);

  document.getElementById('ring-' + id).style.strokeDashoffset = offset;
  document.getElementById('pct-' + id).textContent = pct + '%';
  document.getElementById('sub-' + id).textContent = done + ' von ' + tot + ' Übungen erledigt';
}

function stopProp(e) { e.stopPropagation(); }

function isWorkoutComplete(user) {
  // Check if all exercises in all sessions are completed
  return Object.keys(state[user]).every(sessionId => {
    const exerciseStates = state[user][sessionId];
    const totalExercises = total[user][sessionId];
    return Object.keys(exerciseStates).length === totalExercises;
  });
}

function resetSession() {
  const panel = document.getElementById('panel-' + activeTab);
  panel.querySelectorAll('.ex-card').forEach(c => {
    c.classList.remove('done', 'expanded', 'current-exercise');
  });
  state[currentUser][activeTab] = {}; // Clear all exercise states
  updateProgress(activeTab);
  saveState();
}

function finishSession() {
  // TEMPORARY: Always show success screen for testing
  document.getElementById('complete-screen').classList.add('visible');
  return;
  
  // Check if current session is complete
  const currentSessionComplete = Object.keys(state[currentUser][activeTab]).length === total[currentUser][activeTab];
  
  // Check if full workout is complete
  const fullWorkoutComplete = isWorkoutComplete(currentUser);
  
  if (fullWorkoutComplete) {
    // Show success screen for full workout completion
    document.getElementById('complete-screen').classList.add('visible');
    return;
  } else if (currentSessionComplete) {
    // Show success screen for session completion
    document.getElementById('complete-screen').classList.add('visible');
    return;
  }
  
  // Scroll to top and reset (existing behavior)
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Reset all trainings for current user
  Object.keys(state[currentUser]).forEach(sessionId => {
    state[currentUser][sessionId] = {}; // Clear all exercise states
  });
  
  // Update UI
  updateUIForUser(currentUser, null);
  saveState();
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
  updateUIForUser(currentUser, null);
}

function updateButtonText() {
  const btn = document.getElementById('user-switch');
  if (currentUser === 'plan1') {
    btn.textContent = 'Plan 1 (aktiv)';
  } else {
    btn.textContent = 'Plan 2 (aktiv)';
  }
}

function updateUIForUser(user, sessionId) {
  // Update progress and UI for specified session or all sessions
  const sessionsToUpdate = sessionId ? [sessionId] : Object.keys(state[user]);
  sessionsToUpdate.forEach(id => {
    updateProgress(id);
    const panel = document.getElementById('panel-' + id);
    if (panel) {
      const cards = panel.querySelectorAll('.ex-card');
      const exerciseStates = state[user][id];
      // Set done class based on individual exercise states
      cards.forEach((card, index) => {
        if (exerciseStates[index]) {
          card.classList.add('done');
        } else {
          card.classList.remove('done');
        }
      });
    }
  });
}

function closeComplete() {
  document.getElementById('complete-screen').classList.remove('visible');
}

function resetWorkout() {
  // Reset all trainings for current user
  Object.keys(state[currentUser]).forEach(sessionId => {
    state[currentUser][sessionId] = {}; // Clear all exercise states
  });
  
  // Update UI
  updateUIForUser(currentUser, null);
  saveState();
  
  // Close success screen
  closeComplete();
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  updateButtonText();
  updateUIForUser(currentUser, null);
  registerServiceWorker();
});

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered successfully:', registration);
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  }
}