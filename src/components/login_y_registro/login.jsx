import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const { state } = useLocation(); // Recibe el estado, si lo hay (por ejemplo, reserva de cancha)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Iniciando sesión...");
    
    // Si hay datos de la reserva, los pasamos al método de pago
    if (state) {
      navigate('/metodo-de-pago', { state });
    } else {
      // Si no hay datos de reserva, navega al panel de usuario
      navigate('/panelusuario');
    }
  };

  useEffect(() => {
    document.title = "Sinty Quibdó | Login";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <div
        className="absolute inset-0 bg-white"
        style={{
          background: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          filter: 'brightness(0.9)',
        }}
      ></div>

      <div className="relative z-10 bg-white p-10 rounded-lg shadow-md py-9 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">Login</h2>
        <form onSubmit={handleSubmit}>
          <img src="/logo2.webp" alt="Logo" className="mb-6 w-32 mx-auto" />
          <div className="mb-4">
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
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-500"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#4C9FCE] text-white font-bold py-2 rounded-md"
          >
            Iniciar Sesión
          </button>
          <p className="mt-4 text-sm text-center">
            ¿No te has registrado aún?{' '}
            <a href="/registro" className="text-blue-600 hover:underline">
              Haz clic aquí
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
