import * as types from "../actions/storeAction/storeActionTypes";

const initialState = {
  sellerStore: {},
};

export function storeReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_SELLER_STORE:
      return {
        ...state,
        sellerStore: action.payload,
      };
    default:
      return state;
  }
}
