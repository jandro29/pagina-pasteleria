export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Sobre Nosotros</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más de 20 años de tradición y pasión por la repostería
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Ingredientes Premium",
              description:
                "Utilizamos solo los mejores ingredientes importados y locales para garantizar la calidad en cada producto.",
              icon: "🥄",
            },
            {
              title: "Hecho a Mano",
              description:
                "Cada pastel, galleta y postre es elaborado artesanalmente por nuestro equipo de maestros pasteleros.",
              icon: "👨‍🍳",
            },
            {
              title: "Tradición y Innovación",
              description:
                "Combinamos recetas tradicionales con técnicas modernas para crear sabores únicos y memorables.",
              icon: "✨",
            },
          ].map((item, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
