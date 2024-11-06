import React from "react";

function Steps() {
  return (
    <div className="bg-gray-200 p-8 my-8 rounded-lg">
      <h2 className="text-3xl rotate-[-5deg] font-semibold mb-10 text-center">Pasos para realizar tu proceso De reserva</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-2xl font-semibold text-center">
          <img className="mx-14 mb-1 animate-rubber-band"  src="/calendario.webp" alt="Paso 1" />
          <h2 className="rotate-[-5deg] mb-8">Selecciona <br/> Fecha y Hora</h2>
        </div>
        <div className="text-2xl font-semibold text-center">
          <img src="/cancha.webp" alt="Paso 2" className="mx-14 mb-1 animate-rubber-band" />
          <h2 className="rotate-[-5deg] mb-8">Elige la cancha <br /> de tu preferencia</h2>
        </div>
        <div className="text-2xl font-semibold text-center">
          <img src="/costo.webp" alt="Paso 3" className="mx-14 mb-1 animate-rubber-band" />
          <h2 className="rotate-[-5deg]">Realiza Tú Pago</h2>
        </div>
      </div>
    </div>
  );
}

export default Steps;
