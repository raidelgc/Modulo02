import './Produtos.css';
import { Button, Modal } from 'antd';
import React, { useState } from 'react';

const Produtos = ({ name, price, description, features, image }) => {
  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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
          <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
        </div>
      </div>
    </div>
  );
};

export default Produtos;

