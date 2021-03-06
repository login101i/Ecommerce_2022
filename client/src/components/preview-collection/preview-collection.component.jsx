import React from "react";

import { CollectionItemHOC } from "../collection-item/collection-item.component";
import "./preview-collection.styles.scss";

export const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx <4)
        .map((item) => (
          <CollectionItemHOC key={item.id} item={item} />
        ))}
    </div>
  </div>
);
