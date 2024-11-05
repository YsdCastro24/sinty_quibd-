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
    <div className="bg-gray-100 rounded-lg p-4 mt-4">
  <h3 className="text-center font-semibold">
    Consulta los horarios de disponibilidad para otros horarios
  </h3>
  
  <div className="grid sm:grid-cols-3 gap-4 mt-4">
    {/* Columna de Horarios de Día */}
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

    {/* Columna de Horarios de Tarde */}
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

    {/* Columna de Horarios de Noche */}
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

  );
}

export default Detallesdelcampo;
