import React from "react";

class CatalogTiles extends React.Component {
  setData = () => {
    this.props.setModalData(this.props.data);
  };

  render() {
    var tileStyle = {
      backgroundImage: "url(" + this.props.data.image_url + ")"
    };
    return (
      <div>
        <span href="portfolio-item.html" className="project">
          <span className="mask" onClick={() => this.setData()}>
            <span className="info">
              <h3>{this.props.data.cd_name}</h3>
            </span>
          </span>
          <span style={tileStyle} className="pic" />
        </span>
      </div>
    );
  }
}
export default CatalogTiles;
