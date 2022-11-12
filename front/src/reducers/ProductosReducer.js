import {
  MOSTRAR_PRODUCTOS,
  OCULTAR_PRODUCTOS,
  MOSTRAR_PRODUCTO_ACTUAL,
  CERRAR_PRODUCTO_ACTUAL,
} from "../types";

const initialState = {
  productos: [],
  cargarProductos: false,
  producto: {},
  productoActual: false,
  disponibilidad: 0,
};

const ProductosReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOSTRAR_PRODUCTOS:
      return {
        ...state,
        cargarProductos: action.payload,
        productos: action.productos,
      };
    case OCULTAR_PRODUCTOS:
      return {
        ...state,
        cargarProductos: action.payload,
        productos: action.productos,
      };

    case MOSTRAR_PRODUCTO_ACTUAL:
      return {
        ...state,
        producto: state.productos.filter(
          (producto) => producto._id === action.payload.id
        ),
        productoActual: action.productoActual,
        disponibilidad: action.payload.stock,
      };
    case CERRAR_PRODUCTO_ACTUAL:
      return {
        ...state,
        producto: action.payload,
        productoActual: !action.productoActual,
        disponibilidad: 0,
      };

    default:
      return state;
  }
};

export default ProductosReducer;
