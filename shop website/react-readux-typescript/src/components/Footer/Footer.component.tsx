import styled from 'styled-components';
import { CustomButton } from '../../App/App.component';

export const SeparatorSection = styled.section`
  margin: 3.4rem 0;
  padding: 5rem;
  background-color: black;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
  max-width: 20rem;
  flex-wrap: wrap;
`;

export const IconRing = styled(CustomButton)`
  border-radius: 50%;
  background-color: white;
  padding: 0.6rem;
  margin: 0.4rem;
  border: 0.17rem solid black;
`;

export const SiteSection = styled.section`
  margin: auto;
  max-width: 28rem;
  padding: 1rem 0.1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const Site = styled.h6`
  padding: 0.4rem;
`;
