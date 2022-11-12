import { CERRAR_MODAL, MODAL_ABIERTO } from "../types";

export const abrirModalAction = () => {
  return (dispatch) => {
    dispatch(abrirModal());
  };
};

const abrirModal = () => ({
  type: MODAL_ABIERTO,
  payload: true,
});
export const cerrarModalAction = () => {
  return (dispatch) => {
    dispatch(cerrarModal());
  };
};

const cerrarModal = () => ({
  type: CERRAR_MODAL,
  payload: true,
});
