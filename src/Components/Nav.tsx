import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'

export const Nav = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  const updateTheme = (isDark: boolean) => {
    const root = document.documentElement
    root.classList.toggle("dark", isDark)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    updateTheme(darkMode)
  }, [darkMode])

  return (
    <header className="p-5" >
      <nav className="flex justify-between items-center">

        <NavLink to="/" className="lg:text-3xl font-bold">
          <span className="sr-only">Gen Q. Iabichino Portfolio Home</span>
          Gen Q. Iabichino
        </NavLink>
        {/* main menu */}
        <ul
          id="main-menu"
          className={`nav-list md:flex gap-6 transition-all duration-300 ease-in-out
          ${isOpen
              ? "flex flex-col absolute top-16 left-0 w-full bg-[var(--color-bg)] text-center py-4"
              : "hidden md:flex"
            }`}
        >
          <li>
            <NavLink
              to="/about"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive ? "text-[#0a983e]" : "text-white"}>
              Who this?
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/portfolio"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive ? "text-[#0a983e]" : "text-white"}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/write-me"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive ? "text-[#0a983e]" : "text-white"}>
              Write me
            </NavLink>
          </li>
        </ul>
        <section className='flex items-center'>
            
                      {/* Burger button */}
                      <button
                        id="menu-toggle"
                        className="btn md:hidden text-2xl"
                        aria-label="Toggle menu"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        {isOpen ? "x" : "+"}
                      </button>

          <button
            className=" btn text-2xl"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? 'o' : '-'}
          </button>

        </section>

      </nav>
    </header>
  )
}
