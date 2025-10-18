import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Products from "@/components/products"
import Location from "@/components/location"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}
