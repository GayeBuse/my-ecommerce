import * as types from "./shoppingCartActionTypes";

export const addToCart = (cartList, operation) => ({
  type:
    operation === "decrement" ? types.DECREMENT_CART_ITEM : types.ADD_TO_CART,
  payload: cartList,
});
export const removeFromCart = (product) => {
  return { type: types.REMOVE_FROM_CART, payload: product };
};
export const toggleCheckItemAction = (item) => {
  return {
    type: types.TOGGLE_CHECK_ITEM,
    payload: item,
  };
};

export const removeProductAction = (product) => {
  return { type: REMOVE_CART_ITEM, payload: product };
};
export const clearCart = () => ({
  type: types.CLEAR_CART,
});

export const setPaymentInfo = (paymentInfo) => ({
  type: types.SET_PAYMENT_INFO,
  payload: { paymentInfo },
});

export const setAddressInfo = (addressInfo) => ({
  type: types.SET_ADDRESS_INFO,
  payload: { addressInfo },
});
