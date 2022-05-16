import React from "react";
import { CollectionItemHOC } from "../../components/collection-item/collection-item.component";

import "./category.styles.scss";
export const CategoryPage = ({ match }) => {
  console.log(
    "🚀--------------------------------- ~ file: category.component.jsx ~ line 6 ~ CategoryPage ~ match",
    match
  );
  return (
    <div className="category">
      <h2>Category Title</h2>
    </div>
  );
};
