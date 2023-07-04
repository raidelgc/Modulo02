import React from 'react';
import './Produtos.css';

const Produtos = ({ name, price, description, features, image, onOpenModal }) => {
  const handleButtonClick = () => {
    onOpenModal({
      name,
      price,
      description,
      features,
      image,
    });
  };

  return (
    <div className="card-container">
      <div className="produto">
        <img src={image} alt="" />
        <p className="produto-price">{price}</p>
      </div>
      <div className="card">
        <h3 className="card-title">{name}</h3>
        <p className="card-description">{description}</p>
        <div className="card-info">
          <div className="card-features">
            {features.map((feature, index) => (
              <span className="card-feature" key={index}>
                {feature}
              </span>
            ))}
          </div>
          <button className="card-button" onClick={handleButtonClick}>
            Mais detalhes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Produtos;

console.log(Produtos)