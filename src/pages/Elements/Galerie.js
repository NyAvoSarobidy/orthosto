import React from "react";
import '../style/Galerie.css';
import s1 from './image/s1.jpg';
import s2 from './image/s2.jpg';
import s3 from './image/s3.jpg';
import s4 from './image/s4.jpg';
import s5 from './image/s5.jpg';
import s6 from './image/s6.jpg';
import s7 from './image/s7.jpg';
import s8 from './image/s8.jpg';

function Galerie() {
    const images = [s1, s2, s3, s4, s5, s6, s7, s8]; // Tableau des images

    return (
        <div id="Galerie" className="mt-5 py-5 bg-light"> {/* Ajout de padding et fond clair */}
            <div className="container">
                <h2 className="text-center mb-4 fw-bold">Galerie</h2>
                <p className="text-center lead mb-5">Découvrez nos réalisations en images.</p>

                <div className="carousel slide" data-bs-ride="carousel" id="myCarousel">
                    {/* Indicateurs */}
                    <div className="carousel-indicators">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#myCarousel"
                                data-bs-slide-to={index}
                                className={index === 0 ? "active" : ""}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>

                    {/* Contenu du carousel */}
                    <div className="carousel-inner">
                        {images.map((image, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                <img
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    className="d-block w-100 img-fluid carousel-image"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Contrôles du carousel */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Galerie;