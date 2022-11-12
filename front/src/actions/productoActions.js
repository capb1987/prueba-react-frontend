import {
  MOSTRAR_PRODUCTOS,
  OCULTAR_PRODUCTOS,
  MOSTRAR_PRODUCTO_ACTUAL,
  CERRAR_PRODUCTO_ACTUAL,
} from "../types";

//Muestra todos los productos
export const mostrarProductoAction = (url) => {
  return (dispatch) => {
    dispatch(mostrarProducto(url));
  };
};

const mostrarProducto = (url) => ({
  type: MOSTRAR_PRODUCTOS,
  payload: true,
  productos: url,
});

//Oculta todos los productos
export const ocultarProductoAction = () => {
  return (dispatch) => {
    dispatch(ocultarProducto());
  };
};

const ocultarProducto = () => ({
  type: OCULTAR_PRODUCTOS,
  payload: false,
  productos: [],
});

//Muestra el producto actual.

export const mostrarProductoActualAction = (id, stock) => {
  return (dispatch) => {
    dispatch(mostrarProductoActual(id, stock));
  };
};

const mostrarProductoActual = (id, stock) => ({
  type: MOSTRAR_PRODUCTO_ACTUAL,
  payload: {
    id,
    stock,
  },
  productoActual: true,
});

//cierra el producto actual
export const cerrarProductoActualAction = () => {
  return (dispatch) => {
    dispatch(cerrarProductoActual());
  };
};

const cerrarProductoActual = () => ({
  type: CERRAR_PRODUCTO_ACTUAL,
  payload: {},
  productoActual: true,
});
