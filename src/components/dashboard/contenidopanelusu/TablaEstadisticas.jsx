import React from 'react';

function TablaEstadisticas() {
  return (
    <div className="space-y-6">
      <section className="bg-gray-300 p-4 rounded-lg">
        <h3 className="font-bold">Goles</h3>
        <div className="flex justify-between bg-gray-400 p-2 mt-2 rounded text-center font-semibold">
          <span>Jugador</span>
          <span>Equipo</span>
        </div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex justify-between p-2 bg-white rounded mt-1">
            <span>Jugador {i + 1}</span>
            <span>Equipo {i + 1}</span>
          </div>
        ))}
      </section>

      <section className="bg-gray-300 p-4 rounded-lg">
        <h3 className="font-bold">Goles por partido</h3>
        <div className="flex justify-between bg-gray-400 p-2 mt-2 rounded text-center font-semibold">
          <span>Jugador</span>
          <span>Equipo</span>
        </div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex justify-between p-2 bg-white rounded mt-1">
            <span>Jugador {i + 1}</span>
            <span>Equipo {i + 1}</span>
          </div>
        ))}
      </section>

      <section className="bg-gray-300 p-4 rounded-lg">
        <h3 className="font-bold">Remates a puerta</h3>
        <div className="flex justify-between bg-gray-400 p-2 mt-2 rounded text-center font-semibold">
          <span>Equipo</span>
          <span>Remates</span>
        </div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex justify-between p-2 bg-white rounded mt-1">
            <span>Equipo {i + 1}</span>
            <span>{Math.floor(Math.random() * 10)}</span>
          </div>
        ))}
      </section>

      <section className="bg-gray-300 p-4 rounded-lg">
          <h3 className="font-bold">Tiros De Esquina</h3>
          
          <div className="bg-gray-400 p-2 mt-2 rounded text-center font-semibold">
            <span className="block text-center">Equipo</span>
          </div>

          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-white p-2 rounded mt-1 flex justify-center">
              <span>Equipo {i + 1}</span>
            </div>
          ))}
        </section>

        <section className="bg-gray-300 p-4 rounded-lg">
          <h3 className="font-bold">Penales</h3>
          <div className="bg-gray-400 p-2 mt-2 rounded text-center font-semibold">
            <span className="block text-center">Jugador</span>
          </div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-white p-2 rounded mt-1 flex justify-center">
              <span>Equipo {i + 1}</span>
            </div>
          ))}
        </section>

        <section className="bg-gray-300 p-4 rounded-lg">
          <h3 className="font-bold">Valla Invicta</h3>
          <div className="bg-gray-400 p-2 mt-2 rounded text-center font-semibold">
            <span className="block text-center">Jugador</span>
          </div>
          
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-white p-2 rounded mt-1 flex justify-center">
              <span>Equipo {i + 1}</span>
            </div>
          ))}
        </section>

        <section className="bg-gray-300 p-4 rounded-lg">
        <h3 className="font-bold">Faltas</h3>
        <div className="flex justify-between bg-gray-400 p-2 mt-2 rounded text-center font-semibold">
          <span>Faltas</span>
          <span>Equipo</span>
        </div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex justify-between p-2 bg-white rounded mt-1">
            <span>Faltas {i + 1}</span>
            <span>Equipo {i + 1}</span>
          </div>
        ))}
      </section>

      <section className="bg-gray-300 p-4 rounded-lg">
        <h3 className="font-bold">Tarjetas Amarillas</h3>
        <div className="flex justify-between bg-gray-400 p-2 mt-2 rounded text-center font-semibold">
          <span>Jugador</span>
          <span>Equipo</span>
        </div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex justify-between p-2 bg-white rounded mt-1">
            <span>Jugador {i + 1}</span>
            <span>Equipo {i + 1}</span>
          </div>
        ))}
      </section>

      <section className="bg-gray-300 p-4 rounded-lg">
        <h3 className="font-bold">Tarjetas Rojas</h3>
        <div className="flex justify-between bg-gray-400 p-2 mt-2 rounded text-center font-semibold">
          <span>Jugador</span>
          <span>Equipo</span>
        </div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex justify-between p-2 bg-white rounded mt-1">
            <span>Jugador {i + 1}</span>
            <span>Equipo {i + 1}</span>
          </div>
        ))}
      </section>


    </div>
  );
}

export default TablaEstadisticas;
