import React from 'react';
import {
  CollectionPreviewContainer,
  PreviewContainer,
  CollectionPreviewTittle,
} from './collection-preview.style';

import CollectionItem from './../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTittle>{title.toUpperCase()}</CollectionPreviewTittle>
    <PreviewContainer>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
