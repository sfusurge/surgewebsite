import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import NavBar from "./components/Navigation/NavBar";
import SideBar from "./components/SideBar/SideBar";
import PageFade from "./components/SideBar/PageFade";
import Home from "./components/Home";


class App extends Component {
  state = {
    sidebarOpen: false
  };

  sidebarToggleClickHandler = () => {
    this.setState((previousState) => {
      return {sidebarOpen: !previousState.sidebarOpen};
    });
  };

  pagefadeClickHandler = () => {
    this.setState({sidebarOpen: false});
  }

  render() {
    let pagefade;

    if (this.state.sidebarOpen) {
      pagefade = <PageFade click={this.pagefadeClickHandler}></PageFade>;
    }

    return (
      <Router>
        <div className="App">
          <NavBar sidebarClickHandler={this.sidebarToggleClickHandler}></NavBar>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <SideBar visibility={this.state.sidebarOpen}></SideBar>
          {pagefade}
        </div>
      </Router>
    );
  }
}

export default App;
