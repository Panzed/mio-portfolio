import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Ciao, sono [Il Tuo Nome]</h1>
          <h2>React Developer Junior</h2>
          <p>Sviluppo applicazioni web moderne con React, JavaScript e molto altro.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
