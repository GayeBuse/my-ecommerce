import { AxiosInstance } from "../api/axiosInstance";
import { toast } from "react-toastify";
import { login, signup } from "../store/actions/userAction";
import { FETCH_STATES } from "./reducers/productReducer";
import { setUser, userLogin } from "../store/actions/userAction";

export const postSignup = (data) => {
  return (dispatch, getState) => {
    AxiosInstance.post("/signup", data)
      .then((res) => {
        dispatch(login(data));
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
};

export const postLogin = (data) => {
  return (dispatch, getState) => {
    dispatch(setUser(FETCH_STATES.fetching));

    // Returning the promise here
    return AxiosInstance.post("/login", data)
      .then((res) => {
        dispatch(signup(res.data));
        dispatch(setUser(FETCH_STATES.fetched));
        toast.success("You successfully logged in!");
        console.log("Post");
      })
      .catch((err) => {
        toast.error("Your password or email is wrong!");
        dispatch(setUser(FETCH_STATES.failed));
        localStorage.removeItem("token");

        throw err;
      });
  };
};

export const verifyToken = (data) => {
  return (dispatch, getState) => {
    dispatch(setUser(FETCH_STATES.fetching));
    AxiosInstance.get("/verify")
      .then((res) => {
        dispatch(userLogin(res.data));
        toast.success("Verification Successfully Completed");
        dispatch(setUser(FETCH_STATES.fetched));
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        localStorage.removeItem("token");
        dispatch(setUser(FETCH_STATES.failed));
      });
  };
};
