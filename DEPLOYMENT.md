# Deploy Your Retro Run Sorter App as a Website

## Step 1: Build the Web Version

Run this command in your terminal:
```bash
bun run build:web
```

This creates a `dist` folder with all your website files.

## Step 2: Deploy to Netlify (Easiest & Free)

### Option A: Drag & Drop (No Account Needed)
1. Go to https://app.netlify.com/drop
2. Drag the `dist` folder onto the page
3. Get your live website URL instantly!

### Option B: With Netlify Account (Better for Updates)
1. Sign up at https://netlify.com (free)
2. Click "Add new site" → "Deploy manually"
3. Drag the `dist` folder
4. Get a permanent URL (you can customize it)

## Step 3: Share Your App

Once deployed, you'll get a URL like:
- `https://your-app-name.netlify.app`

Anyone can open this in their browser on any device - no app installation needed!

## Alternative Hosting Options

### Vercel (Also Free)
1. Sign up at https://vercel.com
2. Install Vercel CLI: `npm i -g vercel`
3. Run: `vercel dist`
4. Follow prompts to deploy

### GitHub Pages (Free)
1. Push your code to GitHub
2. Go to Settings → Pages
3. Select the `dist` folder as source
4. Get URL: `https://yourusername.github.io/repo-name`

## Updating Your Website

When you make changes:
1. Run `bun run build:web` again
2. Upload the new `dist` folder to your hosting service
3. Changes go live instantly!

## Notes

- The website works on all devices (phones, tablets, computers)
- No need for users to download any apps
- Works in any modern web browser
- Your app is already optimized for web with React Native Web
