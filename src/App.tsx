import './App.css'
import { Routes, Route } from "react-router-dom"
import Footer from './Components/footer';
import { Nav } from './Components/Nav';
import { Home } from './Pages/Home'
import { ParticlesBackground } from './Components/ParticlesBackground';
import { About } from './Pages/About';
import { Portfolio } from './Pages/Portfolio';
import { Contact } from './Pages/Contact';






export const App = () => {

  return (
    <>
      <div className="flex flex-col min-h-screen">
      <ParticlesBackground />
        <Nav />
        <div className='main flex-grow'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/write-me" element={<Contact />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </div>
        <Footer />
        
      </div>

    </>

  )
}

