import React from "react";
import '../style/RendezVous.css';
import { Link } from 'react-router-dom';

function RendezVous() {
    return (
        <div id="RendezVous" className="container mt-5 mb-5">
            <div className="card p-4 card1 shadow-sm">
                <div className="row align-items-center">
                    <div className="col-12 text-center">
                        <i className="fas fa-calendar-check text-success icon mb-3"></i> {/* Icône modifiée */}
                        <h2 className="title">Premier rendez-vous ?</h2>
                        <p className="text">
                            <strong className="fw-bold">
                                Besoin d'un avis pour connaître la nécessité de mettre en place un traitement d'orthodontie ?
                            </strong><br />
                            Lors du premier rendez-vous, nous procédons à un examen clinique et éventuellement radiologique au sein de notre cabinet d’orthodontie pour savoir s’il y a ou non la nécessité d’intervenir.
                            <br />Pour prendre RDV, c'est très simple : cliquez sur le lien ci-dessous et sélectionnez le motif de votre consultation.
                            <br />En cas d’urgence, veuillez nous contacter par téléphone au <strong>03 89 66 01 16</strong> et nous indiquer l’urgence.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="col-12 col-md-auto mb-2 mb-md-0">
                        <Link to="/Orthodontie" className="btn btn-outline-primary w-100 btn-hover">
                            <i className="fas fa-tooth me-2"></i>
                            ORTHODONTIE
                        </Link>
                    </div>
                    <div className="col-12 col-md-auto">
                        <Link to="/Stomatologie" className="btn btn-outline-danger w-100 btn-hover">
                            <i className="fas fa-heart me-2"></i>
                            STOMATOLOGIE
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        
    );
}

export default RendezVous;