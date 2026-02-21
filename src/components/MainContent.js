import React from 'react';
const MainContent = () => {
  const products = [
    { id: 1, name: "Mascara", price: "2300₸" },
    { id: 2, name: "Lipstick", price: "1500₸" },
    { id: 3, name: "Face Powder", price: "3500₸" }
  ];
  return (
    <main className="main-content">
      <h2>Our New Arrivals</h2>
      <div className="product-list">
        {products.map(item => (
          <div key={item.id} className="product-card">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </main>
  );
};
export default MainContent;