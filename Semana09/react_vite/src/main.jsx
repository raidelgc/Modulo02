import React from 'react';
import ReactDOM from 'react-dom/client';
import { BannerProvider } from './context/BannerContext.jsx';
import Banner from './components/Banner/Banner.jsx';
import App from './App.jsx';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(

  <BannerProvider>
    <Banner frase="Escolha o melhor para você" titulo="Nossos Produtos" />

    <App />

  </BannerProvider>
);
