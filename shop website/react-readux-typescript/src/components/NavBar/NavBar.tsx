import React from 'react';
import HoverBarWrapper from '../../custom components/HoverBarWrapper/HoverBarWrapper';
import { FaShoppingCart } from 'react-icons/fa';

import {
  NavBarContainer,
  NavLinkWrapper,
  NavLink,
  NavLogo,
  LinkButton,
  Cart,
  Links,
} from './NavBar.component';

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <NavLogo to="/">Shw</NavLogo>
      <NavLinkWrapper>

        <Links>
          <NavLink>
            <HoverBarWrapper durationInSec={'1s'} repeate={1}>
              <LinkButton to="/">Shop</LinkButton>
            </HoverBarWrapper>
          </NavLink>

          <NavLink>
            <HoverBarWrapper durationInSec={'1s'} repeate={1}>
              <LinkButton to="/">Collection</LinkButton>
            </HoverBarWrapper>
          </NavLink>
        </Links>

        <Cart>
          <FaShoppingCart />
        </Cart>
      </NavLinkWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
