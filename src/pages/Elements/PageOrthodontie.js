import React from "react";
import Image1 from './image/Ortho1.jpg'; // Remplacez par vos images
import Image3 from './image/Ortho3.jpg';
import Image5 from './image/ado1.jpg';
import "../style/StylePageOtho.css";

function PageOrthodontie() {
    const images = [Image1, Image3, Image5]; // Tableau des images

    return (
        <section id="otho" className="otho section">
            <div className="container scroll-up" data-aos="fade-in">
                {/* Ligne pour le texte et les images */}
                <div className="row align-items-center">
                    {/* Colonne pour le texte (à gauche) */}
                    <div className="col-12 col-md-6 text-center text-md-start">
                        <h2 className="fw-bold display-4 mb-4" style={{ marginTop: "80px" }}>
                            ORTHODONTIE
                        </h2>
                        <hr className="text-white me-auto" style={{ width: "100%", maxWidth: "300px", paddingBottom: "10px" }} />
                        <p className="text-white fs-5">Orthodontiste & Praticien Invisalign</p>
                         <p className="text-white fs-5">Dr Tuncay SAHIN</p>
                    </div>

                    {/* Colonne pour les images (à droite) */}
                    <div className="col-12 col-md-6">
                        <div className="image-triangle-container">
                            <div className="image-wrapper image-1 pt-5">
                                <img
                                    src={images[0]}
                                    alt="Image 1"
                                    className="img-fluid rounded-circle border border-5 border-white shadow"
                                    style={{ width: "160px", height: "160px", objectFit: "cover" }}
                                />
                            </div>
                            <div className="image-wrapper image-2">
                                <img
                                    src={images[1]}
                                    alt="Image 2"
                                    className="img-fluid rounded-circle border border-5 border-white shadow"
                                    style={{ width: "160px", height: "160px", objectFit: "cover" }}
                                />
                            </div>
                            <div className="image-wrapper image-3 ms-5">
                                <img
                                    src={images[2]}
                                    alt="Image 3"
                                    className="img-fluid rounded-circle border border-5 border-white shadow"
                                    style={{ width: "160px", height: "160px", objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageOrthodontie;