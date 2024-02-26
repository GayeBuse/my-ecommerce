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
    /*  Başarılı oturum açma sonrasında alınan kullanıcı bilgileriyle durumu günceller */
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };
    /* Kullanıcı durumunu sıfırlar ve başarılı oturum kapatma durumunda*/

    default:
      return state;
  }
}
