import React from "react";
import Carousel from "./Carousel.js";
import Catalog from "./Catalog.js";

class Homepage extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(" + "img/IMG_2495.jpg" + ")",
          // backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "88vh",
          width: "100vw"
        }}
      >
        <Carousel />
        {/* <Catalog /> */}
      </div>
    );
  }
}

export default Homepage;
