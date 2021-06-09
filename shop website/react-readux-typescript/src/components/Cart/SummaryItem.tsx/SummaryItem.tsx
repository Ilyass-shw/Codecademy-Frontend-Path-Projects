import React from 'react';
import { Item } from '../../../helpers/types';
import {
  Container,
  ToTheRight,
  Img,
  ItemImg,
  Quantity,
  ItemName,
  ItemPrice,
} from './SummaryItem.component';
interface SummaryItemProps {
  item: Item;
  quantity: number;
}
const SummaryItem: React.FC<SummaryItemProps> = ({ item, quantity }) => {
  console.log(quantity)
    return (
    <Container>
      <ToTheRight>
          <Img>
        <ItemImg src={item.imgs[0]} />
        <Quantity>{quantity}</Quantity>
        </Img>
        <ItemName>{item.name} </ItemName>
      </ToTheRight>
      <ItemPrice>{'$' + item.price} </ItemPrice>
    </Container>
  );
};

export default SummaryItem;
