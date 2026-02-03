# AxiomVault - Enterprise Cybersecurity Platform

A modern, responsive enterprise cybersecurity solution built with React and Vite. FraudShield provides real-time threat detection, incident monitoring, and advanced analytics for enterprise-grade protection.

## ✨ Features

- **Real-Time Threat Monitoring**: Live detection and response to security incidents
- **Risk Scoring**: AI-powered risk assessment for instant threat evaluation
- **Threat Intelligence**: Global threat feeds and exploit detection
- **Responsive Design**: Fully responsive with mobile sidebar navigation
- **Modern UI**: Built with Tailwind CSS v4 for a sleek, professional interface
- **Analytics Dashboard**: Comprehensive security metrics and visualization
- **Enterprise Support**: 24/7 monitoring and incident response

## 🚀 Tech Stack

### Frontend

- **React** 19.2.0 - UI library with modern hooks
- **Vite** 7.2.4 - Lightning-fast build tool with HMR
- **Tailwind CSS** 4.1.18 - Utility-first CSS framework
- **Lucide React** 0.563.0 - Beautifully crafted icon library
- **React Router DOM** 7.13.0 - Client-side routing

### Animation & Interactions

- **Framer Motion** 12.30.0 - Advanced animation library
- **React Icons** 5.5.0 - Icon collection

### Development Tools

- **ESLint** 9.39.1 - Code quality and style enforcement
- **Vite SWC Plugin** 4.2.2 - Fast JavaScript/TypeScript compiler
- **Node.js** - JavaScript runtime

## 📁 Project Structure

```
AxiomVault/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable React components
│   │   └── Nav.jsx       # Navigation component
│   ├── Pages/            # Page components
│   │   ├── LandingPage.jsx    # Home page with mobile sidebar
│   │   ├── Dashboard.jsx       # Main dashboard
│   │   └── Analytics.jsx       # Analytics dashboard
│   ├── assets/           # Images, fonts, and other assets
│   ├── App.jsx           # Root application component
│   ├── App.css           # Application styles
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
├── index.html            # HTML template
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint rules
└── README.md             # This file
```

## 🔧 Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone <https://github.com/chikamso-cmd/AxiomVaultl>
cd AxiomVault
```

2. Install dependencies

```bash
npm install
```

### Development

Start the development server with hot module reloading:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality:

```bash
npm run lint
```

## 📱 Mobile Features

The application includes a responsive mobile sidebar navigation that:

- **Hamburger Toggle**: Click the menu icon on mobile devices to open/close the sidebar
- **Mobile Links**: Access all navigation links (Threats, Analytics, Docs)
- **Launch Console Button**: Conveniently placed in the mobile menu
- **Responsive Breakpoints**: Desktop menu hidden on mobile, mobile menu hidden on desktop (md breakpoint)

## 🎨 Design System

- **Color Scheme**: Dark blue gradient background with orange accents
- **Typography**: Clean, modern sans-serif fonts
- **Spacing**: Consistent padding and margins using Tailwind spacing scale
- **Icons**: Lucide React for consistent icon styling
- **Responsiveness**: Mobile-first approach with Tailwind breakpoints

## 📊 Components Overview

### LandingPage.jsx

- Hero section with call-to-action buttons
- Active incidents monitoring card
- Enterprise security features showcase
- Real-time statistics section
- Mobile responsive sidebar navigation
- Footer with branding

### Nav.jsx

- Navigation component (reusable)

### Dashboard.jsx

- Main dashboard interface

### Analytics.jsx

- Analytics and reporting interface

## 🔐 Security

This project is designed as an enterprise cybersecurity platform with:

- Real-time threat detection
- Incident monitoring and response
- Risk scoring and assessment
- Global threat intelligence integration

## 📝 License

Please see LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
