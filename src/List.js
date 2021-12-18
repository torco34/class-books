import React from "react";
import { Item } from "./Item";
const List = (props) => {
  return (
    <div className="list">
      {props.items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          rating={item.rating}
        />
      ))}
    </div>
  );
};
export { List };
