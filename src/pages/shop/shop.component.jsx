import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from './../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from './../../firebase/firebase.utils';

class ShopPage extends React.Component {
  state = {
    collectionSnapshot: [],
  };

  componentDidMount() {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      this.setState({ collectionSnapshot: await convertCollectionsSnapshotToMap(snapshot) });
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`}>
          <CollectionsOverview collections={this.state.collectionSnapshot} />
        </Route>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );
  }
}

/*
  jadi pada saat ShopPage dirender maka jika didalam komponen ini ditaruh
  Route lagi maka dia akan mulai dari /shop bukan dari /
*/

export default ShopPage;
