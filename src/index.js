import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Assuming you are using react-router-dom
import './index.css';
import Layout from './Layout'; // You should import the Layout component
import About from './components/About';
import Services from './components/Services';
import Modularkitchen from './components/Modularkitchen';
import Contact from './components/Contact';
import Home from './components/Home';
import Modularfurniture from './components/Modularfurniture';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Nested routes within Layout */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="modularkitchen" element={<Modularkitchen />} />
          <Route path="modularfurniture" element={<Modularfurniture />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
