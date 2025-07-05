import React, {useEffect, useState} from "react";
import {Button, Typography} from "antd";
import {DownloadOutlined, GithubOutlined, LinkedinOutlined, MailOutlined, ArrowDownOutlined} from "@ant-design/icons";
import "./Hero.css";

const {Title, Paragraph} = Typography;

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animazione di entrata
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Testi che cambiano dinamicamente
  const roles = ["React Developer", "Frontend Developer", "JavaScript Developer", "Web Developer"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>

      <div className="container">
        <div className={`hero-content ${isVisible ? "animate-in" : ""}`}>
          {/* Saluto principale */}
          <div className="hero-greeting">
            <span className="greeting-text">👋 Ciao, sono</span>
          </div>

          {/* Nome principale */}
          <Title level={1} className="hero-name">
            Il Tuo Nome
          </Title>

          {/* Ruolo dinamico */}
          <div className="hero-role">
            <span className="role-prefix">Sono un </span>
            <span className="role-dynamic">{roles[currentRole]}</span>
          </div>

          {/* Descrizione */}
          <Paragraph className="hero-description">
            Sviluppo applicazioni web moderne e responsive utilizzando <strong>React</strong>,<strong> JavaScript</strong> e le
            tecnologie più innovative del frontend. Appassionato di codice pulito e user experience eccellenti.
          </Paragraph>

          {/* Competenze highlight */}
          <div className="hero-skills">
            <span className="skill-tag">React</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">AntD</span>
            <span className="skill-tag">CSS3</span>
            <span className="skill-tag">PHP</span>
          </div>

          {/* Call to Action Buttons */}
          <div className="hero-actions">
            <Button type="primary" size="large" icon={<DownloadOutlined />} className="hero-button primary">
              Scarica CV
            </Button>

            <Button size="large" onClick={scrollToProjects} className="hero-button secondary">
              Vedi Progetti
            </Button>
          </div>

          {/* Social Links */}
          <div className="hero-social">
            <Button type="text" icon={<GithubOutlined />} size="large" />
            <Button type="text" icon={<LinkedinOutlined />} size="large" />
            <Button type="text" icon={<MailOutlined />} size="large" />
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator" onClick={scrollToProjects}>
            <ArrowDownOutlined />
            <span>Scorri per esplorare</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
