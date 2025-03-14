import React, { createContext, useState } from 'react';

// Créer un contexte
export const AccueilContext = createContext();

// Créer un fournisseur de contexte
export const AccueilProvider = ({ children }) => {
  const [titre1, setTitre1] = useState('Votre sourire est notre Priorité!');
  const [titre2, setTitre2] = useState('Nous prenons soin de vous.');
//   const [backgroundImage, setBackgroundImage] = useState('/Back.jpg'); // Chemin correct

  const updateAccueil = (newTitre1, newTitre2, newImage) => {
    console.log('Mise à jour des valeurs:', newTitre1, newTitre2); // Vérifiez les nouvelles valeurs
    setTitre1(newTitre1);
    setTitre2(newTitre2);
    // setBackgroundImage(newImage);
  };

  return (
    <AccueilContext.Provider value={{ titre1, titre2, updateAccueil }}>
      {children}
    </AccueilContext.Provider>
  );
};