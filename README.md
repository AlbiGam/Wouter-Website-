# Wouter Website

This project is configured to deploy publicly on GitHub Pages, Netlify, and Vercel.

## Local Commands

- Install dependencies: npm install
- Start dev server: npm run dev
- Build production files: npm run build
- Preview production build: npm run preview

## Public Deployment Options

### 1) GitHub Pages (automatic on push)

This repository includes a workflow at .github/workflows/deploy-pages.yml.

Steps:

1. Create a new GitHub repository.
2. Add it as remote and push:
	 - git remote add origin https://github.com/<your-username>/<your-repo>.git
	 - git add .
	 - git commit -m "Deploy-ready setup"
	 - git push -u origin main
3. In GitHub repository settings, open Pages and ensure source is GitHub Actions.
4. After the workflow finishes, your site URL will appear in the workflow output.

### 2) Netlify

- Manual instant publish: drag and drop the dist folder into Netlify Drop.
- Connected deploy:
	- Build command: npm run build
	- Publish directory: dist

This repo includes netlify.toml for automatic configuration.

### 3) Vercel

- Import repository into Vercel.
- Framework preset: Vite
- Build command: npm run build
- Output directory: dist

This repo includes vercel.json for automatic configuration.

## Notes

- Vite base is set to ./ so assets work correctly on subpaths.
- If you use a custom domain, configure DNS in your hosting provider.
