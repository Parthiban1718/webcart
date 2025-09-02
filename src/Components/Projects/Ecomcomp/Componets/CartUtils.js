import Cookies from 'js-cookie';

const CART_COOKIE_KEY = 'shopping_cart';

export const getCartFromCookies = () => {
  const data = Cookies.get(CART_COOKIE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveCartToCookies = (cartItems) => {
  Cookies.set(CART_COOKIE_KEY, JSON.stringify(cartItems), { expires: 7 });
};

export const addItemToCart = (item) => {
  const currentCart = getCartFromCookies();

  const existingIndex = currentCart.findIndex(i => i.name === item.name);
  if (existingIndex > -1) {
    currentCart[existingIndex].ordered_v += item.ordered_v;
  } else {
    currentCart.push(item);
  }

  saveCartToCookies(currentCart);
};

export const removeItemFromCart = (productName) => {
  let cart = getCartFromCookies();
  cart = cart.filter(item => item.name !== productName);
  saveCartToCookies(cart);
};
