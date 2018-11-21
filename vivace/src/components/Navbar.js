import React, { Component } from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-light navbar-expand-lg" role="navigation">
        <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbar-collapse"
        >
          <span class="navbar-toggler-icon" />
        </button>

        {/* <a class="navbar-brand" href="#">React</a> */}

        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbar-collapse"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              {/* <a class="nav-link" href="#">Nav link</a> */}
            </li>
            <li class="nav-item dropdown">
              {/* <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
                    Dropdown
                    <i class="ion-chevron-down"></i>
                    </a> */}
              <div class="dropdown-menu" role="menu">
                {/* <a class="dropdown-item" href="#">Item 1</a>
                    <a class="dropdown-item" href="#">Item 2</a>
                    <a class="dropdown-item" href="#">Item 3</a> */}
              </div>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link nav-link--rounded" href="#">
                    Rounded link
                    </a> */}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
