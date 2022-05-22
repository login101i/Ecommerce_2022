import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded
} from "../../redux/shop/shop-selector";


import "./shop.styles.scss";

import { fetchCollectionsStart } from "../../redux/shop/shop.sagas";
import { CollectionsOverviewContainer } from "../../components/collections-overview/collections-verview.container";
import { CollectionsContainer } from "../category/collection.container";
export class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();
  }

  render() {
    const { match, } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionsContainer}
        />
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export const ShopHOC = connect(null, mapDispatchToProps)(ShopPage);
