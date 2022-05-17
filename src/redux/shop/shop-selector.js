import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};
const SelectShop = (state) => state.shop;

export const SelectShopCollection = createSelector(
  [SelectShop],
  (shop) => shop.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [SelectShopCollection],
    collection => collection.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );

