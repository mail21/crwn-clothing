import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from './../../redux/shop.reducer/shop.action';

import CollectionsOverviewContainer from './../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from './../collection/collection.container';

const ShopPage = ({ fetchCollectionsStartAsync, match }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, []);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

/*
  jadi pada saat ShopPage dirender maka jika didalam komponen ini ditaruh
  Route lagi maka dia akan mulai dari /shop bukan dari /
*/

export default connect(null, mapDispatchToProps)(ShopPage);
