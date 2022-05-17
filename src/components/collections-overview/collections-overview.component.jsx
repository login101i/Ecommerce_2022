import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { CollectionPreview } from "../preview-collection/preview-collection.component";
import { selectCollectionsForOverview } from "../../redux/shop/shop-selector";

import "./collections-overview.styles.scss";

export const CollectionsOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForOverview
});

export const CollectionsOverviewHOC =
  connect(mapStateToProps)(CollectionsOverview);
