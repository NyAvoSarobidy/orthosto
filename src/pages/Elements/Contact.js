import React from "react";
import '../style/styleContact.css';

function Contact() {
    return (
        <>
            <div className="contact">
                <div className="container scroll mt-5" data-aos="fade-in" style={{ marginTop: "-20px" }}>
                    <div className="name text-center fs-italic">CONTACTEZ-NOUS</div>

                    <div className="row align-items-center pt-5">
                        {/* Carte Téléphone */}
                        <div className="col-12 col-md-4 mx-auto mt-1 text-center">
                            <div className="card contact-card">
                                <i className="fas fa-phone contact-icon"></i>
                                <p className="contact-title">Par Téléphone</p>
                                <p className="contact-info">03 89 66 01 16<br />07 83 35 01 24</p>
                            </div>
                        </div>

                        {/* Carte Email */}
                        <div className="col-12 col-md-4 mx-auto mt-1 text-center">
                            <div className="card contact-card">
                                <i className="fas fa-envelope contact-icon"></i>
                                <p className="contact-title">Par Email</p>
                                <p className="contact-info">cabinet@orthosto.com</p>
                            </div>
                        </div>

                        {/* Carte Localisation */}
                        <div className="col-12 col-md-4 mx-auto mt-1 text-center">
                            <div className="card contact-card">
                                <i className="fas fa-map-marker-alt contact-icon"></i>
                                <p className="contact-title">Localisation</p>
                                <p className="contact-info">28 Rue du Sauvage, 68100 Mulhouse</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section DOCTEUR */}
            <div className="row align-items-center doctor-section" style={{ marginTop: "30px" }}>
                <div className="card col-12 col-md-5 mx-auto text-center p-4">
                    <i className="fas fa-user-doctor text-danger fw-bold fa-5x mb-3"></i>
                    <div className="doctor-nam fw-bold fs-5">DOCTEUR Tuncay SAHIN</div>
                    <hr className="text-dark" />
                    <p className="text-dark fw-bold pt-3">
                        Médecin spécialisé en STOMATOLOGIE et en ORTHODONTIE<br />
                        Orthodontie classique et par aligneurs esthétiques<br />
                        Diplômé de la faculté de Lille (France)
                    </p>
                </div>
            </div>
        </>
    );
}

export default Contact;