# Hacksphere - Vice City Theme Website

A cool, minimalistic GTA Vice City-themed website built with React and Vite. It features a loading screen, a whiteboard-style timeline, and neon pink/cyan aesthetics.

## Features
- GTA-style Loading Screen with "Enter" mechanism.
- Audio Player for background music (.mp3 needed in public folder).
- Neon Vice City styling (Dark Mode, Pink, Cyan, Gold).
- Interactive Whiteboard Timeline with sticky notes and pins.
- Responsive structure.

## Deployment Instructions

### Option 1: Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and log in.
3. Click "Add New Project" and import your repository.
4. Vercel will auto-detect "Vite". Ensure the Build Command is `npm run build` and Output Directory is `dist`.
5. Click "Deploy". Your site will be live in seconds.

### Option 2: Netlify
1. Push your code to a GitHub repository.
2. Go to [Netlify](https://www.netlify.com/) and log in.
3. Click "Add new site" -> "Import an existing project".
4. Select your GitHub repo.
5. Build settings: 
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy Site".

## Local Development
Run the following commands:
```bash
npm install
npm run dev
```
