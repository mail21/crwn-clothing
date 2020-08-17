export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

  // existingCartItem akan undefined jika method find tidak menemukan apa apa sedangkan jika metodnya menemukan kesamaan maka nilainya adalah objek yang sama itus
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};
