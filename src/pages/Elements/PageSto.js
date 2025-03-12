
import React from "react";

import "../style/StylePageSto.css";

function PageSto(){

    return (
        <section id="sto" className="sto section">
        <div className="container scroll-up" data-aos="fade-in">
            {/* Ligne pour le texte et les images */}
            <div className="row align-items-center">
                {/* Colonne pour le texte (à gauche) */}
                <div className="col-12 col-md-6 text-center text-md-start">
                    <h2 className="fw-bold text-white display-4 mb-4" style={{ marginTop: "80px" }}>
                    STOMATOLOGIE 
                    </h2>
                    <hr className="text-white me-auto" style={{ width: "100%", maxWidth: "300px", paddingBottom: "10px" }} />
                    <p className="text-white fs-5">Dr Tuncay SAHIN</p>
                    <p className="text-white"> (Spécialiste en Chirurgie Orale issue de filière médicale)</p>


                   
                </div>
            </div>
        </div>
    </section>

    )


}
export default PageSto;