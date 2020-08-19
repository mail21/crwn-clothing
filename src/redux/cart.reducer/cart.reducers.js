import { cartActionTypes } from './cart.types';
import { addItemToCart, removeItemFromCart, removeItem } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItem: [],
};

const cartReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItem: addItemToCart(state.cartItem, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItem: removeItemFromCart(state.cartItem, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItem: removeItem(state.cartItem, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducers;
