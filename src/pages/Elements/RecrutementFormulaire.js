import React, { useState, useEffect, useRef } from 'react';
import '../style/Recrutement.css'; // Fichier CSS pour les styles
import secretaire from './image/secretaire.jpg';
import Assistante from './image/assistante.jpg';
import PraOrtho from './image/oRTHOFE.jpg';
import PraSto from './image/StoChir.jpg';
import Hiring from './image/hiring.jpg';
import Swal from 'sweetalert2';

function RecrutementFormulaire() {
  const rowRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const row = document.querySelector('.row');
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      row.scrollLeft += 10; // Ajuste la vitesse
      scrollAmount += 10;
      if (scrollAmount >= row.scrollWidth / 2) clearInterval(slideTimer);
    }, 50); // Ajuste le temps
  }, []);

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    poste: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    setIsLoading(true); // Active le loader
    const formData = new FormData(e.target); // Récupère les données du formulaire
  
    try {
      const response = await fetch("https://formspree.io/f/xpwpwzoa", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
  
      if (response.ok) {
        // Affiche un message de succès avec SweetAlert2
        Swal.fire({
          icon: 'success',
          title: 'Merci !',
          text: `Merci, ${formData.get('nom')} ! Nous avons bien reçu vos coordonnées. Veuillez envoyer votre CV à cabinet@orthosto.com.`,
          confirmButtonText: 'OK',
        });
  
        // Réinitialisez le formulaire
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          poste: '',
          message: ''
        });
      } else {
        // Affiche un message d'erreur avec SweetAlert2
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: "Une erreur s'est produite. Veuillez réessayer.",
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
  
      // Affiche un message d'erreur en cas d'exception
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: "Une erreur s'est produite. Veuillez réessayer.",
        confirmButtonText: 'OK',
      });
    }finally {
      setIsLoading(false); // Désactive le loader
    }
  };

  return (
    <div className="recrutement-page">
      {/* Section Hero */}
      <div className="recru-section">
        <div className="recru-content">
          <h2 className="fw-bold text-white display-4 mb-4">Rejoignez Notre Équipe</h2>
          <p className="text-white fs-5">Nous recrutons des talents passionnés pour renforcer notre cabinet.</p>
        </div>
      </div>

      {/* Section des postes à pourvoir */}
      <div className="postes-section container">
        <h2 className="fw-bold text-dark mb-4">Postes à Pourvoir</h2>
        <div className="row flex-nowrap overflow-auto" ref={rowRef} style={{ scrollBehavior: 'smooth' }}>
          {/* Secrétaire */}
          <div className="col-md-3 mb-4">
            <div className="recru-card h-100">
              <img src={secretaire} className="card-img-top" alt="Secrétaire" />
              <div className="card-body">
                <h5 className="tt card-title text-danger">Secrétaire</h5>
                <p className="card-text">
                  Nous recherchons une secrétaire dynamique pour gérer l'accueil et l'administration du cabinet.
                </p>
              </div>
            </div>
          </div>

          {/* Assistante Dentaire */}
          <div className="col-md-3 mb-4">
            <div className="recru-card h-100">
              <img src={Assistante} className="card-img-top" alt="Assistante Dentaire" />
              <div className="card-body">
                <h5 className="tt card-title text-danger">Assistante Dentaire</h5>
                <p className="card-text">
                  Poste d'assistante dentaire pour soutenir nos praticiens dans leurs interventions.
                </p>
              </div>
            </div>
          </div>

          {/* Praticien Orthodontie */}
          <div className="col-md-3 mb-4">
            <div className="recru-card h-100">
              <img src={PraOrtho} className="card-img-top" alt="Praticien Orthodontie" />
              <div className="card-body">
                <h5 className="tt card-title text-danger">Praticien Orthodontie</h5>
                <p className="card-text">
                  Nous recherchons un orthodontiste pour rejoindre notre équipe.
                </p>
              </div>
            </div>
          </div>

          {/* Praticien Stomatologie */}
          <div className="col-md-3 mb-4">
            <div className="recru-card h-100">
              <img src={PraSto} className="card-img-top" alt="Praticien Stomatologie" />
              <div className="card-body">
                <h5 className="tt card-title text-danger">Praticien Stomatologie</h5>
                <p>chirurgie orale de filière médicale</p>
                <p className="card-text">
                  Poste de stomatologiste pour prendre en charge nos patients avec expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Formulaire de contact */}
      <div className="formulaire-section container">
        <h2 className="text-start mb-4 text-dark fw-bold hover-text">Postuler Maintenant</h2>
        <div className="row">
          {/* Colonne de gauche pour l'image */}
          <div className="col-md-6">
            <img
              src={Hiring}
              alt="Description de l'image"
              className="img-fluid rounded"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          {/* Colonne de droite pour le formulaire */}
          <div className="col-md-6">
            <form
              action="https://formspree.io/f/{votre_id_formulaire}"
              method="POST"
              onSubmit={handleSubmit}
              className="formulaire bg-light border border-primary rounded shadow-sm p-4"
            >
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      placeholder="Nom et Prénom"
                    />
                    <label htmlFor="nom">
                      <i className="fas fa-user me-2"></i> Nom et Prénom
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Adresse E-mail"
                    />
                    <label htmlFor="email">
                      <i className="fas fa-envelope me-2"></i> Adresse E-mail
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="tel"
                      className="form-control"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                      placeholder="Téléphone"
                    />
                    <label htmlFor="telephone">
                      <i className="fas fa-phone me-2"></i> Téléphone
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="poste"
                      name="poste"
                      value={formData.poste}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Sélectionnez un poste</option>
                      <option value="Secrétaire">Secrétaire</option>
                      <option value="Assistante Dentaire">Assistante Dentaire</option>
                      <option value="Praticien Orthodontie">Praticien Orthodontie</option>
                      <option value="Praticien Stomatologie">Praticien Stomatologie</option>
                    </select>
                    <label htmlFor="poste">
                      <i className="fas fa-briefcase me-2"></i> Poste souhaité
                    </label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message (facultatif)"
                    ></textarea>
                    <label htmlFor="message">
                      <i className="fas fa-comment me-2"></i> Message (facultatif)
                    </label>
                  </div>
                </div>
              </div>

              <button
  type="submit"
  className="btn btn-primary w-100 mt-3"
  disabled={isLoading} // Désactive le bouton pendant le chargement
>
  {isLoading ? (
    <>
      <i className="fas fa-spinner fa-spin me-2"></i> Envoi en cours...
    </>
  ) : (
    <>
      <i className="fas fa-paper-plane me-2"></i> Envoyer ma candidature
    </>
  )}
</button>
            </form>

            <p className="text-center mt-3">
              Veuillez envoyer votre CV à <a href="mailto:cabinet@orthosto.com">cabinet@orthosto.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecrutementFormulaire;