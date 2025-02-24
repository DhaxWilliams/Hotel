import React, { useState } from "react";

const AcercaDeMi = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const preguntasFrecuentes = [
    { pregunta: "¿Cuál es la Dirección De Hotel Rock & Roll?", respuesta: "La propiedad está ubicada en Mira Flores, Calle Lino Morales #51, Potosi Bolivia." },
    { pregunta: "¿Cuánto Cuesta Alojarse En Hotel Rock & Roll Por Noche?", respuesta: "Los precios varían según la temporada y la disponibilidad. Consulta nuestro sitio web para obtener tarifas actualizadas." },
    { pregunta: "¿Cuáles Son Los Horarios De Check-In Y Check-Out En Hotel Rock & Roll?", respuesta: "El Check-in es a partir de las 14:00 y el Check-out antes de las 12:00." },
    { pregunta: "¿Hotel Rock & Roll Tiene Piscina?", respuesta: "Sí, el hotel cuenta con una piscina climatizada para huéspedes." },
    { pregunta: "¿Hay Un Restaurante En Hotel Rock & Roll?", respuesta: "Sí, tenemos un restaurante con comida gourmet y un bar inspirado en el rock." },
    { pregunta: "¿Hay Desayuno Gratuito Disponible En Hotel Rock & Roll?", respuesta: "Sí, ofrecemos desayuno buffet gratuito a nuestros huéspedes, con opciones inspiradas en estrellas del rock." },
    { pregunta: "¿Hay Estacionamiento Disponible En Hotel Rock & Roll?", respuesta: "Sí, disponemos de estacionamiento gratuito y autoservicio." },
    { pregunta: "¿Qué Actividades Hay Para Hacer En Hotel Rock & Roll?", respuesta: "El hotel organiza actividades al aire libre, senderismo, tours guiados y noches de música en vivo." },
    { pregunta: "¿Es Hotel Rock & Roll Un Hotel Familiar?", respuesta: "Sí, contamos con instalaciones y actividades diseñadas para familias y fanáticos del rock de todas las edades." },
    { pregunta: "¿Hay Descuentos U Ofertas Especiales Para Hotel Rock & Roll?", respuesta: "Sí, visita nuestro sitio web para ver promociones y ofertas especiales." },
    { pregunta: "¿Hay Códigos Promocionales O De Cupón Disponibles Para Hotel Rock & Roll?", respuesta: "Consulta en nuestra web o suscríbete para recibir descuentos exclusivos." },
];

const comodidades = [
    "Zona de juegos para niños",
    "La propiedad se limpia con desinfectante.",
    "Restaurante con temática rockera",
    "La propiedad confirma que están implementando medidas de seguridad para los huéspedes.",
    "Las sábanas y toallas se lavan a una temperatura mínima de 60 °C/140 °F.",
    "Accesibilidad para silla de ruedas",
    "Hay mascarillas disponibles para los huéspedes.",
    "A los huéspedes se les proporciona desinfectante de manos gratuito.",
    "Opciones de comida envuelta individualmente.",
    "Acceso a Internet - Acceso público gratuito",
    "Sala de juegos con temática de bandas legendarias",
    "Estacionamiento - Autoservicio",
    "Instalaciones para no fumadores",
    "Salón/Bar con música en vivo",
];

  return (
    <section id="nosotros" className="w-full max-w-6xl mx-auto px-6 py-12 scroll-mt-24">
      {/* Descripción */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Acerca de Hotel Rock & Roll</h2>
      <p className="text-gray-700 leading-relaxed">
      Ubicado en el vibrante corazón en lo mas alto del mundo, el Hotel Rock & Roll es el destino ideal para quienes buscan comodidad, aventura y una experiencia con ritmo. 🎸🔥
      Ofrecemos habitaciones acogedoras con Wi-Fi gratuito, un restaurante temático rockero, un bar con música en vivo y estacionamiento cubierto.
      Sumérgete en la esencia del rock mientras disfrutas de un entorno histórico, combinados con espectaculares vistas a las montañas. Ya sea que vengas en busca de tranquilidad o adrenalina, en Hotel Rock & Roll encontrarás el escenario perfecto para tu próxima aventura. 🤘🏔️
      </p>

      {/* Comodidades */}
      <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Comodidades</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {comodidades.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 bg-gray-100 p-3 rounded-md">
            <span className="text-yellow-500 text-xl">✅</span>
            <p className="text-gray-800">{item}</p>
          </div>
        ))}
      </div>

      {/* Preguntas Frecuentes */}
      <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Preguntas Frecuentes</h3>
      <div className="border border-gray-300 rounded-lg divide-y">
        {preguntasFrecuentes.map((item, index) => (
          <div key={index} className="p-4">
            <button 
              className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-900 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {item.pregunta}
              <span className="text-yellow-500">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && <p className="mt-2 text-gray-700">{item.respuesta}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcercaDeMi;
