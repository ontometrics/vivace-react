import React from "react";
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light navbar-expand-lg" role="navigation">
          <button class="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse">
            <span class="navbar-toggler-icon"></span>
          </button>

          <NavLink className="btn green navbar-brand" to="/homepage">
                  <img src="img/VivLogo.png" style={{"height" : "50px"}}/>
          </NavLink>  

          <div class="collapse navbar-collapse justify-content-end" id="navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink className="btn green nav-link" to="/homepage">
                  Home
                </NavLink>  
              </li>
              <li class="nav-item">
                <NavLink className="btn green nav-link" to="/catalog">
                  Catalog
                </NavLink>  
              </li>
              <li class="nav-item">
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
