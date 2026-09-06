import { Zap, ArrowUpRight } from "lucide-react";
import { topCategories } from "../data/categories";
import "../css/TopCategories.css";

export default function TopCategories() {
  return (
    <section className="top-categories">
      {/* En-tête */}
      <div className="top-categories__header">
        <span className="top-categories__icon">
          <Zap size={20} fill="#ffb700" color="#ffb700" />
        </span>
        <h2>Nos catégories phares</h2>
      </div>

      {/* Grid */}
      <div className="top-categories__grid">
        {topCategories.map((cat) => (
          <button type="button" className="category-card" key={cat.id}>
            <div className="category-card__img-wrap">
              <img src={cat.image} alt={cat.name} loading="lazy" />
            </div>

            <div className="category-card__text">
              <h3>{cat.name}</h3>
              <p>{cat.sub}</p>
            </div>

            {/* Flèche katban ghir hover */}
            <span className="category-card__arrow">
              <ArrowUpRight size={16} strokeWidth={2.4} />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}