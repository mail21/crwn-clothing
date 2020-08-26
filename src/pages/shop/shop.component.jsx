import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from './../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from './../../components/with-spinner/with-spinner.component';

import { connect } from 'react-redux';

import { updateShopDataAction } from './../../redux/shop.reducer/shop.action';
import { firestore, convertCollectionsSnapshotToMap } from './../../firebase/firebase.utils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionSnapshot = await convertCollectionsSnapshotToMap(snapshot);
      this.props.updateShopDataAction(collectionSnapshot);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateShopDataAction: (collections) => dispatch(updateShopDataAction(collections)),
});

/*
  jadi pada saat ShopPage dirender maka jika didalam komponen ini ditaruh
  Route lagi maka dia akan mulai dari /shop bukan dari /
*/

export default connect(null, mapDispatchToProps)(ShopPage);
