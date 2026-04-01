# Portfolio Website

A top-tier, modern portfolio website built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. This project showcases cutting-edge frontend engineering with a clean, scalable architecture and excellent UX/UI principles.

## 🚀 Features

### Core Technologies

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for premium animations
- **next-themes** for dark/light mode
- **React Hook Form** with Zod validation
- **Lucide React** for beautiful icons

### Design & UX

- ✨ **Fully Responsive** design (Mobile ↔ Desktop)
- 🌙 **Dark & Light Themes** with smooth transitions
- 🎨 **Modern UI** with glassmorphism effects
- ⚡ **Performance Optimized** with lazy loading
- ♿ **Accessibility Focused** (WCAG compliant)
- 🎭 **Premium Animations** and micro-interactions

### Sections Included

- 🏠 **Hero Section** with animated intro and CTA
- 👨‍💻 **About Me** with personal info and stats
- 🛠️ **Skills** with interactive progress bars
- 📁 **Projects** showcase with filtering
- 📈 **Experience** timeline with work history
- 💬 **Testimonials** carousel
- 📧 **Contact Form** with validation
- 🦶 **Footer** with social links

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Quick Start

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── navbar.tsx        # Navigation component
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   ├── skills.tsx        # Skills section
│   ├── projects.tsx      # Projects section
│   ├── experience.tsx    # Experience section
│   ├── testimonials.tsx  # Testimonials section
│   ├── contact.tsx       # Contact section
│   └── footer.tsx        # Footer component
├── constants/            # Site configuration
│   └── site.ts          # All site data
├── lib/                 # Utility functions
│   └── utils.ts         # Common utilities
├── types/               # TypeScript types
│   └── index.ts         # Type definitions
└── public/              # Static assets
```

## 🎨 Customization

### Site Configuration

All site content is centralized in `constants/site.ts`:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  // ... more config
};
```

### Styling

- **Colors**: Customize in `tailwind.config.js`
- **Fonts**: Update in `app/globals.css`
- **Animations**: Modify in `tailwind.config.js` keyframes

### Content Updates

- **Projects**: Edit `projects` array in `constants/site.ts`
- **Skills**: Update `skills` array in `constants/site.ts`
- **Experience**: Modify `experience` array in `constants/site.ts`
- **Testimonials**: Change `testimonials` array in `constants/site.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Use `npm run build` and deploy the `out` directory
- **Railway**: Connect your GitHub repo
- **AWS Amplify**: Connect your repository

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
npm run format       # Format code with Prettier
```

## 🎯 Key Features Explained

### 1. **Responsive Design**

- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions

### 2. **Theme System**

- System preference detection
- Manual theme toggle
- Smooth transitions between themes

### 3. **Performance**

- Image optimization
- Code splitting
- Lazy loading
- SEO optimization

### 4. **Accessibility**

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support

### 5. **Animations**

- Scroll-triggered animations
- Hover effects
- Page transitions
- Loading states

## 🔧 Configuration Files

### `tailwind.config.js`

- Custom color palette
- Animation keyframes
- Responsive breakpoints
- Dark mode support

### `next.config.js`

- Image optimization
- TypeScript configuration
- ESLint settings

### `tsconfig.json`

- TypeScript strict mode
- Path aliases
- Module resolution

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for beautiful icons
- [Vercel](https://vercel.com/) for hosting

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
