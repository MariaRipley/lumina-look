import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Enlaces rápidos</h3>
            <nav className="mt-2 space-y-2">
              <Link to="/" className="block hover:text-orange-500">Inicio</Link>
              <Link to="/services" className="block hover:text-orange-500">Servicios</Link>
              <Link to="/about" className="block hover:text-orange-500">Acerca de</Link>
              <Link to="/contact" className="block hover:text-orange-500">Contacto</Link>
            </nav>
          </div>
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Redes sociales</h3>
            <nav className="mt-2 space-y-2">
              <a href="https://instagram.com" className="block hover:text-orange-500">Instagram</a>
              <a href="https://pinterest.com" className="block hover:text-orange-500">Pinterest</a>
              <a href="https://youtube.com" className="block hover:text-orange-500">YouTube</a>
            </nav>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <p className="mt-2">Correo electrónico: info@luminalook.com</p>
            <p>Teléfono: +1234567890</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-sm">&copy; 2024 Lumina Look. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
