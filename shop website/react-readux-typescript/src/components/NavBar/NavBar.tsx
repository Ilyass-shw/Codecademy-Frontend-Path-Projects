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
} from './NavBar.component';

const NavBar: React.FC = () => {
  const [openCartBar, setOpenCartBar] = useState(true);

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

        <CartIcon
          // onClick={() => {
          //   setOpenCartBar(!openCartBar);
          // }}
        />
      </NavLinkWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
