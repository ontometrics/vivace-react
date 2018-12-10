import React from "react";
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light navbar-expand-lg" role="navigation">
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbar-collapse"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <NavLink className="btn green navbar-brand" to="/homepage">
            <img src="img/VivLogo.png" style={{ height: "50px" }} />
          </NavLink>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbar-collapse"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="btn green nav-link" to="/homepage">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="btn green nav-link" to="/catalog">
                  Catalog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="btn green nav-link" to="/artists">
                  Artists
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
