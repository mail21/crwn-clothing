import React from 'react';

import {
  CartItemContainer,
  ItemDetails,
  ItemImage,
  ItemDetailsNamePrice,
} from './cart-item.style';

const CartItem = ({ item }) => (
  <CartItemContainer>
    <ItemImage src={item.imageUrl} alt="item" />
    <ItemDetails>
      <ItemDetailsNamePrice>{item.name}</ItemDetailsNamePrice>
      <ItemDetailsNamePrice>
        {item.quantity} x ${item.price}
      </ItemDetailsNamePrice>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem;
