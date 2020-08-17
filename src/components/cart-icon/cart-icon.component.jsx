import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from './../../assets/shopping-bag.svg';
import { toggleCartHidden } from './../../redux/cart.reducer/cart.action';
import { selectCartItemsCount } from './../../redux/cart.reducer/cart.selectors';
import './cart-icon.style.scss';

const CartIcon = (props) => (
  <div className="cart-icon" onClick={props.toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{props.itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
