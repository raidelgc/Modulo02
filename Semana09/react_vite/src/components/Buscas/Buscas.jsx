import React, { useState } from 'react';
import './Buscas.css'

const Buscas = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // Aqui você pode implementar a lógica de busca
    console.log('Realizando busca por:', searchQuery);
  };

  return (
    <>
    <div className='inputBusca'>
      <input type="text" value={searchQuery} onChange={handleInputChange} placeholder="Digite sua busca" />
      <button onClick={handleSearch}>Buscar</button>
    </div>
    </>
  );
};

export default Buscas;
