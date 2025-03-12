import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Enf1 from './image/Enf1.jpg';
import Enf2 from './image/Enf2.jpg';
import Enf3 from './image/Enf3.jpg';
import Enf4 from './image/Enf4.jpg';
import Enf5 from './image/Enf5.jpg';
import '../style/OrthoEnfants.css';

function OrthoEnfants() {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        dots: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const images = [Enf1, Enf2, Enf3, Enf4, Enf5];

    return (
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block">
                            <Slider {...settings}>
                                {images.map((img, index) => (
                                    <div key={index} className="Image-enfants">
                                        <img src={img} alt={`Enfant ${index + 1}`} className="img-fluid" />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className="col-lg-7">
                            <div className="p-5">
                                <h1 className="h4 text-gray-900 text-danger mb-4">L’ORTHODONTIE CHEZ L’ENFANT</h1>
                                <p className="text-gray-900 mb-4 fw-bold">
                                    Il est préférable de voir les enfants dès 8-9 ans, juste après l’éruption des incisives maxillaires. Selon la gravité de la malocclusion, il est nécessaire de faire un traitement précoce, dit d’interception, 
                                    c’est-à-dire avant que toutes les dents de lait soient tombées.
                                </p>

                                <hr className="text-danger"/>
                                <p className="text-gray-900 mb-4">
    Ceci permet de corriger les problèmes de croissance des mâchoires qui compromettent
     d’emblée l’alignement dentaire et la bonne santé de la mâchoire. 
     L’alignement dentaire se fait plus tard avec les gouttières d'alignement, ou les brackets, 
    qui peuvent être en céramique ou métal.
</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrthoEnfants;
