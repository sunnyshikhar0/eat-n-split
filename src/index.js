/**
 * Application entry point for the Eat-n-Split React application
 *
 * This file serves as the bridge between React components and the DOM.
 * It imports and renders the root App component into the HTML document.
 */
import React from "react";
import ReactDOM from "react-dom/client"; // React 18's client rendering API
import "./index.css"; // Global CSS styles for the application
import App from "./components/App"; // Main application component

/**
 * Creates a React root using the DOM element with id="root" from index.html
 * This is where the entire React application will be mounted
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * Renders the App component into the DOM
 *
 * StrictMode enables additional development checks and warnings:
 * - Identifies components with unsafe lifecycles
 * - Warns about legacy API usage
 * - Detects unexpected side effects
 * - Ensures safer use of React features
 *
 * The App component (from ./components/App.js) contains the entire application:
 * - Friend list management
 * - Add friend functionality
 * - Bill splitting features
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
