import React, { useState } from 'react';
import './style/styleEnquette.css'; // Import du fichier CSS

function Enquete() {
  const [formData, setFormData] = useState({
    date: '',
    reasonsForChoosing: [],
    mostImportantReason: '',
    howDidYouHear: [],
    phoneReception: '',
    appointmentSatisfaction: '',
    foundCabinetEasily: '',
    receptionExperience: '',
    cabinetAppearance: '',
    waitingRoomComfort: '',
    waitingRoomReading: '',
    waitingTime: '',
    understoodDoctorExplanation: '',
    understoodAssistantExplanation: '',
    informedAboutTreatmentChoice: '',
    askedQuestions: '',
    sufficientReflectionTime: '',
    languageUsed: '',
    comments: '',
    recommendCabinet: '',
    recommendationReason: '',
    otherRemarks: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prevState => ({
        ...prevState,
        [name]: checked
          ? [...prevState[name], value]
          : prevState[name].filter(item => item !== value)
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top">
        <div className="container">
          <p className="navbar-brand text-danger fw-bold">
            ORTHO<span style={{ color: "#15033f" }}>STO</span>
          </p>
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
        </div>
      </nav>

      {/* Header Section */}
      <div className="tete container text-center">
        <h1 className="display-5 fw-bold">CABINET D'ORTHODONTIE ET STOMATOLOGIE</h1>
        <p className="lead ">
          Orthodontie et stomatologie pour les enfants, les adolescents et les adultes.
        </p>
      </div>

      {/* Form Section */}
      <div className="container mt-5">
        <form className="formulaire" onSubmit={handleSubmit}>
          <h2 className="titre2 text-danger mb-4">Enquête de Satisfaction</h2>

          {/* Date Field */}
          <div className="mb-4">
            <label className="form-label label">Date:</label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          {/* Section 1: Pourquoi avez-vous choisi notre cabinet dentaire ? */}
          <fieldset className="mb-4">
            <legend className="form-legend">1. Pourquoi avez-vous choisi notre cabinet dentaire ? (Vous pouvez cocher plusieurs réponses)</legend>
            <div className="row">
              {[
                'N°1 : Possibilité de soins en urgence',
                'N°2 : Recommandation d’un proche',
                'N°3 : Recommandation d’un dentiste',
                'N°4 : Rendez-vous rapide',
                'N°5 : Heures d’ouverture étendues',
                'N°6 : Proximité, facilité d’accès (gare, parking)',
                'N°7 : Autres'
              ].map((option, index) => (
                <div className="col-12 col-md-6" key={index}>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="reasonsForChoosing"
                      value={option}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">{option}</label>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3">
              <label className="form-label">
                Parmi les raisons évoquées ci-dessus, laquelle est la plus importante selon vous ? N°
                <input
                  type="text"
                  className="form-control"
                  name="mostImportantReason"
                  value={formData.mostImportantReason}
                  onChange={handleChange}
                />
              </label>
            </div>
          </fieldset>

          {/* Section 2: Comment avez-vous connu notre Cabinet Dentaire ? */}
          <fieldset className="mb-4">
            <legend className="form-legend">2. Comment avez-vous connu notre Cabinet Dentaire ? (Vous pouvez cocher plusieurs réponses)</legend>
            <div className="row">
              {[
                'Plaques professionnelles dans la rue',
                'Pages jaunes',
                'Site internet',
                'Recommandation par un membre de votre famille, un ami',
                'Recommandation par un autre chirurgien-dentiste',
                'Recommandation par un médecin'
              ].map((option, index) => (
                <div className="col-12 col-md-6" key={index}>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="howDidYouHear"
                      value={option}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">{option}</label>
                  </div>
                </div>
              ))}
            </div>
          </fieldset>

          {/* Section 3: Accueil */}
          <fieldset className="mb-4">
            <legend className="form-legend">3. Accueil</legend>
            <div className="mb-3">
              <label className="form-label">
                - Comment vous a semblé l’accueil téléphonique ?
                <input
                  type="text"
                  className="form-control"
                  name="phoneReception"
                  value={formData.phoneReception}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="form-label">
                - Avez-vous obtenu un rendez-vous dans un délai satisfaisant ?
                <input
                  type="text"
                  className="form-control"
                  name="appointmentSatisfaction"
                  value={formData.appointmentSatisfaction}
                  onChange={handleChange}
                />
              </label>
            </div>
            {/* Repeat for other fields */}
          </fieldset>

          {/* Section 4: Présentation du plan de traitement */}
          <fieldset className="mb-4">
            <legend className="form-legend">4. Présentation du plan de traitement</legend>
            <div className="mb-3">
              <label className="form-label">
                - Avez-vous bien compris les explications : de la part du praticien ?
                <input
                  type="text"
                  className="form-control"
                  name="understoodDoctorExplanation"
                  value={formData.understoodDoctorExplanation}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="form-label">
                - Avez-vous bien compris les explications : de la part de l’assistante si elle intervient ?
                <input
                  type="text"
                  className="form-control"
                  name="understoodAssistantExplanation"
                  value={formData.understoodAssistantExplanation}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="form-label">
                - Le praticien vous a-t-il informé des raisons de son choix thérapeutique ?
                <input
                  type="text"
                  className="form-control"
                  name="informedAboutTreatmentChoice"
                  value={formData.informedAboutTreatmentChoice}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="form-label">
                - Avez-vous pu poser des questions ?
                <input
                  type="text"
                  className="form-control"
                  name="askedQuestions"
                  value={formData.askedQuestions}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="form-label">
                - Avez-vous eu un temps de réflexion suffisant avant l’acceptation du plan de traitement et du devis ?
                <input
                  type="text"
                  className="form-control"
                  name="sufficientReflectionTime"
                  value={formData.sufficientReflectionTime}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="form-label">
                - Le langage utilisé a-t-il été compréhensible ?
                <input
                  type="text"
                  className="form-control"
                  name="languageUsed"
                  value={formData.languageUsed}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Commentaires :
                <textarea
                  className="form-control custom-textarea"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows="4"
                />
              </label>
            </div>
          </fieldset>

          {/* Section 5: Recommanderiez-vous notre cabinet ? */}
          <fieldset className="mb-4">
            <legend className="form-legend">5. Recommanderiez-vous notre cabinet à vos proches ?</legend>
            <div className="mb-3">
              <label className="form-label">
                - Oui
                <input
                  type="radio"
                  className="form-check-input ms-2"
                  name="recommendCabinet"
                  value="Oui"
                  onChange={handleChange}
                />
              </label>
              <label className="form-label ms-3">
                - Non
                <input
                  type="radio"
                  className="form-check-input ms-2"
                  name="recommendCabinet"
                  value="Non"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Pourquoi ?
                <textarea
                  className="form-control custom-textarea"
                  name="recommendationReason"
                  value={formData.recommendationReason}
                  onChange={handleChange}
                  rows="4"
                />
              </label>
            </div>
          </fieldset>

          {/* Section 6: Autres remarques et suggestions */}
          <fieldset className="mb-4">
            <legend className="form-legend">6. Autres remarques et suggestions</legend>
            <div className="mb-3">
              <textarea
                className="form-control custom-textarea"
                name="otherRemarks"
                value={formData.otherRemarks}
                onChange={handleChange}
                rows="4"
              />
            </div>
          </fieldset>

          {/* Submit Button */}
          <button type="submit" className="but btn btn-primary w-100">
            Soumettre
          </button>
        </form>
      </div>
    </>
  );
}

export default Enquete;