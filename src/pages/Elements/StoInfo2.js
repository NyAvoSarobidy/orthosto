
import React from "react";

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
        👉  L'avulsion des dents de sagesse peut être réalisée sous anesthésie locale ou générale en fonction de l'anxiété
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
        👉 Parfois plus confortables, les orthèses d'avancée mandibulaire sont remboursées par l'Assurance Maladie lorsque le spécialiste du sommeil (Pneumologue, Neurologue, Cardiologue, ORL)
         en fait la demande (Demande d'Accord Préalable).
        </p>
    </div>

    <div className="container my-5">
        {/* Section Titre et Introduction */}
        <div className="text-start">
            <h4 className="text-danger"> PHASE DE STABILISATION : CONTENTION</h4>
        </div>
      
        {/* Premier paragraphe */}
        <p className="text-gray-900 mb-4 fw-bold animate__animated animate__slideInRight">
        Quand les dents sont alignées et correctement emboîtées, débute la phase de stabilisation dite de contention : pour les dents du bas, il est préconisé d’utiliser un petit arc métallique collé derrière les incisives et canines. Cet arc sera à garder le plus longtemps possible. Les dents bougeants
         toute notre vie, seule cette contention garantira la pérennité du traitement orthodontique. </p>  
         <hr className="fw-bold" />

        {/* Deuxième paragraphe */}
        <p className="text-gray-900 mb-4">
         👉  Pour les dents du haut, il est préconisé de porter une contention sous forme de gouttière transparente à porter en permanence (sauf pour manger) pendant les 4 à 5 mois suivant la dépose de l’appareil actif puis la nuit pendant les 4 à 5 mois suivants. Ces précautions peuvent ne pas suffir, et il est possible que les incisives du haut aient tendance à bouger.
          On peut alors mettre en place une attelle en fibre de verre noyée dans une colle composite.
        </p>
    </div></>

    )

}
export default StoInfo2;