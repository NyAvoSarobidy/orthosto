import React, { useState, useEffect } from 'react';
import image from './image/Outils.jpg';
import image2 from './image/apropos2.jpg';
import image3 from './image/carte.jpg';
import '../style/styleCard.css';

function Carte() {
  const images = [image, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Changement toutes les 3 secondes

    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      <div className="carte">
        <div className="container scroll mt-3" data-aos="fade-in">
          <div className="row align-items-center pt-5">
            <div className="col-12 col-md-5">
              <div className="carousel-container mt-5">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                  >
                    <img src={img} alt={`Slide ${index + 1}`} className="img-fluid" />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-12 col-md-7 texte-left mt-5">
              <div className="doctors">
                <div className="doctor-name">
                  Dr. Tuncay SAHIN <i className="fas fa-tooth ms-2"></i>
                </div>
              </div>
              <hr className="me-5" style={{ width: '100%', maxWidth: '400px', margin: 'auto' }} />
              <div className="cabinet-name">CABINET D'ORTHODONTIE ET STOMATOLOGIE</div>

              <p className="pt-2">
                "Un beau sourire ne rend pas seulement un visage lumineux.<br /> Il témoigne aussi
                d'une bonne santé dentaire, grâce aux soins de l'orthodontie et de la stomatologie."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carte;