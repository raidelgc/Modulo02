import React from 'react';
import './Header.css';

const Header = () => {
  const menu = [
    {
      label: 'Produtos',
      path: '#',
    },
    {
      label: 'Servicios',
      path: '#',
    }
  ];

  const renderMenuItem = (menuItem) => {
    return (
      <li>
        <a href={menuItem.path}>{menuItem.label}</a>
      </li>
    );
  };

  return (
    <header>
      <nav className='menu-principal-wrapper'>
        <div className='logo-wrapper'>
          <h1>Minha Empresa</h1>
        </div>
        <ul className='menu-wrapper'>{menu.map(renderMenuItem)}</ul>
      </nav>
      
    </header>
  );
};

export default Header;
