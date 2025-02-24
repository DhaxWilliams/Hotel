import React, { useState, useEffect } from "react";
import h1 from "../../../assets/imagenes/Se.jpg";
import h2 from "../../../assets/imagenes/h2c.jpg";
import h3 from "../../../assets/imagenes/hi.jpg";
import h4 from "../../../assets/imagenes/hf.jpg";
import h5 from "../../../assets/imagenes/hp.jpg";
import h6 from "../../../assets/imagenes/fondo11.jpg";

const habitaciones = [
  { nombre: "Suite Ejecutiva", imagen: h1, descripcion: "Habitación de lujo con vista panorámica y jacuzzi.", precio: "$200 por noche", disponibilidad: "Disponible" },
  { nombre: "Habitación Doble", imagen: h2, descripcion: "Ideal para familias o parejas, con dos camas confortables.", precio: "$150 por noche", disponibilidad: "Disponible" },
  { nombre: "Habitación Individual", imagen: h3, descripcion: "Perfecta para viajeros solitarios, con todas las comodidades.", precio: "$100 por noche", disponibilidad: "Última disponible" },
  { nombre: "Habitación Familiar", imagen: h4, descripcion: "Espacio amplio para familias, con zona de juegos.", precio: "$250 por noche", disponibilidad: "Disponible" },
  { nombre: "Habitación Premium", imagen: h5, descripcion: "Experiencia premium con acceso exclusivo a spa.", precio: "$300 por noche", disponibilidad: "Disponible" },
];

const HotelCarousel = () => {
  const [indice, setIndice] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [mensajeExito, setMensajeExito] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const siguiente = () => {
    setIndice((prev) => (prev + 1) % habitaciones.length);
  };

  const anterior = () => {
    setIndice((prev) => (prev - 1 + habitaciones.length) % habitaciones.length);
  };

  useEffect(() => {
    const intervalo = setInterval(siguiente, 4000);
    return () => clearInterval(intervalo);
  }, []);

  //  abrir el modal
  const abrirModal = () => setModalAbierto(true);

  // cerrar el modal
  const cerrarModal = () => setModalAbierto(false);

  // enviar el formulario
  const confirmarReserva = (e) => {
    e.preventDefault();
    setMensajeExito(true);
    setModalAbierto(false);

    setTimeout(() => {
      setMensajeExito(false);
    }, 3000);
  };

  return (
    <div  className="relative w-screen h-auto py-10 scroll-mt-24">
      {/*fondo*/}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50" style={{ backgroundImage: `url(${h6})` }}></div>

      {/* Contenido*/}
      <div className="relative w-full max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Botón Anterior */}
          <button className="bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 z-10 transition-transform duration-200 hover:scale-105" onClick={anterior}>
            ◀
          </button>

          {/*  Móvil */}
          <div className="w-full flex justify-center">
            {windowWidth < 768 ? (
              <div className="bg-white shadow-lg rounded-lg p-6 w-[90%] max-w-md transition-all duration-500 ease-in-out">
                <img src={habitaciones[indice].imagen} alt={habitaciones[indice].nombre} className="rounded-t-lg w-full h-48 object-cover" />
                <h3 className="text-lg font-semibold mt-4">{habitaciones[indice].nombre}</h3>
                <p className="text-gray-700 mt-2">{habitaciones[indice].descripcion}</p>
                <p className="text-green-600 font-bold mt-2">{habitaciones[indice].precio}</p>
                <p className="text-blue-600 mt-2">🟢 {habitaciones[indice].disponibilidad}</p>
                <button onClick={abrirModal} className="bg-blue-600 text-white w-full py-2 mt-4 rounded-lg hover:bg-blue-800">Reservar ahora ➜</button>
              </div>
            ) : ( // //tablet
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-full relative z-10">
                {habitaciones.slice(indice, indice + 3).concat(habitaciones.slice(0, Math.max(0, 3 - (habitaciones.length - indice)))).map((habitacion, i) => (
                  <div key={i} className="bg-white shadow-lg rounded-lg p-6">
                    <img src={habitacion.imagen} alt={habitacion.nombre} className="rounded-t-lg w-full h-48 object-cover" />
                    <h3 className="text-lg font-semibold mt-4">{habitacion.nombre}</h3>
                    <p className="text-gray-700 mt-2">{habitacion.descripcion}</p>
                    <p className="text-green-600 font-bold mt-2">{habitacion.precio}</p>
                    <p className="text-blue-600 mt-2">🟢 {habitacion.disponibilidad}</p>
                    <button onClick={abrirModal} className="bg-blue-600 text-white w-full py-2 mt-4 rounded-lg hover:bg-blue-800">
                      <i className="bi bi-calendar-check"></i> Reservar ahora ➜
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Botón Siguiente */}
          <button className="bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 z-10 transition-transform duration-200 hover:scale-105" onClick={siguiente}>
            ▶
          </button>
        </div>
      </div>

      {/* Modal de Reserva */}
      {modalAbierto && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <button className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full text-xl" onClick={cerrarModal}>✕</button>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Reserva tu Habitación</h2>

            <form onSubmit={confirmarReserva} className="space-y-4">
              <input type="text" placeholder="Nombre" className="w-full p-2 border rounded-md" required />
              <input type="email" placeholder="Correo Electrónico" className="w-full p-2 border rounded-md" required />
              <input type="date" className="w-full p-2 border rounded-md" required />
              <input type="date" className="w-full p-2 border rounded-md" required />
              <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">Confirmar Reserva</button>
            </form>
          </div>
        </div>
      )}

      {/* Mensaje de Éxito */}
      {mensajeExito && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-md shadow-lg text-center z-50">
          ✅ ¡Reserva confirmada con éxito! 🎸🔥
        </div>
      )}
    </div>
  );
};

export default HotelCarousel;
