export default function Products() {
  const products = [
    {
      name: "Torta de Chocolate",
      description: "Chocolate belga con ganache cremoso",
      price: "$45",
      image: "/decadent-chocolate-cake.png",
    },
    {
      name: "Cheesecake Clásico",
      description: "Cremoso y delicioso con frutos rojos",
      price: "$38",
      image: "/classic-cheesecake.png",
    },
    {
      name: "Macarons Variados",
      description: "Colores y sabores para todos los gustos",
      price: "$28",
      image: "/colorful-macarons.png",
    },
    {
      name: "Cupcakes Personalizados",
      description: "Diseños únicos para tus ocasiones especiales",
      price: "$32",
      image: "/colorful-cupcakes.png",
    },
    {
      name: "Tartas de Frutas",
      description: "Frutas frescas con crema pastelera",
      price: "$42",
      image: "/colorful-fruit-tart.png",
    },
    {
      name: "Brownies Artesanales",
      description: "Intenso sabor a chocolate con nueces",
      price: "$18",
      image: "/brownies.jpg",
    },
  ]

  return (
    <section id="products" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Nuestros Productos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra variedad de deliciosos postres y pasteles
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <button className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                    Ordenar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
