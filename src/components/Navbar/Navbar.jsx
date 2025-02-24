import React, { useState } from 'react';
import Logo from '../../assets/Logo22.jpg';

const navbarLinks = [
  { id: 1, title: "Inicio", link: "/" },
  { id: 2, title: "Habitaciones", link: "#disponibles" },
  { id: 3, title: "Nosotros", link: "#nosotros" },
  { id: 4, title: "Comunidad", link: "#testimonios" },
  { id: 5, title: "Ubicacion", link: "#ubicacion" },
  { id: 6, title: "Contacto", link: "#contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
<nav className="fixed top-0 left-0 w-full bg-cyan-950 shadow-lg z-50 overflow-hidden">

      <div className=' flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>
        <div>
          <img src={Logo} alt='Logo' className='w-[80px]' />
        </div>
        <button 
          onClick={toggleMenu} 
          className='md:hidden text-white' 
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            {isOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            )}
          </svg>
        </button>

        <div className='hidden md:block'>
          <ul className='flex sm:space-x-1 space-x-4'>
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <a className='text-white sm:text-lg text-sm hover:text-black hover:bg-orange-100 transition-all hover:scale-105 py-2 px-6 rounded-3xl duration-300' href={link.link}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Menú móvil  */}
      <div 
        className={`md:hidden fixed top-16 left-0 w-full bg-cyan-950 transition-transform duration-300 
        ${isOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"}`}
        aria-expanded={isOpen}
      >
        {/* Contenedor*/}
        <div className="max-h-[400px] overflow-y-auto flex flex-col items-center py-6 shadow-lg">
          
          {/* Links */}
          <ul className="flex flex-col items-center space-y-4 text-lg">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <a className="text-white hover:text-yellow-400 transition-all " href={link.link} onClick={() => setIsOpen(false)}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;