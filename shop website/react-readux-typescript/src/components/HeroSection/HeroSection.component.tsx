import styled from 'styled-components';

export const BackgroundImage = styled.section`
  background: url('https://jonnajintonsweden.com/wp-content/uploads/2020/09/test-header-4-4500x1550.jpg')
    45% / cover no-repeat;
  height: 22.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 6rem;

  @media screen and (min-width: 520px) {
    background-position: 25% 25%;
  }
`;

// ============= ============= ============= ============= =============

export const HeroContent = styled.div`
  width: 40vw;
  height: 60%;
  color: #f1f1f1;
`;

// ============= ============= ============= ============= =============

export const HeroText = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Quattrocento+Sans:ital@1&display=swap');

  p {
    padding: 10px;
    font-family: 'Quattrocento Sans', sans-serif;
    font-style: italic;
    font-size: 14px;
  }
`;

export const FirstPart = styled.p``;

// ============= ============= ============= ============= =============

export const LastPart = styled.p``;

// ============= ============= ============= ============= =============
