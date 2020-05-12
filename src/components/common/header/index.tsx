import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderStyles } from './styles';

import Logo from '../../../assets/images/bitcoin-logo.png';

const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <img className="logo" src={Logo} alt="bitcoin logo" />
      <nav className="nav">
        <ul className="nav__options">
          <li className="nav__options__item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyles>
  );
};

export default Header;
