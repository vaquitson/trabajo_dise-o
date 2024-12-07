// src/pages/About.js
"use client";
import { useState } from "react";
import React from "react";
import Navbar from '@/components/Navbar';

const About = () => {
  const [language, setLanguage] = useState("es");
  return (
    <div style={styles.container}>
      <Navbar setLanguage={setLanguage} language={language} />
      <h1 style={styles.title}>Sobre Nuestra Plataforma</h1>
      <p style={styles.text}>
        Bienvenido a nuestra plataforma de intercambio de artículos tecnológicos usados. 
        Nuestro objetivo es conectar personas que buscan darle una segunda vida a los dispositivos 
        tecnológicos y contribuir a un futuro más sostenible.
      </p>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Nuestra Misión</h2>
        <p style={styles.text}>
          Facilitar el intercambio de artículos tecnológicos usados entre personas, 
          promoviendo la reutilización, la economía circular y la reducción de residuos electrónicos.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Nuestra Visión</h2>
        <p style={styles.text}>
          Ser la plataforma líder en intercambio tecnológico sostenible, fomentando 
          comunidades conectadas y comprometidas con el cuidado del medio ambiente.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Nuestros Valores</h2>
        <ul>
          <li style={styles.text}>Sostenibilidad: Reducimos el impacto ambiental promoviendo la reutilización.</li>
          <li style={styles.text}>Conexión: Fomentamos relaciones entre personas a través del intercambio justo.</li>
          <li style={styles.text}>Innovación: Creemos en soluciones creativas para un futuro mejor.</li>
          <li style={styles.text}>Confianza: Garantizamos una experiencia segura y transparente para nuestros usuarios.</li>
        </ul>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Importancia para el Medio Ambiente</h2>
        <p style={styles.text}>
          Cada dispositivo reutilizado a través de nuestra plataforma ayuda a disminuir la cantidad 
          de residuos electrónicos y la demanda de producción de nuevos dispositivos, reduciendo así 
          el impacto ambiental y promoviendo un futuro más sostenible.
        </p>
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
