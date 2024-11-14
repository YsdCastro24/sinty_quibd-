import React, { useState, useEffect } from 'react';

function Registro() {
  const [passwordStrength, setPasswordStrength] = useState('');

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    // Evaluar la fuerza de la contraseña
    if (password.length < 6) {
      setPasswordStrength('débil');
    } else if (password.length < 10) {
      setPasswordStrength('moderada');
    } else {
      setPasswordStrength('robusta');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de registro
    console.log("Registrando usuario...");
  };

  useEffect(() => {
    document.title = "Sinty Quibdó | Registro";
  }, []);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      {/* Capa de fondo con gradiente radial */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
          backgroundSize: '20px 20px', 
          filter: 'brightness(0.9)', 
        }}
      ></div>

      <div className="relative z-10 bg-white p-10 rounded-lg shadow-md py-10 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Registro</h2>

        <form onSubmit={handleSubmit}>
          <img src="/logo2.webp" alt="Logo" className="mb-6 w-32 mx-auto" />

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="fullname">Nombre Completo</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-500"
              placeholder="Ingresa tu nombre completo"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="document">Número de Documento</label>
            <div className="flex items-center">
              <input
                type="number"
                id="document"
                name="document"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-500"
                placeholder="Ingresa tu número"
                maxLength="10"
                onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
              />
              <h2 className="ml-2 text-xl text-black">Cc</h2>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="correo">Correo Electrónico</label>
            <input
              type="email"
              id="correo"
              name="correo"
              required
              pattern="^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com|yahoo\.com|icloud\.com|protonmail\.com|zoho\.com|aol\.com|yandex\.com)$"
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-500"
              placeholder="Ingresa tu correo electrónico"
              title="El correo debe ser de los dominios: @gmail.com, @hotmail.com, @outlook.com, @yahoo.com, @icloud.com, @protonmail.com, @zoho.com, @aol.com, o @yandex.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="celular">Número de Celular</label>
            <div className="flex items-center">
              <input
                type="number"
                id="celular"
                name="celular"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-500"
                placeholder="Ingresa tu número"
                maxLength="10"
                onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
              />
              <h2 className="ml-2 text-xl text-black">+57</h2>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-500"
              placeholder="Ingresa tu usuario"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={handlePasswordChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-500"
              placeholder="Ingresa tu contraseña"
            />
            <div className={`mt-2 text-sm ${passwordStrength === 'débil' ? 'text-red-600' : passwordStrength === 'moderada' ? 'text-yellow-600' : passwordStrength === 'robusta' ? 'text-green-600' : ''}`}>
              {passwordStrength && <span>Fuerza de la contraseña: {passwordStrength}</span>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#4C9FCE] text-white font-bold py-2 rounded-md"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registro;