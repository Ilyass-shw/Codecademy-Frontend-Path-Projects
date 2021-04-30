import styled from 'styled-components';
import { routerLink } from '../../App/App.component';

export const NavBarContainer = styled.div`
  height: 7rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const NavLinkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const NavLogo = styled(routerLink)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #55565a;
`;

export const NavLink = styled.div`
  margin: 0 0 0 1rem;
`;

export const LinkButton = styled(routerLink)`
  font-weight: 700;
  color: black;
`;
