import React from 'react';

import HeaderContent from '../headerContent';
import { useAuth } from '../../../hooks/auth';

import { HeaderStyles } from './styles';

import Logo from '../../../assets/images/bitcoin-logo.png';

const Header: React.FC = () => {
  const { signOut } = useAuth();

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
              <a href="/login" onClick={signOut}>
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <HeaderContent />
    </HeaderStyles>
  );
};

export default Header;
