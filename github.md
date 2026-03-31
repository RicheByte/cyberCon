# 🚀 GitHub Pages Hosting Guide - cyberCOn

This document contains all steps to host your website on GitHub Pages.

---

## ✅ Prerequisites (What You Need)
- ✅ GitHub account
- ✅ Repository pushed to GitHub (cyberCOn)
- ✅ Git installed locally
- ✅ Node.js & npm installed

---

## 📋 Step-by-Step Setup Instructions

### **Step 1: Verify Your Repository on GitHub**
1. Go to https://github.com/YOUR-USERNAME/cyberCOn
2. Confirm the repository is **PUBLIC** (not private)
   - Go to Settings → Danger Zone → Repository Visibility
   - If Private, change to Public
3. Verify `.github/workflows/deploy.yml` file exists in your repo

### **Step 2: Enable GitHub Pages**
1. On GitHub, go to your repo
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `gh-pages` and `/root`
5. Click **Save**
6. Wait 1-2 minutes for GitHub Pages to activate

### **Step 3: Configure Your Repository Locally**
Run these commands in your terminal:

```bash
# Clone/open your repo
cd c:\Users\Riche\Documents\GitHub\cyberCon

# Verify main branch
git branch -a

# If not on main branch, switch to it
git checkout main
```

### **Step 4: Make Initial Commit & Push**
The workflow files have already been created. Now push them:

```bash
# Check status
git status

# Add files
git add .

# Commit changes
git commit -m "Configure GitHub Pages deployment"

# Push to GitHub
git push origin main
```

### **Step 5: Wait for Automatic Deployment**
1. Go to your repository on GitHub
2. Click **Actions** tab
3. Watch the **"Deploy to GitHub Pages"** workflow run
4. Wait for it to complete (usually 1-3 minutes)
5. You should see a green ✅ checkmark when done

### **Step 6: View Your Live Website**
Once deployment completes:
- Visit: **https://YOUR-USERNAME.github.io/cyberCOn/**
- Replace `YOUR-USERNAME` with your actual GitHub username

---

## 🔄 How It Works (Automatic Deployment)

Every time you:
1. Make changes to your code
2. Commit them: `git commit -m "message"`
3. Push to main: `git push origin main`

**GitHub Actions automatically:**
- Installs your npm dependencies
- Builds your project using Vite
- Deploys to the `gh-pages` branch
- Updates your live website

**No manual deployment needed!** 🎉

---

## 🐛 Troubleshooting

### Issue: Website doesn't appear at the URL
**Solution:**
- Wait 5 minutes (GitHub Pages can take time to propagate)
- Check Actions tab for any failed builds
- Verify repository is PUBLIC

### Issue: Build fails in GitHub Actions
**Solution:**
- Check the Actions tab → see error logs
- Verify `package.json` has `build` script: `"build": "vite build"`
- Ensure all dependencies are listed in package.json

### Issue: Website displays but styling/images broken
**Solution:**
- This is usually the `base` path in `vite.config.js`
- Verify it's set to: `base: '/cyberCOn/',`
- Rebuild: `npm run build` locally
- Push changes: `git add . && git commit -m "fix paths" && git push origin main`

---

## 📝 Configuration Summary

**Files Modified:**
- ✅ `vite.config.js` - Added base path: `/cyberCOn/`
- ✅ `.github/workflows/deploy.yml` - Created automated deployment

**Build Command:** `npm run build`
**Deploy Directory:** `dist/`
**GitHub Pages URL:** https://YOUR-USERNAME.github.io/cyberCOn/

---

## 🚀 Quick Command Reference

```bash
# Initial setup - run once
git status
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main

# After making changes
git add .
git commit -m "Your commit message"
git push origin main

# Check deployment status
# Go to: https://github.com/YOUR-USERNAME/cyberCOn/actions
```

---

## ✨ Next Steps

After your site is live:
1. **Share your URL** with others
2. **Add custom domain** (optional) - GitHub Pages settings
3. **Enable HTTPS** - automatically enabled for gh-pages
4. **Monitor Actions tab** for any build issues

---

**Need help?** Check the Actions tab on GitHub for detailed error logs!
