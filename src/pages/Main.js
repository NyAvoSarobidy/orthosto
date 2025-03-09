import React, { useState, useEffect } from "react";
import NavBar from "../composant/NavBar";
import PageAccueil from "./PageAccueil.js";
import Footer from '../composant/Footer';
import Header from '../composant/Header';

function Main() {
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

    return (
        <>
            <NavBar />
            <PageAccueil />
            <Footer />
            <Header />

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

export default Main;