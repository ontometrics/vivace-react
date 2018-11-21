import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <NavLink className="btn green" to="/homepage">
          Home
        </NavLink>
        <NavLink className="btn green" to="/catalog">
          Catalog
        </NavLink>
      </div>
    );
  }
}

export default withRouter(Navbar);
