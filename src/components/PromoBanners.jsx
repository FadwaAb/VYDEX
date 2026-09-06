import { ArrowRight } from "lucide-react";
import { promoBanners } from "../data/promoBanners";
import "../css/PromoBanners.css";

export default function PromoBanners() {
  return (
    <section className="promo-banners">
      {promoBanners.map((banner) => (
        <article
          key={banner.id}
          className={`promo-banner promo-banner--${banner.variant}`}
        >
          {/* Texte */}
          <div className="promo-banner__content">
            <h2 className="promo-banner__title">{banner.title}</h2>
            <p className="promo-banner__description">{banner.description}</p>
            {banner.buttonText && (
              <button type="button" className="promo-banner__btn">
                {banner.buttonText}
                <ArrowRight size={16} />
              </button>
            )}
          </div>

          {/* Image */}
          <div className="promo-banner__media">
            <img src={banner.image} alt={banner.alt} loading="lazy" />
          </div>
        </article>
      ))}
    </section>
  );
}