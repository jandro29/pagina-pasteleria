export default function Location() {
  return (
    <section id="location" className="py-20 sm:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Visítanos</h2>
          <p className="text-lg text-muted-foreground">
            Encuentra nuestro local y disfruta de nuestros productos frescos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1ses!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-foreground">Dirección</p>
                    <p className="text-muted-foreground">Calle Principal 123, Ciudad, País</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold text-foreground">Teléfono</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <p className="font-semibold text-foreground">Horario</p>
                    <p className="text-muted-foreground">Lunes a Viernes: 8:00 AM - 8:00 PM</p>
                    <p className="text-muted-foreground">Sábado y Domingo: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg">
              Obtener Direcciones
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
