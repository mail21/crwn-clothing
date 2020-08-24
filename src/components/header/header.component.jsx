import React from 'react';
import { LogoContainer, HeaderContainer, Option, Options } from './header.style';

import { ReactComponent as Logo } from './../../assets/crown.svg';
import { auth } from './../../firebase/firebase.utils';

import { connect } from 'react-redux';
import CartIcon from './../cart-icon/cart-icon.component';
import CartDropdown from './../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from './../../redux/user.reducer/user.selectors';
import { selectCartHidden } from './../../redux/cart.reducer/cart.selectors';
import { createStructuredSelector } from 'reselect';

function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <Options>
        <Option to="/shop">SHOP</Option>
        <Option to="/contact">CONTACT</Option>
        {currentUser ? (
          <Option as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </Option>
        ) : (
          <Option to="/signIn">SIGN IN</Option>
        )}
        <CartIcon />
      </Options>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

/*
    dua kode ini sama saja bedanya dengan menggunakan createStructuredSelector bisa
    lebih dinamis lagi 
*/

// const mapStateToProps = (stateDariRootReducer) => ({
//   currentUser: selectCurrentUser(stateDariRootReducer),
//   hidden: selectCartHidden(stateDariRootReducer),
// });

export default connect(mapStateToProps)(Header);
