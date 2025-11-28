import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-mexico-pink font-bold' : 'text-gray-300 hover:text-white';

  return (
    <div className="min-h-screen flex flex-col font-sans bg-element-earth">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <span className="text-2xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
                  Llevanos.com
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className={`${isActive('/')} px-3 py-2 rounded-md text-sm transition-colors duration-300`}>Inicio</Link>
                <Link to="/events" className={`${isActive('/events')} px-3 py-2 rounded-md text-sm transition-colors duration-300`}>Eventos</Link>
                <Link to="/partners" className={`${isActive('/partners')} px-3 py-2 rounded-md text-sm transition-colors duration-300`}>Soy Transportista</Link>
                <Link to="/blog" className={`${isActive('/blog')} px-3 py-2 rounded-md text-sm transition-colors duration-300`}>Blog & Noticias</Link>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <span className="sr-only">Abrir menú</span>
                {/* Hamburger icon */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-stone-900 border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Inicio</Link>
              <Link to="/events" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Eventos</Link>
              <Link to="/partners" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Soy Transportista</Link>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-serif">Llevanos.com</h3>
            <p className="text-sm">Conectando pasiones con destinos. La red de transporte para eventos más grande de México.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Elementos</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Fuego (Pasión)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Agua (Flujo)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-gray-200 rounded-full mr-2"></span>Aire (Libertad)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-stone-600 rounded-full mr-2"></span>Tierra (Destino)</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-white transition">Privacidad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <p className="text-sm">soporte@llevanos.com.mx</p>
            <p className="text-sm">CDMX, México</p>
          </div>
        </div>
        <div className="mt-8 text-center text-xs border-t border-white/5 pt-8">
          &copy; {new Date().getFullYear()} Llevanos.com. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Layout;