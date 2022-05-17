import React from "react";
import { Route } from "react-router-dom";
import { CollectionPageHOC } from "../category/collection.component";

import { CollectionsOverviewHOC } from "../../components/collections-overview/collections-overview.component";

import "./shop.styles.scss";

export const ShopPage = ({ match }) => {
  console.log(
    "🚀 ~ file: shop.component.jsx ~ line 7 ~ ShopPage ~ match",
    match
  );
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverviewHOC} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPageHOC} />

    </div>
  );
};
