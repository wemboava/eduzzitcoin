import React from 'react';
import { Link } from 'react-router-dom';

import HeaderContent from '../headerContent';

import { HeaderStyles } from './styles';

import Logo from '../../../assets/images/bitcoin-logo.png';

const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <header>
        <div className="logo-wrapper">
          <img src={Logo} alt="logo" />
          <span>Eduzzticoin</span>
        </div>

        <nav className="nav">
          <ul className="nav__options">
            <li className="nav__options__item">
              <Link to="/login">Logout</Link>
            </li>
          </ul>
        </nav>
      </header>
      <HeaderContent />
    </HeaderStyles>
  );
};

export default Header;
