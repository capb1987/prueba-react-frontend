import { MODAL_ABIERTO, CERRAR_MODAL } from "../types";

const initialState = {
  modalIsOpen: false,
};

const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_ABIERTO:
      return {
        modalIsOpen: action.payload,
      };
    case CERRAR_MODAL:
      return {
        modalIsOpen: !action.payload,
      };
    default:
      return state;
  }
};

export default ModalReducer;
