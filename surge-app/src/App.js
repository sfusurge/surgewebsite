import React, { Component } from "react";
import "./App.css";
import Projects from "./components/Projects";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <About></About>
        <Projects></Projects>
      </div>
    );
  }
}

export default App;
