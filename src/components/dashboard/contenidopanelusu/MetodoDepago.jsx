import { useLocation } from "react-router-dom";

function MetodoDepago() {
  const { state } = useLocation();
  console.log("MetodoDepago renderizado", state); // Asegúrate de que este log se imprime

  if (!state || !state.fieldData || !state.time || !state.encounterType) {
    return <p>No se han proporcionado detalles de la reserva.</p>;
  }

  return (
    <div>
      <h2>{state.fieldData.name}</h2>
      <p>{state.time}</p>
      <p>{state.encounterType}</p>
    </div>
  );
}

export default MetodoDepago;
