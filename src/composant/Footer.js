import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import './style/Footer.css'

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4"> {/* `mt-auto` pour pousser le footer en bas */}
      <div className="container">
        <div className="row">
          {/* Section 1 : À propos */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-4">À propos de nous</h5>
            <p>
              Notre cabinet est équipé des dernières technologies pour vous garantir des soins précis, efficaces et confortables. Nous accordons une grande importance à l'accueil, à l'écoute et à la confiance que vous nous témoignez.
            </p>
          </div>

          {/* Section 2 : Liens utiles */}
          <div className="col-md-4 mb-4 align-items-center">
            <h5 className="text-uppercase mb-4">Liens utiles</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-white text-decoration-none">Accueil</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-white text-decoration-none">Orthodonte</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-white text-decoration-none">Stomatogie</a>
              </li>
              <li className="mb-2">
                
                <Link
                   target="_blank"
                   to="https://www.doctolib.fr/stomatologue/mulhouse/tuncay-sahin/booking/motives?specialityId=25&telehealth=false&placeId=practice-228902&profile_skipped=true&bookingFunnelSource=external_referral"
                    className="text-white text-decoration-none"
                >Prendre un RDV</Link>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-white text-decoration-none">Contact</a>
              </li>
            </ul>
          </div>

          {/* Section 3 : Contact */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-4">Contactez-nous</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                28 Rue du Sauvage 2ème Étage, 68100 Mulhouse
              </li>
              <li className="mb-3">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                +03 89 66 01 16 - +07 69 52 06 29
              </li>
              <li className="mb-3">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                cabinet@orthosto.com
              </li>
            </ul>
          </div>
        </div>

        {/* Section 4 : Réseaux sociaux */}
        <div className="row pt-4">
          <div className="col-12 text-center">
            <h5 className="text-uppercase mb-3">Suivez-nous</h5>
            <a href="https://facebook.com" className="text-white me-3">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com" className="text-white me-3">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://instagram.com" className="text-white me-3">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://linkedin.com" className="text-white">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>

        {/* Section 5 : Copyright */}
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} ORTHOSTO. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;