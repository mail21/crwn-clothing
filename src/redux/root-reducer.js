import { combineReducers } from 'redux';

import userReducer from './user.reducer/user.reducer';
import cartReducers from './cart.reducer/cart.reducers';

export default combineReducers({
  user: userReducer,
  cart: cartReducers,
});
