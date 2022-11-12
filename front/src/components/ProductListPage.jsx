import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mostrarProductoAction } from "../actions/productoActions";
import axios from "axios";
import "./css/ProductListPage.css";

import Producto from "./Producto";
const ProductListPage = () => {
  const dispatch = useDispatch();

  //dispatch
  const mostrarProducto = (url) => dispatch(mostrarProductoAction(url));

  //variables del reducer
  const productos = useSelector((store) => store.productos.productos);
  const mostrandoProductos = useSelector(
    (store) => store.productos.cargarProductos
  );

  useEffect(() => {
    if (productos.length === 0) {
      const muestraUrl = async () => {
        const url = "http://localhost:5000/api/products";
        const arrProductos = await axios(url);
        mostrarProducto(arrProductos.data);
      };

      muestraUrl();
    }

    // eslint-disable-next-line
  }, [productos]);

  return (
    <main className="contenedorPrincipal">
      <div className="contenedorPrincipal__centrado productos">
        <h1>Mis Productos</h1>
        {mostrandoProductos
          ? productos.map((producto) => (
              <Producto key={producto._id} producto={producto} />
            ))
          : null}
      </div>
    </main>
  );
};

export default ProductListPage;
