import React from 'react'

const Menu = () => {
  const menuItems = [
    {
      category: "Кофе",
      items: [
        { name: "Эспрессо", price: "180 ₽", description: "Классический эспрессо с насыщенным вкусом", image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400" },
        { name: "Капучино", price: "250 ₽", description: "Нежный кофе с воздушной молочной пенкой", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400" },
        { name: "Латте", price: "270 ₽", description: "Идеальный баланс кофе и молока", image: "https://images.unsplash.com/photo-1570968915860-54d5c92fa4f4?w=400" },
        { name: "Раф", price: "290 ₽", description: "Ванильный раф с нежной текстурой", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400" },
      ]
    },
    {
      category: "Десерты",
      items: [
        { name: "Чизкейк", price: "320 ₽", description: "Нежный нью-йоркский чизкейк", image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400" },
        { name: "Круассан", price: "180 ₽", description: "Хрустящий французский круассан", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400" },
        { name: "Тирамису", price: "350 ₽", description: "Итальянский десерт с маскарпоне", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400" },
        { name: "Маффин", price: "150 ₽", description: "С шоколадной начинкой", image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400" },
      ]
    }
  ]

  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2 className="section-title">Наше меню</h2>
        
        {menuItems.map((category, idx) => (
          <div key={idx} className="menu-category">
            <h3>{category.category}</h3>
            <div className="menu-grid">
              {category.items.map((item, i) => (
                <div key={i} className="menu-card">
                  <div className="menu-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="menu-info">
                    <div className="menu-header">
                      <h4>{item.name}</h4>
                      <span className="price">{item.price}</span>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .menu {
          background: white;
        }
        
        .menu-category {
          margin-bottom: 4rem;
        }
        
        .menu-category h3 {
          font-size: 1.8rem;
          text-align: center;
          margin-bottom: 2rem;
          color: #4a2c2c;
        }
        
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .menu-card {
          background: #fef9f4;
          border-radius: 15px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .menu-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .menu-image {
          height: 200px;
          overflow: hidden;
        }
        
        .menu-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .menu-card:hover .menu-image img {
          transform: scale(1.05);
        }
        
        .menu-info {
          padding: 1.5rem;
        }
        
        .menu-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 0.5rem;
        }
        
        .menu-header h4 {
          font-size: 1.2rem;
          color: #4a2c2c;
        }
        
        .price {
          font-weight: 700;
          color: #c7a17a;
          font-size: 1.1rem;
        }
        
        .menu-info p {
          color: #666;
          font-size: 0.9rem;
        }
      `}</style>
    </section>
  )
}

export default Menu