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
                    L'Orthodontie adulte se démocratise de plus en plus grâce notamment aux progrès technologiques. L'utilisation de techniques invisibles telles que l'Orthodontie Linguale ou L'Orthodontie par aligneurs a permis aux adultes de se faire traiter sans impact au niveau social. De plus, la planification des traitements par 3D permet des traitements plus rapides et mieux aboutis.
                </p>
                <hr className="fw-bold" />

                {/* Deuxième paragraphe */}
                <p className="text-gray-900 mb-4">
                    Nous réalisons pour les adultes des traitements courts (en dessous de 6 mois pour les corrections mineures ou les reprises de traitements) mais aussi des traitements plus longs qui nécessitent une plus grande correction. Dans le cas où le problème dentaire est associé à un problème de mâchoires et/ou un problème de dysharmonie faciale, nous pouvons réaliser un traitement ortho-chirurgical. Nous travaillons avec la marque ayant le plus de recul et la plus grande expérience dans le monde : INVISALIGN.
                </p>

                {/* Section Image et Liste */}
                <div className="row align-items-center">
                    {/* Colonne Image */}
                    <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                        <img src={image1} alt="Orthodontie Adulte" className="img-fluid" />
                    </div>

                    {/* Colonne Texte */}
                    <div className="col-12 col-md-6">
                        <div className="text-start">
                            <h4 className="text-danger">INJECTIONS D’ACIDE HYALURONIQUE</h4>
                        </div>

                        {/* Liste structurée */}
                        <p className="text-gray-900 mb-4 fw-bold animate__animated animate__slideInRight">
                            <ol>
                                <li>
                                    <strong>Lèvres</strong>
                                    <p>
                                        Le but est d’obtenir une lèvre pulpeuse. On insiste sur la volonté d’avoir un résultat le plus naturel possible. Le but est de corriger des asymétries éventuelles ou des lèvres trop fines. On peut ainsi ourler la lèvre pour la redessiner, mais également augmenter le volume si celui-ci est insuffisant.
                                        Les résultats durent environ un an.
                                    </p>
                                    <strong>Déroulement de la séance :</strong>
                                    <ul>
                                        <li>Désinfection des lèvres</li>
                                        <li>Anesthésie de contact pendant 30 à 60 min</li>
                                        <li>Injection du produit contenant également un anesthésique afin de réduire les douleurs pendant l’injection</li>
                                    </ul>
                                    <strong>Après l’intervention :</strong>
                                    <ul>
                                        <li>Il peut y avoir un gonflement pendant 2 à 4j après l’intervention.</li>
                                        <li>On préconise l’application de glace pour réduire cet œdème.</li>
                                        <li>Le résultat est immédiat.</li>
                                        <li>On programme un RDV à 10j pour évaluer le résultat après disparition de l’œdème réactionnel, afin de rajouter du produit si nécessaire.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Rides autour de la bouche</strong>
                                    <p>
                                        On peut utiliser ce produit également pour combler les rides autour des lèvres.
                                        <br />
                                        <strong>Attention !</strong> Certains cas nécessitant de la chirurgie ne peuvent pas être traités par des injections d’acide hyaluronique. Le praticien évaluera lors de la première consultation la faisabilité des injections et vous dirigera vers la meilleure solution.
                                    </p>
                                </li>
                            </ol>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrthoAdulte;