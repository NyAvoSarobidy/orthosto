

import React from "react";
import '../style/OrthoInfo1.css';
import { Link } from 'react-router-dom';


function OrthoInfo1() {
    return (
        <div className="adulte " style={{ marginTop :"-70px"}}>
            <div className="container my-5">
                {/* Section Titre et Introduction */}
                <div className="text-start">
                    <h4 className="text-danger">ECLAIRCISSEMENT DENTAIRE</h4>
                    <p>Cette technique d’éclaircissement de la teinte des dents est possible à conditions que les dents sont saines. L’éligibilité à cette technique est évaluée au premier RDV par le praticien.</p>
                </div>
                <h4 className="text-dark"> Il existe plusieurs techniques :</h4>
               
                {/* Premier paragraphe */}
                <p className="text-gray-900 mb-4 fw-bold animate__animated animate__slideInRight">
                 ✔ Au fauteuil avec laser :
                 non appliquée dans notre cabinet car trop agressif pour les dents et résultats moins stables dans le temps.
                 <br/>
              
                 ✔  Technique ambulatoire avec gouttières d’éclaircissement : 
                le patient porte tous les soirs,
                 pendant 7 à 14 nuits, des gouttières avec un produit spécifique pour blanchir les dents.  </p>
                <hr className="fw-bold" />

                {/* Deuxième paragraphe */}
                <p className="text-gray-900 mb-4">
                Cette 2ème technique est certe 
                plus laborieuse pour vous patients, mais c’est celle qui est la plus saine pour les dents, et celle dont les résultats durent le plus longtemps. Quelque que soit le projet esthétique envisagé, la priorité est la bonne santé des dents. Un bilan est réalisé avant d’entreprendre les projets esthétiques, et vous serez adressés chez votre dentiste si des soins sont à envisager.  </p>

        
            </div>

            <div className="container my-5">
                {/* Section Titre et Introduction */}
                <div className="text-start">
                    <h4 className="text-danger">ORTHODONTIE CHIRURGICALE</h4>
                </div>
              
                {/* Premier paragraphe */}
                <p className="text-gray-900 mb-4 fw-bold animate__animated animate__slideInRight">
                Lors d'une consultation dentaire à visée esthétique, certains de nos patient voulant
                 retrouver un sourire harmonieux, peuvent présenter un problème dentaire qui n'est en fait que la répercussion d'un problème de malposition ou de décalage de mâchoires. 
                 </p>  
                 <hr className="fw-bold" />

                {/* Deuxième paragraphe */}
                <p className="text-gray-900 mb-4">
                 👉 Cette anomalie a très souvent une répercussion
                 au niveau du visage et au niveau de la face. 
                 Dans ce cas bien précis nous travaillons main dans la 
                 main avec un chirurgien Maxillo-facial afin de redonner à notre
                  patient un visage qui s'accordera avec son nouveau sourire.
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
            </div>
            <div className="container my-5  text-center">
            <h4 className="text-danger">Recherche associée</h4>

            <div className="">
                {/* Corps de la carte */}
                <div className="">
                    <h5 className="card-title">Dr Alev KAYA</h5>
                    <p className="card-text">Chirurgien-dentiste à Mulhouse</p>
                    <p className="card-text">
                        Adresse : 28 Rue du Sauvage, 68100 Mulhouse
                    </p>
                    <a 
                        href="https://www.doctolib.fr/dentiste/mulhouse/alev-kaya-mulhouse" 
                        className="text-decoration-none"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Prendre rendez-vous en ligne
                    </a>
                </div>
            </div>
        </div>


        </div>
        
    );
}

export default OrthoInfo1;