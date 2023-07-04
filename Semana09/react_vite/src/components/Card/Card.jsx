import React from "react";
import image from "../../Images/img.png";
import './Card.css'

const Card = () => {
  return (
    <div className="footer-column">
      <br />
      <img src={image} alt="" />
      <h5 className="footerTitle"></h5>
      <ul className="footerList">
        <li>Rua Minha Rua, 00 - Seu Bairro</li>
        <li>Belo Horizonte-MG</li>
        <li>+55 31 9999-9999</li>
        <li>contato@gmail.com</li>
      </ul>
      <p>Aberta de 08h00 às 18h00 de segunda a sexta</p>
    </div>
  );
};

export default Card;