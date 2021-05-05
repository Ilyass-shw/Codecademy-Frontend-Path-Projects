import React, { useState } from 'react';
import HoverBarWrapper from '../../custom components/HoverBarWrapper/HoverBarWrapper';
import CartIcon from '../CartIcon/CartIcon';

import CartBar from '../CartBar/CartBar';

import {
  NavBarContainer,
  NavLinkWrapper,
  NavLink,
  NavLogo,
  LinkButton,
  Links,
  Icon,
} from './NavBar.component';

const NavBar: React.FC = () => {
  const [openCartBar, setOpenCartBar] = useState(false);

  return (
    <NavBarContainer>
      <NavLogo to="/">Shw</NavLogo>

      <CartBar openCartBar={openCartBar} setOpenCartBar={setOpenCartBar} />

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

        <Icon
          onClick={() => {
            setOpenCartBar(!openCartBar);
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
