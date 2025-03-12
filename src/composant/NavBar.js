
import React from 'react';
import "./style/NavBar.css"
// import Header from './Header'
import { Link } from 'react-router-dom';

function NavBar(){

    return (
        <>
            {/* <Header /> */}
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top" >
              <div className="container ">
                <Link className="navbar-brand text-danger fw-bold" to="/">    
                  ORTHO<span style={{ color: "#15033f" }}>STO</span>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      <i className="fas fa-home me-2"></i> Accueil
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Orthodontie">
                      <i className="fas fa-tooth me-2"></i> Orthodontie
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Stomatologie">
                  
                      <i className="fas fa-heart me-2"></i> Stomatologie
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" 
                    target="_blank"
                     to="https://www.doctolib.fr/stomatologue/mulhouse/tuncay-sahin/booking/motives?specialityId=25&telehealth=false&placeId=practice-228902&profile_skipped=true&bookingFunnelSource=external_referral">
                      <i className="fas fa-calendar-check me-2"></i> Prendre un RDV
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Contact">
                      <i className="fas fa-phone-alt me-2"></i> Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Recrutement">
                    <i className="fas fa-briefcase me-2"></i> Recrutement
                    </Link>
                  </li>
            

                  
                </ul>
                </div>
            
       
              </div>
            </nav>
        </>
    )
}
export default NavBar;