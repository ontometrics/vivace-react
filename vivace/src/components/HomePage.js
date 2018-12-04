import React from "react";
import Carousel from "./Carousel.js";
import Catalog from "./Catalog.js"
class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Carousel/>
        <Catalog/>
      </div>
    );
  }
}

export default Homepage;
