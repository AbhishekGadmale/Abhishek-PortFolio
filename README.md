Abhishek Gadmale | Full-Stack Developer Portfolio

This is the source code for the personal portfolio of Abhishek Gadmale, a Full-Stack Developer and E-commerce expert based in rural Maharashtra, India. The site is built as a modern, high-performance single-page application (SPA) using React and Vite, focusing on responsiveness, performance, and clear presentation of skills and projects.

🚀 Key Features

Technology Stack: Built with React 18+, Vite, and React-Bootstrap for rapid development and optimization.

Theming: Dynamic Dark/Light mode toggle for enhanced user experience.

Smooth Navigation: Uses react-scroll and Framer Motion for smooth transitions and scroll-based animations.

Performance-Optimized: Utilizes CSS Custom Properties, lazy loading (via React.lazy and Suspense), and efficient bundle size management.

Responsiveness: Fully adaptive design using Bootstrap's grid system, ensuring optimal viewing on mobile, tablet, and desktop devices.

E-commerce Focus: Content highlights expertise in scalable e-commerce solutions, payment gateway integration, and low-bandwidth optimization.

Contact Form: Ready for deployment with Netlify Forms integration (data-netlify="true" attribute included).

🛠️ Tech Stack

Category

Technologies Used

Frontend Framework

React.js (Hooks, Context)

Build Tool

Vite

Styling

React-Bootstrap, Custom CSS (using CSS Variables for themes)

Animations

framer-motion

Utilities

react-icons, react-scroll

Design Principles

Mobile-first, Accessibility (A11Y), Semantic HTML5

📦 Local Development Setup

Follow these steps to get the portfolio running locally on your machine.

Prerequisites

Node.js (LTS version recommended)

npm (Node Package Manager)

Installation

Clone the Repository:

git clone [https://github.com/AbhishekGadmale/Abhishek-PortFolio.git](https://github.com/AbhishekGadmale/Abhishek-PortFolio.git)
cd Abhishek-PortFolio


Install Dependencies:
You must install all the required packages, including React, Bootstrap, and the animation/utility libraries.

npm install
# Or, if you need to specifically ensure all packages from the previous steps are present:
# npm install bootstrap react-bootstrap react-router-dom framer-motion react-icons react-scroll


Run the Development Server:
Start the Vite development server.

npm run dev


The application will typically be available at http://localhost:5173 (or another port if 5173 is in use).

☁️ Deployment

This project is structured for easy deployment on modern static hosting platforms.

Netlify / Vercel

Repository Connection: Connect your GitHub repository (AbhishekGadmale/Abhishek-PortFolio) to your Netlify or Vercel account.

Build Command: npm run build

Publish directory (or Output Directory): dist

📧 Netlify Forms (Contact)

The contact form is configured with the necessary data-netlify="true" attribute. After deploying to Netlify, simply send a test submission. Netlify will automatically detect and enable the form handling feature.

📂 Project Structure Overview

The application is modularized using standard React practices:

abhishek-portfolio/
├── public/                  # Static assets (images, favicon, CV placeholder)
├── src/
│   ├── components/
│   │   ├── About.jsx        # Bio, Timeline
│   │   ├── Contact.jsx      # Netlify Form, Socials
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx         # Intro, Typed Animation
│   │   ├── Navbar.jsx       # Fixed Nav, Theme Toggle
│   │   ├── Projects.jsx     # Masonry Grid, Case Study Modal logic
│   │   ├── Skills.jsx       # Proficiency Bars, Framer Motion Grid
│   │   └── Testimonials.jsx # Carousel
│   ├── styles/
│   │   └── Custom.css       # CSS Variables for Theme, Custom animations
│   ├── App.jsx              # Main container, Theme context, Routing, Scroll-to-Top
│   └── main.jsx             # React entry point, Bootstrap import
└── index.html               # Main HTML file (SEO, Google Fonts, Viewport)


👨‍💻 Author

Abhishek Gadmale

Location: Maharashtra, India

GitHub: https://github.com/AbhishekGadmale/

LinkedIn: https://linkedin.com/in/AbhishekGadmale (Placeholder)

YouTube: https://youtube.com/@YourChannel (Placeholder)
