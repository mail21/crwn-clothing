import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CartItem from './../cart-item/cart-item.component';
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
  GoToCheckout,
} from './cart-dropdown.style';
import { selectCartItems } from './../../redux/cart.reducer/cart.selectors.js';
import { toggleCartHidden } from './../../redux/cart.reducer/cart.action';

const CartDropdown = (props) => {
  // props.disptach akan terpanggil secara default jika kita tidak memasukkan argumen kedua di connect()
  return (
    <CartDropdownContainer>
      <CartItems>
        {props.cartItems.length ? (
          props.cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <EmptyMessage>Your Cart Is Empty</EmptyMessage>
        )}
      </CartItems>
      <GoToCheckout
        onClick={() => {
          props.dispatch(toggleCartHidden());
          props.history.push('/checkout');
        }}
      >
        GO TO CHECKOUT
      </GoToCheckout>
    </CartDropdownContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default withRouter(connect(mapStateToProps)(CartDropdown));
