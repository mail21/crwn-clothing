import React from 'react';
import { connect } from 'react-redux';
import './collections-overview.styles.scss';

import { getShopData } from './../../redux/shop.reducer/shop.selectors';
import CollectionPreview from './../../components/collection-preview/collection-preview.component';

export const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: getShopData(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
