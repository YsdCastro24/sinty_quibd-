import React, { useState, useEffect } from "react";

function Slider() {
  const images = [
    "./slider/slider.webp",
    "./slider/slider2.webp",
    "./slider/slider3.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia la imagen automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [images.length]);

  return (
    <div className="slider-container bg-gray-200 w-full my-4 relative rounded-lg overflow-hidden">
      {/* Imagen actual */}
      <div className="flex justify-center items-center h-full">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg"
        />
      </div>
      
      {/* Botón para la imagen anterior */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl font-bold text-gray-800 p-2"
        onClick={() =>
          setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
        }
      >
        ‹
      </button>

      {/* Botón para la imagen siguiente */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl font-bold text-gray-800 p-2"
        onClick={() =>
          setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
        }
      >
        ›
      </button>
    </div>
  );
}

export default Slider;
