import * as types from "./shoppingCartActionTypes";

export const addToCart = (cartList, operation) => ({
  type:
    operation === "decrement" ? types.DECREMENT_CART_ITEM : types.ADD_TO_CART,
  payload: cartList,
});

export const removeFromCart = (productId) => ({
  type: types.REMOVE_FROM_CART,
  payload: { productId },
});

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
