import React, { useState } from 'react';
import HoverBarWrapper from '../../custom components/HoverBarWrapper/HoverBarWrapper';
import {
  NavLink,
  Links,
  LinkButton,
  CategoryList,
  Category,
} from './NavLinks.component';

const NavLinks: React.FC = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Links>
      <NavLink>
        <HoverBarWrapper durationInSec={'1s'} repeate={1}>
          <LinkButton to="/">Shop</LinkButton>
        </HoverBarWrapper>
      </NavLink>

      <NavLink>
        <HoverBarWrapper durationInSec={'1s'} repeate={1}>
          <LinkButton
            onMouseEnter={(): void => setIsHover(true)}
            onMouseLeave={(): void => setIsHover(false)}
            to="/"
          >
            Categories
          </LinkButton>
        </HoverBarWrapper>
        <CategoryList
          onMouseEnter={(): void => setIsHover(true)}
          onMouseLeave={(): void => setIsHover(false)}
          isHover={isHover}
        >
          <Category to="/">Jewelry</Category>
          <Category to="/">Photo prints</Category>
        </CategoryList>
      </NavLink>
    </Links>
  );
};

export default NavLinks;
