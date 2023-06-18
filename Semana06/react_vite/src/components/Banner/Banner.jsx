import React from 'react';
import PropTypes from 'prop-types';
import './Banner.css';

const Banner = ({ frase, titulo }) => {
  return (
    <div className="banner">
      <div className="frase">{frase}</div>
      <h1>{titulo}</h1>
    </div>
  );
};

Banner.propTypes = {
  frase: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
};

export default Banner;
