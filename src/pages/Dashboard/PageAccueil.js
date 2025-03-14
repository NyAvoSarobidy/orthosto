import React, { useState, useContext } from 'react';
import { AccueilContext } from '../../AccueilContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import './style/PageAccueil.css'; // Fichier CSS pour les styles personnalisés

function PageAccueil() {
    const { updateAccueil } = useContext(AccueilContext);
    const [image, setImage] = useState(null);
    const [imageURL, setImageURL] = useState('');
    const [titre1, setTitre1] = useState('');
    const [titre2, setTitre2] = useState('');
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(file);
          setImageURL(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
 const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Nouveau Titre 1:', titre1); // Vérifiez la valeur de titre1
  console.log('Nouveau Titre 2:', titre2); // Vérifiez la valeur de titre2
  console.log('Nouvelle Image:', imageURL); // Vérifiez la valeur de imageURL

  // Mettre à jour l'état global avec les nouvelles valeurs
  updateAccueil(titre1, titre2, imageURL);
  alert('Les modifications ont été appliquées !');
};
  
  return (
    <div className="container">
    <div className="card shadow-sm">
      <div className="card-header bg-white border-bottom-0">
        <p className="text-muted">Section Accueil</p>
      </div>
      <div className="card-body">
        <div className="row align-items-center">
          {/* Formulaire de texte */}
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              {/* Titre 1 */}
              <div className="form-group mb-4">
                <label htmlFor="titre1" className="form-label fw-bold">
                  <span className="text-danger">*</span> Titre 1 (Grand Titre)
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="titre1"
                  placeholder="Entrez le grand titre"
                  required
                  value={titre1}
                  onChange={(e) => setTitre1(e.target.value)}
                />
              </div>

              {/* Titre 2 */}
              <div className="form-group mb-4">
                <label htmlFor="titre2" className="form-label fw-bold">
                  <span className="text-danger">*</span> Titre 2 (Sous Titre)
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="titre2"
                  placeholder="Entrez le sous-titre"
                  required
                  value={titre2}
                  onChange={(e) => setTitre2(e.target.value)}
                />
              </div>

              {/* Bouton Valider */}
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg px-5">
                  Valider
                </button>
              </div>
            </form>
          </div>

          {/* Section d'upload d'image */}
          <div className="col-md-6">
            <div className="image-upload-section text-center p-4 border rounded">
              {imageURL ? (
                <div className="mb-3">
                  <img
                    src={imageURL}
                    alt="Uploaded"
                    className="img-fluid rounded shadow-sm"
                    style={{ maxHeight: '200px' }}
                  />
                </div>
              ) : (
                <div className="placeholder-image bg-light p-5 rounded mb-3">
                  <p className="text-muted">Aucune image sélectionnée</p>
                </div>
              )}

              <label htmlFor="imageUpload" className="btn btn-primary btn-lg">
                <FontAwesomeIcon icon={faUpload} className="me-2" />
                Upload une Image pour l'arrière-plan
              </label>
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default PageAccueil;