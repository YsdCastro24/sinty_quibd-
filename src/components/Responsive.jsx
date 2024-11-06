import React from 'react';

const Responsive = () => {
  return (
    <div className="flex flex-row items-center justify-center space-y-8 py-8">
      <h2 className="text-2xl font-bold">Vista Responsiva</h2>

         <div className="border rounded-lg overflow-hidden shadow-lg w-full md:w-1/2 lg:w-1/3">
        <div className="bg-gray-300 h-12 flex items-center justify-center">Escritorio</div>
        <iframe
          src="./mackbook.webp"
          title="Vista Escritorio"
          className="w-full h-64 md:h-96 lg:h-[500px]"
        ></iframe>
      </div>
      <div className="border rounded-lg overflow-hidden shadow-lg w-full md:w-1/3 lg:w-1/4">
        <div className="bg-gray-300 h-12 flex items-center justify-center">Tablet</div>
        <iframe
          src="./ipad.webp"
          title="Vista Tablet"
          className="w-full h-64 md:h-80 lg:h-[400px]"
        ></iframe>
      </div>
      <div className="border rounded-lg overflow-hidden shadow-lg w-full md:w-1/4 lg:w-1/5">
        <div className="bg-gray-300 h-12 flex items-center justify-center">Móvil</div>
        <iframe
          src="./iphone.webp"
          title="Vista Móvil"
          className="w-full h-56 md:h-64 lg:h-72"
        ></iframe>
      </div>
    </div>
  );
};

export default Responsive;
