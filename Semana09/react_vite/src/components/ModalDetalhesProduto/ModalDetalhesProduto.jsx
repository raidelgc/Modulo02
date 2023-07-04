import React from 'react';

const ModalDetalhesProduto = ({ name, price, description, features, image, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>Valor: R$ {price}</p>
        <p>{description}</p>
        <h3>Características:</h3>
        <ul>
          {features.map((caracteristica, index) => (
            <li key={index}>{caracteristica}</li>
          ))}
        </ul>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default ModalDetalhesProduto;

console.log(ModalDetalhesProduto);