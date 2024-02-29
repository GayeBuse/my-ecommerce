import * as types from "./userActionTypes";
import AxiosInstance from "../../../api/AxiosInstance";
import { toast } from "react-toastify";

export const loginSuccess = (user) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: {
      user,
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
        dispatch(loginSuccess(response.data));
        localStorage.setItem("token", response.data.token);
        console.log("Login has been successfully");
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
    dispatch(logoutSuccess());
    localStorage.removeItem("token");
    console.log("Hesabınızdan çıkış yapılmıştır.");
    toast.success("Güle Güle");
  };
};
