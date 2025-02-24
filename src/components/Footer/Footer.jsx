import React from 'react';

const navbarRedes = [
  { id: 1, title: "Instagram", link: "https://www.instagram.com", icon: "bi bi-instagram" },
  { id: 2, title: "TikTok", link: "https://www.tiktok.com", icon: "bi bi-tiktok" },
  { id: 3, title: "Facebook", link: "https://www.facebook.com", icon: "bi bi-facebook" },
  { id: 4, title: "Twitter", link: "https://www.twitter.com", icon: "bi bi-twitter" },
  { id: 5, title: "Telegram", link: "https://www.telegram.com", icon: "bi bi-telegram" },
  { id: 6, title: "Whatsapp", link: "https://www.whatsapp.com", icon: "bi bi-whatsapp" }
];

const Footer = () => {
  return (
    <footer id="contacto" className="bg-cyan-950 text-white py-8 mt-auto scroll-mt-24">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
          {/* Sección Sobre Nosotros */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Sobre Nosotros</h3>
            <p className="text-sm">
              En nuestro hotel, ofrecemos una experiencia de lujo con cómodas habitaciones 
              y un restaurante de primer nivel. Disfruta de nuestro servicio excepcional y 
              vive momentos inolvidables.
            </p>
          </div>

          {/* Sección Contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contáctanos</h3>
            <ul className="space-y-2">
              <li><i className="bi bi-geo-alt-fill text-sky-200"></i> Tarapaya, Calle Lacrimosa #51, Potosí, Bolivia</li>
              <li><i className="bi bi-telephone-fill text-sky-200"></i> +591 75733008</li>
              <li><i className="bi bi-envelope-fill text-sky-200"></i> contacto@hotelRockRoll.com</li>
              <li><i className="bi bi-clock-fill text-sky-200"></i> Atención: 24/7</li>
            </ul>
          </div>

          {/* Sección Redes Sociales */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <ul className="flex space-x-4">
              {navbarRedes.map((link) => (
                <li key={link.id}>
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block transition-transform duration-300 hover:scale-125"
                    href={link.link}
                  >
                    <i className={`${link.icon} text-xl text-white hover:text-yellow-500`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="mt-12 text-center text-sm">
          <p>&copy; 2025 Hotel Rock & Roll. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
