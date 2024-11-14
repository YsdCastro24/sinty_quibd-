import React, { forwardRef } from 'react';

const Centro = forwardRef((props, ref) => {
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
      return '¡Hola! Buenos días,';
    } else if (hours < 18) {
      return '¡Hola! Buenas tardes,';
    } else {
      return '¡Hola! Buenas noches,';
    }
  };

  const greetingMessage = `${getGreeting()} me interesa saber cuál sería el procedimiento para agregar mi escenario deportivo a su plataforma.`;

  const whatsappNumber = '+573128631769';
  const whatsappMessage = encodeURIComponent(greetingMessage);

  return (
    <div ref={ref} className="text-center shadow-md bg-[#0F4767] text-white py-6 my-8 rounded-lg">
      <h2 className="text-xl font-semibold">Si eres un Centro Deportivo y deseas más información</h2>
      <p className="mt-1">Escríbenos en WhatsApp, un asesor estará contigo.</p>
      <p className="mt-2">Estamos aquí para resolver todas tus dudas y ayudarte a aprovechar al máximo nuestros servicios, No dudes en contactarnos. <br/>  <strong>¡tu satisfacción es nuestra prioridad!</strong></p>
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        className="bg-[#4EE99E] text-white font-semibold py-3 px-9 rounded-lg mt-4 inline-block ml-1"
      >
        WhatsApp
      </a>
    </div>
  );
});

export default Centro;
