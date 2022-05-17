import React from "react";
import { CollectionItemHOC } from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selector";
import { createStructuredSelector } from "reselect";

import "./collection.styles.scss";
export const CollectionPage = ({ match, collection }) => {
  console.log("🚀 ~---------------------------~ collections", collection);

  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItemHOC key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export const CollectionPageHOC = connect(mapStateToProps)(CollectionPage);
