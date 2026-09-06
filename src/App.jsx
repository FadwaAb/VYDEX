import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';   
import BestSellers from './components/BestSellers';

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
        </main>
      </div>
    </div>
  );
}

export default App;