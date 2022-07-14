import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Homepage />
    <About />
    <Projects />
  </React.StrictMode>
);
