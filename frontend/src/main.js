// /frontend/src/main.js
import { Attendance } from './pages/Attendance.js';
import { Dashboard } from './pages/Dashboard.js';
import { Reports } from './pages/Reports.js';
import './styles/style.css'; // Fixed: '../styles/style.css' to './styles/style.css'
import { setupCounter } from './utils/counter.js';

// Simple routing
const app = document.querySelector('#app');
const path = window.location.pathname;

if (path === '/attendance') {
  const page = Attendance();
  app.innerHTML = page.html;
  page.init();
} else if (path === '/reports') {
  const page = Reports();
  app.innerHTML = page.html;
  page.init();
} else {
  const page = Dashboard();
  app.innerHTML = page.html;
  page.init();
}

// Initialize counter (optional, only if #counter exists)
const counterElement = document.querySelector('#counter');
if (counterElement) {
  setupCounter(counterElement);
}

// Handle navigation without page reload
window.addEventListener('popstate', () => {
  const newPath = window.location.pathname;
  if (newPath === '/attendance') {
    const page = Attendance();
    app.innerHTML = page.html;
    page.init();
  } else if (newPath === '/reports') {
    const page = Reports();
    app.innerHTML = page.html;
    page.init();
  } else {
    const page = Dashboard();
    app.innerHTML = page.html;
    page.init();
  }
});