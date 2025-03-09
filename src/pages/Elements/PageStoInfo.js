import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sto3 from './image/sto3.jpg';
import '../style/StoInfo.css';

function StoInfo() {
    return (
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                        {/* Colonne Image */}
                        <div className="col-lg-5 d-none d-lg-block">
                            <img src={sto3} className="img-fluid h-100 w-100" alt="Stomatologie" style={{ objectFit: "cover" }} />
                        </div>
                        <div className="col-lg-7">
                            <div className="p-5">
                                <h1 className="h4 text-gray-900 text-danger mb-4">✔ LA STOMATOLOGIE</h1>
                                <p className="text-gray-900 mb-4 fw-bold fs-5">
                                    La stomatologie est la spécialité dédiée aux maladies de la bouche.
                                </p>

                                <hr className="text-danger" />
                                <p className="text-gray-900 mb-4">
                                    Elle concerne donc l’extraction des dents de sagesse, suite à des infections et douleurs dentaires, ou simplement à la fin d’un traitement d’orthodontie, pour limiter les risques de récidive du traitement orthodontique.
                                </p>

                                <p className="text-gray-900 mb-4 fw-bold">
                               ✔ L'AVULSION DES DENTS DE SAGESSE <br/>
                               ✔ LES IMPLANTS DENTAIRES<br/>
                               ✔ LES ORTHÈSES D'AVANCÉE MANDIBULAIRE<br/>
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoInfo;