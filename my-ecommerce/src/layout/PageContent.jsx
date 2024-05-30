import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/Home.jsx";
import ProductList from "../pages/ProductList.jsx";
import Contact from "../pages/Contact.jsx";
import About from "../pages/About.jsx";
import Team from "../pages/Team.jsx";
import Product from "../pages/Product.jsx";
import SignUp from "../pages/SignUp.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "../pages/LoginForm.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AxiosInstance, renewAxiosInstance } from "../api/axiosInstance.jsx";
import ShopProductCard from "../components/ShopProductCard.jsx";
import {
  loginSuccess,
  logoutSuccess,
} from "../store/actions/userAction/userAction.jsx";
import { setCategories } from "../store/actions/globalAction/globalAction.jsx";
export default function PageContent() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      AxiosInstance.get("/verify")
        .then((response) => {
          console.log("autologin ", response);
          //login oldu
          // İlk olarak, localStorage'dan bir token alır. Ardından, eğer bir token varsa, bu tokeni kullanarak /verify endpointine bir GET isteği yapar.//
          const user = response.data;
          dispatch(loginSuccess(user));
          renewAxiosInstance();
          console.log("verified", user);
        })
        .catch((error) => {
          console.error("autologout ", error);
          dispatch(logoutSuccess());
          localStorage.removeItem("token");
          renewAxiosInstance();
        });
    }
  }, [dispatch]); // Redux store'daki kullanıcı durumunu güncellemek için
  /*Bu kodun amacı, sayfanın yüklendiğinde kullanıcının daha önce giriş yapmış olup olmadığını kontrol etmek ve eğer yapmışsa otomatik olarak oturum açmaktır. Bu, kullanıcı deneyimini artırmak ve kullanıcının her seferinde tekrar giriş yapmasını engellemek için kullanılır.*/
  useEffect(() => {
    dispatch(setCategories());
  }, []);
  return (
    <div className=" font-['Montserrat']">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shopping/:gender?/:category?">
          <ProductList />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/my-cart">
          <ShopProductCard />
        </Route>
        <Route exact path="/product/:productId/:productNameSlug">
          <Product />
        </Route>
        <Route exact path="/signup">
          <SignUp />
          <ToastContainer />
        </Route>
        <Route exact path="/login">
          <LoginForm />
          <ToastContainer />
        </Route>
      </Switch>
    </div>
  );
}
