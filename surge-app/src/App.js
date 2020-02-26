import React, { Component } from "react";
import Projects from "./components/Projects";
import NavBar from './components/Navigation/NavBar';
import Footer from './components/Navigation/Footer';
import SideBar from './components/SideBar/SideBar';
import PageFade from './components/SideBar/PageFade';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    sidebarOpen: false
  };

  sidebarToggleClickHandler = () => {
    this.setState((previousState) => {
      return {sidebarOpen: !previousState.sidebarOpen};
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <SideBar></SideBar>
        <PageFade></PageFade>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;