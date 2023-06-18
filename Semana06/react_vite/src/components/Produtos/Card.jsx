import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ name, price, description, features }) => {
  return (
    <div className="card-container">
      <div className="produto">
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
          <button className="card-button">Mais sobre</button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Card;
