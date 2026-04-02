import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          Coffee<span>House</span>
        </div>
        <ul className="nav-links">
          <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}>Главная</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('menu') }}>Меню</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>О нас</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Контакты</a></li>
        </ul>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
          padding: 20px 0;
        }
        
        .navbar.scrolled {
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          padding: 15px 0;
        }
        
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          font-family: 'Playfair Display', serif;
          cursor: pointer;
          color: #4a2c2c;
        }
        
        .logo span {
          color: #c7a17a;
        }
        
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }
        
        .nav-links a {
          text-decoration: none;
          color: #4a2c2c;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .nav-links a:hover {
          color: #c7a17a;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar