import React from 'react';
import { DeleteItem, UpdateItemQuantity } from './helpers';
import {
  Container,
  MoveToRight,
  Img,
  Info,
  MoveToLeft,
  QuantityBlock,
  QuantityButton,
  Quantity,
  ItemImg,
  ItemName,
  ItemPrice,
  RemoveButton,
} from './CartItem.component';
import { items } from '../CartSlice/CartSlice';
interface CartItemProps {
  product: items;
}
const CartItem: React.FC<CartItemProps> = ({ product }) => {
  //   const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Container>
        <MoveToRight>
          <Img>
            <ItemImg src={product.item.imgs[0]} />
          </Img>
          <Info>
            <ItemName>{product.item.name} </ItemName>
            <ItemPrice>
              {'$' + (product.item.price * product.quantity).toFixed(2)}
            </ItemPrice>
          </Info>
        </MoveToRight>
        <MoveToLeft>
          <QuantityBlock>
            <QuantityButton
              onClick={() =>
                UpdateItemQuantity(
                  product.item.id,
                  product.quantity > 1 ? product.quantity - 1 : 1,
                )
              }
            >
              -
            </QuantityButton>
            <Quantity>{product.quantity}</Quantity>
            <QuantityButton
              onClick={() =>
                UpdateItemQuantity(product.item.id, product.quantity + 1)
              }
            >
              +
            </QuantityButton>
          </QuantityBlock>
          <RemoveButton onClick={() => DeleteItem(product.item.id)}>
            Remove
          </RemoveButton>
        </MoveToLeft>
      </Container>
    </>
  );
};

export default CartItem;
