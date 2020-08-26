import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from './../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from './../../components/with-spinner/with-spinner.component';

import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from './../../redux/shop.reducer/shop.action';
import {
  selectIsFetching,
  selectIsCollectionsLoaded,
} from './../../redux/shop.reducer/shop.selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isFetching, isCollectionsLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

const mapStateToProps = (state) => ({
  isFetching: selectIsFetching(state),
  isCollectionsLoaded: selectIsCollectionsLoaded(state),
});

/*
  jadi pada saat ShopPage dirender maka jika didalam komponen ini ditaruh
  Route lagi maka dia akan mulai dari /shop bukan dari /
*/

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
