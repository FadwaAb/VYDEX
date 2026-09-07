import { Search, Heart, ShoppingCart, Menu } from "lucide-react";
import '../css/Header.css';

export default function Header({ onMenuClick }) {
  return (
    <header className="header">
      <button 
        type="button" 
        className="header__menu-btn" 
        onClick={onMenuClick}
        aria-label="Ouvrir le menu"
      >
        <Menu size={22} />
      </button>

      <div className="header__search">
        <input
          type="text"
          placeholder="Rechercher un produit, une marque..."
          className="header__search-input"
        />
        <button type="button" className="header__search-btn" aria-label="Rechercher">
          <Search size={18} />
        </button>
      </div>

      <div className="header__actions">
        <button type="button" className="header__action-btn">
          <Heart size={18} />
          <span>Favoris</span>
        </button>
        <button type="button" className="header__action-btn">
          <ShoppingCart size={18} />
          <span>Panier</span>
        </button>
      </div>
    </header>
  );
}