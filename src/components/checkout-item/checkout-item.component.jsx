import React from 'react';
import { connect } from 'react-redux';
import {
  removeItem,
  addItem,
  removeItemFromCart,
} from './../../redux/cart.reducer/cart.action';

import {
  CheckoutItemContainer,
  RemoveButtonContainer,
  QuantityContainer,
  TextContainer,
  ImageContainer,
} from './checkout-item.styles';

function CheckoutItem({ cartItem, removeItem, removeItemFromCart, addItem }) {
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={cartItem.imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{cartItem.name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{cartItem.quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>${cartItem.price}</TextContainer>
      <RemoveButtonContainer onClick={() => removeItemFromCart(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
