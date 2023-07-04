import React, { useState } from 'react';
import './Perguntas.css';

const Perguntas = ({ titulo, descricao }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="perguntas">
      <div className="perguntas-header" onClick={toggleCollapse}>
        <h3>{titulo}</h3>
        <span className={`perguntas-toggle ${isOpen ? 'open' : ''}`}>
          {isOpen ? '-' : '+'}
        </span>
      </div>
      {isOpen && <div className="perguntas-descricao">{descricao}</div>}
    </div>
  );
};

export default Perguntas;

