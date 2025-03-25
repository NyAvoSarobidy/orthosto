
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./image/imp1.webp"
import image2 from "./image/imp2.jpg"
import image3 from "./image/imp3.jpg"
import image4 from "./image/imp4.jpg"
import image5 from "./image/imp5.jpg"
import image6 from "./image/imp6.jpg"
import image7 from "./image/imp7.jpg"
import image8 from "./image/imp8.jpg"
import '../style/StoInfo2.css';

function StoInfo2(){

    return(
        <>
     <div className="container my-5"> 
        {/* Section Titre et Introduction */}
        <div className="text-start">
            <h4 className="text-danger">L'AVULSION DES DENTS DE SAGESSE</h4>
            <p className="fw-bold">
            Idéalement réalisée avant l'âge de 20 ans, l'avulsion des dents de sagesse permet de prévenir les infections et lésions dentaires liées à l'éruption incomplète de ces dents. L'avulsion des dents de sagesse est particulièrement recommandée au décours 
            des soins d'orthodontie en raison du manque d'espace et au risque potentiel de récidive.
                 </p>
        </div>

        {/* Premier paragraphe */}
       <hr className="fw-bold" />

        {/* Deuxième paragraphe */}
        <p className="text-gray-900 mb-4">
        👉  L'avulsion des dents de sagesse peut être réalisée sous anesthésie locale en fonction de l'anxiété
         du patient, de son anatomie et de la position des dents concernées.  </p>


    </div>

    <div className="container my-5">
        {/* Section Titre et Introduction */}
        <div className="text-start">
            <h4 className="text-danger">LES ORTHÈSES D'AVANCÉE MANDIBULAIRE</h4>
        </div>
      
        {/* Premier paragraphe */}
        <p className="text-gray-900 mb-4 fw-bold animate__animated animate__slideInRight">
        Les orthèses d'avancée mandibulaire sont une alternative au traitement du Syndrome d'Apnées Obstructives 
        du Sommeil habituellement traitées par masque de Pression Positive Continue. </p>  
         <hr className="fw-bold" />

        {/* Deuxième paragraphe */}
        <p className="text-gray-900 mb-4">
        👉 Les orthèses d'avancée mandibulaire sont remboursées par l'Assurance Maladie lorsque le spécialiste du sommeil (Pneumologue, Neurologue, Cardiologue, ORL)
         en fait la demande (Demande d'Accord Préalable).
        </p>
    </div>

    <div className="container my-5">
  
        <p className="text-gray-900 mb-4 fw-bold animate__animated animate__slideInRight">
       ✔😊 les implants dentaires permettent de remplacer les dents manquantes de façon pérenne avec un résultat esthétique. La mise en place nécessite parfois la réalisation d'augmentation du volume osseux appelée "greffe", 
        habituellement sous anesthésie locale</p>  
         
        <div className="gallery-container">
      <div className="gallery-item">
        <img src={image1} alt="Gallery Item 1" className="img-fluid" />
      </div>
      <div className="gallery-item">
        <img src={image2} alt="Gallery Item 2" className="img-fluid" />
      </div>
      <div className="gallery-item">
        <img src={image3} alt="Gallery Item 3" className="img-fluid" />
      </div>
      <div className="gallery-item">
        <img src={image4} alt="Gallery Item 4" className="img-fluid" />
      </div>
      <div className="gallery-item">
        <img src={image5} alt="Gallery Item 5" className="img-fluid" />
      </div>
      <div className="gallery-item">
        <img src={image6} alt="Gallery Item 6" className="img-fluid" />
      </div>
      <div className="gallery-item">
        <img src={image7} alt="Gallery Item 7" className="img-fluid" />
      </div>
      <div className="gallery-item">
        <img src={image8} alt="Gallery Item 8" className="img-fluid" />
      </div>
    </div>
    </div></>

    )

}
export default StoInfo2;