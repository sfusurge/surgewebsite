import React, { Component } from "react";
import Projects from "./components/Projects";
import NavBar from './components/Navigation/NavBar'
import Footer from './components/Navigation/Footer'
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;