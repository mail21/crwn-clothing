import React from 'react';
import { connect } from 'react-redux';
import './directory.styles.scss';
import MenuItem from './../menu-item/menu-item.component';
import { getSections } from './../../redux/directory.reducer/directory.selectors';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...sisaDariObjek }) => (
      <MenuItem key={id} {...sisaDariObjek} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  sections: getSections(state),
});

export default connect(mapStateToProps)(Directory);
