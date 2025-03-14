import React from "react";
import '../style/styleApropos.css'
import image1 from './image/image.png'
import image2 from './image/images.jpeg'
import image3 from './image/image2.jpg'
function Apropos(){

        return(
            <div id="Apropos" className="mt-5 pb-5" style={{ paddingTop : "50px" }}>
                 <div className="container " >
                 <div className="row align-items-center">
            <h2 className="text-start fs-2 hover-text">ORTHODONTISTE MULHOUSE</h2>
              {/* Colonne gauche : Texte */}
              
              <div className="col-md-6">         
                <p className="pt-4">
                  <strong className="fw-bold">TRAITEMENTS EN ORTHODONTIE ET STOMATOLOGIE A MULHOUSE</strong><br />
                  Vous avez toujours rêvé d’un beau sourire ?<br />
                  Lors du bilan bucco-dentaire de votre enfant, votre chirurgien-dentiste vous a conseillé de consulter un orthodontiste ? Vos dents de sagesse vous font terriblement mal ?<br />
                  Nos praticiens, médecins spécialistes en orthodontie et stomatologie vous accueillent dans leur cabinet à Mulhouse.<br />
                  Nous proposons des traitements d'orthodontie classique ou invisible (par aligneurs esthétiques) selon vos besoins. Grâce à une approche personnalisée, nous élaborons des traitements adaptés à vos besoins. Ayant à notre disposition tous les moyens thérapeutiques modernes, les enfants et les adultes pourront bénéficier des techniques orthodontiques les plus performantes, 
                  les plus confortables et les plus discrètes.
                </p>
              </div>
          
              {/* Colonne droite : Image */}
              <div className="col-md-6 d-flex flex-column gap-4 pt-5" >
               
              <div style={{ position: 'relative', width: '90%', maxWidth: '45%', margin: '0 auto' }}>
      {/* Première image */}
      <img
        src={image3}
        alt="Back"
        className="img-thumbnail rounded"
        style={{
          position: 'absolute',
          top: '-30%', // Ajustez la position verticale
          left: '-30%', // Ajustez la position horizontale
          width: '50%', // Ajustez la taille de l'image superposée
          height: 'auto',
          zIndex: 1, // Assurez-vous que cette image est au-dessus
        }}
        
      />

      {/* Deuxième image superposée */}
      <img
        src={image1}
        alt="Orthodontiste"
        className="img-thumbnail rounded"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
                </div>
                 </div>
                 </div>
          
            </div>
        )
}
export default Apropos;


