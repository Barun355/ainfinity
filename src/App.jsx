import Hero from '@/components/hero'
import { Navbar } from './components/navbar'
import Events from './components/events'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import Courses from './components/courses'
import EnrollmentForm from './components/enrollment-form'
import Training from './components/training'

export default function App() {
  return (
    <main className="min-h-screen flex flex-col justify-center">
      <Navbar />
      <Hero />
      <Courses />
      <Training />
      <Events />
      <About />
      <EnrollmentForm />
      <Contact />
      <Footer />
    </main>
  )
}

