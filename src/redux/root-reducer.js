import { combineReducers } from 'redux';

import userReducer from './user.reducer/user.reducer';
import cartReducers from './cart.reducer/cart.reducers';
import directoryReducer from './directory.reducer/directory.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// storage disini itu seperti localStorage tapi versi redux-persist

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart'],
};
//disini whitelist maksudnya jadi ya dipersist itu hanya state cart
// state user tidak perlu karena sudah dipersist oleh firebase

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducers,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
