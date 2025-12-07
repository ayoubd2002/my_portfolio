# Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 3. Customize Your Portfolio

#### Update Personal Information
Edit `src/data/portfolio.js`:
- Change `personal.name`, `personal.role`, `personal.description`
- Update `personal.bio` with your story
- Add your contact information (email, phone, location)
- Update social media links

#### Add Your Projects
In `src/data/portfolio.js`, update the `projects` array:
```javascript
{
  id: 1,
  title: "Your Project Name",
  description: "Project description...",
  image: "/assets/project1.jpg",  // Add image to public/assets/
  techStack: ["React", "Node.js"],
  liveUrl: "https://your-project.com",
  githubUrl: "https://github.com/yourusername/project",
}
```

#### Update Skills
Modify the `skills` object in `src/data/portfolio.js`:
- Adjust skill names and proficiency levels (0-100)
- Change icons (emoji or text)
- Add or remove skills as needed

#### Add Work Experience
Update the `experience` array with your work history:
```javascript
{
  id: 1,
  company: "Your Company",
  position: "Your Position",
  period: "2020 - Present",
  location: "City, Country",
  description: "Job description...",
  tasks: [
    "Task 1",
    "Task 2",
  ],
}
```

### 4. Add Your Images

1. Add your profile image to `public/assets/profile.jpg`
2. Add project images to `public/assets/project1.jpg`, `project2.jpg`, etc.
3. Images will automatically use placeholders if not found

### 5. Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to deploy!

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Modify Animations
Edit `src/utils/animations.js` to adjust animation timings and effects.

### Add New Sections
1. Create a new component in `src/sections/`
2. Import it in `src/App.jsx`
3. Add a navigation link in `src/components/Navbar.jsx`

## 📦 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy!

### Deploy to Netlify
1. Build: `npm run build`
2. Publish directory: `dist`
3. Deploy!

### Deploy to GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 🐛 Troubleshooting

### Images not showing?
- Check that images are in `public/assets/`
- Verify image paths in `src/data/portfolio.js` start with `/assets/`
- Check browser console for 404 errors

### Dark mode not working?
- Clear browser cache
- Check that `darkMode: 'class'` is set in `tailwind.config.js`

### Build errors?
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version (should be 16+)

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion)

---

Happy coding! 🎉

