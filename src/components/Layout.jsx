import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./App.css"; // ton CSS global

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      <div className="app-main">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        {/* le reste de ton contenu ici */}
      </div>
    </div>
  );
}