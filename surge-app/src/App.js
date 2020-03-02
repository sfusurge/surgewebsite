import React, { Component } from "react";
import "./App.css";
import Projects from "./components/Projects";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home></Home>
      </div>
    );
  }
}

export default App;
