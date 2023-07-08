import React, { useContext } from 'react';
import Produtos from '../../components/Produtos/Produtos';
import Footer from '../../components/Footer/Footer';
import bikiImage1 from '../../Images/biki1.jpeg';
import bikiImage2 from '../../Images/biki2.jpeg';
import bikiImage3 from '../../Images/biki3.jpeg';
import { ModalContext } from '../../context/ModalContext/ModalContext';
import ModalComponent from '../../components/ModalComponent/ModalComponent';

const HomePage = () => {
  const { show } = useContext(ModalContext);

  return (
    <>
      <div className="container-fluid">
        <Produtos
          name="Produto"
          price="R$ 1299.68"
          description="Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus."
          features={["Caracteristica 1", "Caracteristica 2", "Caracteristica 3"]}
          image={bikiImage1}
        />
        <Produtos
          name="Produto"
          price="R$ 1119.38"
          description="Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus."
          features={["Caracteristica 1", "Caracteristica 2", "Caracteristica 3"]}
          image={bikiImage2}
        />
        <Produtos
          name="Produto"
          price="R$ 1599.78"
          description="Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus."
          features={["Caracteristica 1", "Caracteristica 2", "Caracteristica 3"]}
          image={bikiImage3}
        />
        {show && <ModalComponent />}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
