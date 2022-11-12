import React from "react";

const Mensaje = (props) => {
  return <div className="alerta">{props.children}</div>;
};

export default Mensaje;
