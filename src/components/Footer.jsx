import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0F4767] text-white py-9">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 px-4">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <img src="/logo2.webp" alt="Logo" className="h-20" /> {/* Cambia la ruta de la imagen */}
        </div>

        {/* Opciones de navegación */}
        <nav className="flex space-x-4 text-sm font-semibold">
          <Link to="/terminos" className="hover:underline">
            Términos de Servicios
          </Link>
          <Link to="/privacidad" className="hover:underline">
            Políticas y Privacidad
          </Link>
          <Link to="/contacto" className="hover:underline">
            Contacto
          </Link>
        </nav>
      </div>

      {/* Copyright */}
      <div className="text-center font-medium text-xs mt-4">
        © {new Date().getFullYear()} Todos los derechos reservados. | Sinty Quibdó.
      </div>
    </footer>
  );
}

export default Footer;
