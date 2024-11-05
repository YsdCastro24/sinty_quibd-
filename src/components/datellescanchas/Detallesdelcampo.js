import React, { useEffect } from "react";
import { FaSun, FaCloudSun, FaMoon } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

function Detallesdelcampo() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sinty Quibdó | Detalle";
  }, []);

  const [encounterType, setEncounterType] = React.useState("Amistoso");
  const { state } = useLocation();
  const fieldData = state?.fieldData;
  const otherFields = state?.otherFields;

  if (!fieldData || !otherFields) {
    navigate("/search-results");
    return null;
  }

  const handleReserve = () => {
    const reservationData = {
      fieldData,
      time: fieldData.time,
      encounterType,
    };
    navigate("/login", { state: reservationData });
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="bg-white p-6 shadow-md rounded-lg my-4 mx-auto w-full max-w-4xl">
        <button
          className="bg-[#4C9FCE] text-white px-4 py-2 rounded mb-4 w-full sm:w-auto"
          onClick={() => navigate(-1)}
        >
          &larr; Regresar
        </button>

        <div className="flex flex-col sm:flex-row items-center border-b pb-4 mb-4">
          <img 
          src={fieldData.img} 
          alt={`Cancha ${fieldData.name}`} 
          className="w-full max-w-[200px] h-auto rounded-lg object-contain mr-4" />

          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-[#294BA1] mb-4">
              {fieldData.name}
            </h2>
            <p className="text-gray-600">Atributos de la cancha</p>
            {fieldData.attributes.map((attribute, index) => (
              <p
                key={index}
                className="bg-gray-200 rounded-lg text-gray-600 py-1 px-2 inline-block mb-2"
              >
                {attribute}
              </p>
            ))}
            <p className="text-xl font-semibold text-blue-600 mt-2">
              {fieldData.price}
            </p>
            <p className="text-gray-500 mt-1">Horario seleccionado: {fieldData.time}</p>

            <div className="mt-4">
              <label className="block text-gray-600 mb-2" htmlFor="encounterType">
                Tipo de encuentro
              </label>
              <select
                id="encounterType"
                className="border rounded p-2 w-full"
                value={encounterType}
                onChange={(e) => setEncounterType(e.target.value)}
              >
                <option value="Amistoso">Amistoso</option>
                <option value="Torneo Relámpago">Torneo Relámpago</option>
                <option value="Campeonato">Campeonato</option>
              </select>
            </div>

            <button
              className="bg-green-500 text-white px-4 py-2 rounded mt-4 w-full sm:w-auto"
              onClick={handleReserve}
            >
              Reservar
            </button>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 mt-4">
          <h3 className="text-center font-semibold">
            Consulta los horarios de disponibilidad para otros horarios
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 text-center">
            {/* Encabezados con íconos */}
            <div className="flex flex-col items-center space-y-2">
              <FaSun className="text-yellow-500" />
              <p>Día</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaCloudSun className="text-orange-500" />
              <p>Tarde</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaMoon className="text-blue-500" />
              <p>Noche</p>
            </div>

            {/* Columna de Horarios de Día */}
            <div className="space-y-2">
              {[
                "00:00 - 01:00",
                "06:00 - 07:00",
                "08:00 - 09:00",
                "10:00 - 11:00",
              ].map((time, i) => (
                <div key={`dia-${i}`} className="p-2 border rounded bg-white">
                  {time}
                </div>
              ))}
            </div>

            {/* Columna de Horarios de Tarde */}
            <div className="space-y-2">
              {[
                "12:00 - 13:00",
                "14:00 - 15:00",
                "16:00 - 17:00",
                "18:00 - 19:00",
              ].map((time, i) => (
                <div key={`tarde-${i}`} className="p-2 border rounded bg-white">
                  {time}
                </div>
              ))}
            </div>

            {/* Columna de Horarios de Noche */}
            <div className="space-y-2">
              {[
                "19:00 - 20:00",
                "21:00 - 22:00",
                "23:00 - 24:00",
              ].map((time, i) => (
                <div key={`noche-${i}`} className="p-2 border rounded bg-white">
                  {time}
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="text-lg text-center font-semibold mt-8 mb-4">
          Otras canchas cercanas que te pueden interesar
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {otherFields.map((otherField) => (
            <div key={otherField.name} className="bg-gray-100 p-4 rounded-lg text-center">
              <img
                src={otherField.img}
                alt={`Cancha ${otherField.name}`}
                className="w-full h-24 rounded-lg object-cover mb-2"
              />
              <h4 className="text-blue-600 font-semibold">{otherField.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Detallesdelcampo;
