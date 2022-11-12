import React, { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { ocultarProductoAction } from "../actions/productoActions";
import CartItem from "./CartItem";

const CartPage = () => {
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
        <h1 style={{ textAlign: "center" }}>Bienvenido a Cart Page</h1>

        <CartItem />
      </div>
    </main>
  );
};

export default CartPage;
