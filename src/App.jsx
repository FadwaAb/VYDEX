import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BestSellers from './components/BestSellers';
import PromoBanners from './components/PromoBanners';
import HowItWorks from './components/HowItWorks';
import TopCategories from './components/TopCategories';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="app">

      {/* Header + Sidebar + Content */}
      <div className="app-layout">

        <Sidebar />

        <div className="main-wrapper">
          <Header />

          <main className="page-content">
            <HeroSection />
            <BestSellers />
            <PromoBanners />
            <TopCategories />
            <HowItWorks />
          </main>
        </div>

      </div>

      {/* Footer is OUTSIDE the columns */}
      <Footer />

    </div>
  );
}

export default App;
