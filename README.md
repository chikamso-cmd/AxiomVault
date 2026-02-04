# AxiomVault Inc - Cybersecurity Platform

A modern, responsive enterprise cybersecurity UI built with React and Vite. AxiomVault showcases real-time monitoring, threat intelligence, and analytics dashboards with a clean, premium interface.

## Features

- Real-time threat monitoring and incident visibility
- Threats, analytics, and dashboard views
- About Us and Contact pages for product story and outreach
- Responsive navigation with mobile sidebar
- Modern UI built with Tailwind CSS v4
- Reusable stat and insight cards across pages

## Tech Stack

### Frontend

- React 19.2.0
- Vite 7.2.4
- Tailwind CSS 4.1.18 (via `@tailwindcss/vite`)
- React Router DOM 7.13.0
- Lucide React 0.563.0
- Framer Motion 12.30.0
- React Icons 5.5.0

### Development

- ESLint 9.39.1
- Vite SWC Plugin 4.2.2
- Node.js

## Routes

- `/` - Landing page
- `/dashboard` - Main dashboard
- `/threats` - Threat intelligence view
- `/analytics` - Analytics and reporting
- `/about` - About AxiomVault
- `/contact` - Contact page

## Project Structure

```
AxiomVault/
|-- public/                 # Static assets
|-- src/
|   |-- components/         # Reusable React components
|   |   |-- Nav.jsx         # Sticky navigation + mobile menu
|   |   |-- Footer.jsx      # Footer links + contact info
|   |   `-- ThreatsStats.jsx # Shared stat, insight, and card components
|   |-- Pages/              # Route-level pages
|   |   |-- LandingPage.jsx
|   |   |-- Dashboard.jsx
|   |   |-- Threats.jsx
|   |   |-- Analytics.jsx
|   |   |-- AboutUs.jsx
|   |   `-- Contact.jsx
|   |-- App.jsx             # Routes
|   |-- App.css             # App styles
|   |-- index.css           # Global styles
|   `-- main.jsx            # Entry point
|-- index.html              # HTML template
|-- package.json            # Project dependencies
|-- vite.config.js          # Vite configuration
|-- eslint.config.js        # ESLint rules
`-- README.md               # This file
```

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm package manager

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd AxiomVault
```

2. Install dependencies

```bash
npm install
```

### Development

Start the dev server with HMR:

```bash
npm run dev
```

The app runs at `http://localhost:5173`.

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Design Notes

- Dark blue gradient background with orange and green accents
- Mobile-first layout with a collapsible sidebar menu
- Consistent spacing and card layouts for stats and insights

## License

Please see LICENSE file for details.

## Contributing

Contributions are welcome. Please feel free to submit a Pull Request.
