import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';   
import BestSellers from './components/BestSellers';
import PromoBanners from './components/PromoBanners';
import HowItWorks from './components/HowItWorks';
import TopCategories from './components/TopCategories';

import './App.css';

function App() {
  return (
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
  );
}

export default App;