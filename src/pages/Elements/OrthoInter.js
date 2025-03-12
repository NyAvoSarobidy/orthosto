import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Enf1 from './image/app.jpg';
import '../style/OrthoInter.css';
import 'animate.css';


function OrthoInter() {
    return (
        <div className="container my-5">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                <div className="row g-0">
                    {/* Image Section */}
                    <div className="col-lg-5 d-none d-lg-flex align-items-center justify-content-center bg-light p-3">
                    <img src={Enf1} className="img-fluid animate__animated animate__zoomIn" style={{ height: "500px" }} />
                    </div>
                    
                    {/* Text Section */}
                    <div className="col-lg-7">
                        <div className="p-5">
                        <h1 className="h4 text-gray-900 text-danger mb-4 animate__animated animate__fadeInDown">
    ORTHODONTIE D’INTERCEPTION
</h1>  <p className="text-gray-900 mb-4 fw-bold animate__animated animate__slideInRight">
                                L'Orthodontie Interceptive correspond à une prise en charge précoce des enfants lorsque cela est nécessaire. 
                                La coopération de nos jeunes patients étant une variable importante dans la réussite du traitement, nous préférons 
                                commencer les traitements entre <strong>6 et 9 ans</strong> afin de les remettre dans un bon schéma de croissance et éviter des traitements par bagues trop longs.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrthoInter;