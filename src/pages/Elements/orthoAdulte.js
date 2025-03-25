import React from "react";
import '../style/OrthoAdulte.css';
import image1 from "./image/Adulte1.jpg";

function OrthoAdulte() {
    return (
        <div className="adulte">
            <div className="container my-4">
                {/* Section Titre et Introduction */}
                <div className="text-start">
                    <h4  className="text-start fs-2 hover-text" >ORTHODONTIE ADULTE</h4>
                    <p>Prise en charge de l’esthétique globale du sourire</p>
                </div>

                {/* Premier paragraphe */}
                <p className="text-gray-900 mb-4 fw-bold animate__animated animate__slideInRight">
                    L'Orthodontie adulte se démocratise de plus en plus grâce notamment aux progrès technologiques. L'utilisation de techniques invisibles 
                    telles que l'Orthodontie par aligneurs a permis aux adultes de se faire traiter sans impact au niveau social.
                    De plus, la planification des traitements par 3D permet des traitements plus rapides et mieux aboutis.
                </p>
                <hr className="fw-bold" />

                {/* Deuxième paragraphe */}
                <p className="text-gray-900 mb-4">
                    Nous réalisons pour les adultes des traitements courts (en dessous de 6 mois pour les corrections mineures ou les reprises de traitements) mais aussi des traitements plus longs qui nécessitent une plus grande correction. Dans le cas où le problème dentaire est associé à un problème de mâchoires et/ou un problème de dysharmonie faciale, nous pouvons réaliser un traitement ortho-chirurgical. Nous travaillons avec la marque ayant le plus de recul et la plus grande expérience dans le monde : INVISALIGN.
                </p>

             
            </div>
        </div>
    );
}

export default OrthoAdulte;