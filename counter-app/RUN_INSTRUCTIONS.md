# Simple React Counter App - Run Instructions

## Overview
This is a simple React application that displays a counter. When you click the button, the counter increases by 1. There's also a reset button to set the counter back to 0.

## Features
- ✨ Modern and beautiful UI with gradient backgrounds
- 🔢 Click to increase counter
- 🔄 Reset button to start over
- 📱 Responsive design
- ⚡ Built with Vite for fast development

## Prerequisites
Make sure you have the following installed on your system:
- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

You can check if they're installed by running:
```bash
node --version
npm --version
```

## Getting Started

### 1. Navigate to the project directory
```bash
cd counter-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

### 4. Open your browser
The app will be available at: **http://localhost:5173/**

The development server will automatically reload when you make changes to the code.

## Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`
Builds the app for production to the `dist` folder.

### `npm run preview`
Locally preview the production build.

### `npm run lint`
Runs ESLint to check for code quality issues.

## Project Structure
```
counter-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── App.css          # Styling for the main app component
│   ├── App.jsx          # Main app component with counter logic
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # Project documentation
```

## How It Works
The app uses React's `useState` hook to manage the counter state:
- The counter starts at 0
- Clicking "Click to Increase Counter" adds 1 to the current count
- Clicking "Reset" sets the counter back to 0

## Technologies Used
- **React** - Frontend library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradients and modern effects
- **ESLint** - Code linting

## Customization
You can customize the app by:
- Modifying the styles in `src/App.css`
- Changing the increment value in `src/App.jsx`
- Adding new features like decrement, custom increment values, etc.

## Troubleshooting

### Port already in use
If port 5173 is already in use, Vite will automatically try the next available port.

### Dependencies issues
If you encounter dependency issues, try:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Browser not opening
Manually navigate to [http://localhost:5173](http://localhost:5173) in your browser.

## Stop the Development Server
To stop the development server, press `Ctrl + C` in the terminal where it's running.
