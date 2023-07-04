import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import FAQPage from './pages/FAQPage/FAQPage';
import ErroPage from './pages/ErroPage/ErroPage';
import { BannerContext } from './context/BannerContext';

function App() {
  const { updateBanner } = useContext(BannerContext);

  useEffect(() => {
    updateBanner('Escolha o melhor para você', 'Nossos Produtos');
  }, [updateBanner]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="*" element={<ErroPage />} />
      </Routes>
    </Router>
  );
}

export default App;
