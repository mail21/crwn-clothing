import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from './../../redux/cart.reducer/cart.action';
import { selectCartItemsCount } from './../../redux/cart.reducer/cart.selectors';
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.style';

const CartIcon = (props) => (
  <CartIconContainer onClick={props.toggleCartHidden}>
    <ShoppingIcon />
    <ItemCount>{props.itemCount}</ItemCount>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
