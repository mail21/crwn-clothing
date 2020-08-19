import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop.reducer/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ match, collection }) => {
  return (
    <div className="collection-page">
      <h2 className="title">COLLECTION PAGE</h2>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
//ownProps adalah props custom sendiri dari kita karena disini kita punya match,history
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
