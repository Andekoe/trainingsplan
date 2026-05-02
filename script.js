// ─── DEFAULT EXERCISE DATA ────────────────────────────────────────────────────
const DEFAULT_PLANS = {
  plan1: {
    pushA: {
      title: 'PUSH A', meta: 'Brust · Schultern · Trizeps', isPush: true,
      groups: [
        { label: 'Oberkörper', exercises: [
          { name: 'Bankdrücken',              sets: '4 Sätze', reps: '8–10 Wdh',  equip: 'KH / LH' },
          { name: 'Schrägbank Drücken',       sets: '3 Sätze', reps: '10–12 Wdh', equip: 'KH' },
          { name: 'Schulterdrücken',          sets: '4 Sätze', reps: '8–10 Wdh',  equip: 'KH' },
          { name: 'Seitheben',                sets: '3 Sätze', reps: '12–15 Wdh', equip: 'KH' },
          { name: 'Trizeps Dips',             sets: '3 Sätze', reps: '10–12 Wdh', equip: 'Körpergewicht' },
        ]},
        { label: 'Beine', exercises: [
          { name: 'Beinpresse',               sets: '3 Sätze', reps: '12–15 Wdh', equip: 'Maschine' },
          { name: 'Beinstrecker',             sets: '2 Sätze', reps: '15 Wdh',    equip: 'Maschine' },
        ]},
      ]
    },
    pullA: {
      title: 'PULL A', meta: 'Rücken · Bizeps', isPush: false,
      groups: [
        { label: 'Oberkörper', exercises: [
          { name: 'Langhantelrudern',         sets: '4 Sätze', reps: '8–10 Wdh',  equip: 'LH' },
          { name: 'Kabelrudern',              sets: '4 Sätze', reps: '10–12 Wdh', equip: 'Kabel' },
          { name: 'Latzug breit',             sets: '3 Sätze', reps: '10–12 Wdh', equip: 'Maschine' },
          { name: 'Face Pulls',               sets: '3 Sätze', reps: '12–15 Wdh', equip: 'Kabel' },
          { name: 'Bizeps-Curls',             sets: '3 Sätze', reps: '12 Wdh',    equip: 'KH' },
        ]},
        { label: 'Beine', exercises: [
          { name: 'Beinbeuger liegend',       sets: '3 Sätze', reps: '12–15 Wdh', equip: 'Maschine' },
          { name: 'Wadenheben stehend',       sets: '2 Sätze', reps: '15 Wdh',    equip: 'Maschine' },
        ]},
      ]
    },
    pushB: {
      title: 'PUSH B', meta: 'Brust · Schultern · Trizeps', isPush: true,
      groups: [
        { label: 'Oberkörper', exercises: [
          { name: 'Schrägbank Drücken',       sets: '4 Sätze', reps: '8–10 Wdh',  equip: 'KH / LH' },
          { name: 'Brustpresse Maschine',     sets: '3 Sätze', reps: '10–12 Wdh', equip: 'Maschine' },
          { name: 'Schulterdrücken Maschine', sets: '3 Sätze', reps: '10–12 Wdh', equip: 'Maschine' },
          { name: 'Seitheben',                sets: '3 Sätze', reps: '12–15 Wdh', equip: 'KH' },
          { name: 'Trizeps Überkopf',         sets: '3 Sätze', reps: '12–15 Wdh', equip: 'Kabel / KH' },
        ]},
        { label: 'Beine', exercises: [
          { name: 'Beinpresse',               sets: '3 Sätze', reps: '12–15 Wdh', equip: 'Maschine' },
          { name: 'Beinstrecker',             sets: '2 Sätze', reps: '15 Wdh',    equip: 'Maschine' },
        ]},
      ]
    },
    pullB: {
      title: 'PULL B', meta: 'Rücken · Bizeps', isPush: false,
      groups: [
        { label: 'Oberkörper', exercises: [
          { name: 'Latzug eng / neutral',     sets: '4 Sätze', reps: '10–12 Wdh', equip: 'Maschine' },
          { name: 'Kabelrudern',              sets: '4 Sätze', reps: '10–12 Wdh', equip: 'Kabel' },
          { name: 'Kurzhantel Pullover',      sets: '3 Sätze', reps: '12 Wdh',    equip: 'KH' },
          { name: 'Bizeps-Curl Maschine',     sets: '3 Sätze', reps: '12 Wdh',    equip: 'Maschine' },
          { name: 'Hammer-Curl',              sets: '2 Sätze', reps: '12 Wdh',    equip: 'KH' },
        ]},
        { label: 'Beine', exercises: [
          { name: 'Beinbeuger sitzend',       sets: '3 Sätze', reps: '12–15 Wdh', equip: 'Maschine' },
          { name: 'Wadenheben sitzend',       sets: '2 Sätze', reps: '15 Wdh',    equip: 'Maschine' },
        ]},
      ]
    }
  },
  plan2: {
    ganzkörper: {
      title: 'GANZKÖRPER', meta: 'Ganzkörper-Routine', isPush: true,
      groups: [
        { label: 'Ganzkörper', exercises: [
          { name: 'Beinpresse',                     sets: '2–3 Sätze', reps: '10–15 Wdh', equip: 'Maschine' },
          { name: 'Latzug zur Brust',               sets: '2–3 Sätze', reps: '10–12 Wdh', equip: 'Maschine' },
          { name: 'Brustpresse (Maschine)',         sets: '2–3 Sätze', reps: '10–12 Wdh', equip: 'Maschine' },
          { name: 'Rudern (Maschine oder Kabel)',   sets: '2–3 Sätze', reps: '10–12 Wdh', equip: 'Maschine / Kabel' },
          { name: 'Schulterdrücken (Maschine)',     sets: '2 Sätze',   reps: '10–12 Wdh', equip: 'Maschine' },
          { name: 'Beinbeuger (Maschine)',          sets: '2–3 Sätze', reps: '12–15 Wdh', equip: 'Maschine' },
        ]},
      ]
    }
  }
};

