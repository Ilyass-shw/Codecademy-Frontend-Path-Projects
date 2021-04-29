import React from 'react';

import {
  NavBarContainer,
  NavLinkWrapper,
  NavLink,
  NavLogo,
} from './NavBar.component';

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <NavLogo to="/">Shw</NavLogo>
      <NavLinkWrapper>
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/">Collection</NavLink>
      </NavLinkWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
