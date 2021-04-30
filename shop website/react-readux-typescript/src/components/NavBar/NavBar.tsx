import React from 'react';
import HoverBarWrapper from '../../custom components/HoverBarWrapper/HoverBarWrapper';

import {
  NavBarContainer,
  NavLinkWrapper,
  NavLink,
  NavLogo,
  LinkButton,
} from './NavBar.component';

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <NavLogo to="/">Shw</NavLogo>
      <NavLinkWrapper>
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
      </NavLinkWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