// ─── STATE ────────────────────────────────────────────────────────────────────
let plans = null;
let activePlan = 'plan1';
let activeTab = 'pushA';
let editMode = false;
let sheetCtx = null; // { sessionId, groupIdx, exIdx } — exIdx null = add new

const state = {
  plan1: { pushA: 0, pullA: 0, pushB: 0, pullB: 0, maxWeights: {} },
  plan2: { ganzkörper: 0, maxWeights: {} }
};

function getCurrentSessions() {
  return Object.keys(plans[activePlan]);
}

// ─── RENDERING ────────────────────────────────────────────────────────────────
function countExercises(plan) {
  return plan.groups.reduce((sum, g) => sum + g.exercises.length, 0);
}

function renderPanel(sessionId) {
  const plan   = plans[activePlan][sessionId];
  const panel  = document.getElementById('panel-' + sessionId);
  const color  = plan.isPush ? '#d4f244' : '#44f2c8';
  const aClass = plan.isPush ? 'accent-push' : 'accent-pull';
  const pClass = plan.isPush ? '' : ' pull-card';
  const total  = countExercises(plan);
  const curState = state[activePlan];

  let html = `
    <div class="session-header">
      <div class="session-title ${aClass}">${plan.title}</div>
      <div class="session-meta">
        <span>${plan.meta}</span><span>·</span><span>${total} Übungen</span>
      </div>
    </div>
    <div class="overall-progress">
      <div class="prog-ring">
        <svg width="44" height="44" viewBox="0 0 44 44">
          <circle class="ring-bg" cx="22" cy="22" r="18"/>
          <circle class="ring-fill" id="ring-${sessionId}" cx="22" cy="22" r="18"
            stroke="${color}" stroke-dasharray="113.1" stroke-dashoffset="113.1"/>
        </svg>
        <div class="ring-text" id="pct-${sessionId}">0%</div>
      </div>
      <div class="prog-info">
        <div class="prog-label">Session Fortschritt</div>
        <div class="prog-sub" id="sub-${sessionId}">0 von ${total} Übungen erledigt</div>
      </div>
    </div>`;

  plan.groups.forEach((group, gIdx) => {
    if (gIdx > 0) html += '<div class="group-divider"></div>';
    html += `<div class="group-label">${group.label}</div>`;

    group.exercises.forEach((ex, eIdx) => {
      const maxKey = sessionId + ':' + ex.name;
      const maxVal = curState.maxWeights[maxKey] || '—';
      html += `
        <div class="ex-card${pClass}" data-session="${sessionId}" data-group="${gIdx}" data-ex="${eIdx}">
          <div class="ex-main">
            <div class="ex-check">✓</div>
            <div class="ex-info">
              <div class="ex-name">${ex.name}</div>
              <div class="ex-sets-row">
                <span class="set-pill">${ex.sets}</span>
                <span class="set-pill">${ex.reps}</span>
                <span class="set-pill">${ex.equip}</span>
              </div>
            </div>
            ${editMode ? '<div class="ex-edit-btn">✏</div>' : ''}
          </div>
          ${editMode ? `
          <div class="ex-reorder">
            ${eIdx > 0 ? `<button class="btn-move-ex" data-direction="up" title="Nach oben">↑</button>` : ''}
            ${eIdx < group.exercises.length - 1 ? `<button class="btn-move-ex" data-direction="down" title="Nach unten">↓</button>` : ''}
          </div>` : ''}
          <div class="ex-max-row">
            <span class="max-label">Letztes Max</span>
            <div class="max-value-wrap">
              <span class="max-value">${maxVal}</span>
              <span class="max-unit">kg</span>
            </div>
          </div>
        </div>`;
    });

    if (editMode) {
      html += `<button class="btn-add-ex" data-group="${gIdx}">+ Übung hinzufügen</button>`;
    }
  });

  panel.innerHTML = html;
}

