
import React from "react";
import '../style/OrthoAdo.css'
import image1 from "./image/ado1.jpg"
import image2 from "./image/ado2.jpg"
import image3 from "./image/ado3.jpg"
function Orthoado(){

    return(
         
        <div className="ado">
        <div className="container my-5">
            <div className="text-center ">
                     <h4 className="text-danger " >ORTHODONTIE CHEZ LES ADOLESCENTS</h4>
             </div>
             <p className="text-gray-900 mb-4 fw-bold animate__animated animate__slideInRight">
             L'Orthodontie chez les adolescents correspond la plupart du temps à la pose d'un appareil 
             dentaire qui coïncide avec l'installation des dernières dents définitives.
              </p>
              <hr className="fw-bold"/>
              <p className="text-gray-900 mb-4">
              La mise en place d'un traitement par bagues permet l'alignement des dents mais aussi la bonne coïncidence des arcades dentaires entre elles afin d'offrir 
              à nos jeunes patients un passage à l'âge adulte dans les meilleurs dispositions.
              </p>
              <div className="row align-items-center justify-content-center">
                    <div className="col ">
                    <img src={image1} alt="John" className="img-fluid" />
                    </div>
                    <div className="col ">
                    <img src={image2} alt="John" className="img-fluid" />
                    </div>
                    <div className="col ">
                    <img src={image3} alt="John" className="img-fluid" />
                    </div>
              </div>
        </div>
        </div>
    )
    
}
export default Orthoado;