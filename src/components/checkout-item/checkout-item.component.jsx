import React from 'react';
import { connect } from 'react-redux';
import {
  removeItem,
  addItem,
  removeItemFromCart,
} from './../../redux/cart.reducer/cart.action';
import './checkout-item.styles.scss';
function CheckoutItem({ cartItem, removeItem, removeItemFromCart, addItem }) {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt="item" />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${cartItem.price}</span>
      <div className="remove-button" onClick={() => removeItemFromCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
