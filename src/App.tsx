import './App.css'
import { Routes, Route } from "react-router-dom"
import Footer from './assets/Components/footer'
import {Nav} from './assets/Components/Nav';
import { Home } from './assets/Pages/Home'
import { ParticlesBackground } from './assets/Components/ParticlesBackground';
import { About } from './assets/Pages/About';
import { Portfolio } from './assets/Pages/Portfolio';
import { Contact } from './assets/Pages/Contact';






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

