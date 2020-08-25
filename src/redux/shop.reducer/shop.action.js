import { shopActionTypes } from './shop.types';

export const updateShopDataAction = (collections) => ({
  type: shopActionTypes.UPDATE_SHOP_DATA,
  payload: collections,
});
