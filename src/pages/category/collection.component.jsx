import React from "react";
import { CollectionItemHOC } from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selector";
import { createStructuredSelector } from "reselect";

import "./collection.styles.scss";
export const CollectionPage = ({ match, collection }) => {
  console.log("🚀 ~---------------------------~ collections", collection);

  return (
    <div className="category">
      <h2>Category Title</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export const CollectionPageHOC = connect(mapStateToProps)(CollectionPage);
