import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TablaEstadisticas from './contenidopanelusu/TablaEstadisticas';

function PanelAdmin() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sinty Quibdó | Panel De Admin";
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <aside className="bg-gray-300 w-full md:w-1/4 p-4 flex flex-col items-center overflow-y-auto max-h-screen">
        <h2 className="text-xl font-bold mb-6">Panel De Admin</h2>
        <button
          className="bg-[#0F4767] text-black text-2xl font-bold py-2 px-4 rounded mb-4 w-full"
          onClick={() => navigate('/ver-reservas')}
        >
          Admin Reservas
        </button>
        <button 
          className="bg-[#0F4767] text-black text-2xl font-bold py-2 px-4 rounded mb-4 w-full"
          onClick={() => navigate('/registrojugadores')}
        >
          Registro <br /> Jugadores
        </button>
        <button 
          className="bg-[#0F4767] text-black text-2xl font-bold py-2 px-4 rounded mb-4 w-full"
          onClick={() => navigate('/adminplantilla')}
        >
          Admin Plantilla
        </button>
        <button 
          className="bg-[#0F4767] text-black text-2xl font-bold py-2 px-4 rounded mb-4 w-full"
          onClick={() => navigate('/adminfooter')}
        >
          Admin Footer
        </button>
        <button 
          className="bg-[#0F4767] text-black text-2xl font-bold py-2 px-4 rounded mb-4 w-full"
          onClick={() => navigate('/adminheader')}
        >
          Admin Header
        </button>
        <button 
          className="bg-[#0F4767] text-black text-2xl font-bold py-2 px-4 rounded mb-4 w-full"
          onClick={() => navigate('/adminestadisticas')}
        >
          Admin Estadísticas
        </button>
        <button 
          className="bg-[#0F4767] text-black text-2xl font-bold py-2 px-4 rounded mb-4 w-full"
          onClick={() => navigate('/adminform')}
        >
          Admin Form
        </button>
        <button 
          className="bg-[#0F4767] text-black text-2xl font-bold py-2 px-4 rounded mb-4 w-full"
          onClick={() => navigate('/adminsteps')}
        >
          Admin Steps
        </button>
        <button 
          className="bg-[#0F4767] text-black text-2xl font-bold py-2 px-4 rounded mb-4 w-full"
          onClick={() => navigate('/adminacercade')}
        >
          Admin Acerca de
        </button>
        <button 
          className="bg-[#0F4767] text-black text-2xl font-bold py-2 px-4 rounded mb-4 w-full"
          onClick={() => navigate('/admincentro')}
        >
          Admin Centro
        </button>
      </aside>

      <main className="flex-1 bg-gray-100 p-4 md:p-6 overflow-y-auto">
        <div className="relative flex w-full h-32 rounded-lg mb-4">
          <img className="w-full h-full object-cover rounded-lg" src="./slider/sliderpanel.webp" alt="Estadísticas" />
          <h2 className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-white">Estadísticas</h2>
        </div>

        <h1 className="text-2xl font-semibold mb-4 text-center">Estadísticas del torneo</h1>
        <TablaEstadisticas />
      </main>
    </div>
  );
}

export default PanelAdmin;
