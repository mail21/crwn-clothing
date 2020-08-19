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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem2 = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
  if (existingCartItem2) {
    return cartItems.filter((cartItem) => cartItem.id != cartItemToRemove.id);
  } else {
    return [...cartItems];
  }
};

export const removeItem = (cartItems, cartItemToRemove) => {
  const existingCartItem3 = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

  if (existingCartItem3.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id != cartItemToRemove.id);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};
