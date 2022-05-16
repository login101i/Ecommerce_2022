import { createSelector } from 'reselect';

const SelectShop = state => state.shop;

export const SelectShopCollection = createSelector(
  [SelectShop],
  shop => shop.collections
);