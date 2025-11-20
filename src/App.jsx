import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Community from './components/Community'
import Articles from './components/Articles'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-slate-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Community />
        <Articles />
        <FAQ />
        <Contact />
        <Feedback />
      </main>
      <Footer />
    </div>
  )
}

export default App
