import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h4 className="footerTitle">Minha Empresa</h4>
          <p className="footerDescription">
            Descrição da minha empresa aqui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
        <div className="footer-column">
          <h5 className="footerTitle">Contato</h5>
          <ul className="footerList">
            <li>+55 31 9999-9999</li>
            <li>contato@gmail.com</li>
            <li>Rua Minha Rua, 00 - Seu Bairro</li>
            <li>Belo Horizonte-MG</li>
          </ul>
        </div>
        <div className="footer-column">
          <h6 className="footerTitle">Informações</h6>
          <ul className="footerList">
            <li>Produtos</li>
            <li>Contato</li>
            <li>Termos e Condições</li>
          </ul>
        </div>
      </div>
      <span className="footerSpan">
        Minha Empresa © Alguns direitos reservados.
      </span>
    </footer>
  );
};

export default Footer;
