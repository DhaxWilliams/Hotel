import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center p-6">
      <h1 className="text-4xl font-bold text-red-600">404 - Página No Encontrada</h1>
      <p className="mt-4">Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFound;
