import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Coffee<span>House</span></h3>
            <p>Лучший кофе и уютная атмосфера для ваших идеальных дней.</p>
          </div>
          <div className="footer-section">
            <h4>Часы работы</h4>
            <p>Пн-Пт: 8:00 - 22:00</p>
            <p>Сб-Вс: 9:00 - 23:00</p>
          </div>
          <div className="footer-section">
            <h4>Контакты</h4>
            <p>+7 (495) 123-45-67</p>
            <p>hello@coffeehouse.ru</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {year} CoffeeHouse. Все права защищены.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: #2d2d2d;
          color: #fef9f4;
          padding: 3rem 0 1rem;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-section h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .footer-section h3 span {
          color: #c7a17a;
        }
        
        .footer-section h4 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: #c7a17a;
        }
        
        .footer-section p {
          line-height: 1.6;
          opacity: 0.8;
        }
        
        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        
        .footer-bottom p {
          font-size: 0.9rem;
          opacity: 0.7;
        }
      `}</style>
    </footer>
  )
}

export default Footer