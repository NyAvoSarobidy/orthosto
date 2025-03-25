import React, { useContext, useState } from 'react';
import './style/stylebody.css';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';
import { AccueilContext } from '../AccueilContext';

function Body() {
  const { titre1 } = useContext(AccueilContext);
  const [showButtons, setShowButtons] = useState(false); // État pour afficher/cacher les boutons

  const handleClick = () => {
    setShowButtons(!showButtons); // Inverser l'état au clic
  };

  return (
    <section id="hero" className="hero section">
      <div className="container scroll-up" data-aos="fade-in">
        <div className="row gy-5 align-items-center" data-aos="fade-in">
          <div className="col-lg-8 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
            <h2 className="fw-bold display-3" style={{ marginTop: "15px", fontSize: "45px" }}>
              <Typical
                steps={[
                  titre1, 2000
                ]}
                wrapper="span"
                loop={Infinity}
              />
            </h2>
            <hr className="text-white me-auto" style={{ width: "100%", maxWidth: "300px", paddingBottom: "20px" }} />
            <p className='fw-bold lead'>Orthodontie et stomatologie pour les enfants, <br />les adolescents et les adultes.</p>
          </div>
        </div>
        <br />
        <div className="row justify-content-center pt-5">
          <div className="col-12 col-md-6 col-lg-4 mb-2 mb-md-0 position-relative">
            {/* Bouton principal */}
            <button
              onClick={handleClick}
              className="btn btn-danger w-100 fw-bold py-3"
            >
              <i className="fas fa-calendar-alt me-2"></i> PRENDRE RDV
            </button>

            {/* Boutons supplémentaires avec animation */}
            {showButtons && (
              <div className="additional-buttons">
                <Link
                target='_blank'
                  to="https://www.doctolib.fr/dentiste/mulhouse/alev-kaya-mulhouse"
                  className="btn btn-secondary w-75 fw-bold py-2 animated-button slide-in-right"
                >
                  <i className="fas fa-tooth me-2"></i>
                  ORTHODONTIE
                </Link>
                <Link
                target='_blank'
                  to="https://www.doctolib.fr/stomatologue/mulhouse/tuncay-sahin"
                  className="btn btn-success w-75 fw-bold py-2 animated-button slide-in-left"
                >
                  <i className="fas fa-heart me-2"></i>
                  STOMATOLOGIE
                </Link>
              </div>
            )}
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Link to="/Contact" className="btn btn-primary w-100 fw-bold py-3">
              <i className="fas fa-phone-alt me-2"></i> CONTACT
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;