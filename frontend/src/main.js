// src/main.js
import { Attendance } from './pages/Attendance.js';
import { Dashboard } from './pages/Dashboard.js';
import { Reports } from './pages/Reports.js';
import './styles/style.css';
import { setupCounter } from './utils/counter.js';

// Simple routing
const app = document.querySelector('#app');
const path = window.location.pathname;

const renderPage = (path) => {
  let page;
  if (path === '/attendance') {
    page = Attendance();
  } else if (path === '/reports') {
    page = Reports();
  } else {
    page = Dashboard();
  }
  if (app) {
    app.innerHTML = page.html;
    page.init();
  } else {
    console.error('App container #app not found');
  }
};

renderPage(path);

// Initialize counter
const counterElement = document.querySelector('#counter');
if (counterElement) {
  setupCounter(counterElement);
}

// Handle navigation
window.addEventListener('popstate', () => {
  renderPage(window.location.pathname);
});

// Intercept link clicks for SPA navigation
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (link && link.href.startsWith(window.location.origin)) {
    e.preventDefault();
    const newPath = link.pathname;
    history.pushState({}, '', newPath);
    renderPage(newPath);
  }
});