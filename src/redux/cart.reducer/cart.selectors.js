import { createSelector } from 'reselect';

const selectCart = (state) => {
  return state.cart;
};

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItem);

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
});

export const selectCartTotal = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0);
});

/* 
    i dont know whats goin on heree but yang perlu dikasih tau adalah
    selector untuk nge-get sesuatu dari state?? agar performanya lebih mantap
    jadi bisa dilihat di selectCartItems
    
    selectCartItems nilainya adalah apapun yang ada di cart.cartItems
    jadi selectCartItems = cart.cartItem

    dan selectCartItemsCount adalah hasil dari reducenya 
    


*/
