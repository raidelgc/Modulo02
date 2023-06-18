import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Card from './components/Produtos/Card';
import card from "./Images/card.png";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <Banner frase="Escolha o melhor para você" titulo="Nossos Produtos" />
      <Card
        name="Produto"
        price="R$ 1299.68"
        description="Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus."
        features={["Caracteristica", "Caracteristica", "Caracteristica"]}
      />
      <Card
        name="Produto"
        price="R$ 1119.38"
        description="Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus."
        features={["Caracteristica", "Caracteristica", "Caracteristica"]}
      />
      <Card
        name="Produto"
        price="R$ 1599.78"
        description="Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus."
        features={["Caracteristica", "Caracteristica", "Caracteristica"]}
      />
      <Footer/>
    </div>
  );
}

export default App;
