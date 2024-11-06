import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Form from "./components/Form";
import Steps from "./components/Steps";
import Footer from "./components/Footer";
import Acercade from "./components/Acercade";
import Centro from "./components/Centro";
import Whatsapp from "./components/Whatsapp";
import Terminos from "./components/terminos_politicas_contacto/Terminos";
import Privacidad from "./components/terminos_politicas_contacto/Privacidad";
import Contacto from "./components/terminos_politicas_contacto/Contacto";
import SearchResults from "./components/datellescanchas/searchResults";
import Detallesdelcampo from "./components/datellescanchas/Detallesdelcampo";
import Login from "./components/login_y_registro/login";
import Registro from "./components/login_y_registro/registro";
import PanelUsuario from "./components/dashboard/PanelUsuario";
import FormPlantillas from "./components/dashboard/contenidopanelusu/FormPlantilla";
import Responsive from "./components/Responsive";


function MainContent({ acercadeRef, centroRef }) {
  const excludedRoutes = ["/terminos", "/privacidad", "/contacto", "/login", "/registro", "/panelusuario", "/formplantilla"]; // Añadir "/panelusuario"
  const location = useLocation();
  const isInitialScreen = location.pathname === "/";
  const showForm = !excludedRoutes.includes(location.pathname);

  return (
    <main className="p-4">
      <Slider />
      {showForm && <Form />} 
      {isInitialScreen && <Steps />}
      {isInitialScreen && <Acercade ref={acercadeRef} />}
      {isInitialScreen && <Centro ref={centroRef} />}
      {isInitialScreen && <Responsive />}
      {isInitialScreen && <Whatsapp />}
    </main>
  );
}


function App() {
  const acercadeRef = useRef(null); 
  const centroRef = useRef(null);

  const scrollToAcercade = () => {
    if (acercadeRef.current) {
      acercadeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCentro = () => {
    if (centroRef.current) {
      centroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header onScrollToAcercade={scrollToAcercade} onScrollToCentro={scrollToCentro} />
        <MainContent acercadeRef={acercadeRef} centroRef={centroRef} />
        <Routes>
          <Route path="/" element={<div />} /> 
          <Route path="/resultado" element={<SearchResults />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/Detallesdelcampo" element={<Detallesdelcampo />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/panelusuario" element={<PanelUsuario />} />
          <Route path="/formplantilla" element={<FormPlantillas />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
