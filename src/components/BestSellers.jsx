import { useRef, useState } from "react";
import {
  Package,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Check,
} from "lucide-react";
import { products } from "../data/products";
import '../css/BestSellers.css';

export default function BestSellers() {
  const trackRef = useRef(null);
  const [justAdded, setJustAdded] = useState(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  const scroll = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.7, behavior: "smooth" });
  };

  const addToCart = (id) => {
    setJustAdded(id);
    setTimeout(() => {
      setJustAdded((current) => (current === id ? null : current));
    }, 1200);
  };

  return (
    <section className="best-sellers">
      {/* En-tête */}
      <div className="best-sellers__header">
        <div className="best-sellers__title">
          <span className="best-sellers__title-icon">
            <Package size={20} />
          </span>
          <h2>Nos meilleures ventes</h2>
        </div>

        <div className="best-sellers__controls">
          <button type="button" className="best-sellers__view-all">
            Voir tout
            <ArrowRight size={16} />
          </button>
          <button
            type="button"
            className="best-sellers__arrow"
            onClick={() => scroll(-1)}
            disabled={!canPrev}
            aria-label="Précédent"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            className="best-sellers__arrow"
            onClick={() => scroll(1)}
            disabled={!canNext}
            aria-label="Suivant"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Carrousel */}
      <div
        className="best-sellers__track"
        ref={trackRef}
        onScroll={handleScroll}
      >
        {products.map((product) => {
          const isAdded = justAdded === product.id;
          return (
            <article className="product-card" key={product.id}>
              <span className={`product-card__badge product-card__badge--${product.badge.type}`}>
                {product.badge.label}
              </span>

              <div className="product-card__img-wrap">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-card__img"
                  loading="lazy"
                />
              </div>

              <h3 className="product-card__name">{product.name}</h3>
              <p className="product-card__specs">{product.specs}</p>

              <div className="product-card__price-row">
                <span className="product-card__price">{product.price} DH</span>
                {product.oldPrice && (
                  <span className="product-card__old-price">
                    {product.oldPrice} DH
                  </span>
                )}
              </div>

              {/* Bouton Ajouter — kaml l3ard, bla favori */}
              <button
                type="button"
                className={`product-card__cart ${isAdded ? "product-card__cart--added" : ""}`}
                onClick={() => addToCart(product.id)}
              >
                {isAdded ? <Check size={16} /> : <ShoppingCart size={16} />}
                {isAdded ? "Ajouté !" : "Ajouter au panier"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}