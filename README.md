# 🚀 My Portfolio

A modern, responsive portfolio website built with **React + Vite**. Showcase your projects, skills, and contact information with a sleek dark theme design.

## ✨ Features

- **Hero Section** — Eye-catching intro with animated code block
- **About Me** — Personal bio with highlight stats
- **Projects Showcase** — Filterable project gallery with category tabs
- **Skills & Technologies** — Organized skill categories with progress bars
- **Contact Form** — Working contact form with mailto integration
- **Responsive Design** — Looks great on all devices
- **Smooth Animations** — Subtle CSS animations throughout
- **Dark Theme** — Beautiful dark color scheme with gradient accents

## 🛠️ Tech Stack

- React 19
- Vite 5
- React Router DOM
- React Icons
- CSS (custom properties, grid, flexbox)

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar/         # Fixed navigation bar
│   ├── Hero/           # Landing hero section
│   ├── About/          # About me section
│   ├── Projects/       # Projects showcase with filter
│   ├── Skills/         # Skills & technologies
│   ├── Contact/        # Contact form
│   └── Footer/         # Footer with links
├── data/
│   └── portfolioData.js  # ⭐ All your content lives here
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ✏️ Customization

All portfolio content is centralized in **`src/data/portfolioData.js`**. Edit this single file to:

1. **Update your personal info** — name, title, tagline, email, social links
2. **Add your projects** — title, description, tags, links, category
3. **Customize skills** — add/remove skills with icons and proficiency levels
4. **Update about section** — bio paragraphs and highlight stats

### Adding a New Project

Add a new object to the `projectsData` array:

```js
{
  id: 7,
  title: 'My New Project',
  description: 'A brief description of the project...',
  image: '/path/to/screenshot.png',
  tags: ['React', 'Node.js'],
  category: 'fullstack',  // 'frontend', 'backend', or 'fullstack'
  liveUrl: 'https://myproject.com',
  githubUrl: 'https://github.com/user/repo',
  featured: true,
}
```

## 📄 License

MIT
