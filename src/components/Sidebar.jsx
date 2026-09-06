import { Hexagon, Home, Laptop, Monitor, Headphones, Cpu, MonitorCheck, HardDrive, Mouse, Wifi, Gamepad2, Tag, ChevronRight } from "lucide-react";
import '../css/Sidebar.css';
import logo from "../assets/logo1.png";

const categories = [
  { label: "Laptops", icon: Laptop, hasArrow: true },
  { label: "Desktops", icon: Monitor },
  { label: "Accessoires", icon: Mouse },
  { label: "Composants", icon: Cpu },
  { label: "Écrans", icon: MonitorCheck },
  { label: "Stockage", icon: HardDrive },
  { label: "Périphériques", icon: Headphones },
  { label: "Réseaux", icon: Wifi },
  { label: "Audio", icon: Headphones },
  { label: "Gaming", icon: Gamepad2 },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="Vydex" className="sidebar__logo-img" />
      </div>

      <button className="sidebar__home-btn" type="button">
        <Home size={18} />
        <span>Accueil</span>
      </button>

      <p className="sidebar__section-label">Catégories</p>

      <nav className="sidebar__nav">
        <ul>
          {categories.map(({ label, icon: Icon, hasArrow }) => (
            <li key={label}>
              <button type="button" className="sidebar__nav-item">
                <Icon size={18} className="sidebar__nav-icon" />
                <span>{label}</span>
                {hasArrow && (
                  <ChevronRight size={16} className="sidebar__nav-arrow" />
                )}
              </button>
            </li>
          ))}
          <li>
            <button type="button" className="sidebar__nav-item">
              <Tag size={18} className="sidebar__nav-icon" />
              <span>Promotions</span>
              <span className="sidebar__badge" />
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
