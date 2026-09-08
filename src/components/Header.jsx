import { Search, ShoppingCart, Menu, X } from "lucide-react";
import "../css/Header.css";

export default function Header({ onMenuClick, isSidebarOpen }) {
  return (
    <header className="header">
      <button
        type="button"
        className="header__menu-btn"
        onClick={onMenuClick}
        aria-label={isSidebarOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div className="header__search">
        <input
          type="text"
          placeholder="Rechercher un produit, une marque..."
          className="header__search-input"
        />

        <button
          type="button"
          className="header__search-btn"
          aria-label="Rechercher"
        >
          <Search size={18} />
        </button>
      </div>

      <div className="header__actions">
        <button type="button" className="header__action-btn">
          <ShoppingCart size={18} />
          <span>Panier</span>
        </button>
      </div>
    </header>
  );
}