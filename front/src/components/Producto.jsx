import React from "react";
import "./css/Producto.css";

// importar animate on scroll libreria
import AOS from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { mostrarProductoActualAction } from "../actions/productoActions";
import { abrirModalAction, cerrarModalAction } from "../actions/modalActions";
import {
  faDollarSign,
  faEye,
  faStar,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

//componente modal
import ProductDisplayPage from "./ProductDisplayPage";
const Producto = ({ producto }) => {
  const dispatch = useDispatch();

  AOS.init();

  //dispatch

  const abrirModal = () => {
    dispatch(abrirModalAction());
  };

  const cerrarModal = () => {
    dispatch(cerrarModalAction());
  };

  const mostrarProductoActual = (id, stock) => {
    dispatch(mostrarProductoActualAction(id, stock));
  };

  //selectors

  const modalIsOpen = useSelector((store) => store.modal.modalIsOpen);

  const handleClickModal = () => {
    abrirModal();
    mostrarProductoActual(producto._id, producto.countInStock);
  };
  return (
    <div className="tarjeta" data-aos="fade-in">
      <div className="image">
        <img src={`http://localhost:5000${producto.image}`} alt="Avatar" />
      </div>

      <div className="containerTarjeta">
        <h3>{producto.name}</h3>
        <small>
          <FontAwesomeIcon icon={faDollarSign} /> {producto.price}
        </small>
        <p>
          <b>Marca:</b>
          <span>{producto.brand}</span>
        </p>
        <p>
          <b>Disponibles:</b> {producto.countInStock}
        </p>
        <p>
          <FontAwesomeIcon icon={faStar} />
          <span>{producto.rating}</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faThumbsUp} />
          <span>{producto.numReviews}</span>
        </p>
        <p>
          <b>Categoria:</b>
          <span>{producto.category}</span>
        </p>
        <p>{producto.description}</p>

        <button className="btnProducto" onClick={handleClickModal}>
          <FontAwesomeIcon icon={faEye} />
          <span>Mas Detalles</span>
        </button>

        <ProductDisplayPage
          modalIsOpen={modalIsOpen}
          cerrarModal={cerrarModal}
        />
      </div>
    </div>
  );
};

export default Producto;
