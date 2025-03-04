import React from "react";
import '../style/RendezVous.css'

function RendezVous(){

        return(
            <div id="RendezVous" className="container mt-5">
            <div className="card p-4 card1">
              <div className="row align-items-center">
                <i class="fas fa-file-alt text-success icon"></i>
                <h2 className="text-center">Premier rendez-vous ?</h2>
                <p className="text">
                  <strong className="fw-bold">
                    Besoin d'un avis pour connaître la nécessité de mettre en place un traitement d'orthodontie ?
                  </strong><br />
                  Lors du premier rendez-vous, nous procédons à un examen clinique et éventuellement radiologique au sein de notre cabinet d’orthodontie pour savoir s’il y a ou non la nécessité d’intervenir.
                  <br />Pour prendre RDV c'est très simple, cliquez sur le lien ci-dessous et sélectionnez le motif de votre consultation.
                  <br />En cas d’urgence, veuillez nous contacter par téléphone au 03 89 66 01 16 et nous indiquer l’urgence.
                </p>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-auto mb-2 mb-md-0">
                    <a href="" className="btn btn-sm btn-outline-primary w-100">
                    <i className="fas fa-tooth me-2"></i>
               ORTHODONTIE
                    </a>
                </div>
                <div className="col-12 col-md-auto">
                    <a href="" className="btn btn-sm btn-outline-danger w-100">
                    <i className="fas fa-heart me-2"></i>STOMATOLOGIE
                    </a>
                </div>
                </div> 
            </div>
          </div>
          
          
           
        )
}
export default RendezVous;