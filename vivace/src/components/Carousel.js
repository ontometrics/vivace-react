import React, { Component } from "react";

class Carousel extends React.Component {
    data = require("../api/albums.json"); // forward slashes will depend on the file location
    render() {
      return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <img class="d-block img-fluid"  src="img/IMG_2495.jpg" alt="First slide"/>
                <div class="carousel-caption d-none d-md-block">
                  <h2>Put an album Tile in here or something, and new release info</h2>
                  <p>Slide 1 subtitle text</p>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block img-fluid" src="img/IMG_2495.jpg" alt="Second slide"/>
                <div class="carousel-caption d-none d-md-block">
                <h2>Put an album Tile in here or something, and new release info</h2>
                  <p>Slide 2 subtitle text</p>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block img-fluid"  src="img/IMG_2495.jpg" alt="Third slide"/>
                <div class="carousel-caption d-none d-md-block">
                <h2>Put an album Tile in here or something, and new release info</h2>
                  <p>Slide 3 subtitle text</p>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
      );
    }
}

export default Carousel;
