import React, { Fragment } from "react";
import "./css/Header.css";
import { Link } from "wouter";
import logo from "../img/logoEmpresa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

//redux

//import { useDispatch, useSelector } from "react-redux";
//import { ocultarProductoAction } from "../actions/productoActions";

const Header = () => {
  //const dispatch = useDispatch();

  //dispatch

  //selectors

  return (
    <Fragment>
      <div className="contenedorHeader">
        <div className="contenedorCentrado__header">
          <a href="/">
            <div className="headerLogo">
              <img src={logo} alt="Logo" />
            </div>
          </a>

          <nav className="navegacionHeader">
            <Link to="/" className="linkNav">
              Home
            </Link>
            <Link to="/api/products" className="linkNav">
              Productos
            </Link>
            <Link to="/api/products/cart" className="btnCarrito">
              <FontAwesomeIcon icon={faCartShopping} />
              <span>Carrito(0)</span>
            </Link>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
