import React, { forwardRef } from 'react';

const Acercade = forwardRef((props, ref) => {
  return (
    <div ref={ref} id="acercade" className="text-jutify  my-8 max-w-3xl mx-auto">
      <h1 className="text-4xl text-center font-bold text-[#294BA1]">Sinty Quibdó</h1>
      <p className="text-lg text-gray-700 mt-4">
        Con Sinty Quibdó tiene acceso al sistema de reservas de todas las canchas
        que existen en la ciudad de Quibdó y al panel de administración de reservas.
      </p>
      <p className="text-lg text-gray-700 mt-4">
        Nuestra plataforma está diseñada para facilitar la gestión de reservas, 
        permitiéndole consultar la disponibilidad de canchas en tiempo real y realizar
        reservas de manera rápida y sencilla. Además, ofrecemos un sistema de 
        notificaciones para recordarle sus reservas y garantizar que no se pierda 
        ninguna oportunidad de disfrutar del deporte.
      </p>
      <p className="text-lg text-gray-700 mt-4">
        En <strong> Sinty Quibdó </strong>, también nos preocupamos por la comunidad. Por eso, 
        trabajamos en colaboración con los administradores de canchas para ofrecer 
        tarifas competitivas y promociones exclusivas. Le invitamos a explorar nuestro 
        sistema y a disfrutar de una experiencia de reserva sin complicaciones.
      </p>
    </div>
  );
});

export default Acercade;
