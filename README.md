# Portfolio Website

A modern, professional portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, dark mode, and a fully responsive design.

## 🚀 Features

- **Modern UI/UX**: Clean, minimal design with smooth animations
- **Dark/Light Mode**: Toggle between themes with persistent storage
- **Fully Responsive**: Works perfectly on all screen sizes
- **Smooth Animations**: Powered by Framer Motion
- **Easy Customization**: All content stored in `src/data/portfolio.js`
- **Performance Optimized**: Built with Vite for fast development and production builds

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/       # Reusable components (Navbar, Footer, ScrollToTop)
│   ├── sections/         # Page sections (Hero, About, Projects, etc.)
│   ├── assets/           # Images and static files
│   ├── data/             # Portfolio content (portfolio.js)
│   ├── hooks/            # Custom React hooks (useTheme, useScroll)
│   ├── styles/           # Global styles and Tailwind config
│   ├── utils/            # Utility functions and animations
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── public/               # Public assets
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📝 Customization

### Update Portfolio Content

Edit `src/data/portfolio.js` to customize:
- Personal information (name, role, bio, contact)
- Social media links
- Skills and proficiency levels
- Projects with images and descriptions
- Work experience timeline

### Update Colors

Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Add/Remove Sections

1. Create new section component in `src/sections/`
2. Import and add to `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

## 🎨 Sections

- **Hero**: Introduction with profile image and CTA buttons
- **About**: Bio and key skills overview
- **Projects**: Grid of project cards with links
- **Skills**: Categorized skills with progress bars
- **Experience**: Timeline of work experience
- **Contact**: Contact information and form (UI only)

## 📦 Dependencies

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Made with ❤️ using React + Vite