function renderAll() {
  getCurrentSessions().forEach(id => renderPanel(id));
  getCurrentSessions().forEach(id => {
    const total = countExercises(plans[activePlan][id]);
    const cards = document.querySelectorAll('#panel-' + id + ' .ex-card');
    const done = state[activePlan][id];
    for (let i = 0; i < done; i++) {
      if (cards[i]) cards[i].classList.add('done');
    }
    updateProgress(id, total);
  });
  updatePlanBadge();
}

// ─── PROGRESS ─────────────────────────────────────────────────────────────────
function updateProgress(id, total) {
  if (total === undefined) total = countExercises(plans[activePlan][id]);
  const done   = state[activePlan][id];
  const pct    = Math.round((done / total) * 100);
  const offset = 113.1 - (113.1 * pct / 100);
  const ring   = document.getElementById('ring-' + id);
  const pctEl  = document.getElementById('pct-' + id);
  const subEl  = document.getElementById('sub-' + id);
  if (ring)  ring.style.strokeDashoffset = offset;
  if (pctEl) pctEl.textContent = pct + '%';
  if (subEl) subEl.textContent = done + ' von ' + total + ' Übungen erledigt';
}

function updatePlanBadge() {
  document.getElementById('plan-selector').textContent = activePlan === 'plan1' ? 'Plan 1' : 'Plan 2';
}

// ─── PLAN SWITCHING ───────────────────────────────────────────────────────────
function switchPlan(plan) {
  activePlan = plan;
  activeTab = getCurrentSessions()[0];

  // Mark panels for plan-switch animation
  document.querySelectorAll('.training-panel.active').forEach(p => p.classList.add('plan-switch'));
  document.querySelectorAll('.training-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-row').forEach(tr => tr.innerHTML = '');

  const tabRow = document.querySelector('.tab-row');
  getCurrentSessions().forEach((sessionId, idx) => {
    const session = plans[plan][sessionId];
    const btn = document.createElement('button');
    btn.className = 'tab ' + (session.isPush ? 'push' : 'pull') + (idx === 0 ? ' active' : '');
    btn.textContent = session.title;
    btn.onclick = function() { switchTab(sessionId, this); };
    tabRow.appendChild(btn);
  });

  switchTab(activeTab, document.querySelector('.tab.active'));
  renderAll();
}

// ─── EVENT DELEGATION ─────────────────────────────────────────────────────────
function setupEvents() {
  document.getElementById('main-scroll').addEventListener('click', function(e) {
    // Move exercise button
    const moveBtn = e.target.closest('.btn-move-ex');
    if (moveBtn) {
      const card = moveBtn.closest('.ex-card');
      moveExercise(card.dataset.session, +card.dataset.group, +card.dataset.ex, moveBtn.dataset.direction);
      return;
    }
    // Edit button on card
    const editBtn = e.target.closest('.ex-edit-btn');
    if (editBtn) {
      const card = editBtn.closest('.ex-card');
      openEditSheet(card.dataset.session, +card.dataset.group, +card.dataset.ex);
      return;
    }
    // Max weight row
    const maxRow = e.target.closest('.ex-max-row');
    if (maxRow) {
      const card = maxRow.closest('.ex-card');
      editMax(e, card.dataset.session, +card.dataset.group, +card.dataset.ex);
      return;
    }
    // Add exercise button
    const addBtn = e.target.closest('.btn-add-ex');
    if (addBtn) {
      const panel = addBtn.closest('.training-panel');
      openAddSheet(panel.id.replace('panel-', ''), +addBtn.dataset.group);
      return;
    }
    // Card toggle
    const card = e.target.closest('.ex-card');
    if (card && !editMode) {
      toggleCard(card, card.dataset.session);
    }
  });
}

