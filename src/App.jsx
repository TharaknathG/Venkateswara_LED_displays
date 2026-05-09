import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import QuoteModal from './components/QuoteModal/QuoteModal';
import './App.css';

function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    const base = `${window.location.pathname}${window.location.search}`;
    window.history.replaceState(null, '', `${base}#home`);
    requestAnimationFrame(() => {
      document.getElementById('home')?.scrollIntoView({ block: 'start', behavior: 'auto' });
    });
  }, []);

  return (
    <div className="app">
      <Navbar onRequestQuote={() => setQuoteOpen(true)} />
      <main>
        <Hero />
        <Services />
        <Gallery />
      </main>
      <Footer />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}

export default App;
