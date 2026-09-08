import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import "../css/MapSection.css";

export default function MapSection() {
  const mapUrl = "https://maps.google.com/maps?q=Casablanca+Maroc&t=&z=13&ie=UTF8&iwloc=&output=embed";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Casablanca+Maroc";

  return (
    <section className="map-section">
      <div className="map-section__container">

        {/* Infos boutique */}
        <div className="map-section__info">
          <span className="map-section__label">Notre boutique</span>
          <h2 className="map-section__title">Venez nous rendre visite</h2>
          <p className="map-section__text">
            Retirez vos commandes en magasin ou venez découvrir nos
            produits en vrai. Notre équipe vous accueille 7j/7.
          </p>

          <ul className="map-section__list">
            <li>
              <span className="map-section__icon">
                <MapPin size={18} />
              </span>
              <div>
                <strong>Adresse</strong>
                <span>123 Bd Mohammed V, Casablanca</span>
              </div>
            </li>
            <li>
              <span className="map-section__icon">
                <Phone size={18} />
              </span>
              <div>
                <strong>Téléphone</strong>
                <span>+212 6 00 00 00 00</span>
              </div>
            </li>
            <li>
              <span className="map-section__icon">
                <Mail size={18} />
              </span>
              <div>
                <strong>Email</strong>
                <span>contact@vydex.ma</span>
              </div>
            </li>
            <li>
              <span className="map-section__icon">
                <Clock size={18} />
              </span>
              <div>
                <strong>Horaires</strong>
                <span>Lun – Sam : 9h à 21h</span>
              </div>
            </li>
          </ul>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="map-section__btn"
          >
            <Navigation size={18} />
            Itinéraire
          </a>
        </div>

        {/* Google Map */}
        <div className="map-section__map">
          <iframe
            title="Vydex - Localisation"
            src={mapUrl}
            className="map-section__iframe"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

      </div>
    </section>
  );
}