// ─── CARD TOGGLE ──────────────────────────────────────────────────────────────
function toggleCard(card, sessionId) {
  const wasDone = card.classList.contains('done');
  const curState = state[activePlan];
  if (wasDone) {
    card.classList.remove('done');
    curState[sessionId]--;
  } else {
    card.classList.add('done');
    curState[sessionId]++;
  }
  updateProgress(sessionId);
  saveState();
}

// ─── EXERCISE REORDERING ──────────────────────────────────────────────────────
function moveExercise(sessionId, groupIdx, exIdx, direction) {
  const group = plans[activePlan][sessionId].groups[groupIdx];
  const newIdx = direction === 'up' ? exIdx - 1 : exIdx + 1;
  if (newIdx < 0 || newIdx >= group.exercises.length) return;
  [group.exercises[exIdx], group.exercises[newIdx]] = [group.exercises[newIdx], group.exercises[exIdx]];
  savePlans();
  refreshPanel(sessionId);
}

// ─── MAX WEIGHT ───────────────────────────────────────────────────────────────
function editMax(event, sessionId, groupIdx, exIdx) {
  const ex  = plans[activePlan][sessionId].groups[groupIdx].exercises[exIdx];
  const key = sessionId + ':' + ex.name;
  const row = event.target.closest('.ex-max-row');
  const span = row.querySelector('.max-value');
  if (!span) return;

  const curState = state[activePlan];
  const input = document.createElement('input');
  input.type  = 'number';
  input.className = 'max-input';
  input.value = curState.maxWeights[key] || '';
  input.placeholder = '0';
  input.min   = '0';
  input.max   = '9999';
  input.setAttribute('inputmode', 'decimal');
  span.replaceWith(input);
  input.focus();
  input.select();

  function save() {
    const val = parseFloat(input.value);
    if (!isNaN(val) && val > 0) {
      curState.maxWeights[key] = val;
    } else {
      delete curState.maxWeights[key];
    }
    saveState();
    const newSpan = document.createElement('span');
    newSpan.className = 'max-value';
    newSpan.textContent = curState.maxWeights[key] ?? '—';
    input.replaceWith(newSpan);
  }
  input.addEventListener('blur', save);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); input.blur(); } });
}

