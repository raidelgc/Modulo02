import React, { useState } from 'react';
import Produtos from '../../components/Produtos/Produtos';
import Footer from '../../components/Footer/Footer';
import bikiImage1 from '../../Images/biki1.jpeg';
import bikiImage2 from '../../Images/biki2.jpeg';
import bikiImage3 from '../../Images/biki3.jpeg';
import ModalDetalhesProduto from '../../components/ModalDetalhesProduto/ModalDetalhesProduto';

const HomePage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    console.log('handleOpenModal');
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    console.log('onClose');
  };

  return (
    <div className="container-fluid">
      <Produtos
        name="Produto"
        price="R$ 1299.68"
        description="Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus."
        features={["Caracteristica 1", "Caracteristica 2", "Caracteristica 3"]}
        image={bikiImage1}
        onOpenModal={handleOpenModal}
      />
      <Produtos
        name="Produto"
        price="R$ 1119.38"
        description="Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus."
        features={["Caracteristica 1", "Caracteristica 2", "Caracteristica 3"]}
        image={bikiImage2}
        onOpenModal={handleOpenModal}
      />
      <Produtos
        name="Produto"
        price="R$ 1599.78"
        description="Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus."
        features={["Caracteristica 1", "Caracteristica 2", "Caracteristica 3"]}
        image={bikiImage3}
        onOpenModal={handleOpenModal}
      />
      {selectedProduct && (
        <ModalDetalhesProduto
          name={selectedProduct.name}
          price={selectedProduct.price}
          description={selectedProduct.description}
          features={selectedProduct.features}
          image={selectedProduct.image}
          onClose={handleCloseModal}
        />
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
