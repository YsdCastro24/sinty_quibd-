import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // Importamos el ícono de flecha

function VerReservas() {
  const [reservas, setReservas] = useState([]);
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sinty Quibdó | Mis Reservas";

    // Aquí podrías cargar las reservas de un almacenamiento local, API, etc.
    if (state && state.reservas) {
      setReservas(state.reservas);
    }
  }, [state]);

  if (!reservas.length) {
    return (
      <div className="bg-gray-50 min-h-screen p-4 flex items-center justify-center">
        <p className="text-gray-600">No tienes reservas realizadas.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="relative bg-white p-6 rounded-lg shadow-md max-w-md w-full mx-auto">

      <div className="relative w-full mx-auto">
        {/* Botón de regresar fuera del formulario, al costado derecho */}
        <button
          onClick={() => navigate(-1)} // Regresa a la página anterior
          className="absolute top-5 right-50 bg-[#5AB980] p-2 rounded-full text-gray-600 hover:bg-gray-200"
        >
          <FaArrowLeft size={24} />
        </button>
        
        <h2 className="text-2xl font-bold text-[#294BA1] mb-4">Mis Reservas</h2>
        {reservas.map((reserva, index) => (
          <div key={index} className="mb-6 border-b pb-4">
            <div className="flex flex-col sm:flex-row items-center mb-4">
              <img
                src={reserva.img}
                alt={`Cancha ${reserva.name}`}
                className="w-full max-w-[200px] h-auto rounded-lg object-contain mr-4"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-[#294BA1]">{reserva.name}</h3>
                <p className="text-gray-600">Horario reservado: {reserva.time}</p>
                <p className="text-lg font-semibold text-blue-600 mt-2">{reserva.price}</p>
                <p className="text-gray-500 mt-1">Tipo de encuentro: {reserva.encounterType}</p>
              </div>
            </div>
            <button
              className="bg-[#4C9FCE] text-white px-4 py-2 rounded"
              onClick={() => navigate("/Detallesdelcampo", { state: { fieldData: reserva } })}
            >
              Ver detalles
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default VerReservas;
