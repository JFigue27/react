import React from "react";
import "./search.css";

/* function Serach(props) {
  return <form action="" />;
} */

const Serach = props => (
  <form action="" className="Search" onSubmit={props.handleSubmit}>
    <input
      ref={props.setRef}
      type="text"
      className="Search-input"
      name="Search"
      onChange={props.handleChange}
      value={props.value}
      placeholder="Busca tu video favorito"
    />
  </form>
);

export default Serach;
