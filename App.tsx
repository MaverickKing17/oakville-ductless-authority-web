
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WeatherBanner from './components/WeatherBanner';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import Services from './pages/Services';
import Rebates from './pages/Rebates';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Warranty from './pages/Warranty';
import FAQ from './pages/FAQ';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <WeatherBanner />
        <Header />
        
        <main id="main-content" className="flex-grow" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/rebates" element={<Rebates />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/warranty" element={<Warranty />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>

        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;
