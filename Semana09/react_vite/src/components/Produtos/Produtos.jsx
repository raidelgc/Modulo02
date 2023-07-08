import React, { useContext } from 'react';
import './Produtos.css';
import { ModalContext } from '../../context/ModalContext/ModalContext';
import ModalComponent from '../ModalComponent/ModalComponent';

const Produtos = ({ name, price, description, features, image }) => {
  const { show, setShow, setData } = useContext(ModalContext);

  const handleShowModal = () => {
    setData({
      title: name,
      description: description,
    });
    setShow(true);
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
          {show && <ModalComponent />}
          <button className="card-button" onClick={handleShowModal}>
            Mais detalhes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Produtos;

