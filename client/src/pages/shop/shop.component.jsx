import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import "./shop.styles.scss";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
const ShopPage = ({ match, fetchCollectionsStart }) => {
  const CollectionsOverviewContainer = lazy(() =>
    import(
      "../../components/collections-overview/collections-overview.component"
    )
  );
  const CollectionsContainer = lazy(() =>
    import("../category/collection.container")
  );

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

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
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
