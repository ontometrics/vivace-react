import React, { Component } from "react";
//import jsonData from '../api/albums.json';
class Gallery extends React.Component {
  
  render() {
    var data = require('../api/albums.json'); // forward slashes will depend on the file location

  for(var i = 0; i < data.length; i++) {
    var obj = data[i];

    console.log("ID: " + obj.id + ", Album Name" + obj.cd_name);
  }
    return <div>gallery</div>;
  }
}
export default Gallery;
