import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home.jsx";
import ProductList from "../pages/ProductList.jsx";
import Contact from "../pages/Contact.jsx";
import About from "../pages/About.jsx";
import Team from "../pages/Team.jsx";
import Product from "../pages/Product.jsx";
import SignUp from "../pages/SignUp.jsx";

export default function PageContent() {
  return (
    <div className=" font-['Montserrat']">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shopping">
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
        <Route exact path="/shopping/:productId">
          <Product />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}
