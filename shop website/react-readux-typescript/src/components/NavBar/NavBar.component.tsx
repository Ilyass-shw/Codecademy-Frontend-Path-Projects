import styled from 'styled-components';
import { RouterLink } from '../../App/App.component';

export const NavBarContainer = styled.div`
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinkWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media screen and (min-width: 360px) {
    flex-direction: row;
  }
`;

export const Links = styled.div`
  display: flex;
  padding: 0 1rem;
`;

export const NavLogo = styled(RouterLink)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #55565a;
  padding: 0 0 0 1rem;

  @media screen and (min-width: 700px) {
    margin: 0 3rem 0 2rem;
  }
`;

export const NavLink = styled.div`
  margin: 0 0 0 1rem;
`;

export const LinkButton = styled(RouterLink)`
  font-weight: 700;
  color: black;

  @media screen and (min-width: 700px) {
    font-size: 1.2rem;
  }
`;
