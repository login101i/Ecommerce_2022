import React, { Component } from "react";
import { Route } from "react-router-dom";
import { CollectionPageHOC } from "../category/collection.component";
import { connect } from "react-redux";

import { CollectionsOverviewHOC } from "../../components/collections-overview/collections-overview.component";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import "./shop.styles.scss";

import { updateCollections } from "./shop.actions";

export class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collection");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        console.log(
          "🚀 ~ file: shop.component.jsx ~ line 21 ~ ShopPage ~ this.unsubscribeFromSnapshot=collectionRef.onSnapshot ~ collectionsMap",
          collectionsMap
        );
      }
    );
  }
  render() {
    const { match } = this.props;
    console.log(
      "🚀 ~ file: shop.component.jsx ~ line 7 ~ ShopPage ~ match",
      match
    );

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewHOC}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageHOC}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap))
});

export const ShopHOC = connect(null, mapDispatchToProps)(ShopPage);
