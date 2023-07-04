import React, { useState, createContext } from 'react';

export const BannerContext = createContext();

export const BannerProvider = ({ children }) => {
  const [frase, setFrase] = useState('');
  const [titulo, setTitulo] = useState('');

  const updateBanner = (novaFrase, novoTitulo) => {
    setFrase(novaFrase);
    setTitulo(novoTitulo);
  };

  return (
    <BannerContext.Provider value={{ frase, titulo, updateBanner }}>
      {children}
    </BannerContext.Provider>
  );
};

