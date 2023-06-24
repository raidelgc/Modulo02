import React, { useState } from 'react';

const Header = () => {
  const [userName, setUserName] = useState('');

  const handleClick = () => {
    const name = prompt('Digite seu nome:');
    if (name) {
      setUserName(name);
    }
  };

  return (
    <header>
     
      <p>Olá, {userName || 'visitante'}!</p>
      <button onClick={handleClick}>Informar Nome</button>
    </header>
  );
};

export default Header;
