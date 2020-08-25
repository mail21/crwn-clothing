import React from 'react';
import { connect } from 'react-redux';
import { CollectionsOverviewContainer } from './collections-overview.styles';
import { selectCollectionForPreview } from './../../redux/shop.reducer/shop.selectors';
import CollectionPreview from './../../components/collection-preview/collection-preview.component';

export const CollectionsOverview = ({ collections }) => {
  console.log(collections);
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = (state) => ({
  // collections: selectCollectionForPreview(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
