import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function RegistroJugadores() {
  const navigate = useNavigate(); // Hook para navegación
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    numeroDocumento: '',
    tipoSangre: '',
    posicion: '',
    dorsal: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    document.title = "Sinty Quibdó | Registro De Plantilla";
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del jugador:', formData);
    alert('Jugador registrado exitosamente');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/descargar.jpeg')" }} // Cambia esta ruta a la de tu imagen
    >
      <div className="relative w-full mx-auto">
        {/* Botón de regresar fuera del formulario, al costado derecho */}
        <button
          onClick={() => navigate(-1)} // Regresa a la página anterior
          className="absolute top-5 right-50 bg-[#5AB980] p-2 rounded-full text-gray-600 hover:bg-gray-200"
        >
          <FaArrowLeft size={24} />
        </button>

        <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Registro de Jugadores</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nombreCompleto" className="block text-gray-600">Nombre Completo</label>
              <input
                type="text"
                id="nombreCompleto"
                name="nombreCompleto"
                value={formData.nombreCompleto}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="numeroDocumento" className="block text-gray-600">Número de Documento</label>
              <input
                type="number"
                id="numeroDocumento"
                name="numeroDocumento"
                value={formData.numeroDocumento}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="tipoSangre" className="block text-gray-600">Tipo de Sangre</label>
              <select
                id="tipoSangre"
                name="tipoSangre"
                value={formData.tipoSangre}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              >
                <option value="">Selecciona tu tipo de sangre</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div>
              <label htmlFor="posicion" className="block text-gray-600">Posición</label>
              <input
                type="text"
                id="posicion"
                name="posicion"
                value={formData.posicion}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="dorsal" className="block text-gray-600">Dorsal</label>
              <input
                type="number"
                id="dorsal"
                name="dorsal"
                value={formData.dorsal}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded w-full font-semibold"
            >
              Registrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistroJugadores;
