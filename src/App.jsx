import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Expertise from './components/Expertise'
import Services from './components/Services'
import CV from './components/CV'
import About from './components/About'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-dark text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <Expertise />
      <Services />
      <CV />
      <About />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}
