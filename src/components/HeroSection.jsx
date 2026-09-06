import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { slides, perks } from "../data/HeroSlides";   // ← mn fichier séparé
import '../css/HeroSection.css';

const AUTOPLAY_DELAY = 5000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-slide
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [current, paused]);

  return (
    <section
      className="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div
        className="hero__track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div className="hero__slide" key={slide.id}>
            <div className="hero__content">
              <h2 className="hero__title">
                {slide.titleTop}
                <br />
                {slide.titleBottom && <>{slide.titleBottom} </>}
                <span className="hero__accent">{slide.accent}</span>
              </h2>
              <p className="hero__description">{slide.description}</p>
              <button type="button" className="hero__cta">
                {slide.buttonText}
                <ArrowRight size={16} strokeWidth={2.4} />
              </button>
            </div>

            <div className="hero__media">
              <span className="hero__shape hero__shape--yellow" />
              <span className="hero__shape hero__shape--violet" />
              <span className="hero__shape hero__shape--orange" />
              <span className="hero__platform" />
              <img
                src={slide.image}
                alt={slide.alt}
                className="hero__img"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Indicateurs */}
      <div className="hero__dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`hero__dot ${
              index === current ? "hero__dot--active" : ""
            }`}
          />
        ))}
      </div>

      {/* Avantages fixes */}
      <div className="hero__perks">
        {perks.map(({ icon: Icon, title, sub }) => (
          <div className="hero__perk" key={title}>
            <Icon size={22} strokeWidth={1.9} className="hero__perk-icon" />
            <div className="hero__perk-text">
              <strong>{title}</strong>
              <span>{sub}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}