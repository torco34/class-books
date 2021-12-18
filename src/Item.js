import React from "react";
import "./css/Item.css";
const Item = (props) => {
  return (
    <div className="item">
      <div className="image">
        <img src={"img/" + props.image} width="100%" />
      </div>
      <div className="title">{props.title}</div>
      <div className="rating">
        <p></p>
        Calificación:
        <select value={props.rating}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="actions">
        <button>Eliminar</button>
      </div>
    </div>
  );
};
export { Item };
