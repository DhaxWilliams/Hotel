import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
const App = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 100); // 
  }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
