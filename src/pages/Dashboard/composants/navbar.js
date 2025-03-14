import React, { useState } from 'react';
import "../style/styleNavBarDash.css";

function NavBarDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top custom-navbar">
        <div className="container-fluid">
          <p className="navbar-brand logo">
            ORTHO<span className="highlight">STO</span>
          </p>
          <button className="btn menu-btn" onClick={toggleSidebar}>
            ☰ Menu
          </button>
        </div>
      </nav>
      <div className="b container p-4">
  <h2 className="fw-bold ms-3 text-danger">Modification des Contenus</h2>
  <p className="lead ms-3 text-muted">
    Les modifications sur la page d'accueil se font par section.
  </p>
</div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
  <p className="text-center logo">
    Tableau de Bord
  </p>
  <hr />
  <ul>
    <li>
      <a href="#">
        <i className="fas fa-home"></i> {/* Icône pour la page d'accueil */}
        <span>Page Accueil</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i className="fas fa-tooth"></i> {/* Icône pour l'orthodontie */}
        <span>Page ORTHODONTIE</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i className="fas fa-teeth-open"></i> {/* Icône pour la stomatologie */}
        <span>Page STOMATOLOGIE</span>
      </a>
    </li>
  </ul>

  {/* Footer de la sidebar */}
  <footer className="sidebar-footer">
    <p className="text-center text-danger">Dr Tuncay SAHIN</p>
  </footer>
      </div>

      {/* Overlay */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default NavBarDashboard;