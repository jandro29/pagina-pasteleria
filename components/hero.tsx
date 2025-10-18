export default function Hero() {
  return (
    <section id="hero" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              <span className="text-primary">Dulces</span> Momentos, <span className="text-accent">Sabores</span>{" "}
              Inolvidables
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bienvenido a nuestra pastelería artesanal. Cada creación es hecha con amor, ingredientes premium y la
              mejor tradición repostera.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Conocer Más
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                Ubicación
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
            <img src="/delicious-pastries-and-cakes-in-a-bakery.jpg" alt="Pastelería artesanal" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
