import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BusquedaHabitaciones = () => {
  const [fechaEntrada, setFechaEntrada] = useState(new Date());
  const [fechaSalida, setFechaSalida] = useState(new Date());
  const [habitaciones, setHabitaciones] = useState(1);
  const [adultos, setAdultos] = useState(2);
  const [ninos, setNinos] = useState(0);
  const [mensaje, setMensaje] = useState(""); 
  const [habitacionesDisponibles, setHabitacionesDisponibles] = useState(0);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [mensajeExito, setMensajeExito] = useState(false);

  // buscar habitaciones
  const buscarHabitaciones = () => {
    console.log("Búsqueda de habitaciones:", {
      fechaEntrada,
      fechaSalida,
      habitaciones,
      adultos,
      ninos,
    });

    const disponibilidad = Math.floor(Math.random() * 3); 
    setHabitacionesDisponibles(disponibilidad);

    // Mensaje dinámico basado en disponibilidad
    if (disponibilidad === 0) {
      setMensaje("❌ Lo sentimos, todas las habitaciones están ocupadas.");
    } else if (disponibilidad === 1) {
      setMensaje("✅ ¡Se encontró 1 habitación disponible!");
    } else {
      setMensaje(`✅ ¡Se encontraron ${disponibilidad} habitaciones disponibles!`);
    }
    setMostrarAlerta(true);
  };

  // Función para reservar habitación
  const reservarHabitacion = () => {
    setMensaje(""); //
    setMostrarAlerta(false); 

    setMensajeExito(true); 

    setTimeout(() => {
      setMensajeExito(false);
    }, 3000);
  };

  return (
    <>
      <div className="w-screen bg-orange-100 py-6 px-4 md:px-10 flex justify-center">
        <div className="w-full max-w-7xl bg-orange-200 p-6 md:p-8 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 items-center">
          
          {/* Fecha de entrada */}
          <div className="flex flex-col w-full min-w-[160px]">
            <label className="text-red-800 font-semibold">Fecha de entrada</label>
            <DatePicker
              selected={fechaEntrada}
              onChange={(date) => setFechaEntrada(date)}
              className="p-2 border rounded-md w-full text-gray-800"
            />
          </div>

          {/* Fecha de salida */}
          <div className="flex flex-col w-full min-w-[160px]">
            <label className="text-red-800 font-semibold">Fecha de salida</label>
            <DatePicker
              selected={fechaSalida}
              onChange={(date) => setFechaSalida(date)}
              className="p-2 border rounded-md w-full text-gray-800"
            />
          </div>

          {/* Selector de habitaciones */}
          <div className="flex flex-col w-full min-w-[140px]">
            <label className="text-red-800 font-semibold">Alojamiento</label>
            <select
              value={habitaciones}
              onChange={(e) => setHabitaciones(parseInt(e.target.value))}
              className="p-2 border rounded-md w-full text-gray-800"
            >
              {[...Array(5).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>{num + 1}</option>
              ))}
            </select>
          </div>

          {/* Selector de adultos */}
          <div className="flex flex-col w-full min-w-[140px]">
            <label className="text-red-800 font-semibold">Adultos</label>
            <select
              value={adultos}
              onChange={(e) => setAdultos(parseInt(e.target.value))}
              className="p-2 border rounded-md w-full text-gray-800"
            >
              {[...Array(5).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>{num + 1}</option>
              ))}
            </select>
          </div>

          {/* Selector de niños */}
          <div className="flex flex-col w-full min-w-[140px]">
            <label className="text-red-800 font-semibold">Niños</label>
            <select
              value={ninos}
              onChange={(e) => setNinos(parseInt(e.target.value))}
              className="p-2 border rounded-md w-full text-gray-800"
            >
              {[...Array(5).keys()].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          {/* Botón de búsqueda */}
          <div className="flex flex-col justify-center w-full md:col-span-3 lg:col-span-6">
            <button
              onClick={buscarHabitaciones}
              className="bg-blue-700 hover:bg-red-500 hover:text-white text-white font-bold py-2 px-6 rounded-md transition duration-300 hover:scale-105 w-full sm:w-auto text-center"
            >
              ENCONTRAR HABITACIONES 🏨
            </button>
          </div>
        </div>
      </div>

      {/* Mensaje de disponibilidad */}
      {mostrarAlerta && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 shadow-lg rounded-lg p-4 w-80 text-center z-50">
          <p className="text-gray-900 font-semibold">{mensaje}</p>

          {/* Si hay habitaciones disponibles */}
          {habitacionesDisponibles > 0 && (
            <button
              onClick={reservarHabitacion}
              className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all"
            >
              Reservar
            </button>
          )}

          {/* Botón para cerrar el mensaje */}
          <button 
            onClick={() => setMostrarAlerta(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-lg"
          >
            ✕
          </button>
        </div>
      )}

      {/* Mensaje de éxito*/}
      {mensajeExito && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-md shadow-lg text-center z-50">
          🎉 ¡Habitación reservada con éxito ✅
          
        </div>
      )}
    </>
  );
};

export default BusquedaHabitaciones;
