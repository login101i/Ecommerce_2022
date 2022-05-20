import React, { Component } from "react";
import { Route } from "react-router-dom";
import { CollectionPageHOC } from "../category/collection.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded
} from "../../redux/shop/shop-selector";

import { CollectionsOverviewHOC } from "../../components/collections-overview/collections-overview.component";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import "./shop.styles.scss";

import { updateCollections } from "../../redux/shop/shop.actions";
import { WithSpinner } from "../../components/with-spinner/with-spinner.component";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverviewHOC);
const CollectionPageWithSpinner = WithSpinner(CollectionPageHOC);

export class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match, isCollectionFetching, isCollectionLoaded } =
      this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionLoaded}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded:selectIsCollectionsLoaded
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export const ShopHOC = connect(null, mapDispatchToProps)(ShopPage);
