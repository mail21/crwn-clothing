import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
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
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
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
