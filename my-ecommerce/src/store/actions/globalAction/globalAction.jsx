import * as types from "./globalActionTypes";
import { AxiosInstance } from "../../../api/AxiosInstance";

/*  bu iç içe fonksiyonun içindeki dispatch, bir eylemi Redux store'a göndermek için kullanılır*/

export const setRoles = () => {
  return (dispatch) => {
    AxiosInstance.get("/roles")
      .then((response) => {
        dispatch({ type: types.SET_ROLES, payload: response.data });
        console.log(response);
      })
      .catch((error) => {
        console.log("Roles Fetching Error: " + error.message);
      });
  };
};
export const setCategories = () => (dispatch) => {
  return AxiosInstance.get("/categories")
    .then((res) => {
      console.log("categories", res.data);
      dispatch({ type: types.SET_CATEGORIES, payload: res.data });
    })
    .catch((err) => {
      console.error("category error", err);
    });
};
export const setTheme = (theme) => ({ type: types.SET_THEME, payload: theme });
export const setLanguage = (language) => ({
  type: types.SET_LANGUAGE,
  payload: language,
});
