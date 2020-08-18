import React from 'react';
import { connect } from 'react-redux';
import CustomButton from './../custom-button/custom-button.component';
import CartItem from './../cart-item/cart-item.component';
import './cart-dropdown.style.scss';
import { selectCartItems } from './../../redux/cart.reducer/cart.selectors.js';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
      ) : (
        <span className="empty-message">Your Cart Is Empty</span>
      )}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default connect(mapStateToProps)(CartDropdown);
