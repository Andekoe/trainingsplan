# Trainingsplan - Deployment Guide

## 📋 Project Overview

**Trainingsplan** is a modern, mobile-first workout tracker web application featuring:
- Multi-user support (Plan 1 & Plan 2)
- Progress tracking with animated progress rings
- Local storage persistence
- Responsive design optimized for mobile devices
- Sophisticated animations and micro-interactions

**Repository**: https://github.com/Andekoe/trainingsplan

## 🚀 GitHub Pages Deployment

This project is hosted on GitHub Pages and automatically deploys on every push to the main branch.

### Initial Setup (One-time)

1. **Push to GitHub** — Upload your project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Multi-user workout tracker with progress visualization"
   git branch -M main
   git remote add origin https://github.com/Andekoe/trainingsplan.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository settings → "Pages" in the left sidebar
   - Set "Source" to "Deploy from a branch"
   - Select "main" branch and "/root" folder
   - Click "Save"

3. **Access your live site** at:
   ```
   https://andekoe.github.io/trainingsplan/
   ```

### Updating & Deploying Changes

After making changes locally:

1. **Test locally first**:
   ```bash
   # Start local development server
   python3 -m http.server 8000
   # Open http://localhost:8000 in your browser
   ```

2. **Commit and push**:
   ```bash
   git add .
   git commit -m "feat: add current exercise highlighting and smart scrolling"
   git push
   ```

3. **Wait for deployment** — GitHub automatically rebuilds your site (usually within 30 seconds)

4. **Clear browser cache** if changes don't appear:
   - Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows/Linux)
   - Or open in incognito/private mode

## 🛠️ Development Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Git for version control
- Text editor (VS Code recommended)

### Local Development
```bash
# Clone the repository
git clone https://github.com/Andekoe/trainingsplan.git
cd trainingsplan

# Start local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

### Project Structure
```
trainingsplan/
├── index.html          # Main application
├── style.css           # Styling and animations
├── script.js           # Application logic
├── DEPLOYMENT.md       # This file
└── README.md           # Project documentation
```

## 📱 Features

- **Multi-User Support**: Separate workout plans for two users
- **Progress Tracking**: Visual progress rings and completion counters
- **Local Storage**: Automatic saving of workout progress
- **Mobile-First Design**: Optimized for phones and tablets
- **Smooth Animations**: Sophisticated micro-interactions
- **Current Exercise Highlighting**: Subtle focus on next exercise to complete
- **Smart Scrolling**: Auto-scroll to current exercise on session load

## 🔧 Technologies Used

- **HTML5**: Semantic markup with data-driven structure
- **CSS3**: Custom properties, flexbox, animations, mobile-first responsive design
- **Vanilla JavaScript**: State management, DOM manipulation, localStorage API
- **Google Fonts**: DM Sans and Bebas Neue typography

## 📊 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes and test locally
4. Commit with descriptive messages: `git commit -m "feat: add new workout tracking feature"`
5. Push to your fork: `git push origin feature/new-feature`
6. Create a Pull Request

## 📄 License

This project is open source and available under the MIT License.
- **Keep commits atomic** — One feature/fix per commit for clear history
- **Write clear commit messages** — Makes it easy to track changes
- **No secrets in repo** — Never commit API keys or sensitive data

### Troubleshooting

| Issue | Solution |
|-------|----------|
| Changes not visible | Hard refresh browser (Cmd+Shift+R), wait 60 seconds, or clear cache |
| 404 error | Ensure `index.html` is in the root folder, check repo name in URL |
| Site offline | Check repository settings → Pages, ensure branch is set to "main" |
| Old version showing | GitHub caches; use incognito mode or wait 24 hours |

### File Structure for Deployment

Required for GitHub Pages to work:
```
/repo-root
├── index.html      ← Must be in root
├── style.css
├── script.js
└── README.md
```

No build process needed — everything runs client-side!