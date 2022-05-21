import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop-selector";
import { WithSpinner } from "../../components/with-spinner/with-spinner.component";
import { CollectionPageHOC } from "./collection.component";


const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state)
});



export const CollectionsContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPageHOC);
