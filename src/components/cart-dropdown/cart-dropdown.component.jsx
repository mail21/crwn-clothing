import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomButton from './../custom-button/custom-button.component';
import CartItem from './../cart-item/cart-item.component';
import './cart-dropdown.style.scss';
import { selectCartItems } from './../../redux/cart.reducer/cart.selectors.js';
import { toggleCartHidden } from './../../redux/cart.reducer/cart.action';

const CartDropdown = (props) => {
  // props.disptach akan terpanggil secara default jika kita tidak memasukkan argumen kedua di connect()
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {props.cartItems.length ? (
          props.cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <span className="empty-message">Your Cart Is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          props.dispatch(toggleCartHidden());
          props.history.push('/checkout');
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default withRouter(connect(mapStateToProps)(CartDropdown));
