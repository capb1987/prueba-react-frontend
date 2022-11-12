import React, { useEffect } from "react";

//redux

import { useDispatch, useSelector } from "react-redux";
import { ocultarProductoAction } from "../actions/productoActions";
import logo from "../img/logoEmpresa.png";

const Home = () => {
  const dispatch = useDispatch();

  const ocultarProducto = () => dispatch(ocultarProductoAction());

  const productos = useSelector((store) => store.productos.productos);

  useEffect(() => {
    if (productos.length > 0) {
      ocultarProducto();
    }
    // eslint-disable-next-line
  }, [productos]);
  return (
    <main className="contenedorPrincipal">
      <div className="contenedorPrincipal__centrado">
        <h1 style={{ textAlign: "center" }}>Bienvenido a TechStore</h1>
        <p style={{ textAlign: "center" }}>Tecnología en tus manos</p>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img src={logo} alt="logo" />
        </div>
      </div>
    </main>
  );
};

export default Home;
