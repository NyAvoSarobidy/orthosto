import React from "react";
import image from "./image/invisalign.jpg";
import image2 from "./image/1.jpg";
import image3 from "./image/2.jpg";
import '../style/style.css';

function Technologie() {
    return (
        <div id="techno" className="mt-5 py-5 bg-light"> {/* Ajout de padding vertical et fond clair */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card shadow-sm">
                            <div className="card-header bg-dark d-flex align-items-center justify-content-start">
                                <i className="fas fa-robot me-3 fs-5"></i>
                                <h5 className="mb-0 text-dark fs-5">Nos technologies innovantes</h5>
                            </div>
                            <div className="card-body bg-white">
                                <p className=" fw-bold lead text-center mb-4"> {/* Texte centré et plus grand */}
                                    Nous investissons dans les dernières technologies orthodontiques pour vous garantir des traitements efficaces et confortables. De la radiographie numérique aux techniques d'imagerie 3D, nous utilisons des outils de pointe pour évaluer et planifier vos soins avec précision.
                                </p>

                                <div className="service-container row justify-content-center"> {/* Utilisation de la grille Bootstrap */}
                                    <div className="service-item col-md-5 col-sm-12 mb-4">
                                        <h3>Aligneurs dentaires transparents</h3>
                                    </div>
                                    <div className="service-item col-md-5 col-sm-12 mb-4">
                                        <h3>Implants dentaires</h3>
                                    </div>
                                    <div className="service-item col-md-5 col-sm-12 mb-4">
                                        <h3>Radiologie 3D</h3>
                                    </div>
                                    <div className="service-item col-md-5 col-sm-12 mb-4">
                                        <h3>Empreintes numériques</h3>
                                    </div>
                                </div>

                                <div className="row justify-content-center mt-4"> {/* Centrer les images */}
                                    <div className="col-md-3 col-sm-6 text-center">
                                        <img
                                            src={image2}
                                            alt="Orthodontiste"
                                            className="img-thumbnail rounded hover-zoom"
                                        />
                                    </div>
                                    <div className="col-md-3 col-sm-6 text-center">
                                        <img
                                            src={image}
                                            alt="Orthodontiste"
                                            className="img-thumbnail rounded hover-zoom"
                                        />
                                    </div>
                                    <div className="col-md-3 col-sm-6 text-center">
                                        <img
                                            src={image3}
                                            alt="Orthodontiste"
                                            className="img-thumbnail rounded hover-zoom"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologie;