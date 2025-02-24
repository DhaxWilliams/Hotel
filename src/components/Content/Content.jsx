import React from 'react';
import Bienvenido from './Inicio/Bienvenidos';
import HabitacionesDisponibles from './Habitaciones/HabitacionesDisponibles';
import HabitacionesPremiun from './Habitaciones/HabitacionesPremiun';
import ListadeHabitaciones from './Habitaciones/ListadeHabitaciones'
import AcercaDeMi from './Nosotros/AcercadeMi';
import Testimonios from './Comentarios/Testimonios';
import Ubicacion from './Ubicacion/Ubicacion';

//import Reservas from './Reservas';

const Contenido = () => {
  return (
    <main className="flex-grow min-h-screen font-serif bg-orange-50 pt-20 pb-10 px-5 sm:px-8 md:px-16 flex flex-col items-center">
      {/* Sección de Bienvenida */}
      <Bienvenido/>
      <HabitacionesDisponibles/>
      <HabitacionesPremiun/>
      <ListadeHabitaciones/>   
      <AcercaDeMi/>
      <Testimonios/>
      <Ubicacion/>
    </main>
  );
};

export default Contenido;
