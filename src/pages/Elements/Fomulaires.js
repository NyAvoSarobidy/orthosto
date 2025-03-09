import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";
import { FaInfoCircle, FaExclamationTriangle } from "react-icons/fa"; // Icônes pour la remarque
import emailjs from "emailjs-com"; // Importer EmailJS
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Formulaire.css"; // Fichier CSS personnalisé


function Formulaire() {
  const [loading, setLoading] = useState(true); // État pour gérer le loader
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    motif: "",
    remarques: "",
    carteVitale: false,
    courrierDentiste: false,
    ordonnance: false,
    service: "gmail", // Par défaut, utiliser Gmail
  });
  const [submitted, setSubmitted] = useState(false); // État pour afficher un message de succès


  // Simuler un chargement de 10 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Masquer le loader après 10 secondes
    }, 5000); // 10 secondes
    return () => clearTimeout(timer); // Nettoyer le timer
  }, []);

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };


  // Gestion de la soumission du formulaire avec EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
   

    const getServiceByEmail = (email) => {
      if (email.includes("@gmail.com")) {
        return "gmail"; // Utiliser le service Gmail
      } else if (email.includes("@outlook.com") || email.includes("@hotmail.com")) {
        return "outlook"; // Utiliser le service Outlook
      } else {
        return "gmail"; // Par défaut, utiliser Gmail (ou un autre service)
      }
    };
    // Déterminer le service d'envoi en fonction de l'email
    const service = getServiceByEmail(formData.email);
  
    // Paramètres pour l'email
    const templateParams = {
      nom: formData.nom,
      prenom: formData.prenom,
      email: formData.email,
      telephone: formData.telephone,
      motif: formData.motif,
      remarques: formData.remarques,
      carteVitale: formData.carteVitale ? "Oui" : "Non",
      courrierDentiste: formData.courrierDentiste ? "Oui" : "Non",
      ordonnance: formData.ordonnance ? "Oui" : "Non",
    };
  
    // Choisir le Service ID et le Template ID en fonction du service
    const serviceId = service === "gmail" ? "service_c1y8slf" : "service_jst9z0h";
    const templateId = service === "gmail" ? "template_scjya2w" : "template_scjya2w";
  
    // Envoyer l'email via EmailJS
    emailjs
      .send(
        serviceId, // Service ID (Gmail ou Outlook)
        templateId, // Template ID (Gmail ou Outlook)
        templateParams, // Données du formulaire
        "ZvJWK_QwBYJ9Wxbep" // User ID
      )
      .then(
        (response) => {
         
          toast.success("Email envoyé avec succès ! 😊", {
            position: "top-right",
            autoClose: 5000, // Fermer automatiquement après 5 secondes
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          //console.log("Email envoyé avec succès !", response);
          setSubmitted(true); // Afficher un message de succès
        },
        (error) => {
        
          toast.error(`Erreur lors de l'envoi de l'email 😞 : ${error.text}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          // console.error("Erreur lors de l'envoi de l'email :", error);
        }
      );
  };

  // Afficher le loader pendant 10 secondes
  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <div className="loader">
          <span className="visually-hidden">Chargement...</span>
        </div>
        <br />
      </Container>
    );
  }

  // Afficher le formulaire après le chargement
  return (
    
    <Container className="my-5">
       <ToastContainer />
      <h2 className="text-danger mb-4 pt-4">Prendre un rendez-vous</h2>

      {/* Section de remarque */}
      <Alert variant="info" className="mb-4">
        <FaInfoCircle className="me-2" />
        <strong>Informations importantes :</strong>
        <ul className="mt-2">
          <li>
            <FaExclamationTriangle className="me-2" />
            Ce premier rendez-vous est une <strong>CONSULTATION</strong> : il n'est pas prévu de réaliser d'intervention
            lors de cette visite. Celle-ci sera programmée à l'issue de l'examen, pour une date ultérieure.
          </li>
          <li>
            <FaExclamationTriangle className="me-2" />
            Nous vous rappelons que les <strong>mineurs</strong> doivent impérativement être accompagnés d'un adulte.
          </li>
          <li>
            <FaExclamationTriangle className="me-2" />
            Pour mieux préparer votre prochain rendez-vous, nous vous remercions de bien vouloir renseigner les champs
            suivants. Les champs marqués d'un <span className="text-danger">*</span> sont obligatoires.
          </li>
        </ul>
      </Alert>

      {submitted && (
        <Alert variant="success" className="text-center mt-5">
          Votre demande de rendez-vous a été envoyée avec succès !
        </Alert>
      )}

      <Form onSubmit={handleSubmit} className="form-container">
        {/* Nom et Prénom */}
        <Row>
          <Col md={6}>
            <Form.Group controlId="nom" className="mb-3">
              <Form.Label>
                Nom <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="prenom" className="mb-3">
              <Form.Label>
                Prénom <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Téléphone et Email */}
        <Row>
          <Col md={6}>
            <Form.Group controlId="telephone" className="mb-3">
              <Form.Label>
                Téléphone <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
           <Col md={6}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>
                Email <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col> 
        </Row>

        {/* Motif de rendez-vous */}
        <Form.Group controlId="motif" className="mb-3">
          <Form.Label>
            Motif de rendez-vous <span className="text-danger">*</span>
          </Form.Label>
          <Form.Select
            name="motif"
            value={formData.motif}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionnez un motif</option>
            <option value="Avulsion (extraction) dentaire">
              Avulsion (extraction) dentaire
            </option>
            <option value="Resection apicale (nettoyage d'infection)">
              Resection apicale (nettoyage d'infection)
            </option>
            <option value="Maladie des gencives ou des lèvres">
              Maladie des gencives ou des lèvres
            </option>
            <option value="Douleurs / craquements des mâchoires">
              Douleurs / craquements des mâchoires
            </option>
            <option value="Apnée du sommeil">Apnée du sommeil</option>
            <option value="Orthodontie enfants">Orthodontie enfants</option>
            <option value="Orthodontie adulte">Orthodontie adulte</option>
            <option value="Esthétique">Esthétique</option>
            <option value="Autre">Autre</option>
          </Form.Select>
        </Form.Group>

        {/* Remarques complémentaires */}
        <Form.Group controlId="remarques" className="mb-3">
          <Form.Label>Remarques complémentaires</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="remarques"
            value={formData.remarques}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Checkboxes */}
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Carte Vitale (obligatoire)"
            name="carteVitale"
            checked={formData.carteVitale}
            onChange={handleChange}
            required
          />
          <Form.Check
            type="checkbox"
            label="Courrier du chirurgien dentiste"
            name="courrierDentiste"
            checked={formData.courrierDentiste}
            onChange={handleChange}
          />
          <Form.Check
            type="checkbox"
            label="Ordonnance de vos traitements réguliers"
            name="ordonnance"
            checked={formData.ordonnance}
            onChange={handleChange}
          />
        </Form.Group>

    
        {/* Bouton de soumission */}
        <div className="text-center">
        <Button variant="primary" type="submit" className="btn-submit" >
               Envoyer la demande
        
        </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Formulaire;