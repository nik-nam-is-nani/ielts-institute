# IELTS Institute Homepage

A modern, professional, and responsive IELTS Institute homepage built with React.js and Tailwind CSS. This project showcases a premium SaaS-style landing page designed specifically for IELTS coaching institutes.

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, premium design with smooth animations and hover effects
- **Sticky Navigation**: Dynamic navbar that changes appearance on scroll
- **Interactive Components**: Hover effects, transitions, and engaging user interactions
- **Modular Architecture**: Reusable components for easy maintenance and scalability
- **Performance Optimized**: Built with Vite for fast development and optimal build performance

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Sticky navigation with scroll effects
│   ├── Hero.tsx          # Main hero section with CTA
│   ├── Features.jsx      # Features section container
│   ├── FeatureCard.jsx   # Individual feature cards
│   ├── Testimonials.jsx  # Student testimonials section
│   ├── TestimonialCard.jsx # Individual testimonial cards
│   └── Footer.jsx        # Footer with contact info and links
├── App.tsx              # Main app component
├── main.tsx             # App entry point
├── index.css            # Global styles with Tailwind imports
└── assets/              # Static assets
```

## 🎨 Design Choices

### Why Tailwind CSS?
- **Rapid Development**: Utility-first approach speeds up styling
- **Consistent Design**: Predefined design tokens ensure visual consistency
- **Responsive by Default**: Built-in responsive utilities
- **Small Bundle Size**: Only used classes are included in the final build
- **Easy Maintenance**: Changes can be made directly in JSX without switching files

### Layout Decisions
- **Mobile-First Approach**: Designed for mobile devices first, then scaled up
- **Grid System**: CSS Grid and Flexbox for flexible, responsive layouts
- **Component-Based**: Modular components for reusability and maintainability
- **Semantic HTML**: Proper use of semantic HTML elements for accessibility

### Color Scheme
- **Primary**: Blue gradient (#3b82f6 to #1d4ed8) - Professional and trustworthy
- **Secondary**: Purple accents for visual interest
- **Neutral**: Gray tones for text and backgrounds
- **Success**: Green tones for positive elements

### Typography
- **Font Family**: Inter - Modern, readable sans-serif font
- **Font Weights**: 300, 400, 500, 600, 700 for proper hierarchy
- **Responsive Sizing**: Scalable typography across all devices

## 🚀 Setup Instructions

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd ielts-institute
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📱 Sections Overview

### 1. Navigation Bar
- Logo with brand name "IELTSPro"
- Responsive menu with smooth mobile toggle
- Sticky behavior with background blur effect on scroll
- Smooth anchor link navigation

### 2. Hero Section
- Compelling headline: "Achieve Your Dream IELTS Score"
- Motivational sub-text and key statistics
- Dual CTA buttons ("Get Started" and "Learn More")
- Modern illustration placeholder with floating animations
- Responsive grid layout (text left, image right on desktop; stacked on mobile)

### 3. Features Section
- **Speaking Practice with Experts**: Live one-on-one sessions
- **Realistic Mock Tests**: Authentic IELTS test simulation
- **AI Band Score Predictor**: Advanced performance analysis
- **Personalized Study Plans**: Customized learning paths
- Interactive cards with hover effects and color-coded icons

### 4. Testimonials
- Student success stories with band scores
- Profile avatars and country information
- Statistical overview with achievements
- Call-to-action section

### 5. Footer
- Contact information (email, phone, address)
- Quick navigation links
- Social media icons
- Legal links and copyright information

## 🎯 Technical Highlights

- **React 19**: Latest React features with functional components and hooks
- **TypeScript**: Type safety for better development experience
- **Tailwind CSS v4**: Latest utilities with PostCSS integration
- **Vite**: Fast development server and build tool
- **ESLint**: Code quality and consistency enforcement
- **Responsive Images**: Optimized placeholder graphics
- **Smooth Animations**: CSS transitions and transforms
- **Accessibility**: Semantic HTML and ARIA attributes

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
      },
    },
  },
},
```

### Content
- Update text content directly in component files
- Replace placeholder images with actual assets
- Modify contact information in the Footer component

### Styling
- All styling is done with Tailwind CSS classes
- Custom styles can be added to `index.css`
- Component-specific styles are inline with Tailwind utilities

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Popular Platforms
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 📄 License

This project is created for educational and demonstration purposes. Feel free to use and modify as needed for your IELTS institute.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
