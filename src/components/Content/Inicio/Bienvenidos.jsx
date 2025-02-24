import React, { useState } from "react";
import { motion } from "framer-motion";
import { slipeUP, slipeInFromSide } from "../../../Utility/animation";
import img1 from "../../../assets/imagehotel/hotelPrincipal1.jpg";
import img2 from "../../../assets/imagehotel/hotel2.jpg";
import img3 from "../../../assets/imagehotel/hotel3.jpg";
import img4 from "../../../assets/imagehotel/hotel4.jpg";
import img5 from "../../../assets/imagehotel/hotel5.jpg";
import img6 from "../../../assets/imagehotel/hotel6.jpg";
import img7 from "../../../assets/imagehotel/hotel7.jpg";
import img8 from "../../../assets/imagehotel/hotel8.jpg";
import img9 from "../../../assets/imagehotel/hotel9.jpg";
import img10 from "../../../assets/imagehotel/hotel10.jpg";
import img11 from "../../../assets/imagehotel/hotel11.jpg";
import img12 from "../../../assets/imagehotel/hotel12.jpg";
import img13 from "../../../assets/imagehotel/hotel13.jpg";
import img14 from "../../../assets/imagehotel/hotel14.jpg";

const imagenes = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];

const Bienvenido = () => {
  const [indice, setIndice] = useState(0);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [mensajeExito, setMensajeExito] = useState(false);

  // abrir el modal 
  const abrirModal = () => setModalAbierto(true);

  // para cerrar
  const cerrarModal = () => setModalAbierto(false);

  
  const confirmarSesion = (e) => {
    e.preventDefault(); // 

    setMensajeExito(true); // mensaje de éxito
    setModalAbierto(false); // Cierre del modal 

    
    setTimeout(() => {
      setMensajeExito(false);
    }, 3000);
  };

  return (
    <>
      {/* Sección Principal */}
      <motion.section 
        className="w-screen h-auto py-16 flex items-center bg-orange-50"
        variants={slipeUP(0.1)}
        initial="initial"
        animate="animate"
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center px-4">
          
          {/* Galería de Imágenes */}
          <motion.div
            className="relative w-full md:w-1/2 flex justify-center items-center"
            variants={slipeInFromSide("left", 0.5)}
          >
            <div className="hover:scale-105 relative w-full h-auto md:h-96 overflow-hidden rounded-lg shadow-lg">
              <motion.img
                key={indice}
                src={imagenes[indice]}
                alt={`Imagen ${indice + 1}`}
                className="w-full h-[300px] md:h-[400px]  object-cover rounded-lg"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Botones de navegación en la galería */}
            {imagenes.length > 1 && (
              <div className="absolute inset-0 flex justify-between items-center px-2">
                <button
                  className="bg-black bg-opacity-50 text-white p-2 rounded-full"
                  onClick={() => setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length)}
                >
                  ◀
                </button>
                <button
                  className="bg-black bg-opacity-50 text-white p-2 rounded-full"
                  onClick={() => setIndice((prev) => (prev + 1) % imagenes.length)}
                >
                  ▶
                </button>
              </div>
            )}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {imagenes.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === indice ? "bg-white scale-125" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Sección de Bienvenida */}
          <motion.div 
            className="flex flex-col justify-center w-full md:w-1/2 text-left p-6 sm:p-10 md:p-12 lg:p-16"
            variants={slipeInFromSide("right", 0.5)}
            initial="initial"
            animate="animate"
          >
            <motion.h1 className="sm:text-4xl md:text-5xl text-blue-900 mb-4 text-center md:text-left">
              Hotel Rock & Roll 
            </motion.h1>
            <p className=" text-yellow-400 text-xl mx-2">
              <i className="bi bi-star-fill mx-2"></i>
              <i className="bi bi-star-fill mx-2"></i>
              <i className="bi bi-star-fill mx-2"></i>
              <i className="bi bi-star-fill mx-2"></i>
              <i className="bi bi-star-fill mx-2"></i>
            </p>
            <motion.p className="text-lg text-blue-900 py-4 text-center md:text-left">
            Vive una experiencia única en nuestro hotel, donde la pasión por la música se encuentra con el confort y la excelencia gastronómica. Ya sea que busques emociones intensas y aventura, o prefieras relajarte en un ambiente acogedor con vistas espectaculares, en Hotel Rock & Roll encontrarás el equilibrio perfecto.
            </motion.p>

            {/* Botones */}
            <motion.div className="flex flex-col md:flex-row justify-center md:justify-start gap-6 mt-6">
              <button 
                onClick={abrirModal} 
                className="bg-blue-900 py-3 px-6 md:px-12 rounded-3xl text-white hover:text-white hover:bg-green-500 transition-all duration-300 text-center cursor-pointer hover:scale-105"
              >
                Iniciar Sesión <i className="bi bi-person-circle text-xl ml-2"></i>
              </button>
              <a href="#disponibles" className="text-black flex items-center justify-center hover:bg-green-500 cursor-pointer rounded-3xl py-3 px-6 border-2 border-red-600 hover:border-white hover:scale-105 hover:text-white">
                Habitaciones <i className="bi bi-key text-xl ml-2"></i>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Modal de Inicio */}
      {modalAbierto && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
          
            <button 
              className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full text-xl"
              onClick={cerrarModal}
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Iniciar Sesión</h2>

            <form className="space-y-4" onSubmit={confirmarSesion}>
              <div>
                <label className="block text-gray-700">Correo Electrónico</label>
                <input type="email" className="w-full p-2 border rounded-md" placeholder="email@example.com" required />
              </div>

              <div>
                <label className="block text-gray-700">Contraseña</label>
                <input type="password" className="w-full p-2 border rounded-md" placeholder="Contraseña" required />
              </div>

              <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-all">
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mensaje de Éxito */}
      {mensajeExito && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-md shadow-lg text-center z-50">
          ¡Inicio de sesión exitoso! 🎸🔥
        </div>
      )}
    </>
  );
};

export default Bienvenido;
