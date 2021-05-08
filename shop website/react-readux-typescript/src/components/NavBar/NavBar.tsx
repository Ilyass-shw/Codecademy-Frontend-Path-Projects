import React from 'react';

import { toggleCartSideBar } from '../../helpers/toggleCartSideBar';

import NavLinks from '../NavLinks/NavLinks';
import CartIcon from '../CartIcon/CartIcon';
import CartBar from '../CartBar/CartBar';
import {
  NavBarContainer,
  NavLinkWrapper,
  NavLogo,
  Icon,
} from './NavBar.component';

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <NavLogo to="/">Shw</NavLogo>

      <CartBar />

      <NavLinkWrapper>
        <NavLinks />

        <Icon
          onClick={() => {
            toggleCartSideBar();
          }}
          data-testid="Icon"
        >
          <CartIcon />
        </Icon>
      </NavLinkWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
