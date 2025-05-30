import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Iframe from 'react-iframe';
import '../style/styleLocalisation.css';
import cab1 from './image/cab1.jpeg';
import cab2 from './image/cab2.jpeg';
import cab3 from './image/cab3.jpeg';
import Loader from './Loader';

function Localisation() {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div id="Localisation" className="Localisation mt-3 pb-5">
        <div className="container">
          <h2 className='hover-text'>Localisation</h2>
          <p>
            Notre cabinet d'orthodontie et stomatologie situé au centre ville de Mulhouse vous accueille du lundi au
            vendredi sur rendez-vous.
            <br />
            Pour prendre RDV auprès d'un médecin orthodontiste, vous pouvez simplement utiliser notre service de prise de
            RDV sur internet. En cas d'urgence, nous vous invitons à nous contacter par téléphone au{' '}
            <strong>03 89 66 01 16</strong>.
          </p>

          {/* Section des images */}
          <div className="row justify-content-center">
            {[cab2, cab1, cab3].map((image, index) => (
              <div key={index} className="col-12 col-md-3">
                <img src={image} alt={`Cabinet ${index + 1}`} className="img-thumbnail rounded sary2" />
              </div>
            ))}
          </div>

          {/* Bouton pour ouvrir la modal */}
          <div className="row justify-content-center mt-3">
            <div className="col-auto">
              <Button onClick={handleShow} className="btn btn-danger text-white fw-bold">
                <i className="fas fa-map-marker-alt me-2"></i> VOIR LA CARTE
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal avec la carte Google Maps */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header className="bg-light" closeButton>
          <Modal.Title>Localisation sur la carte</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ position: 'relative', minHeight: '450px' }}>
          {/* Loader */}
          {isLoading && <Loader />}
          
          {/* Iframe de Google Maps */}
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.999999999999!2d7.340303!3d47.747484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47919b2c483274f9%3A0x7c8ac7071bb21a4b!2sDr+Sahin+%26+Dr+Kaya!5e0!3m2!1sfr!2sfr!4v1633020000000!5m2!1sfr!2sfr"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            onLoad={handleIframeLoad}
            style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease' }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Localisation;
