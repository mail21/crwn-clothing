import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckOutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user.reducer/user.actions';
import { selectCurrentUser } from './redux/user.reducer/user.selectors';

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //di function ini kita akan memasukan value yang di dapat dari autentikasi
      //ke state App, nilai dari userAuth adalah data yang didapat ketika
      //user melakukan login dari google
      //userAuth akan bernilai null jika user belum melakukan login jadi hanya lakukan
      // setState jika
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          // console.log('a', snapShot.data());
          // method data() akan mengembalikan real value yang di database firestore
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    //auth.onAuthStateChanged itu bersifat open subscription

    return () => {
      unSubscribeFromAuth();
      //meng-close subscription
    };
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckOutPage} />
        <Route
          exact
          path="/signIn"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUp />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = (stateDariRootReducer) => ({
  currentUser: selectCurrentUser(stateDariRootReducer),
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => {
      dispatch(setCurrentUser(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
