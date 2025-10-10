import { useEffect, useState } from 'react'
import { Link } from 'react-router'

export const Nav = () => {
  const [darkMode, setDarkMode] = useState(false)

  const updateTheme = (isDark: boolean) => {
    const root = document.documentElement
    root.classList.toggle("dark", isDark)
  }

  useEffect(() => {
    updateTheme(darkMode)
  }, [darkMode])

  return (
    <nav className="wrapper hola">
      <div className="header mt-1" >
        <Link to="/">
          <div className='logo-wrapper lg:text-3xl'> Gen Q. Iabichino</div>
        </Link>
        <ul className='flex items-center'>
          <li><Link to="/about"> <button>Who this</button> </Link></li>
          <li><Link to="/portfolio"> <button>Projects</button> </Link></li>
          <li><Link to="/write-me"> <button>Write me</button> </Link></li>
        </ul>
        <button
          className=" lg:text-3xl"
          onClick={() => setDarkMode(!darkMode)}
        >
           {darkMode ? '☀️' : '🌙'} 
        </button>

      </div>
    </nav>
  )
}
