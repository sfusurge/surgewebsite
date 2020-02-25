import React, { Component } from "react";
import Projects from "./components/Projects";
import NavBar from './components/Navigation/NavBar'
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Projects></Projects>
      </div>
    );
  }
}

export default App;