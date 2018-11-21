import React from "react";

class CatalogTiles extends React.Component {
  render() {
    var tileStyle = {
      backgroundImage: "url(" + this.props.data.image_url + ")"
    };
    return (
      <div>
        <a href="portfolio-item.html" className="project">
          <span className="mask">
            <span className="info">
              <h3>Landscape Trip</h3>
              <p>Blog About spacial trips</p>
            </span>
            <span className="btn-see-project">See project</span>
          </span>
          <span style={tileStyle} className="pic" />
          {/* <img src={this.props.data.image_url} /> */}
          {/* {console.log(this.props.data.image_url)} */}
        </a>
      </div>
    );
  }
}
export default CatalogTiles;
