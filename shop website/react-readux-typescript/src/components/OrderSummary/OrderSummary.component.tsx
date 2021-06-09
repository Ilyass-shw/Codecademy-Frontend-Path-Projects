import styled, { css } from 'styled-components';

export const SummaryContainer = styled.aside`
  background-color: #fafafa;
  border-block: 1px solid #e6e6e6;
`;
export const ToggleButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4rem;
  cursor: pointer;
  border-bottom: 1px solid #e6e6e6;
  max-width: 40rem;
  margin: auto;
`;

export const ButtonHeader = styled.h5``;
export const TotalPrice = styled.h4``;

type SummaryItemsProps = {
  show: boolean;
};

const collapsing = css`
  position: relative;
  max-height: 0;
  overflow: hidden;
`;

export const SummaryItems = styled.div<SummaryItemsProps>`
  margin: auto;
  max-width: 40rem;
  transition: all 0.55s ease;
  max-height: 1000px;
  overflow: ${({ show }) => (show ? 'visible' : 'hidden')};
  ${({ show }) => (show ? collapsing : '')}
`;
