import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  MenuItemContent,
  MenuItemTitle,
  MenuItemSubtitle,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer style={{ backgroundImage: `url('${imageUrl}')` }} />
    <MenuItemContent>
      <MenuItemTitle>{title.toUpperCase()}</MenuItemTitle>
      <MenuItemSubtitle>SHOPS NOW</MenuItemSubtitle>
    </MenuItemContent>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
