import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user.reducer/user.actions';
import { selectCurrentUser } from './redux/user.reducer/user.selectors';

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
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
          this.props.setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
    //auth.onAuthStateChanged itu bersifat open subscription
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
    //meng-close subscription
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signIn"
            render={() => (this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />)}
          />
        </Switch>
      </div>
    );
  }
}

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
