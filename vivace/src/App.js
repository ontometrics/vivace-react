<<<<<<< HEAD
import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
=======
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Gallery from "./components/Gallery";
>>>>>>> added gallery base

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <Navbar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
=======
      //   <div className="App">
      //     <header className="App-header">
      //       <img src={logo} className="App-logo" alt="logo" />
      //       <p>
      //         Edit <code>src/App.js</code> and save to reload.
      //       </p>
      //       <a
      //         className="App-link"
      //         href="https://reactjs.org"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         Learn React
      //       </a>
      //     </header>
      //   </div>
      <div>
        <h1>Test</h1>
        {Gallery}
>>>>>>> added gallery base
      </div>
    );
  }
}

export default App;
