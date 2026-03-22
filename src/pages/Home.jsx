import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Education from '../components/Education.jsx'
// import Experience from '../components/Experience.jsx'
import Achievements from '../components/Achievements.jsx'
import Certificates from '../components/Certificates.jsx'
import Resume from '../components/Resume.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        {/* <Experience /> */}
        <Achievements />
        <Certificates />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

