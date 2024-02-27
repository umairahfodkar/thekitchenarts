import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Banner from './components/Banner';
import Benefitss from './components/Benefitss';
import Kitchenlayouts from './components/Kitchenlayouts';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import BackToTopButton from './components/Backtotbutton';
import Herosection from './components/Herosection';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/Whatsappbutton';
import Modularkitchen from './components/Modularkitchen';
import Modularfurniture from './components/Modularfurniture';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
        <BackToTopButton />
        <WhatsAppButton />
        <Navbar />
        <Herosection/>
        <About  scrollToContact={scrollToContact}/>
        <Services/>
        <Steps scrollToContact={scrollToContact} />
        <Benefitss />
        <Banner scrollToContact={scrollToContact} />
        <Kitchenlayouts />
        <Testimonials />
        <Footer />
        <Modularkitchen />
        <Modularfurniture />
      </div>
    </BrowserRouter>
  );
}

export default App;
