# 🚀 Deployment Guide - Jennie & Josh Love Story

## GitHub Repository Setup

### 1. Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it: `jennie-josh-love-story`
5. Make it **Private** (recommended for personal content)
6. Don't initialize with README (we already have one)
7. Click "Create repository"

### 2. Connect Local Repository to GitHub
```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/jennie-josh-love-story.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Vercel Deployment

### 1. Connect to Vercel
1. Go to [Vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Import your `jennie-josh-love-story` repository
4. Vercel will automatically detect it's a Vite project

### 2. Configure Deployment
- **Framework Preset**: Vite (auto-detected)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `dist` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### 3. Environment Variables (if needed)
- No environment variables required for this project

### 4. Deploy
1. Click "Deploy"
2. Wait for build to complete (usually 2-3 minutes)
3. Your site will be live at: `https://jennie-josh-love-story.vercel.app`

## Custom Domain (Optional)

### 1. Add Custom Domain
1. In your Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `jennie-josh.com`)
4. Follow the DNS configuration instructions

### 2. SSL Certificate
- Vercel automatically provides SSL certificates
- Your site will be secure with HTTPS

## Post-Deployment

### 1. Test Your Site
- ✅ Check all images load properly
- ✅ Test music player functionality
- ✅ Verify all memories display correctly
- ✅ Test on mobile devices

### 2. Share Your Love Story
- Send the link to your loved one
- Perfect for anniversaries, Valentine's Day, or special occasions

## Troubleshooting

### Images Not Loading
- Ensure all images are in `public/images/`
- Check file paths in `src/data/memories.ts`
- Verify file extensions match exactly

### Music Not Playing
- Check browser autoplay settings
- Ensure all audio files are in `public/audio/`
- Test on different browsers

### Build Errors
- Run `npm install` locally first
- Check for any TypeScript errors
- Ensure all dependencies are in `package.json`

## Security & Privacy

### 1. Repository Privacy
- Keep your GitHub repository **private**
- Only share the deployed Vercel link
- Your personal photos and memories stay protected

### 2. Content Protection
- All content is client-side (no server storage)
- Photos and memories are only visible to those with the link
- Consider password protection if needed

## Maintenance

### 1. Adding New Memories
1. Add new memory to `src/data/memories.ts`
2. Add corresponding image to `public/images/`
3. Commit and push to GitHub
4. Vercel will automatically redeploy

### 2. Updating Music
1. Add new MP3 files to `public/audio/`
2. Update playlist in `src/components/MusicPlayer.tsx`
3. Commit and push changes

## Support

If you encounter any issues:
1. Check the Vercel deployment logs
2. Test locally with `npm run dev`
3. Verify all file paths are correct
4. Check browser console for errors

---

**Your love story is now live on the internet! 💕**

*Remember: This is a personal project. Share the link only with your loved one.* 