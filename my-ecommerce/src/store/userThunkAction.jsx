import { AxiosInstance } from "../api/AxiosInstance";
import { toast } from "react-toastify";

import {
  loginSuccess,
  logoutSuccess,
} from "../store/actions/userAction/userAction"; // Correct import
import { FETCH_STATES } from "../store/reducers/productReducer";

export const postSignup = (data) => {
  return (dispatch, getState) => {
    AxiosInstance.post("/signup", data)
      .then((res) => {
        dispatch(loginSuccess(data)); // Dispatch loginSuccess with user data
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
};

export const postLogin = (data, history) => {
  return (dispatch, getState) => {
    dispatch(loginSuccess(FETCH_STATES.fetching)); // This seems incorrect

    AxiosInstance.post("/login", data)
      .then((res) => {
        const { token, email } = res.data;

        dispatch(loginSuccess({ email })); // Dispatch loginSuccess with user email
        localStorage.setItem("token", token); // Save token to localStorage
        toast.success("You successfully logged in!");

        dispatch(loginSuccess(FETCH_STATES.fetched));
      })
      .catch((err) => {
        toast.error("Your password or email is wrong!");
        dispatch(loginSuccess(FETCH_STATES.failed));
        localStorage.removeItem("token");
        throw err;
      });
  };
};

export const verifyToken = (data) => {
  return (dispatch, getState) => {
    dispatch(loginSuccess(FETCH_STATES.fetching));
    AxiosInstance.get("/verify")
      .then((res) => {
        dispatch(userLogin(res.data)); // This seems incorrect, should dispatch loginSuccess
        toast.success("Verification Successfully Completed");
        dispatch(loginSuccess(FETCH_STATES.fetched));
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        localStorage.removeItem("token");
        dispatch(loginSuccess(FETCH_STATES.failed));
      });
  };
};
