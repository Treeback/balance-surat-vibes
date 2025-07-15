# The Balance Commune

A transformative wellness experiences platform connecting people with mindful movement, creative expression, and community in Surat.

## Getting Started

### Prerequisites

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd balance-surat-vibes

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- **Experience Catalog**: Browse curated wellness experiences including slackline workshops, human library sessions, forest bathing, and feminine circles
- **Animated Hero Section**: Dynamic text animation that switches between "Transform" and "Change" with a strikethrough effect
- **Scroll Animations**: Smooth scroll-triggered animations throughout the site
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Experience Details**: Dedicated pages for each experience with comprehensive information
- **Founder Story**: Personal narrative from founder Arushi Sharma

## Technologies

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - Component-based UI library
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **shadcn/ui** - Modern component library
- **Tailwind CSS** - Utility-first CSS framework

## Project Structure

```
src/
├── components/          # React components
│   ├── HeroSection.tsx    # Animated hero with text effects
│   ├── Navigation.tsx     # Site header and navigation
│   ├── ExperiencesSection.tsx  # Experience cards grid
│   ├── AboutSection.tsx   # About and founder story
│   └── ContactSection.tsx # Footer with contact info
├── pages/              # Page components
│   └── ExperienceDetail.tsx  # Individual experience pages
├── hooks/              # Custom React hooks
│   └── use-scroll-animation.tsx  # Scroll animation hook
└── App.tsx             # Main app component with routing
```

## Design System

- **Colors**: Grayscale palette with purple accents (#9B7EC8)
- **Typography**: Roboto font family
- **Animations**: Framer Motion for smooth transitions
- **Components**: shadcn/ui for consistent UI elements

## Contact

- Website: [thebalancecommune.com](https://thebalancecommune.com)
- Instagram: [@thebalancecommune](https://instagram.com/thebalancecommune)
- Email: hello@balancecommune.com
