// src/pages/About.js
import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.text}>
        Welcome to our company! We are dedicated to providing the best services
        and products to meet your needs. Our team is passionate about innovation
        and customer satisfaction.
      </p>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Our Mission</h2>
        <p style={styles.text}>
          To deliver high-quality solutions that empower our clients to achieve
          their goals and succeed in a competitive marketplace.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Our Vision</h2>
        <p style={styles.text}>
          To be a global leader in our industry, recognized for our commitment
          to excellence and sustainability.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Meet the Team</h2>
        <ul>
          <li style={styles.text}>Jane Doe - CEO</li>
          <li style={styles.text}>John Smith - CTO</li>
          <li style={styles.text}>Alex Johnson - COO</li>
        </ul>
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
