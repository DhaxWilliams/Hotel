import React, { useState, useEffect } from "react";

const testimonios = [
  {
    nombre: "Ana Martínez",
    comentario: "¡Increíble experiencia en el Hotel Rock & Roll! La atención fue de primera y las habitaciones tienen un ambiente único, con un toque de rock en cada rincón. 🎶",
    estrellas: 5,
    fecha: "Febrero 2024",
    imagen: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    nombre: "Carlos Rodríguez",
    comentario: "El hotel tiene una vibra espectacular. La música en vivo en el bar fue lo mejor de mi estadía. ¡Definitivamente volveré para otro show! 🤘",
    estrellas: 5,
    fecha: "Enero 2024",
    imagen: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    nombre: "María Fernández",
    comentario: "El desayuno buffet temático fue una sorpresa genial. Además, la piscina y la terraza con vistas a la montaña hacen que este lugar sea perfecto para relajarse con buen rock de fondo. 🎵",
    estrellas: 5,
    fecha: "Diciembre 2023",
    imagen: "https://randomuser.me/api/portraits/women/60.jpg"
  },
  {
    nombre: "Javier López",
    comentario: "Me encantó la decoración con vinilos y guitarras en las habitaciones. Todo el hotel respira rock y la experiencia es totalmente única. 100% recomendado. 🎸🔥",
    estrellas: 5,
    fecha: "Noviembre 2023",
    imagen: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    nombre: "Elena Gómez",
    comentario: "El mejor lugar para los amantes de la música. Servicio excelente y un ambiente que te transporta a la era dorada del rock. 🤟",
    estrellas: 5,
    fecha: "Octubre 2023",
    imagen: "https://randomuser.me/api/portraits/women/50.jpg"
  },
];


const Testimonios = () => {
  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    setIndice((prev) => (prev + 1) % testimonios.length);
  };

  const anterior = () => {
    setIndice((prev) => (prev - 1 + testimonios.length) % testimonios.length);
  };

  useEffect(() => {
    const intervalo = setInterval(siguiente, 5000); 
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section id="testimonios" className="w-screen bg-orange-100 py-16 px-6 flex flex-col items-center scroll-mt-24">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Lo Que Dicen Nuestros Huéspedes ⭐
      </h2>
      {/* Contenedor del Testimonio */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 px-6">
        <button onClick={anterior} className="bg-gray-800 text-white p-3 rounded-full hover:bg-red-500 transition-all duration-300 hover:scale-105">
          <i className="bi bi-chevron-left"></i>
        </button>
        <div className="relative w-full max-w-3xl bg-white shadow-lg rounded-lg p-8 text-center">
          <i className="bi bi-chat-quote text-gray-300 text-5xl absolute top-4 left-4"></i>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            "{testimonios[indice].comentario}"
          </p>
          <div className="flex justify-center items-center mb-2">
            {[...Array(testimonios[indice].estrellas)].map((_, i) => (
              <i key={i} className="bi bi-star-fill text-yellow-400 text-xl mx-1"></i>
            ))}
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{testimonios[indice].nombre}</h3>
          <p className="text-gray-500 text-sm">{testimonios[indice].fecha}</p>
          <img
            src={testimonios[indice].imagen}
            alt={testimonios[indice].nombre}
            className="w-16 h-16 rounded-full mx-auto mt-4 border-2 border-gray-300"
          />
        </div>
        <button onClick={siguiente} className="bg-gray-800 text-white p-3 rounded-full hover:bg-red-500 transition-all duration-300 hover:scale-105">
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
      <div className="flex mt-6">
        {testimonios.map((_, i) => (
          <div key={i} className={`w-3 h-3 rounded-full mx-1 transition-all ${i === indice ? "bg-gray-800 scale-125" : "bg-gray-400"}`} />
        ))}
      </div>
    </section>
  );
};

export default Testimonios;
