import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer';  // Asegúrate de importar el Footer correctamente

function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavBar />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
