import React from "react";
import { Route } from "react-router-dom";
import { CategoryPage } from "../category/category.component";

import { CollectionsOverviewHOC } from "../../components/collections-overview/collections-overview.component";
export const ShopPage = ({ match }) => {
console.log("🚀 ~ file: shop.component.jsx ~ line 7 ~ ShopPage ~ match", match)
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverviewHOC} />
      <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>
  );
};
