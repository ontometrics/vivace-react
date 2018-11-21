import React, { Component } from "react";
import CatalogTiles from "./CatalogTiles";

class Catalog extends React.Component {
  createTiles = () => {};
  render() {
    return (
      <div>
        Catalog
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 col-lg-4"
              style={{ border: "black solid 1px" }}
            >
              <CatalogTiles />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Catalog;
