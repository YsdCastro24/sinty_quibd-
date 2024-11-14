import React, { useEffect } from "react";
import { FaSun, FaCloudSun, FaMoon } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

function Detallesdelcampo() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sinty Quibdó | Detalle Del Campo";
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
    // Datos de la reserva, incluyendo los datos de la cancha y el tipo de encuentro
    const reservationData = {
      fieldData,
      encounterType,
    };

    // Redirigir al login y pasar los datos de la reserva
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
            className="w-full max-w-[200px] h-auto rounded-lg object-contain mr-4"
          />

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
                Selecciona el tipo de encuentro
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

        {/* Sección de horarios de disponibilidad */}
        <div className="bg-gray-100 rounded-lg p-4 mt-4">
          <h3 className="text-center font-semibold">
            Consulta los horarios de disponibilidad para otros horarios
          </h3>
          
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            {/* Horarios de Día */}
            <div className="text-center">
              <div className="flex flex-col items-center mb-2">
                <FaSun className="text-yellow-500" />
                <p>Día</p>
              </div>
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
            </div>

            {/* Horarios de Tarde */}
            <div className="text-center">
              <div className="flex flex-col items-center mb-2">
                <FaCloudSun className="text-orange-500" />
                <p>Tarde</p>
              </div>
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
            </div>

            {/* Horarios de Noche */}
            <div className="text-center">
              <div className="flex flex-col items-center mb-2">
                <FaMoon className="text-blue-500" />
                <p>Noche</p>
              </div>
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
        </div>

        {/* mapa de ubicación */}
        {fieldData.name === "Sau Pablo" && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-center mb-4">Ubicación de la Cancha</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3970.2001819262937!2d-76.6341021!3d5.6841834!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e48858e9664eca7%3A0xa0079cf184d149da!2sCanchas%20Obapo!5e0!3m2!1ses!2sco!4v1731109736089!5m2!1ses!2sco"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[450px] rounded-lg shadow-lg"
            ></iframe>
          </div>
        )}

        {fieldData.name === "Citara" && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-center mb-4">Ubicación de la Cancha</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.2653422586654!2d-76.64256529048525!3d5.674727994283064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4885f59523d565%3A0x7d88fd2c92c08a24!2sCentro%20deportivo%20y%20RECREACIONAL%20CITARA!5e0!3m2!1ses!2sco!4v1731117525363!5m2!1ses!2sco"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[450px] rounded-lg shadow-lg"
            ></iframe>
          </div>
        )}

        {fieldData.name === "A otro nivel" && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-center mb-4">Ubicación de la Cancha</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1731118013389!6m8!1m7!1sCdGC_0MmSvxArENhZy_u0g!2m2!1d5.695084822705067!2d-76.66081889888336!3f288.21257224724724!4f-9.525697342518697!5f0.7820865974627469"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[450px] rounded-lg shadow-lg"
            ></iframe>
          </div>
        )}

        {fieldData.name === "Chipi chipi" && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-center mb-4">Ubicación de la Cancha</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.121950372783!2d-76.657133!3d5.6955149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e488f76c0749bf3%3A0xbcdd976af07c40dc!2sCancha%20Chipi%20Chipi!5e0!3m2!1ses!2sco!4v1731118175513!5m2!1ses!2sco"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[450px] rounded-lg shadow-lg"
            ></iframe>
          </div>
        )}

        {fieldData.name === "Bernabéu" && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-center mb-4">Ubicación de la Cancha</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4025796431238!2d-76.65006630434978!3d5.654761952150545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4888ac71c94e0f%3A0x318a2a1d0e70020e!2sBrisas%20De%20Cab%C3%AD%20-%20Canchas%20Sinteticas!5e0!3m2!1ses!2sco!4v1731118524335!5m2!1ses!2sco"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[450px] rounded-lg shadow-lg"
            ></iframe>
          </div>
        )}

          {/* Recomendaciones */}
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
