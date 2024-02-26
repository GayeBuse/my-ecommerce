const initialState = {
  user: {
    name: null,
    email: null,
    role_id: "3",
  },
  isLoggedIn: false,
};
export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: true,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };

    default:
      return state;
  }
}
