import React, { useState,useEffect } from 'react';
import './style/styleEnquette.css';

function Enquete() {
  const [showButton, setShowButton] = useState(false);

  // Fonction pour faire défiler la page vers le haut
  const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth", // Défilement fluide
      });
  };

  // Gestionnaire pour afficher ou masquer le bouton
  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 200) {
              setShowButton(true);
          } else {
              setShowButton(false);
          }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);





  const [formData, setFormData] = useState({
    date: '',
    Choix: [],
    Raison: '',
    Cabinet: [],
    Accueil: '',
    Recommandation: '',
    Commentaires: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  useEffect(() => {
    // Fonction pour obtenir la date d'hier
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1); // Soustraire un jour

    // Formatage de la date dans le format 'YYYY-MM-DD' requis pour un champ type "date"
    const formattedDate = yesterday.toISOString().split('T')[0];

    // Mettre la date d'hier comme valeur maximale pour le champ de saisie
    document.getElementById('dateInput').setAttribute('max', formattedDate);
  }, []);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => {
      if (type === 'checkbox') {
        return {
          ...prevState,
          [name]: checked
            ? [...prevState[name], value]
            : prevState[name].filter((item) => item !== value)
        };
      } else {
        return { ...prevState, [name]: value };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xrbpgnkn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage('Merci pour votre retour !');
        setFormData({
          date: '',
          Choix: [],
          Raison: '',
          Cabinet: [],
          Accueil: '',
          Recommandation: '',
          Commentaires: ''
        });
      } else {
        setResponseMessage('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      setResponseMessage('Erreur lors de l’envoi du formulaire.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top">
        <div className="container">
          <p className="navbar-brand text-danger fw-bold">ORTHO<span style={{ color: '#15033f' }}>STO</span></p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div className="tete container text-center">
        <h1 className="display-5 fw-bold">CABINET D'ORTHODONTIE ET STOMATOLOGIE</h1>
        <p className="lead">Orthodontie et stomatologie pour les enfants, les adolescents et les adultes.</p>
      </div>

      <div className="container mt-5">
        <form className="formulaire" onSubmit={handleSubmit}>
          <h2 className="titre2 text-danger mb-4">Enquête de Satisfaction</h2>

          {responseMessage && <p className="alert alert-info">{responseMessage}</p>}

          <div className="mb-4">
            <label className="form-label label">Date:</label>
            <input type="date" className="form-control" 
            name="date" value={formData.date}
            id="dateInput" 
             onChange={handleChange} required />
          </div>

          <fieldset className="mb-4">
            <legend>1. Pourquoi avez-vous choisi notre cabinet dentaire ?</legend>
            {['Soins en urgence', 'Recommandation d’un proche', 'Rendez-vous rapide'].map((option, index) => (
              <div key={index} className="form-check">
                <input type="checkbox" className="form-check-input"
                 name="Choix"
                  value={option} onChange={handleChange} />
                <label className="form-check-label">{option}</label>
              </div>
            ))}
          </fieldset>

          <div className="mb-4">
            <label>La raison la plus importante ?</label>
            <input type="text" className="form-control" name="Raison" 
            value={formData.Raison} onChange={handleChange} />
          </div>

          <fieldset className="mb-4">
            <legend>2. Comment avez-vous connu notre Cabinet Dentaire ?</legend>
            {['Plaques dans la rue', 'Pages jaunes', 'Site internet'].map((option, index) => (
              <div key={index} className="form-check">
                <input type="checkbox" className="form-check-input"
                 name="Cabinet" value={option} onChange={handleChange} />
                <label className="form-check-label">{option}</label>
              </div>
            ))}
          </fieldset>

          <fieldset className="mb-4">
            <legend>3. Comment avez-vous trouvé l'accueil téléphonique ?</legend>
            {['Excellent', 'Bien', 'Moyen', 'Mauvais'].map((option, index) => (
              <div key={index} className="form-check">
                <input type="radio" className="form-check-input"
                 name="Accueil" value={option} onChange={handleChange} />
                <label className="form-check-label">{option}</label>
              </div>
            ))}
          </fieldset>

          <fieldset className="mb-4">
            <legend>4. Recommanderiez-vous notre cabinet ?</legend>
            <div className="form-check">
              <input type="radio" className="form-check-input" name="Recommandation" value="Oui" onChange={handleChange} />
              <label className="form-check-label">Oui</label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" name="Recommandation" value="Non" onChange={handleChange} />
              <label className="form-check-label">Non</label>
            </div>
          </fieldset>

          <div className="mb-4">
            <label className="form-label">Commentaires :</label>
            <textarea className="form-control" name="Commentaires" value={formData.Commentaires} onChange={handleChange}></textarea>
          </div>

          <button type="submit" className="btn btn-danger" disabled={isSubmitting}>
            {isSubmitting ? 'Envoi en cours...' : 'Soumettre'}
          </button>
        </form>
      </div>

                       {/* Bouton pour remonter en haut */}
                       {showButton && (
                <button
                    onClick={scrollToTop}
                    className="btn btn-danger btn-lg rounded-circle"
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        zIndex: 1000,
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    ↑
                </button>
            )}
    </>
  );
}

export default Enquete;
