const initialState = {
  rolers: [],
  categories: [],
  theme: "",
  language: "",
};
/* switch` ifadesi, bir kontrol akışı yapısıdır ve farklı durumlara göre farklı kod bloklarını çalıştırmanıza olanak sağlar. `case` ifadeleri, `switch` ifadesi içinde hangi durumun ele alınacağını belirtir. Bu durumlar, genellikle `action`'ın türüne göre belirlenir ve bu durumlara göre Redux'un durumunu güncellemenizi sağlar.*/
export function globalReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ROLES":
      return {
        ...state,
        roles: action.payload,
      };
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    case "SET_LANGUAGE":
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
}
