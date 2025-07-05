import React, {useState, useEffect, useRef} from "react";
import {Row, Col, Card, Button, Timeline, Progress} from "antd";
import {
  DownloadOutlined,
  CalendarOutlined,
  TrophyOutlined,
  HeartOutlined,
  CodeOutlined,
  BookOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer per animazioni
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {threshold: 0.3}
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Dati personali
  const personalInfo = {
    name: "Il Tuo Nome",
    age: "25 anni",
    location: "Milano, Italia",
    education: "Diploma/Laurea in Informatica",
    experience: "1+ anni",
    email: "tuoemail@example.com",
  };

  // Timeline esperienze
  const experiences = [
    {
      title: "Stage React Developer",
      company: "Nome Azienda",
      period: "2024 - Presente",
      description: "Sviluppo di componenti React, integrazione API, collaborazione in team agile.",
      color: "#1890ff",
    },
    {
      title: "Corso Sviluppo Web",
      company: "Nome Scuola/Bootcamp",
      period: "2023 - 2024",
      description: "Frontend development, React, JavaScript, responsive design.",
      color: "#52c41a",
    },
    {
      title: "Progetti Personali",
      company: "Freelance",
      period: "2023 - Presente",
      description: "Sviluppo portfolio personale, applicazioni web con React e PHP.",
      color: "#faad14",
    },
  ];

  // Soft skills
  const softSkills = [
    {name: "Problem Solving", level: 85},
    {name: "Lavoro in Team", level: 90},
    {name: "Comunicazione", level: 80},
    {name: "Apprendimento Rapido", level: 95},
    {name: "Attenzione ai Dettagli", level: 88},
    {name: "Gestione del Tempo", level: 82},
  ];

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        {/* Header Section */}
        <div className={`about-header ${isVisible ? "animate-in" : ""}`}>
          <h2 className="section-title">Chi Sono</h2>
          <p className="section-subtitle">
            Scopri di più sulla mia storia, le mie competenze e la mia passione per lo sviluppo web
          </p>
        </div>

        <Row gutter={[32, 32]} className={`about-content ${isVisible ? "animate-in" : ""}`}>
          {/* Colonna Sinistra - Foto e Info */}
          <Col xs={24} lg={10}>
            <div className="about-profile">
              {/* Foto Profilo */}
              <div className="profile-image">
                <img src="/profile-pic.jpeg" alt="Foto Profilo" className="profile-photo" />
              </div>

              {/* Info Card */}
              <Card className="info-card" bordered={false}>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Nome:</span>
                    <span className="info-value">{personalInfo.name}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Età:</span>
                    <span className="info-value">{personalInfo.age}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Città:</span>
                    <span className="info-value">{personalInfo.location}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Esperienza:</span>
                    <span className="info-value">{personalInfo.experience}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Email:</span>
                    <span className="info-value">{personalInfo.email}</span>
                  </div>
                </div>

                <Button type="primary" size="large" icon={<DownloadOutlined />} block className="download-cv-btn">
                  Scarica il mio CV
                </Button>
              </Card>
            </div>
          </Col>

          {/* Colonna Destra - Descrizione e Skills */}
          <Col xs={24} lg={14}>
            <div className="about-details">
              {/* Descrizione */}
              <div className="about-description">
                <h3>
                  <RocketOutlined /> La Mia Storia
                </h3>
                <p>
                  Sono un <strong>React Developer Junior</strong> appassionato di tecnologia e sempre alla ricerca di nuove sfide.
                  Il mio percorso nel mondo dello sviluppo web è iniziato durante gli studi, dove ho scoperto la magia di
                  trasformare idee in applicazioni funzionali.
                </p>
                <p>
                  Durante il mio stage e i progetti personali, ho acquisito esperienza pratica con
                  <strong> React, JavaScript, AntD e PHP</strong>, concentrandomi sulla creazione di interfacce utente intuitive e
                  performanti. Amo lavorare in team e sono sempre entusiasta di imparare nuove tecnologie.
                </p>
                <p>
                  Quello che mi motiva di più è la possibilità di risolvere problemi reali attraverso il codice e contribuire alla
                  crescita di progetti innovativi. Il mio obiettivo è diventare un developer esperto, specializzandomi sempre di
                  più nell'ecosistema React.
                </p>
              </div>

              {/* Passioni e Interessi */}
              <div className="about-interests">
                <h3>
                  <HeartOutlined /> Le Mie Passioni
                </h3>
                <div className="interests-grid">
                  <div className="interest-item">
                    <CodeOutlined />
                    <span>Coding</span>
                  </div>
                  <div className="interest-item">
                    <BookOutlined />
                    <span>Tech Blog</span>
                  </div>
                  <div className="interest-item">
                    <TrophyOutlined />
                    <span>Hackathon</span>
                  </div>
                  <div className="interest-item">
                    <RocketOutlined />
                    <span>Innovazione</span>
                  </div>
                </div>
              </div>

              {/* Soft Skills */}
              <div className="soft-skills">
                <h3>
                  <TrophyOutlined /> Competenze Trasversali
                </h3>
                <div className="skills-grid">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <Progress
                        percent={skill.level}
                        showInfo={false}
                        strokeColor={{
                          "0%": "#108ee9",
                          "100%": "#87d068",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Timeline Esperienze */}
        <div className={`experience-timeline ${isVisible ? "animate-in" : ""}`}>
          <h3 className="timeline-title">
            <CalendarOutlined /> Il Mio Percorso
          </h3>
          <Timeline mode="left" className="custom-timeline">
            {experiences.map((exp, index) => (
              <Timeline.Item key={index} color={exp.color} className="timeline-item">
                <div className="timeline-content">
                  <h4>{exp.title}</h4>
                  <p className="company">{exp.company}</p>
                  <span className="period">{exp.period}</span>
                  <p className="description">{exp.description}</p>
                </div>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
};

export default About;
