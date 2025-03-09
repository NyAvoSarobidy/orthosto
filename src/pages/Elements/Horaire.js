import React from "react";
import '../style/styleHoraire.css';
import image from './image/Horaire.jpg';

function Horaire() {
    return (
        <div className="Horaire ">
            <div className="container" style={{marginTop : "50px",}} data-aos="fade-in">
                {/* Carte contenant l'image et le texte */}
     
                <div className="row align-items-center justify-content-center">
    {/* Section de l'image */}
                    <div className="col-12 col-md-4 text-center">
                        <div className="image-card">
                            <img src={image} alt="Horaire" className="img-circle smaller-image" />
                        </div>
                    </div>

    {/* Section du texte */}
                <div className="col-12 col-md-6 ">
                    <div className="horaire-header">
                        <i className="fas fa-clock text-danger me-2 fs-3"></i>
                        <h1 className="d-inline-block fs-3">HORAIRE</h1>
                        <p className="fs-5 mt-2">Nous sommes disponibles du Lundi au Vendredi</p>
                    </div>
                    
                    <div className="horaire-content fs-4">
                        <p><strong>Lundi :</strong> 08:30–13:00, 14:00–18:00</p>
                        <p><strong>Mardi :</strong> 08:30–13:00, 14:00–18:00</p>
                        <p><strong>Mercredi :</strong> 08:30–13:00, 14:00–18:00</p>
                        <p><strong>Jeudi :</strong> 08:30–13:00, 14:00–18:00</p>
                        <p><strong>Vendredi :</strong> 08:30–13:00, 14:00–17:00</p>
                    </div>
            
                 </div>

                </div>
            </div>
        </div>
    );
}

export default Horaire;