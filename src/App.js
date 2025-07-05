import React from "react";
import {ConfigProvider} from "antd";
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
        <h1>Il Mio Portfolio</h1>
        <p>Setup completato! Ora iniziamo a costruire...</p>
      </div>
    </ConfigProvider>
  );
}

export default App;
