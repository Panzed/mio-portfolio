import React, {useState, useEffect, useRef} from "react";
import {Row, Col, Card, Tag, Button, Modal} from "antd";
import {
  GithubOutlined,
  LinkOutlined,
  EyeOutlined,
  CodeOutlined,
  AppstoreOutlined,
  DatabaseOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import "./Projects.css";

const {Meta} = Card;

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  // Intersection Observer per animazioni
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {threshold: 0.2}
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Dati dei progetti
  const projects = [
    {
      id: 1,
      title: "Dashboard Admin React",
      category: "frontend",
      description: "Dashboard amministrativa completa con gestione utenti, CRUD operations e grafici interattivi.",
      longDescription:
        "Un'applicazione dashboard completa sviluppata con React e AntD. Include autenticazione, gestione utenti, operazioni CRUD, grafici interattivi con Chart.js, tabelle con filtri avanzati e sistema di notifiche real-time. Il backend è sviluppato in PHP con API RESTful.",
      image: "/projects/dashboard-placeholder.jpg",
      technologies: ["React", "AntD", "JavaScript", "Chart.js", "PHP", "MySQL"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      status: "Completato",
      features: ["Autenticazione JWT", "CRUD completo", "Grafici interattivi", "Export dati", "Responsive design"],
    },
    {
      id: 2,
      title: "E-commerce React",
      category: "fullstack",
      description: "Piattaforma e-commerce con carrello, pagamenti e pannello admin per gestione prodotti.",
      longDescription:
        "Una piattaforma e-commerce completa con frontend React e backend PHP. Include catalogo prodotti, sistema di ricerca avanzata, carrello della spesa, checkout, integrazione pagamenti e pannello amministrativo per gestire prodotti, ordini e clienti.",
      image: "/projects/ecommerce-placeholder.jpg",
      technologies: ["React", "AntD", "PHP", "MySQL", "Stripe API", "CSS3"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      status: "In sviluppo",
      features: ["Catalogo prodotti", "Carrello e checkout", "Integrazione pagamenti", "Pannello admin", "Sistema recensioni"],
    },
    {
      id: 3,
      title: "Todo App Avanzata",
      category: "frontend",
      description: "Applicazione todo con drag & drop, categorie, priorità e statistiche avanzate.",
      longDescription:
        "Un'applicazione todo innovativa che va oltre le funzionalità base. Include drag & drop per riordinare task, sistema di categorie e priorità, statistiche della produttività, modalità scura, sync con localStorage e interfaccia utente moderna e intuitiva.",
      image: "/projects/todo-placeholder.jpg",
      technologies: ["React", "JavaScript", "CSS3", "Local Storage", "Chart.js"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
      status: "Completato",
      features: ["Drag & Drop", "Categorie e priorità", "Statistiche produttività", "Dark mode", "Responsive design"],
    },
    {
      id: 4,
      title: "Weather App",
      category: "frontend",
      description: "App meteo con geolocalizzazione, previsioni settimanali e grafici interattivi.",
      longDescription:
        "Applicazione meteo moderna che utilizza API OpenWeather per fornire previsioni accurate. Include geolocalizzazione automatica, ricerca città, previsioni fino a 7 giorni, grafici delle temperature, indicatori UV e qualità dell'aria, con interfaccia intuitiva e animazioni fluide.",
      image: "/projects/weather-placeholder.jpg",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation", "CSS3"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
      status: "Completato",
      features: ["Geolocalizzazione", "Previsioni 7 giorni", "Grafici interattivi", "Qualità dell'aria", "Animazioni meteo"],
    },
    {
      id: 5,
      title: "Portfolio Personale",
      category: "frontend",
      description: "Questo stesso portfolio - sito web responsive con animazioni e design moderno.",
      longDescription:
        "Il portfolio che stai guardando! Sviluppato con React e AntD, include animazioni smooth, design responsive, sezioni interattive, form di contatto funzionante, ottimizzazioni SEO e deploy automatico. Un progetto che dimostra le mie competenze frontend e attenzione ai dettagli.",
      image: "/projects/portfolio-placeholder.jpg",
      technologies: ["React", "AntD", "CSS3", "EmailJS", "Vercel"],
      demoUrl: window.location.href,
      githubUrl: "#",
      featured: true,
      status: "Live",
      features: ["Design responsive", "Animazioni smooth", "Form di contatto", "SEO ottimizzato", "Performance elevate"],
    },
    {
      id: 6,
      title: "Chat App Real-time",
      category: "fullstack",
      description: "Applicazione chat in tempo reale con stanze, notifiche e condivisione file.",
      longDescription:
        "Applicazione di messaggistica real-time sviluppata con React e Socket.io. Include creazione stanze chat, messaggi in tempo reale, notifiche push, condivisione file e immagini, emoji picker, stato online/offline degli utenti e cronologia messaggi persistente.",
      image: "/projects/chat-placeholder.jpg",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Express"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
      status: "In sviluppo",
      features: ["Chat real-time", "Stanze multiple", "Condivisione file", "Notifiche push", "Stato utenti"],
    },
  ];

  // Filtri progetti
  const filters = [
    {key: "all", label: "Tutti", icon: <AppstoreOutlined />},
    {key: "frontend", label: "Frontend", icon: <CodeOutlined />},
    {key: "fullstack", label: "Full Stack", icon: <DatabaseOutlined />},
    {key: "mobile", label: "Mobile", icon: <MobileOutlined />},
  ];

  // Filtra progetti
  const filteredProjects = activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);

  // Mostra dettagli progetto
  const showProjectDetails = (project) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  // Ottieni colore stato
  const getStatusColor = (status) => {
    switch (status) {
      case "Completato":
        return "success";
      case "In sviluppo":
        return "processing";
      case "Live":
        return "magenta";
      default:
        return "default";
    }
  };

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className={`projects-header ${isVisible ? "animate-in" : ""}`}>
          <h2 className="section-title">I Miei Progetti</h2>
          <p className="section-subtitle">
            Esplora i progetti che ho sviluppato, dalle applicazioni web alle soluzioni full-stack
          </p>
        </div>

        {/* Filtri */}
        <div className={`projects-filters ${isVisible ? "animate-in" : ""}`}>
          {filters.map((filter) => (
            <Button
              key={filter.key}
              type={activeFilter === filter.key ? "primary" : "default"}
              icon={filter.icon}
              onClick={() => setActiveFilter(filter.key)}
              className="filter-btn">
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Griglia Progetti */}
        <Row gutter={[24, 24]} className={`projects-grid ${isVisible ? "animate-in" : ""}`}>
          {filteredProjects.map((project, index) => (
            <Col xs={24} md={12} lg={8} key={project.id}>
              <Card
                hoverable
                className={`project-card ${project.featured ? "featured" : ""}`}
                cover={
                  <div className="project-image">
                    <div className="image-placeholder">
                      <CodeOutlined style={{fontSize: "3rem", color: "#1890ff"}} />
                      <p>Screenshot Progetto</p>
                    </div>
                    <div className="project-overlay">
                      <Button icon={<EyeOutlined />} onClick={() => showProjectDetails(project)} className="overlay-btn">
                        Dettagli
                      </Button>
                    </div>
                  </div>
                }
                actions={[
                  <Button icon={<GithubOutlined />} href={project.githubUrl} target="_blank" type="text">
                    Codice
                  </Button>,
                  <Button icon={<LinkOutlined />} href={project.demoUrl} target="_blank" type="text">
                    Demo
                  </Button>,
                  <Button icon={<EyeOutlined />} onClick={() => showProjectDetails(project)} type="text">
                    Dettagli
                  </Button>,
                ]}>
                <div className="project-content">
                  <div className="project-header">
                    <Meta title={project.title} />
                    <Tag color={getStatusColor(project.status)} className="status-tag">
                      {project.status}
                    </Tag>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Tag key={tech} color="blue">
                        {tech}
                      </Tag>
                    ))}
                    {project.technologies.length > 3 && <Tag>+{project.technologies.length - 3}</Tag>}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Modal Dettagli Progetto */}
      <Modal
        title={selectedProject?.title}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="github" icon={<GithubOutlined />} href={selectedProject?.githubUrl} target="_blank">
            Codice Sorgente
          </Button>,
          <Button key="demo" type="primary" icon={<LinkOutlined />} href={selectedProject?.demoUrl} target="_blank">
            Vedi Demo
          </Button>,
        ]}
        width={800}
        className="project-modal">
        {selectedProject && (
          <div className="modal-content">
            <div className="modal-image">
              <div className="image-placeholder large">
                <CodeOutlined style={{fontSize: "4rem", color: "#1890ff"}} />
                <p>Screenshot Progetto</p>
              </div>
            </div>

            <div className="modal-info">
              <Tag color={getStatusColor(selectedProject.status)} style={{marginBottom: "1rem"}}>
                {selectedProject.status}
              </Tag>

              <p className="modal-description">{selectedProject.longDescription}</p>

              <div className="modal-features">
                <h4>Caratteristiche Principali:</h4>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-tech">
                <h4>Tecnologie Utilizzate:</h4>
                <div className="tech-tags">
                  {selectedProject.technologies.map((tech) => (
                    <Tag key={tech} color="blue">
                      {tech}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
