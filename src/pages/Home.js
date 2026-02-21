import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
      <Header />
      <HomeContent />
      <Footer />
    </div>
  );
};
const HomeContent = () => (
  <div style={{textAlign: 'center', marginTop: '20px'}}>
    <h2>Welcome to your world of beauty!</h2>
    <MainContent />
  </div>
);
export default Home;