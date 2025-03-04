import React from 'react';
import '../style/Loader.css'; // Fichier CSS pour les styles du loader

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Chargement de la carte...</p>
    </div>
  );
};

export default Loader;