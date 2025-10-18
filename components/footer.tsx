export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">🧁</span>
              </div>
              <h3 className="text-lg font-bold">Dulce Pastelería</h3>
            </div>
            <p className="text-background/80">Creando momentos dulces desde hace más de 20 años.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#hero" className="hover:text-background transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-background transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-background transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-background transition-colors">
                  Ubicación
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-background/80">
              <li>📞 +1 (555) 123-4567</li>
              <li>📧 info@dulcepasteleria.com</li>
              <li>📍 Calle Principal 123</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="text-background/80 hover:text-background transition-colors text-xl">
                📘
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors text-xl">
                📷
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors text-xl">
                🐦
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/80">
          <p>&copy; 2025 Dulce Pastelería. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
