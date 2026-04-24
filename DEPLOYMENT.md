# Deployment Guide

## GitHub Pages Deployment

This project is hosted on GitHub Pages and automatically deploys on every push to the main branch.

### Initial Setup (One-time)

1. **Push to GitHub** — Upload your project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository settings
   - Navigate to "Pages" in the left sidebar
   - Set "Source" to "Deploy from a branch"
   - Select "main" branch and "/root" folder
   - Click "Save"

3. **Access your site** at:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO/
   ```

### Updating & Deploying Changes

After making changes locally:

1. **Commit and push**:
   ```bash
   git add .
   git commit -m "Your change description"
   git push
   ```

2. **Wait for deployment** — GitHub automatically rebuilds your site (usually within 30 seconds)

3. **Clear browser cache** if changes don't appear:
   - Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows/Linux)
   - Or open in incognito/private mode

### Best Practices

- **Test locally first** — Open `index.html` in your browser before pushing
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