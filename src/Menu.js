import React from "react";
import { Search } from "./Search";
import "./css/Menu.css";
class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="subcontainer">
          <div className="logo">{this.props.title}</div>
          <div className="search">
            <Search />
          </div>
          <div className="action">
            <button className="button btn-info">Anadir libros</button>
          </div>
        </div>
      </div>
    );
  }
}

export { Menu };
