import React from "react";

import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import logo from "../assets/logo1.png";
import { footerData } from "../data/footer";
import "../css/Footer.css";

export default function Footer() {
  const { description, quickLinks, categories, contact } = footerData;

  return (
    <footer className="footer">

      {/* ---------- Main Footer ---------- */}
      <div className="footer__main">

        {/* ---------- Colonne 1 : Logo + Description + Réseaux ---------- */}
        <div className="footer__col footer__col--brand">

          <img
            src={logo}
            alt="Technova"
            className="footer__logo"
          />

          <p className="footer__desc">
            {description}
          </p>

          <div className="footer__socials">

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="footer__social"
            >
              <FaFacebookF size={17} />
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="footer__social"
            >
              <FaInstagram size={17} />
            </a>

            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
              className="footer__social"
            >
              <FaYoutube size={17} />
            </a>

          </div>
        </div>


        {/* ---------- Colonne 2 : Liens rapides ---------- */}
        <div className="footer__col">

          <h4 className="footer__heading">
            Liens rapides
          </h4>

          <ul className="footer__list">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

        </div>


        {/* ---------- Colonne 3 : Catégories ---------- */}
        <div className="footer__col">

          <h4 className="footer__heading">
            Catégories
          </h4>

          <ul className="footer__list">
            {categories.map((link) => (
              <li key={link.label}>
                <a href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

        </div>


        {/* ---------- Colonne 4 : Contact ---------- */}
        <div className="footer__col">

          <h4 className="footer__heading">
            Contact
          </h4>

          <ul className="footer__list footer__contact">

            {/* Adresse */}
            <li>
              <MapPin
                size={16}
                className="footer__contact-icon"
              />

              <span>
                {contact.address}
              </span>
            </li>

            {/* Téléphone */}
            <li>
              <Phone
                size={16}
                className="footer__contact-icon"
              />

              <span>
                {contact.phone}
              </span>
            </li>

            {/* Email */}
            <li>
              <Mail
                size={16}
                className="footer__contact-icon"
              />

              <span>
                {contact.email}
              </span>
            </li>

          </ul>

        </div>

      </div>


      {/* ---------- Barre inférieure ---------- */}
      <div className="footer__bottom">

        <p>
          © 2026 TECHNOVA — Tous droits réservés.
        </p>

      </div>

    </footer>
  );
}
