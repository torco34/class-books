import React from "react";
import { Search } from "./Search";
import "./css/Menu.css";
import { PanelAdd } from "./PanelAdd";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newItemPanel: false };

    this.add = this.add.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }
  add() {
    this.setState({ newItemPanel: true });
  }
  onCancel() {
    this.setState({ newItemPanel: false });
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
            <button onClick={this.add} className="button btn-info">
              Anadir libros
            </button>
          </div>
        </div>
        {this.state.newItemPanel ? (
          <PanelAdd oncancel={this.onCancel} onadd={this.props.onadd} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export { Menu };
