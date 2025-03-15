import React, { useState, useEffect } from "react";
import "./ThemeToggle.css"; // Import du fichier CSS pour les styles

const ThemeToggle = () => {
  // État pour stocker le thème actuel (light ou dark)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Effet pour appliquer le bon thème à chaque changement
  useEffect(() => {
    document.body.className = theme; // Applique la classe correspondante au body
    localStorage.setItem("theme", theme); // Sauvegarde le thème dans localStorage
  }, [theme]);

  // Fonction pour basculer entre les thèmes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button className="theme-toggle-btn" onClick={toggleTheme}>
      {theme === "light" ? "🌙 Mode Sombre" : "☀️ Mode Clair"}
    </button>
  );
};

export default ThemeToggle;
