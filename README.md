# Modern Portfolio Website

A beautifully crafted, modern portfolio website built with **React + Tailwind CSS**, featuring a clean, dark-themed UI that replicates a high-quality Stitch-generated interface.

## Features

✨ **Dark Theme** - Premium dark interface (#0f0f0f background)  
📱 **Fully Responsive** - Mobile, tablet, and desktop optimized  
🎨 **Modern Design** - Clean, minimal, and professional SaaS-like aesthetic  
⚡ **Smooth Animations** - Hover effects and smooth transitions throughout  
🚀 **Performance Optimized** - Fast load times and optimized bundle size  
🎯 **Section-Based Layout** - Navbar, Hero, Projects, Services, About, Testimonials, CTA, Footer  

## Tech Stack

- **React 18** - UI library
- **Vite** - Modern build tool
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS + Autoprefixer** - CSS processing

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Sticky navigation with mobile menu
│   ├── Hero.jsx          # Full-height hero section
│   ├── Projects.jsx      # Project showcase grid
│   ├── Services.jsx      # Services cards
│   ├── About.jsx         # About section with skills
│   ├── Testimonials.jsx  # Client testimonials
│   ├── CTA.jsx           # Call-to-action section
│   └── Footer.jsx        # Footer with links
├── App.jsx               # Main app component
├── main.jsx              # React entry point
└── index.css             # Global styles
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will start at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```js
colors: {
  dark: '#0f0f0f',
  'dark-secondary': '#1a1a1a',
  'dark-tertiary': '#252525',
}
```

### Content
- **Navbar**: Update nav links in `components/Navbar.jsx`
- **Hero**: Modify headline and stats in `components/Hero.jsx`
- **Projects**: Add your projects to the `projects` array in `components/Projects.jsx`
- **Services**: Update services in `components/Services.jsx`
- **About**: Customize bio and skills in `components/About.jsx`
- **Testimonials**: Add testimonials in `components/Testimonials.jsx`
- **Footer**: Update footer links in `components/Footer.jsx`

## Design System

### Spacing
8px grid system for consistent spacing

### Typography
- Large bold headings for primary hierarchy
- Medium weight for secondary titles
- Light gray for supporting text

### Components
- Rounded corners (12px/2xl)
- Subtle gradients and glows
- Smooth hover transitions
- Border accents for depth

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images with lazy loading
- Code-split components
- Minimal CSS bundle
- Smooth scroll behavior

## License

MIT

## Contact

For inquiries or customizations, feel free to reach out!
