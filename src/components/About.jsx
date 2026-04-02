import React from 'react'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600" alt="О нас" />
        </div>
        <div className="about-content">
          <h2 className="section-title" style={{ textAlign: 'left' }}>О нас</h2>
          <h3>Ваше любимое место для кофе с 2015 года</h3>
          <p>Мы открыли нашу кофейню в 2015 году с простой миссией — подарить людям возможность наслаждаться настоящим кофе в уютной атмосфере. За эти годы мы стали не просто кофейней, а местом, где встречаются друзья, рождаются идеи и создаются воспоминания.</p>
          <p>Мы тщательно отбираем зерна от лучших производителей со всего мира, обжариваем их с особым вниманием к деталям и готовим напитки с душой. Наша команда — это профессионалы, которые любят свое дело и готовы поделиться этой любовью с вами.</p>
          <div className="features">
            <div className="feature">
              <span className="feature-icon">☕</span>
              <div>
                <h4>100% Арабика</h4>
                <p>Только лучшие сорта зерен</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">🏆</span>
              <div>
                <h4>Обжарка вручную</h4>
                <p>Контроль каждого этапа</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">❤️</span>
              <div>
                <h4>Сделано с любовью</h4>
                <p>Каждый напиток уникален</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about {
          background: #fef9f4;
        }
        
        .about-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .about-image {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .about-image img {
          width: 100%;
          height: auto;
          display: block;
        }
        
        .about-content h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: #4a2c2c;
        }
        
        .about-content p {
          margin-bottom: 1rem;
          color: #555;
          line-height: 1.8;
        }
        
        .features {
          margin-top: 2rem;
        }
        
        .feature {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .feature-icon {
          font-size: 2rem;
        }
        
        .feature h4 {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
          color: #4a2c2c;
        }
        
        .feature p {
          font-size: 0.9rem;
          margin: 0;
          color: #777;
        }
        
        @media (max-width: 768px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default About