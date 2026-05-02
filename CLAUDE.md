# CLAUDE.md — GYM LOG Project Guidelines

## Project Summary
GYM LOG is a lightweight static PWA workout tracker for two primary users (owner + wife). It runs fully in the browser with no backend, no build process, and no external dependencies beyond Google Fonts. See `project_specs.md` for the full product vision.

---

## How to Behave

### Tone & Communication
- Keep explanations short and non-technical — the user is not a developer
- Never use jargon without a one-sentence explanation
- Format responses with clear headers and bullet points when there are multiple topics
- Be direct: state what changed and what comes next, nothing else at the end of a turn
- No emojis unless the user uses them first

### Answering Style
- For exploratory questions ("what could we do about X?"): respond in 2–3 sentences max, give a recommendation and the key tradeoff
- For implementation requests: do the work, then explain in plain language what was built and how to use it
- Never ask the user to write or edit code themselves

### Escalation Policy
- For small changes (rename, style tweak, single function): just do it, no confirmation needed
- For medium changes (new feature, structural refactor): briefly state the plan in 2–3 sentences and wait for a go-ahead before coding
- For large changes (architectural shift, data migration, breaking change): describe the approach, the risk, and ask explicitly for confirmation
- Never push to GitHub without explicit user instruction

---

## Cost & Token Sensitivity

- **Always prefer targeted edits** (`Edit` tool) over full file rewrites unless the change touches >50% of the file
- Read only the files needed for the task — avoid loading the whole codebase speculatively
- Use the `Explore` subagent for broad searches rather than loading multiple files into main context
- Do not spawn agents for tasks that can be done with a direct `grep` or `Read`
- When researching, prefer one focused search over multiple exploratory ones
- Skip writing comments, docstrings, or explanatory inline notes — code should speak for itself

---

## Technical Constraints

### Stack (do not deviate without discussion)
- Vanilla HTML, CSS, JavaScript only — no frameworks, no npm, no build step
- No backend, no database, no external APIs
- State persisted in `localStorage` only
- Deployed as a static site on GitHub Pages (also used as a PWA)

### Code Style
- CSS variables for all colors and spacing — no hardcoded hex values outside `:root`
- Mobile-first layout; test mentally against a 390px viewport
- No comments unless the WHY is genuinely non-obvious
- Keep functions small and single-purpose
- Event delegation preferred over inline `onclick` for dynamically rendered content

### Data Storage Keys (localStorage)
- `trainingsplan-state` — done counts + max weights per exercise (keyed as `sessionId:exerciseName`)
- `trainingsplan-plans` — custom exercise definitions (falls back to `DEFAULT_PLANS` in script.js if absent)

---

## Testing Policy
- This project has no automated test suite — that is intentional and appropriate for its scope
- After any change to `script.js` or `index.html`, mentally trace the critical paths:
  1. Tab switching updates the badge and finish button color
  2. Tapping a card toggles `.done` and updates the progress ring
  3. Max weight input saves on blur/Enter and persists after reload
  4. Edit mode: open sheet → edit → save/delete → panel re-renders correctly
  5. Reset clears done marks for the active tab only
- Flag any change that could corrupt `localStorage` state as high-risk and confirm before proceeding

---

## Commit Messages
- Always write a commit message after each implementation
- Format: `type: short summary (max 72 chars)` followed by a blank line and 1–3 bullet points if needed
- Types: `feat` (new feature), `fix` (bug fix), `style` (visual only), `refactor` (no behavior change), `docs` (docs only)
- Example: `feat: add exercise edit mode with bottom sheet`

---

## What NOT to Do
- Do not add features the user hasn't asked for
- Do not refactor working code unless it directly blocks a requested feature
- Do not add error handling for scenarios that can't happen in this app's context
- Do not introduce external libraries or CDN links (except Google Fonts, already present)
- Do not create a backend, login system, or database — ever, unless the user explicitly requests it and confirms
- Do not add a service worker or manifest without discussing PWA implications first
