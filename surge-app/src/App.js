import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import NavBar from "./components/Navigation/NavBar";
import SideBar from "./components/SideBar/SideBar";
import PageFade from "./components/SideBar/PageFade";
import Home from "./components/Home";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    sidebarOpen: false
  };

  sidebarToggleClickHandler = () => {
    this.setState(previousState => {
      return { sidebarOpen: !previousState.sidebarOpen };
    });
  };

  pagefadeClickHandler = () => {
    this.setState({ sidebarOpen: false });
  };

  render() {
    let pagefade;

    if (this.state.sidebarOpen) {
      pagefade = <PageFade click={this.pagefadeClickHandler}></PageFade>;
    }

    return (
<<<<<<< HEAD
      <div className="App">
        <Home></Home>
      </div>
=======
      <Router>
        <div className="App">
          <NavBar sidebarClickHandler={this.sidebarToggleClickHandler}></NavBar>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <SideBar visibility={this.state.sidebarOpen}></SideBar>
          {pagefade}
        </div>
      </Router>
>>>>>>> d504d96f71e755597509e8e05e9069f557c3ef41
    );
  }
}

export default App;
