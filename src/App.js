import React from "react";
import {ConfigProvider} from "antd";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import "./App.css";

// Configurazione tema AntD
const theme = {
  token: {
    colorPrimary: "#1890ff",
    borderRadius: 8,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Projects />

        {/* Sezioni temporanee per testare il menu */}
        <div
          id="skills"
          style={{height: "100vh", background: "#f6ffed", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <h2>Sezione Competenze</h2>
        </div>
        <div
          id="contact"
          style={{height: "100vh", background: "#fff2e8", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <h2>Sezione Contatti</h2>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
