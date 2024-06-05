import * as types from "../actions/shoppingCartAction/shoppingCartActionTypes";
const storedCartList = JSON.parse(localStorage.getItem("cartList")) || [];
const initialState = {
  cart: [],
  payment: {},
  adreess: {},
  cartList: storedCartList,
};

export function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      const existingProductIndex = state.cartList.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        const updatedCartList = [...state.cartList];
        updatedCartList[existingProductIndex].count += 1;
        updatedCartList[existingProductIndex].checked = true;

        return { ...state, cartList: updatedCartList };
      } else {
        const updatedCartList = [
          ...state.cartList,
          { count: 1, checked: true, ...action.payload },
        ];

        return { ...state, cartList: updatedCartList };
      }
    case types.DECREMENT_CART_ITEM:
      const updatedCart = state.cartList
        .map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, count: Math.max(0, item.count - 1) };
          }
          return item;
        })
        .filter((item) => item.count > 0);

      return { ...state, cartList: updatedCart };
    case types.REMOVE_FROM_CART:
      const newCartList = state.cartList.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cartList: newCartList,
      };
    //checbox için
    case types.TOGGLE_CHECK_ITEM:
      const toggledCart = state.cartList.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });

      return { ...state, cartList: toggledCart };
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
