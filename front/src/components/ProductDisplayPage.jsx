import React, { useEffect, Fragment } from "react";

//componentes

import Mensaje from "./Mensaje";

//Modales
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faCartShopping,
  faStar,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

//redux
import { useDispatch, useSelector } from "react-redux";

import { cerrarProductoActualAction } from "../actions/productoActions";

import "./css/ProductoDisplayPage.css";

const ProductDisplayPage = ({ modalIsOpen, cerrarModal }) => {
  //dispatch
  const dispatch = useDispatch();

  //selectors

  const producto = useSelector((store) => store.productos.producto);
  const productoActual = useSelector((store) => store.productos.productoActual);

  const disponibilidad = useSelector((store) => store.productos.disponibilidad);

  //funciones
  const cerrarProductoActual = () => {
    dispatch(cerrarProductoActualAction());
  };

  useEffect(() => {
    if (!modalIsOpen) {
      cerrarProductoActual();
    }
    // eslint-disable-next-line
  }, [modalIsOpen]);

  return (
    <Fragment>
      <Modal open={modalIsOpen} onClose={cerrarModal} center>
        {productoActual ? (
          <div className="tarjeta">
            {disponibilidad === 0 ? (
              <Mensaje>No hay unidades disponibles en Stock!!!</Mensaje>
            ) : null}
            <div className="image">
              <img
                src={`http://localhost:5000${producto[0].image}`}
                alt="Avatar"
              />
            </div>

            <div className="containerTarjeta">
              <h3>{producto[0].name}</h3>
              <small>
                <FontAwesomeIcon icon={faDollarSign} /> {producto[0].price}
              </small>
              <p>
                <b>Marca:</b>
                <span>{producto[0].brand}</span>
              </p>
              <p>
                <b>Disponibles:</b> {producto[0].countInStock}
              </p>
              <p>
                <FontAwesomeIcon icon={faStar} />
                <span>{producto[0].rating}</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faThumbsUp} />
                <span>{producto[0].numReviews}</span>
              </p>
              <p>
                <b>Categoria:</b>
                <span>{producto[0].category}</span>
              </p>
              <p>{producto.description}</p>

              <button
                className={`btnAgregarCarrito ${
                  disponibilidad === 0 ? "" : "hover"
                }`}
                disabled={disponibilidad === 0 ? true : false}
              >
                <FontAwesomeIcon icon={faCartShopping} />
                <span>Add item to Cart</span>
              </button>
            </div>
          </div>
        ) : null}
      </Modal>
    </Fragment>
  );
};

export default ProductDisplayPage;
