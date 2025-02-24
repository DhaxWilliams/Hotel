
import React, { useState } from "react";


const habitaciones = [
  {
    nombre: "Habitación Triple (2 Adultos + 1 Niño)",
    imagenes: [
      "/imagen/habitacion1.jpg",
      "/imagen/habitacion11.jpg",
      "/imagen/habitacion111.jpg",
    ],
    internet: true,
    detalles: "Habitación con aire acondicionado, baño privado y servicio a la habitación.",
    precio: "Consultar Tarifas",
    
  },
  {
    nombre: "Habitacion triple ",
    imagenes: [
      "/imagen/habitacion2.jpg",
      "/imagen/habitacion22.jpg",
      "/imagen/habitacion222.jpg",
      "/imagen/habitacion2222.jpg",
    ],
    internet: true,
    detalles: "Espacio acogedor con opciones con tres camas.",
    precio: "Consultar Tarifas",
  },

  {
    nombre: "Habitación Estándar (1 Cama Doble o 2 Camas)",
    imagenes: [
      "/imagen/hrock1.jpg",
      "/imagen/habitacion33.jpg",
      "/imagen/habitacion333.jpg",
    ],
    internet: true,
    detalles: "Espacio acogedor con opciones de una o dos camas.",
    precio: "Consultar Tarifas",
  },
  {
    nombre: "Habitación Familiar Estándar",
    imagenes: [
      "/imagen/habitacion4.jpg",
      "/imagen/habitacion44.jpg",
    ],
    internet: true,
    detalles: "Ideal para familias, con zona de juegos.",
    precio: "Consultar Tarifas",
  },
  {
    nombre: "Habitación Económica",
    imagenes: [
      "/imagen/hrock2.jpg",
      "/imagen/habitacion55.jpg",
      "/imagen/habitacion555.jpg",
    ],
    internet: true,
    detalles: "Habitación económica con lo esencial para descansar.",
    precio: "Consultar Tarifas",
  },
  {
    nombre: " Habitacion con Terraza,(cama doble o 2 camas, terraza) ",
    imagenes: [
      "/imagen/habitacion7.jpg",
      "/imagen/habitacion77.jpg",
      "/imagen/habitacion777.jpg",
      "/imagen/habitacion7777.jpg",
    ],
    internet: true,
    detalles: "Amplia habitación con terraza privada, ideal para relajarse y disfrutar de la vista. Opción de 1 cama doble o 2 camas individuales, perfecta para parejas o amigos. Incluye WiFi gratuito y comodidades modernas para una estancia confortable.",
    precio: "Consultar Tarifas",
  },
 
];

const HabitacionesLista = () => {
  const [detallesAbiertos, setDetallesAbiertos] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [imagenActual, setImagenActual] = useState("");
  const [imagenesActuales, setImagenesActuales] = useState([]);
  const [indiceImagen, setIndiceImagen] = useState(0);

  const toggleDetalles = (index) => {
    setDetallesAbiertos(detallesAbiertos === index ? null : index);
  };

  const abrirModal = (imagenes, index) => {
    setImagenesActuales(imagenes);
    setIndiceImagen(index);
    setImagenActual(imagenes[index]);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setImagenActual("");
  };

  const cambiarImagen = (direccion) => {
    const nuevoIndice = (indiceImagen + direccion + imagenesActuales.length) % imagenesActuales.length;
    setIndiceImagen(nuevoIndice);
    setImagenActual(imagenesActuales[nuevoIndice]);
  };

  return (
    <section id="disponibles" className="w-screen bg-orange-50 py-16 px-6 flex flex-col items-center scroll-mt-24">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        🏨 Habitaciones Disponibles
      </h2>

      {/* Contenedor*/}
      <div className="w-full max-w-6xl space-y-8">
        {habitaciones.map((habitacion, index) => (
          <div
            key={index}
            className="bg-orange-100 shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row 
                      transition-transform transform hover:scale-[1.03] hover:shadow-xl duration-300"
          >
            {/* Icono */}
            <div className="relative w-full md:w-1/3 overflow-hidden group">
              <img
                src={habitacion.imagenes[0]}
                alt={habitacion.nombre}
                className="w-full h-60 md:h-72 object-cover cursor-pointer transition-transform duration-300 
                          group-hover:scale-105"
                onClick={() => abrirModal(habitacion.imagenes, 0)}
              />

              {/* Contador de Imágenes */}
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white 
                              text-xs md:text-sm px-3 py-1 rounded-full flex items-center space-x-2
                              transition-all duration-300 group-hover:scale-110">
                <i className="bi bi-images text-sm"></i>
                <span className="font-semibold">{habitacion.imagenes.length}</span>
              </div>
            </div>

            {/* Información */}
            <div className="flex flex-col justify-between p-6 w-full">
              <h3 className="text-2xl font-semibold text-gray-900">{habitacion.nombre}</h3>
              <p className="text-gray-600 flex items-center mt-2">
                <i className="bi bi-wifi text-green-500 mr-2"></i> Internet gratis
              </p>
              {/* Mostrar Detalles */}
              <button
                onClick={() => toggleDetalles(index)}
                className="text-blue-600 mt-3 flex items-center hover:text-blue-800 transition-all"
              >
                Servicios, detalles y políticas de la habitación
                <i className={`bi bi-chevron-${detallesAbiertos === index ? "up" : "down"} ml-2`}></i>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  detallesAbiertos === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-700 mt-2">{habitacion.detalles}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-green-600 flex items-center text-sm">
                  <i className="bi bi-check-circle-fill mr-1"></i> Tasa baja de hoy
                </span>
                <button 
                  className="relative overflow-hidden border-red-500 border-2 hover:text-white text-black px-6 py-2 rounded-lg shadow-md 
                            transition-all duration-500 hover:shadow-lg group"
                  aria-label="Consultar precio de la habitación"
                  role="button"
                >
                  <span className="relative z-10 font-semibold">{habitacion.precio}</span>

                  {/* llenado de izquierda a derecha */}
                  <span className="absolute top-0 left-0 w-0 h-full bg-green-500 opacity-50 transition-all 
                                  duration-500 group-hover:w-full"></span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Imágenes */}
      {modalAbierto && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative max-w-4xl w-full flex justify-center items-center">
            {/* Botón Anterior */}
            <button 
              className="absolute left-4 bg-gray-900 text-white p-3 rounded-full text-xl"
              onClick={() => cambiarImagen(-1)}
            >
              ◀
            </button>
            <img 
              src={imagenActual} 
              alt="Imagen ampliada"
              className="w-full h-auto max-h-screen object-contain rounded-lg"
            />
            {/* Botón Siguiente */}
            <button 
              className="absolute right-4 bg-gray-900 text-white p-3 rounded-full text-xl"
              onClick={() => cambiarImagen(1)}
            >
              ▶
            </button>
            {/* Botón Cerrar */}
            <button 
              className="absolute top-2 right-2 bg-gray-900 text-white p-2 rounded-full text-xl"
              onClick={cerrarModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HabitacionesLista;

