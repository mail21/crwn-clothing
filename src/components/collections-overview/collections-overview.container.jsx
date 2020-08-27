import { compose } from 'redux';
import { selectIsFetching } from './../../redux/shop.reducer/shop.selectors';
import { connect } from 'react-redux';
import CollectionsOverview from './../../components/collections-overview/collections-overview.component';
import WithSpinner from './../../components/with-spinner/with-spinner.component';

const mapStateToProps = (state) => ({
  isLoading: selectIsFetching(state),
});

// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

//     OR

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
