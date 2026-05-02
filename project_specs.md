# Project Specs — GYM LOG

## Vision
A fast, minimal gym workout tracker that gets out of the way. Open it at the gym, tap your exercises as you go, glance at your last max weight, close it. No accounts, no ads, no sync headaches.

## Goal
Replace paper notes and mental tracking with a clean mobile app that two people (and optionally a few friends) can use on their own phones — without needing a server, a login, or a data plan beyond the first load.

---

## Current Users
| User | Plan | Device |
|------|------|--------|
| Owner | Push A + Pull A | Own phone |
| Wife | Push B + Pull B | Own phone |
| Friends (future) | Any tab | Own phone (via GitHub Pages URL) |

---

## Core Principles

**Lightweight over feature-rich**
Every feature must earn its place. If it adds complexity without clear value at the gym, it doesn't ship.

**No friction at the gym**
The app must work instantly. No loading spinner, no login, no "your session expired". Offline-first by design.

**German UI, gym-standard naming**
All UI text in German. Exercise names follow German gym convention — English names are kept only where there is no clean German equivalent (e.g. "Face Pulls").

**Personal tinkering project**
This is not a commercial product. The goal is to learn, experiment, and build something genuinely useful for the people using it — without over-engineering.

---

## Features (Current)

### Workout Tracking
- 4 training sessions: Push A, Pull A, Push B, Pull B
- Tap exercise card to mark as done (toggleable)
- Progress ring per session (0–100%)
- Session completion flow with "FERTIG!" screen
- Reset button clears the current session

### Last Max Tracking
- Every exercise card shows "Letztes Max — kg"
- Tap the strip to enter or update the max weight
- Persists across sessions via localStorage
- Keyed by `sessionId:exerciseName` (survives reordering)

### Exercise Editing (no code required)
- Pencil icon (✏) in top bar toggles edit mode
- Edit any exercise: name, sets, reps, equipment
- Delete exercises
- Add new exercises to any group
- Changes saved to localStorage, survive app restarts
- Resetting to defaults requires clearing localStorage (intentional — not a common action)

---

## Planned / Under Discussion

| Feature | Priority | Notes |
|---------|----------|-------|
| Rename groups (Oberkörper/Beine) | Low | Nice-to-have, not blocking |
| Reorder exercises via drag | Low | Complex, limited gym value |
| Session history log | Medium | "Last 5 sessions" — needs design |
| Progressive overload suggestions | Low | Useful but risks scope creep |
| PWA manifest + icon | Medium | Makes install experience cleaner |
| Multi-plan support for friends | Low | Currently anyone can use their own device |

---

## Technical Architecture

| Aspect | Decision |
|--------|----------|
| Frontend | Vanilla HTML + CSS + JavaScript, no framework |
| Storage | localStorage only (no backend) |
| Hosting | GitHub Pages (static, free) |
| PWA | Used as installed PWA on iOS/Android |
| Fonts | Google Fonts (Bebas Neue, DM Sans) via CDN |
| Build | None — files served directly |

### localStorage Keys
- `trainingsplan-state` — `{ pushA, pullA, pushB, pullB, maxWeights }` — session progress and max weights
- `trainingsplan-plans` — full exercise plan object (absent = use JS defaults)

---

## Design Language
- Dark theme (`#080808` background)
- Two accent colors: lime green (`#d4f244`) for Push, cyan (`#44f2c8`) for Pull
- Bebas Neue for headings, DM Sans for body text
- 16px border radius, generous padding — designed for sweaty thumbs
- No icons library — Unicode characters only (✓, ✏, ↺, 💪)

---

## Out of Scope (explicitly)
- User accounts / authentication
- Cloud sync
- Social features
- Monetization
- Calorie / nutrition tracking
- Exercise video demos
