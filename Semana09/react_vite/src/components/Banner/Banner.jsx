import React, { useContext } from 'react';
import { BannerContext } from '../../context/BannerContext';
import './Banner.css'

const Banner = () => {
  const { frase, titulo } = useContext(BannerContext);

  return (
    <div className="banner">
      <div className="frase">{frase}</div>
      <h1>{titulo}</h1>
    </div>
  );
};

export default Banner;


