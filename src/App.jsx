import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BestSellers from './components/BestSellers';
import PromoBanners from './components/PromoBanners';
import HowItWorks from './components/HowItWorks';
import TopCategories from './components/TopCategories';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  // Blocki scroll ديال الصفحة ملي السايدبار محلول (mobile)
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

  return (
    <div className="app">

      <div className="app-layout">

        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        <div className="main-wrapper">
          <Header onMenuClick={toggleSidebar} isSidebarOpen={isSidebarOpen} />

          <main className="page-content">
            <HeroSection />
            <BestSellers />
            <PromoBanners />
            <TopCategories />
            <HowItWorks />
            <MapSection />
          </main>
        </div>

      </div>
      <Footer />

    </div>
  );
}

export default App;