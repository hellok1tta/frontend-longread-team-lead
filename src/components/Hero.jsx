import React from 'react'

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu')
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1>Идеальный кофе<br />для идеального дня</h1>
        <p>Уютная атмосфера, свежая выпечка и лучший кофе в городе. Начните свое утро с нами!</p>
        <button className="btn btn-primary" onClick={scrollToMenu}>Смотреть меню</button>
      </div>

      <style>{`
        .hero {
          height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
          display: flex;
          align-items: center;
          text-align: center;
        }
        
        .hero-content {
          color: white;
          position: relative;
          z-index: 2;
        }
        
        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          animation: fadeInUp 1s ease;
        }
        
        .hero-content p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          animation: fadeInUp 1s ease 0.2s both;
        }
        
        .hero-content .btn {
          animation: fadeInUp 1s ease 0.4s both;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero