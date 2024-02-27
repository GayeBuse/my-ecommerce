import * as types from "./userActionTypes";
import { AxiosInstance } from "../../../api/AxiosInstance";

export const loginSuccess = (user) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: {
      user: user,
    },
  };
};

export const logoutSuccess = () => {
  return {
    type: types.LOGOUT_SUCCESS,
  };
};
export const userLogin = (data, history) => {
  return (dispatch) => {
    AxiosInstance.post("/login", data)
      .then((response) => {
        console.log(response.data);

        dispatch(loginUser(response.data));
        localStorage.setItem("token", response.data.token);
        toast.success("Hoşgeldiniz");
        history.push("/");
      })
      .catch((error) => {
        console.error("Error:", error);
        console.log("Server response:", error.response);
        toast.error("Error occurred: " + error.response.data.message);
      });
  };
};

export const userLogout = () => {
  return (dispatch) => {
    dispatch(logoutUser());
    localStorage.removeItem("token");
    console.log("Hesabınızdan çıkış yapılmıştır.");
  };
};
