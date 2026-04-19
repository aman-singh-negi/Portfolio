# Aman's Developer Portfolio

A modern, responsive developer portfolio built with React, TypeScript, Tailwind CSS, Framer Motion, and Three.js.

## 🎯 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes with persistent state
- **3D Visuals**: Interactive 3D elements using Three.js
- **Smooth Animations**: Page transitions and micro-interactions with Framer Motion
- **Custom Cursor**: Interactive cursor that responds to hoverable elements
- **Modern UI**: Clean, modern design with glassmorphism effects

## 🚀 Tech Stack

- **React + Vite + TypeScript**: For a fast, type-safe development experience
- **Tailwind CSS**: For utility-first styling with dark mode support
- **Framer Motion**: For smooth animations and transitions
- **Three.js**: For 3D visuals via @react-three/fiber and @react-three/drei
- **React Icons**: For simple vector icons

## 📂 Project Structure

```
/src
  /assets        → images, models, shaders
  /components    → shared components (Navbar, ThemeToggle, Card, etc.)
  /sections      → page sections (Hero, Projects, Skills, About, Contact)
  /context       → ThemeContext
  /styles        → global styles if needed
  App.tsx
  main.tsx
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🌐 Deployment

This project is configured for easy deployment on Vercel or Netlify.

### Deploying to Vercel

```bash
npm install -g vercel
vercel
```

### Deploying to Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

## 🎨 Customization

- Update personal information in the respective section components
- Modify the theme colors in `tailwind.config.js`
- Replace placeholder images with your own project screenshots
- Customize the 3D scene in the Hero section

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
