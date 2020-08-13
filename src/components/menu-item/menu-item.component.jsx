import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`} style={{ backgroundImage: `url('${imageUrl}')` }}>
    <div className="content" style={{ backgroundColor: 'white' }}>
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOPS NOW</span>
    </div>
  </div>
);

export default MenuItem;
