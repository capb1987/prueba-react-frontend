import React from "react";
import { Router, Route, Switch } from "wouter";
import "./App.css";

//Componentes
import Home from "./components/Home";
import ProductListPage from "./components/ProductListPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartPage from "./components/CartPage";

/* muestra los distintos states a utilizar */
import { Provider } from "react-redux";
import store from "./store";
const App = () => {
  return (
    <div className="wrapContenedor">
      <Router>
        <Provider store={store}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/api/products" component={ProductListPage} />
            <Route path="/api/products/cart" component={CartPage} />
          </Switch>
          <Footer />
        </Provider>
      </Router>
    </div>
  );
};

export default App;
