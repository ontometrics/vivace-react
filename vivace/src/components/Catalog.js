import React, { Component } from "react";
import CatalogTiles from "./CatalogTiles";
import AlbumModal from "./AlbumModal";

class Catalog extends React.Component {
  state = {
    albumModal: true
  };

  toggleAlbumModal = () => {
    this.setState({
      albumModal: !this.state.albumModal
    });
  };

  render() {
    var data = require("../api/albums.json"); // forward slashes will depend on the file location
    // var pData = JSON.parse(data);
    console.log(data);

    // for(var i = 0; i < data.length; i++) {
    //   var obj = data[i];

    //   console.log("ID: " + obj.id + ", Album Name" + obj.cd_name);
    // }

    return (
      <div>
        Catalog
        <div className="gallery-portfolio">
          <div className="container no-override">
            <div className="row no-gutters">
              {data.map(data => (
                <div
                  key={data.id}
                  className="col-md-6 col-lg-4"
                  style={{ border: "black solid 1px" }}
                >
                  <CatalogTiles
                    data={data}
                    toggleAlbumModel={this.toggleAlbumModal}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <AlbumModal
          albumModal={this.state.albumModal}
          toggleAlbumModal={this.toggleAlbumModal}
        />
      </div>
    );
  }
}
export default Catalog;
