import React from 'react';
const Banner = () => {
  const showPromo = () => {
    alert("Your promo code is: AZIBEAUTY2026");
  };
  return (
    <div style={{ backgroundColor: '#ffe4e1', padding: '20px', textAlign: 'center' }}>
      <h2>Get your discount!</h2>
      <button onClick={showPromo}>Show Promo Code</button>
    </div>
  );
};
export default Banner;