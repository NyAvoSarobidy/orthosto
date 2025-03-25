import React, { useRef, useState } from "react";
import '../style/ContactFormulaire.css';
import Swal from 'sweetalert2';

function ContactFormulaire() {
    const form = useRef(); // Référence pour le formulaire
    const [isLoading, setIsLoading] = useState(false); // État de chargement

    const sendEmail = async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        setIsLoading(true); // Active l'état de chargement

        // Récupérer les données du formulaire
        const formData = new FormData(form.current);
        const data = {
            nom: formData.get('nom'),
            prenom: formData.get('prenom'),
            email: formData.get('email'),
            telephone: formData.get('telephone'),
            message: formData.get('message'),
        };

        try {
            // Envoyer les données au serveur
            const response = await fetch('https://node-email.vercel.app/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Message envoyé !',
                    text: 'Votre message a été envoyé avec succès.',
                    confirmButtonText: 'OK',
                });
                form.current.reset(); // Réinitialiser le formulaire
            } else {
                const errorData = await response.json();
                Swal.fire({
                    icon: 'error',
                    title: 'Erreur',
                    text: errorData.message || 'Une erreur s\'est produite. Veuillez réessayer.',
                    confirmButtonText: 'OK',
                });
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi du formulaire :', error);
            Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: 'Une erreur s\'est produite. Veuillez réessayer.',
                confirmButtonText: 'OK',
            });
        } finally {
            setIsLoading(false); // Désactive l'état de chargement
        }
    };

    return (
        <div className="bg-gradient-primary">
            <div className="container">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 text-danger mb-4">Contactez Nous</h1>
                                    </div>

                                    <p className="text-gray-900 mb-4 fw-bold">
                                        Nous vous remercions de l'intérêt que vous portez à notre cabinet. <br />
                                        En complétant le formulaire suivant, vous nous permettrez de répondre plus
                                        efficacement à votre demande.
                                    </p>

                                    <form ref={form} onSubmit={sendEmail}>
                                        {/* Nom et Prénom */}
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="nom" className="form-label">Nom *</label>
                                                    <div className="input-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="nom"
                                                            placeholder="Votre nom"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="prenom" className="form-label">Prénom *</label>
                                                    <div className="input-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="prenom"
                                                            placeholder="Votre prénom"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="form-group mb-3">
                                            <label htmlFor="email" className="form-label">Email *</label>
                                            <div className="input-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    placeholder="Votre email"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Téléphone */}
                                        <div className="form-group mb-3">
                                            <label htmlFor="telephone" className="form-label">Téléphone *</label>
                                            <div className="input-group">
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    name="telephone"
                                                    placeholder="Votre téléphone"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="form-group mb-4">
                                            <label htmlFor="message" className="form-label">Message *</label>
                                            <div className="input-group">
                                                <textarea
                                                    className="form-control"
                                                    name="message"
                                                    rows="5"
                                                    placeholder="Votre message"
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>

                                        {/* Bouton ENVOYER */}
                                        <div className="text-center">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-lg"
                                                disabled={isLoading} // Désactive le bouton pendant l'envoi
                                            >
                                                {isLoading ? (
                                                    <span>
                                                        <i className="fas fa-spinner fa-spin me-2"></i> Envoi en cours...
                                                    </span>
                                                ) : (
                                                    <span>
                                                        <i className="fas fa-paper-plane me-2"></i> ENVOYER
                                                    </span>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactFormulaire;