import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiChatWidget from './components/AiChatWidget';

const App: React.FC = () => {
  return (
    <div className="bg-white text-slate-800 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Process />
        <Contact />
      </main>
      <Footer />
      <AiChatWidget />
    </div>
  );
};

export default App;
