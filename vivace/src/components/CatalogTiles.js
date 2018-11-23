import React from "react";

class CatalogTiles extends React.Component {
  render() {
    var tileStyle = {
      backgroundImage: "url(" + this.props.data.image_url + ")"
    };
    return (
      <div>
        <span href="portfolio-item.html" className="project">
          <span className="mask">
            <span className="info">
              <h3>{this.props.data.cd_name}</h3>
            </span>
          </span>
          <span style={tileStyle} className="pic" />
          {/* <img src={this.props.data.image_url} /> */}
          {/* {console.log(this.props.data.image_url)} */}
        </span>
        <button onClick={this.props.toggleAlbumModal}>test</button>
      </div>
    );
  }
}
export default CatalogTiles;
