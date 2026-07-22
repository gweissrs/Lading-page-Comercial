import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trajetoria from './components/Trajetoria'
import ComoFunciona from './components/ComoFunciona'
import Metodo from './components/Metodo'
import Areas from './components/Areas'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trajetoria />
        <ComoFunciona />
        <Metodo />
        <Areas />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
