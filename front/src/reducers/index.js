import { combineReducers } from "redux";
import productosReducer from "./ProductosReducer";
import modalReducer from "./ModalReducer";

export default combineReducers({
  productos: productosReducer,
  modal: modalReducer,
});
