import React, { useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

function SearchResults() {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sinty Quibdó | Resultado";
  }, []);

  if (!state || !state.field || !state.time) {
    navigate("/"); 
    return null;
  }

  const { field, time } = state;

  const fieldsData = {
    "Sau Pablo": { img: "./img/sau_pablo.webp", attributes: ["Césped natural", "Iluminación"], price: "$90,000.00 por hora" },
    "Citara": { img: "./img/citara.webp", attributes: ["Césped sintético", "Iluminación"], price: "$85,000.00 por hora" },
    "Bernabéu": { img: "./img/bernabeu.webp", attributes: ["Césped sintético", "Graderías"], price: "$100,000.00 por hora" },
    "A otro nivel": { img: "./img/a_otro_nivel.webp", attributes: ["Césped sintético", "Cancha techada"], price: "$95,000.00 por hora" },
    "Chipi chipi": { img: "./img/chipi_chpi.webp", attributes: ["Césped sintético", "Iluminación"], price: "$80,000.00 por hora" },
  };

  const selectedFieldData = fieldsData[field];
  const otherFields = Object.keys(fieldsData)
    .filter((key) => key !== field)
    .map((key) => ({ name: key, ...fieldsData[key] }));

    return (
      <div className="bg-white p-4 sm:p-6 shadow-md rounded-lg my-4 mx-auto w-full max-w-4xl">
        <div className="flex flex-col sm:flex-row items-center border-b pb-4 mb-4">
          <img
            src={selectedFieldData.img}
            alt={`Cancha ${field}`}
            className="w-full max-w-[200px] h-auto rounded-lg object-contain mr-4"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-[#294BA1] mb-2 sm:mb-4">{field}</h2>
            <p className="text-gray-600">Atributos de la cancha</p>
            {selectedFieldData.attributes.map((attribute, index) => (
              <p key={index} className="bg-gray-200 rounded-lg text-gray-600 py-1 px-2 inline-block mb-2 border-spacin-6">
                {attribute}
              </p>
            ))}
            <p className="text-lg sm:text-xl font-semibold text-blue-600 mt-2">{selectedFieldData.price}</p>
            <p className="text-gray-500 mt-1">Horario seleccionado: {time}</p>
            <Link
              to="/Detallesdelcampo"
              state={{
                fieldData: { ...selectedFieldData, name: field, time },
                otherFields: otherFields,
              }}
              className="bg-[#294BA1] text-white font-semibold py-2 px-4 rounded mt-2 inline-block w-full sm:w-auto text-center"
            >
              Ver Detalles
            </Link>
          </div>
        </div>
    
        <h3 className="text-lg text-center font-semibold mb-4">Otras canchas cercanas que te pueden interesar</h3>
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
    );
    
}

export default SearchResults;
