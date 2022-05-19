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

import { updateCollections } from "../../redux/shop/shop.actions";
import { WithSpinner } from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverviewHOC);
const CollectionPageWithSpinner = WithSpinner(CollectionPageHOC);

export class ShopPage extends Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collection");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        console.log(
          "🚀 ~ file: shop.component.jsx ~ line 26 ~ ShopPage ~ collectionsMap",
          collectionsMap
        );

        updateCollections(collectionsMap);
        this.setState({ loading: false });
      }
    );
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
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
