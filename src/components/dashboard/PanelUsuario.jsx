import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import TablaEstadisticas from './contenidopanelusu/TablaEstadisticas';
import MetodoDepago from './contenidopanelusu/MetodoDepago';

function PanelUsuario() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMetodoDePago, setShowMetodoDePago] = useState(false); // Estado para controlar si mostrar el método de pago

  useEffect(() => {
    document.title = "Sinty Quibdó | Panel De Usuario";
    // Verifica si la ruta actual es la del método de pago
    if (location.pathname === '/metodo-de-pago') {
      setShowMetodoDePago(true); // Activa la visualización del método de pago
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <aside className="bg-gray-300 w-full md:w-1/4 p-4 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-6">Panel De Usuario</h2>
        <button
          className="bg-[#0F4767] text-black text-2xl font-bold py-2 px-4 rounded mb-4 w-full"
          onClick={() => navigate('/ver-reservas')}
        >
          Reservas
        </button>
        <button 
          className="bg-[#0F4767] text-black text-2xl font-bold py-2 px-4 rounded mb-4 w-full"
          onClick={() => navigate('/registrojugadores')}
        >
          Registro <br /> Jugadores
        </button>
        <button 
          className="bg-[#0F4767] text-black text-2xl font-bold py-2 px-4 rounded mb-4 w-full"
          onClick={() => navigate('/plantilla')}
        >
          Plantilla
        </button>

        <button
          className="bg-[#0F4767] text-black text-2xl font-bold py-2 px-4 rounded mb-4 w-full"
          onClick={() => navigate('/metodo-de-pago')}
        >
          Método de Pago
        </button>
      </aside>

      <main className="flex-1 bg-gray-100 p-4 md:p-6 overflow-y-auto">
        {/* Si estamos en el método de pago, mostramos esa sección */}
        {showMetodoDePago ? (
          <MetodoDepago /> // Aquí debería estar tu componente de método de pago
        ) : (
          <>
            <div className="relative flex w-full h-32 rounded-lg mb-4">
              <img className="w-full h-full object-cover rounded-lg" src="./slider/sliderpanel.webp" alt="Estadísticas" />
              <h2 className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-white">Estadísticas</h2>
            </div>

            <h1 className="text-2xl font-semibold mb-4 text-center">Estadísticas del torneo</h1>
            <TablaEstadisticas /> {/* Aquí se siguen mostrando las estadísticas */}
          </>
        )}
      </main>
    </div>
  );
}

export default PanelUsuario;
