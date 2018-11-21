import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Catalog from "./components/Catalog";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/Catalog" component={Catalog} />
        </Switch>
      </div>
    );
  }
}

export default App;
