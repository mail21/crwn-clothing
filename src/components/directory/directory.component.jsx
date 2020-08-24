import React from 'react';
import { connect } from 'react-redux';
import { DirectoryMenuContainer } from './directory.styles';
import MenuItem from './../menu-item/menu-item.component';
import { getSections } from './../../redux/directory.reducer/directory.selectors';

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...sisaDariObjek }) => (
      <MenuItem key={id} {...sisaDariObjek} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = (state) => ({
  sections: getSections(state),
});

export default connect(mapStateToProps)(Directory);
