import React from "react";

const Ubicacion = () => {
  const direccionGoogleMaps = "https://www.google.com/maps/place/Tarapaya/@-19.4799494,-65.8030168,3320m";

  return (
    <section 
      id="ubicacion"
      className="w-screen bg-orange-50 py-16 px-6 flex flex-col items-center scroll-mt-24"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        📍 Ubicación del Hotel
      </h2>

      {/* Contenedor de Información */}
      <div className="w-full flex flex-col md:flex-row items-center gap-10 px-6">
        
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Nuestra Ubicación</h3>
          <p className="flex items-center text-gray-700 mb-2">
            <i className="bi bi-geo-alt-fill text-red-500 mr-2"></i> Tarapaya, 51, Potosí, Bolivia
          </p>
          <p className="flex items-center text-gray-700 mb-2">
            <i className="bi bi-telephone-fill text-blue-500 mr-2"></i> +591 757333008
          </p>
          <p className="flex items-center text-gray-700 mb-4">
            <i className="bi bi-envelope-fill text-green-500 mr-2"></i> contacto@hotelRockRoll.com
          </p>

          {/* Abrir en Google Maps */}
          <a
            href={direccionGoogleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-800 transition-all duration-300 hover:scale-105"
          >
            <i className="bi bi-map"></i> Ver en Google Maps
          </a>
        </div>

        {/* Mapa de Google */}
        <div className="w-full md:w-2/3">
          <iframe
            title="Mapa del Hotel"
            className="w-full h-80 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.4958914161146!2d-73.9851300850938!3d40.75889674279806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855f61a5f09%3A0x4b7b4a3c0e0a76f3!2sHotel%20Sanchez!5e0!3m2!1ses-419!2ses!4v1628888888888!5m2!1ses-419!2ses"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;
