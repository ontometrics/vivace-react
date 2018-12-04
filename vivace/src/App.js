import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Catalog from "./components/Catalog";
import HomePage from "./components/HomePage";
import ArtistPage from "./components/ArtistPage";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/Catalog" component={Catalog} />
          <Route exact path="/HomePage" component={HomePage} />
          <Route exact path="/artists" component={ArtistPage} />
          <Redirect to="/HomePage" />
        </Switch>
      </div>
    );
  }
}

export default App;
