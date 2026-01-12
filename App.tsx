import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import Reviews from './components/Reviews';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import RunningLight from './components/RunningLight';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="bg-racing-black min-h-screen text-white selection:bg-racing-red selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Cinematic Separation */}
        <RunningLight />
        
        <Intro />
        
        <Services />

        <Reviews />
        
        <ContactSection />

        <div className="bg-racing-red h-1 w-full opacity-20" />
      </main>

      <Footer />
      
      {/* Floating Elements */}
      <WhatsAppButton />
    </div>
  );
}

export default App;