// ─── TAB SWITCHING ────────────────────────────────────────────────────────────
function switchTab(id, btn) {
  const oldPanel = document.querySelector('.training-panel.active');
  if (oldPanel) oldPanel.classList.remove('plan-switch');

  document.querySelectorAll('.training-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById('panel-' + id).classList.add('active');
  btn.classList.add('active');
  activeTab = id;
  const isPush = plans[activePlan][id].isPush;
  document.getElementById('btn-finish').className = 'btn-done ' + (isPush ? 'push' : 'pull');
  document.getElementById('main-scroll').scrollTop = 0;
}

// ─── SESSION ACTIONS ──────────────────────────────────────────────────────────
function resetSession() {
  document.querySelectorAll('#panel-' + activeTab + ' .ex-card').forEach(c => c.classList.remove('done'));
  state[activePlan][activeTab] = 0;
  updateProgress(activeTab);
  saveState();
}

function finishSession() {
  document.getElementById('complete-screen').classList.add('visible');
}

function closeComplete() {
  document.getElementById('complete-screen').classList.remove('visible');
  // Reset all exercises for current session (keeping max weights)
  document.querySelectorAll('#panel-' + activeTab + ' .ex-card').forEach(c => c.classList.remove('done'));
  state[activePlan][activeTab] = 0;
  updateProgress(activeTab);
  saveState();
}

// ─── EDIT MODE ────────────────────────────────────────────────────────────────
function toggleEditMode() {
  editMode = !editMode;
  document.getElementById('btn-edit-mode').classList.toggle('active', editMode);
  document.getElementById('bottombar').classList.toggle('edit-mode', editMode);
  renderAll();
  document.getElementById('main-scroll').scrollTop = 0;
}

// ─── EDIT SHEET ───────────────────────────────────────────────────────────────
function openEditSheet(sessionId, groupIdx, exIdx) {
  const ex = plans[activePlan][sessionId].groups[groupIdx].exercises[exIdx];
  sheetCtx = { sessionId, groupIdx, exIdx };
  document.getElementById('sheet-title').textContent   = 'Übung bearbeiten';
  document.getElementById('edit-name').value            = ex.name;
  document.getElementById('edit-sets').value            = ex.sets;
  document.getElementById('edit-reps').value            = ex.reps;
  document.getElementById('edit-equip').value           = ex.equip;
  document.getElementById('btn-delete-ex').style.display = '';
  document.getElementById('btn-save-ex').textContent    = 'Speichern';
  showSheet();
}

function openAddSheet(sessionId, groupIdx) {
  sheetCtx = { sessionId, groupIdx, exIdx: null };
  document.getElementById('sheet-title').textContent   = 'Übung hinzufügen';
  document.getElementById('edit-name').value            = '';
  document.getElementById('edit-sets').value            = '';
  document.getElementById('edit-reps').value            = '';
  document.getElementById('edit-equip').value           = '';
  document.getElementById('btn-delete-ex').style.display = 'none';
  document.getElementById('btn-save-ex').textContent    = 'Hinzufügen';
  showSheet();
}

function showSheet() {
  document.getElementById('edit-sheet').classList.add('open');
  document.getElementById('sheet-overlay').classList.add('open');
  setTimeout(() => document.getElementById('edit-name').focus(), 300);
}

function closeSheet() {
  document.getElementById('edit-sheet').classList.remove('open');
  document.getElementById('sheet-overlay').classList.remove('open');
  sheetCtx = null;
}

function saveExercise() {
  if (!sheetCtx) return;
  const { sessionId, groupIdx, exIdx } = sheetCtx;
  const name  = document.getElementById('edit-name').value.trim();
  const sets  = document.getElementById('edit-sets').value.trim();
  const reps  = document.getElementById('edit-reps').value.trim();
  const equip = document.getElementById('edit-equip').value.trim();
  if (!name) return;

  if (exIdx === null) {
    plans[activePlan][sessionId].groups[groupIdx].exercises.push({ name, sets, reps, equip });
  } else {
    plans[activePlan][sessionId].groups[groupIdx].exercises[exIdx] = { name, sets, reps, equip };
  }
  savePlans();
  closeSheet();
  refreshPanel(sessionId);
}

function deleteExercise() {
  if (!sheetCtx || sheetCtx.exIdx === null) return;
  const { sessionId, groupIdx, exIdx } = sheetCtx;
  plans[activePlan][sessionId].groups[groupIdx].exercises.splice(exIdx, 1);
  const newTotal = countExercises(plans[activePlan][sessionId]);
  if (state[activePlan][sessionId] > newTotal) state[activePlan][sessionId] = newTotal;
  savePlans();
  saveState();
  closeSheet();
  refreshPanel(sessionId);
}

function refreshPanel(sessionId) {
  renderPanel(sessionId);
  const cards = document.querySelectorAll('#panel-' + sessionId + ' .ex-card');
  const done = state[activePlan][sessionId];
  for (let i = 0; i < done; i++) {
    if (cards[i]) cards[i].classList.add('done');
  }
  updateProgress(sessionId);
}

// ─── STORAGE ──────────────────────────────────────────────────────────────────
function loadState() {
  const savedPlans = localStorage.getItem('trainingsplan-plans');
  plans = savedPlans
    ? JSON.parse(savedPlans)
    : JSON.parse(JSON.stringify(DEFAULT_PLANS));

  const savedState = localStorage.getItem('trainingsplan-state');
  if (savedState) {
    const loaded = JSON.parse(savedState);
    Object.assign(state.plan1, loaded.plan1 || {});
    Object.assign(state.plan2, loaded.plan2 || {});
  }

  switchPlan(activePlan);
  setupEvents();
}

function saveState() {
  localStorage.setItem('trainingsplan-state', JSON.stringify(state));
}

function savePlans() {
  localStorage.setItem('trainingsplan-plans', JSON.stringify(plans));
}

document.addEventListener('DOMContentLoaded', loadState);
