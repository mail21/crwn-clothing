import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const getShopData = createSelector([selectShop], (shop) => shop.collections);
