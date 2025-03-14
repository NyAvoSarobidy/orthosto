
import React from 'react';
import './style/Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import {

  faPhone,
  faEnvelope,
 
} from "@fortawesome/free-solid-svg-icons";


function Header(){
    return(
        <header className="header-top-custom border-bottom">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            
            {/* Partie gauche : Contacts téléphoniques et adresse */}
            <div className="col-12 col-md-4 d-flex flex-column align-items-start text-small">
            <p className="text-white text-center pt-2">
              <strong> Site ORTHOSTO </strong>  <br />
              Dr Tuncay SAHIN
            </p>
         
            </div>
         
           
            <div className="col-12 col-md-3 d-flex flex-column align-items-start align-items-md-end text-small">
            <p className="text-white text-center pt-2">
              Site réalisé par <strong>Ny Avo ANDRIATSILAVO  <br />
                <FontAwesomeIcon icon={faPhone}  /> +261345749776  <br /> <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                nyavoandriatsilavo@gmail.com</strong> 
            </p>
            </div>
          </div>
        </div>
      </header>
      
      
      
      
    )
}

export default Header;