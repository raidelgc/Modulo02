import React from 'react';
import Footer from "../../components/Footer/Footer";
import Perguntas from '../../components/Perguntas/Perguntas';
import Buscas from '../../components/Buscas/Buscas';

const FAQPage = () => {
  return (
    <>
      <div>
        <Perguntas/>
        <Buscas/>
        <Footer/>
      </div>
    </>
  );
};

export default FAQPage;
