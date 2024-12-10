"use client";
import { useState } from "react";
import React from "react";
import Navbar from '@/components/Navbar';

const About = () => {
  const [language, setLanguage] = useState("es");

  const content = {
    es: {
      title: "Sobre Nuestra Plataforma",
      description: "Bienvenido a nuestra plataforma de intercambio de artículos tecnológicos usados. Nuestro objetivo es conectar personas que buscan darle una segunda vida a los dispositivos tecnológicos y contribuir a un futuro más sostenible.",
      missionTitle: "Nuestra Misión",
      missionDescription: "Facilitar el intercambio de artículos tecnológicos usados entre personas, promoviendo la reutilización, la economía circular y la reducción de residuos electrónicos.",
      visionTitle: "Nuestra Visión",
      visionDescription: "Ser la plataforma líder en intercambio tecnológico sostenible, fomentando comunidades conectadas y comprometidas con el cuidado del medio ambiente.",
      valuesTitle: "Nuestros Valores",
      values: [
        "Sostenibilidad: Reducimos el impacto ambiental promoviendo la reutilización.",
        "Conexión: Fomentamos relaciones entre personas a través del intercambio justo.",
        "Innovación: Creemos en soluciones creativas para un futuro mejor.",
        "Confianza: Garantizamos una experiencia segura y transparente para nuestros usuarios."
      ],
      environmentTitle: "Importancia para el Medio Ambiente",
      environmentDescription: "Cada dispositivo reutilizado a través de nuestra plataforma ayuda a disminuir la cantidad de residuos electrónicos y la demanda de producción de nuevos dispositivos, reduciendo así el impacto ambiental y promoviendo un futuro más sostenible."
    },
    en: {
      title: "About Our Platform",
      description: "Welcome to our platform for trading used tech items. Our goal is to connect people looking to give a second life to tech devices and contribute to a more sustainable future.",
      missionTitle: "Our Mission",
      missionDescription: "To facilitate the exchange of used tech items among people, promoting reuse, circular economy, and reduction of electronic waste.",
      visionTitle: "Our Vision",
      visionDescription: "To be the leading platform for sustainable tech exchange, fostering connected communities committed to environmental care.",
      valuesTitle: "Our Values",
      values: [
        "Sustainability: We reduce environmental impact by promoting reuse.",
        "Connection: We foster relationships through fair exchange.",
        "Innovation: We believe in creative solutions for a better future.",
        "Trust: We ensure a safe and transparent experience for our users."
      ],
      environmentTitle: "Environmental Importance",
      environmentDescription: "Each device reused through our platform helps decrease electronic waste and the demand for producing new devices, thus reducing environmental impact and promoting a more sustainable future."
    },
    fr: {
      title: "À Propos de Notre Plateforme",
      description: "Bienvenue sur notre plateforme d'échange d'articles technologiques usagés. Notre objectif est de connecter des personnes cherchant à donner une seconde vie aux appareils technologiques et à contribuer à un avenir plus durable.",
      missionTitle: "Notre Mission",
      missionDescription: "Faciliter l'échange d'articles technologiques usagés entre les personnes, en promouvant la réutilisation, l'économie circulaire et la réduction des déchets électroniques.",
      visionTitle: "Notre Vision",
      visionDescription: "Être la plateforme leader dans l'échange technologique durable, en favorisant des communautés connectées et engagées dans la protection de l'environnement.",
      valuesTitle: "Nos Valeurs",
      values: [
        "Durabilité : Nous réduisons l'impact environnemental en promouvant la réutilisation.",
        "Connexion : Nous favorisons les relations entre les personnes par des échanges équitables.",
        "Innovation : Nous croyons en des solutions créatives pour un avenir meilleur.",
        "Confiance : Nous garantissons une expérience sûre et transparente pour nos utilisateurs."
      ],
      environmentTitle: "Importance pour l'Environnement",
      environmentDescription: "Chaque appareil réutilisé via notre plateforme contribue à diminuer la quantité de déchets électroniques et la demande de production de nouveaux appareils, réduisant ainsi l'impact environnemental et promouvant un avenir plus durable."
    }
  };

  const currentContent = content[language];

  return (
    <div style={styles.container}>
      <Navbar setLanguage={setLanguage} language={language} />
      <h1 style={styles.title}>{currentContent.title}</h1>
      <p style={styles.text}>{currentContent.description}</p>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>{currentContent.missionTitle}</h2>
        <p style={styles.text}>{currentContent.missionDescription}</p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>{currentContent.visionTitle}</h2>
        <p style={styles.text}>{currentContent.visionDescription}</p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>{currentContent.valuesTitle}</h2>
        <ul>
          {currentContent.values.map((value, index) => (
            <li key={index} style={styles.text}>{value}</li>
          ))}
        </ul>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>{currentContent.environmentTitle}</h2>
        <p style={styles.text}>{currentContent.environmentDescription}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  languageSelector: {
    marginBottom: "20px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#333",
  },
  section: {
    marginBottom: "30px",
  },
  subtitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
};

export default About;
