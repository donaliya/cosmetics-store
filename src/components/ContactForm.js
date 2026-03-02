import React from 'react';
const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Message sent! We will contact you soon.");
  };
  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h3>Send us a message</h3>
      <textarea placeholder="Your message"></textarea>
      <br />
      <button type="submit">Send</button>
    </form>
  );
};
export default ContactForm;