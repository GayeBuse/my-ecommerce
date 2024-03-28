import * as types from "../actions/shoppingCartAction/shoppingCartActionTypes";

const initialState = {
  cart: [],
  payment: {},
  adreess: {},
};

export function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      const existingItemIndex = state.cart.findIndex(
        (item) => cart.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        // If the product already exists in the cart, update its quantity
        const updatedItems = [...state.cart];
        updatedItems[existingItemIndex].quantity += 1;
        return {
          ...state,
          cart: updatedItems,
        };
      } else {
        // If the product doesn't exist in the cart, add it
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
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
