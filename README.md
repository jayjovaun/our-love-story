# Jennie & Josh - Our Love Story 💕

A beautiful, interactive digital love story website built with React, TypeScript, and Vite. This romantic timeline showcases precious memories with stunning animations, music, and a personalized experience.

## ✨ Features

- **Interactive Timeline** - Beautiful chronological display of your love story
- **Memory Cards** - Each milestone with photos, dates, and locations
- **Love Letter Modals** - Click any memory to read a personal love letter
- **Background Music** - Romantic playlist with multiple songs
- **Responsive Design** - Works perfectly on desktop and mobile
- **Smooth Animations** - Framer Motion powered interactions
- **Personalized Content** - Your actual photos and memories

## 🎵 Music Playlist

- "Every Breath You Take" - The Police
- "Isn't She Lovely" - Stevie Wonder
- "Accidentally In Love" - Counting Crows
- "Be With You" - Artist
- "Baliw" - Artist
- "Pasilyo" - Artist
- "Palagi" - Artist
- "Perhaps Love" - Artist

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/jennie-josh-love-story.git
   cd jennie-josh-love-story
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 🛠️ Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Vite project
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use the `gh-pages` branch
- **Firebase**: Use Firebase Hosting

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── MemoryCard.tsx   # Individual memory cards
│   ├── MilestoneModal.tsx # Love letter modals
│   ├── MusicPlayer.tsx  # Audio controls
│   ├── Timeline.tsx     # Main timeline layout
│   └── FloatingHearts.tsx # Animated background
├── data/
│   └── memories.ts      # Your love story data
├── assets/
│   └── images/          # Your photos
└── App.tsx              # Main app component
```

## 🎨 Customization

### Adding Your Memories
Edit `src/data/memories.ts` to add your personal moments:

```typescript
{
  id: 9,
  title: "Your Special Moment",
  date: "December 25, 2025",
  image: "/images/your-photo.jpg",
  emoji: "💝",
  type: "memories",
  location: "Your Location",
  details: "Your beautiful memory description..."
}
```

### Adding Music
1. Place your MP3 files in `public/audio/`
2. Update the playlist in `src/components/MusicPlayer.tsx`

### Adding Photos
1. Place your images in `public/images/`
2. Update the image paths in `src/data/memories.ts`

## 💝 Perfect For

- Anniversary gifts
- Valentine's Day surprises
- Wedding websites
- Relationship milestones
- Digital love letters
- Romantic portfolios

## 🛡️ Privacy

This is a personal love story website. All photos and memories are private and should be shared only with your loved one.

## 📄 License

This project is for personal use. Feel free to customize it for your own love story!

## 💕 Made with Love

Built with ❤️ using:
- React 18
- TypeScript
- Vite
- Framer Motion
- Tailwind CSS
- Lucide React Icons

---

*"Love is not just looking at each other, it's looking in the same direction."* ✨ 