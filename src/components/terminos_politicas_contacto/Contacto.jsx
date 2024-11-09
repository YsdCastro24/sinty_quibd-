import React, { useState, useEffect } from "react";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    document.title = "Sinty Quibdó | Contacto";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", { nombre, email, mensaje });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('./descarga.jpeg')" }} // Asegúrate de que la imagen está en la carpeta 'public'
    >
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-center mb-4">
          <img
            src="/logo2.webp" // Asegúrate de que este logo esté en la carpeta 'public'
            alt="Logo de Sinty Quibdó"
            className="h-32 w-auto"
          />
        </div>
        <h2 className="text-2xl font-bold text-center">Contacto</h2>
        <p className="mt-2 text-gray-600 text-center">
          Aquí puedes enviarnos tus consultas o comentarios.
        </p>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="nombre">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="mensaje">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
              rows="4"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#4C9FCE] text-white font-bold py-2 rounded"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
