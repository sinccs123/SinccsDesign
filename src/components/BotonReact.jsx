import React, { useState, useEffect } from 'react';

export default function BotonReact() {
  // Inicializamos el estado leyendo si la clase 'dark' ya existe para evitar parpadeos.
  const [isDarkMode, setIsDarkMode] = useState(
    () => typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  // Función para cambiar el estado del tema.
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // useEffect se ejecuta cada vez que 'isDarkMode' cambia, aplicando la clase al body.
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div className="p-2 max-w-sm mx-auto bg-white rounded-xl shadow-md border border-gray-200 dark:bg-slate-800 flex items-center justify-center gap-4">
      <div className="w-6 h-6">
        {/* Icono del Sol: visible por defecto, oculto en modo oscuro */}
        <img
          src="https://res.cloudinary.com/du83pwamg/image/upload/v1771857536/sol_gyyxwv.png"
          alt="Modo Claro"
          className="w-full h-full dark:hidden"
        />
        {/* Icono de la Luna: oculto por defecto, visible en modo oscuro */}
        <img
          src="https://res.cloudinary.com/du83pwamg/image/upload/v1771857536/wh_luna_vellvb.png"
          alt="Modo Oscuro"
          className="w-full h-full hidden dark:block"
        />
      </div>
      <button
        type="button"
        onClick={toggleTheme}
        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 ${
          isDarkMode ? 'bg-indigo-600' : 'bg-gray-200'
        }`}
        aria-pressed={isDarkMode}
      >
        <span className="sr-only">Cambiar tema</span>
        <span
          aria-hidden="true"
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-300 ease-in-out ${
            isDarkMode ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}