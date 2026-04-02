import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Свяжитесь с нами</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Приходите в гости</h3>
            <div className="info-item">
              <span>📍</span>
              <p>г. Москва, ул. Тверская, 15</p>
            </div>
            <div className="info-item">
              <span>📞</span>
              <p>+7 (495) 123-45-67</p>
            </div>
            <div className="info-item">
              <span>✉️</span>
              <p>hello@coffeehouse.ru</p>
            </div>
            <div className="info-item">
              <span>🕐</span>
              <p>Ежедневно: 8:00 - 22:00</p>
            </div>
            <div className="social-links">
              <a href="#">Instagram</a>
              <a href="#">Telegram</a>
              <a href="#">VK</a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Ваше имя" 
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea 
              name="message" 
              rows="5" 
              placeholder="Ваше сообщение"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">Отправить</button>
          </form>
        </div>
      </div>

      <style>{`
        .contact {
          background: white;
        }
        
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }
        
        .contact-info h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #4a2c2c;
        }
        
        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .info-item span {
          font-size: 1.2rem;
        }
        
        .info-item p {
          color: #555;
        }
        
        .social-links {
          margin-top: 2rem;
          display: flex;
          gap: 1rem;
        }
        
        .social-links a {
          color: #c7a17a;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .social-links a:hover {
          color: #b58b5f;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .contact-form input,
        .contact-form textarea {
          padding: 12px 15px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        
        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: #c7a17a;
        }
        
        .contact-form button {
          align-self: flex-start;
        }
        
        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact