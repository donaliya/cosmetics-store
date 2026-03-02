import React from 'react';
const Newsletter = () => {
  const handleInputChange = (event) => {
    console.log("Typing: ", event.target.value); 
  };
  return (
    <div style={{ padding: '20px', borderTop: '1px solid #ccc' }}>
      <h3>Subscribe to our Newsletter</h3>
      <input 
        type="email" 
        placeholder="Enter your email" 
        onChange={handleInputChange} 
      />
    </div>
  );
};
export default Newsletter;