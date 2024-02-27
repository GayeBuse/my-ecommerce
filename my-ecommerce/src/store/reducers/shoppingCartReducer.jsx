import * as types from "../actions/shoppingCartAction/shoppingCartActionTypes";

const initialState = {
  cart: [],
  payment: {},
  adreess: {},
};

export function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case types.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };

    case types.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case types.SET_PAYMENT_INFO:
      return {
        ...state,
        payment: action.payload,
      };
    case types.SET_ADDRESS_INFO:
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
}
