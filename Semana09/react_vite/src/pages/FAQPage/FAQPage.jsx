import React from 'react';
import Footer from "../../components/Footer/Footer";
import Perguntas from '../../components/Colapse/Colapse';
import Buscas from '../../components/Buscas/Buscas';

const FAQPage = () => {
  return (
    <>
      <div>
        <Buscas />
        <Perguntas />
        <Footer />
      </div>
    </>
  );
};

export default FAQPage;
