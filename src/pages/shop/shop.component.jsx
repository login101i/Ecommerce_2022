import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";


import "./shop.styles.scss";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { CollectionsOverviewContainer } from "../../components/collections-overview/collections-verview.container";
import { CollectionsContainer } from "../category/collection.container";
const  ShopPage =({match, fetchCollectionsStart})=> {


 useEffect(()=>{
  fetchCollectionsStart()
 }, [fetchCollectionsStart])

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



const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export const ShopHOC = connect(null, mapDispatchToProps)(ShopPage);
