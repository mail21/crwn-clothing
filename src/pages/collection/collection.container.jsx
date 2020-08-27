import { compose } from 'redux';
import { connect } from 'react-redux';
import WithSpinner from './../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';
import { selectIsCollectionsLoaded } from './../../redux/shop.reducer/shop.selectors';

const mapStateToProps = (state) => ({
  isLoading: !selectIsCollectionsLoaded(state),
});

// const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage))

//  OR

const CollectionPageContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionPage);

export default CollectionPageContainer;
