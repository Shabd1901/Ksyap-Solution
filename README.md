# 🌐 Ksyap Solution Website

A modern, professional, and interactive business website for **Ksyap Solution** — showcasing services, vision, team, and contact details. Built with **Next.js 15**, **Tailwind CSS**, **Framer Motion**, and **Radix UI**, the site blends smooth animations, a clean layout, and responsive design to deliver a premium user experience.

---

## 🚀 Features

- **Fully Responsive** — Works seamlessly across mobile, tablet, and desktop.
- **Modern UI/UX** — Glassmorphism, gradients, and clean typography.
- **Interactive Animations** — Smooth page transitions and hover effects using Framer Motion.
- **Services Marquee** — Auto-scrolling services cards with pause-on-hover.
- **Team Showcase** — Animated cards with hover-revealed bios and contact links.
- **Vision & Mission Section** — Elegant glassmorphic layout with icons.
- **Particle Background** — Lightweight, subtle animated canvas background.
- **Loader Screen** — Branded animated splash loader before page load.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [tailwindcss-animate](https://tailwindcss-animate.vercel.app/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

---

## 📂 Folder Structure

├── app/ # Next.js App Router pages & layouts
├── components/ # Reusable UI components
│ ├── loader.tsx # Splash loading animation
│ ├── particle-background.tsx # Animated particle effect
│ ├── services-marquee.tsx # Scrolling services section
│ ├── team.tsx # Team member cards
│ ├── vision.tsx # Vision & mission section
├── public/ # Static assets (images, icons, etc.)
├── styles/ # Global styles
├── next.config.mjs # Next.js configuration
├── postcss.config.mjs # PostCSS configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── package.json # Dependencies & scripts

🔧 Configuration Details
Tailwind CSS
Extended border radius and accordion animations.

Custom gradients and subtle motion effects.

Includes tailwindcss-animate plugin for ready-made animation classes.

Next.js Config
Ignores build errors from ESLint & TypeScript for smoother builds.

Image optimization disabled (unoptimized: true) for external image sources.

Transpiles framer-motion and embla-carousel-react to avoid Webpack issues.

📜 License
This project is licensed under the MIT License — you are free to use, modify, and distribute.

✨ Author
Shabdansh Prajapati
📧 prajapatishabdansh@gmail.com

---

This one keeps it **detailed enough for a dev** but **clear enough for a GitHub visitor** without feeling bloated.  
If you want, I can also make a **shorter marketing-style top section** so the repo looks attractive instantly before the technical details start.
