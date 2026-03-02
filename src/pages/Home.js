import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Review from '../components/Review';
import ContactForm from '../components/ContactForm';
import Newsletter from '../components/Newsletter';
const Home = () => {
  return (
    <div>
      <Header />
      {}
      <Banner /> 
      <HomeContent />
      {}
      {}
      <div style={{ padding: '40px 20px', marginBottom: '100px', backgroundColor: '#fff5f8' }}>
        <ContactForm />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};
const HomeContent = () => (
  <div style={{textAlign: 'center', marginTop: '20px'}}>
    <h2>Welcome to your world of beauty!</h2>
    {}
    <MainContent />
    {}
    <Review /> 
  </div>
);
export default Home;