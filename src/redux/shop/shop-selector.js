import { createSelector } from "reselect";


const SelectShop = (state) => state.shop;

export const SelectShopCollection = createSelector(
  [SelectShop],
  (shop) => shop.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [SelectShopCollection],
    collection => collection[collectionUrlParam]
  );

  export const selectCollectionsForOverview = createSelector(
    [SelectShopCollection],
    collections => Object.keys(collections).map(key => collections[key])
  );
  