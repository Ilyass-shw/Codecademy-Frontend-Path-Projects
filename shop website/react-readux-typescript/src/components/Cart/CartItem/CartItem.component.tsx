import styled from 'styled-components';
import { CustomButton } from '../../../App/App.component';
// import { CustomButton, RouterLink } from '../../../App/App.component';

// ============= ============= ============= ============= =============
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 93%;
  margin: 1rem;
  max-width: 34rem;
`;
export const MoveToRight = styled.div`
  display: flex;
  align-items: center;
  align-self: self-start;
`;
export const Img = styled.div`
  position: relative;
  width: 4rem;
  flex-shrink: 0;
  border-radius: 5px;
`;
export const Info = styled.div`
  margin: 0 1rem;
`;

export const MoveToLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #cccccc;
  flex-shrink: 0;
`;
export const QuantityBlock = styled.div`
  border: 1px solid #e7e7e7;
  width: 7.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const QuantityButton = styled(CustomButton)`
  font-size: x-large;
  font-weight: bold;
  padding: 0.4rem 1.2rem;
  display: inline-block;
  color: #a7a7a7;
`;
export const Quantity = styled.h3`
  display: inline-block;
  color: #939393;
`;

export const ItemImg = styled.img`
  height: 4rem;
  border-radius: 5px;
  object-fit: cover;
`;

export const ItemName = styled.p`
  text-overflow: ellipsis;
`;
export const ItemPrice = styled.p`
  font-size: smaller;
  color: #a7a7a7;
`;
export const RemoveButton = styled(CustomButton)`
  padding: 0.6rem;
  color: #939393;
`;
