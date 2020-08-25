import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from './../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { connect } from 'react-redux';

import { updateShopDataAction } from './../../redux/shop.reducer/shop.action';
import { firestore, convertCollectionsSnapshotToMap } from './../../firebase/firebase.utils';

class ShopPage extends React.Component {
  componentDidMount() {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionSnapshot = await convertCollectionsSnapshotToMap(snapshot);
      this.props.updateShopDataAction(collectionSnapshot);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`}>
          <CollectionsOverview />
        </Route>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
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
