import React, { Component } from "react";
import Projects from "./components/Projects";
import About from "./components/About";
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Navigation/Footer";
import SideBar from "./components/SideBar/SideBar";
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
