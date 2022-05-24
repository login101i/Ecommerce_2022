import { createSelector } from "reselect";

const SelectShop = (state) => state.shop;

export const SelectShopCollection = createSelector(
  [SelectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([SelectShopCollection], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectCollectionsForOverview = createSelector(
  [SelectShopCollection],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectIsCollectionFetching = createSelector(
  [SelectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [SelectShop],
  shop => !!shop.collections
);
