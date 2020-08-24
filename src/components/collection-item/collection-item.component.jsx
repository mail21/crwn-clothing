import React from 'react';
import {
  CollectionItemContainer,
  ImageContainer,
  AddToChartButton,
  NameTag,
  PriceTag,
  CollectionFooter,
} from './collection-item.style';
import { connect } from 'react-redux';
import { addItem } from './../../redux/cart.reducer/cart.action.js';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooter>
        <NameTag>{name}</NameTag>
        <PriceTag>{price}</PriceTag>
      </CollectionFooter>
      <AddToChartButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </AddToChartButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
