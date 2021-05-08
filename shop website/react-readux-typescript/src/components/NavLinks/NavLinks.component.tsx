import styled from 'styled-components';
import { RouterLink } from '../../App/App.component';

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-right: 0.3rem;
`;

// ============= ============= ============= ============= =============

export const NavLink = styled.div`
  margin: 0 0 0 1rem;
`;

// ============= ============= ============= ============= =============

export const LinkButton = styled(RouterLink)`
  font-weight: 700;
  color: black;

  @media screen and (min-width: 700px) {
    font-size: 1.2rem;
  }
`;

// ============= ============= ============= ============= =============

export const CategoryList = styled.div<{
  isHover: boolean;
}>`
  position: absolute;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 20px rgb(0 0 0 / 9%);
  padding-top: 10px;
  transform: ${({ isHover }) =>
    isHover ? 'translateY(10px)' : 'translateY(0)'};
  visibility: ${({ isHover }) => (isHover ? 'visible' : 'hidden')};
  transition: 0.18s cubic-bezier(0.2, 0.06, 0.05, 0.95);
`;
// ============= ============= ============= ============= =============

export const Category = styled(RouterLink)`
  color: black;
  padding: 10px 10px;
  z-index: 50;

`;
