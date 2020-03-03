import React, { Component } from "react";
import Projects from "./components/Projects";
import NavBar from './components/Navigation/NavBar';
import Footer from './components/Navigation/Footer';
// import SideBar from './components/SideBar/SideBar';
// import PageFade from './components/SideBar/PageFade';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  // state = {
  //   sidebarOpen: false
  // };

  // sidebarToggleClickHandler = () => {
  //   this.setState((previousState) => {
  //     return {sidebarOpen: !previousState.sidebarOpen};
  //   });
  // };

  // pagefadeClickHandler = () => {
  //   this.setState({sidebarOpen: false});
  // }

  render() {
    // let pagefade;

    // if (this.state.sidebarOpen){
    //   pagefade=<PageFade click={this.pagefadeClickHandler}></PageFade>
    // }

    return (
      <div className="App">
        <NavBar></NavBar>
        {/* <NavBar sidebarClickHandler={this.sidebarToggleClickHandler}></NavBar> */}
        {/* <SideBar visibility={this.state.sidebarOpen}></SideBar> */}
        {/* {pagefade} */}
        <Projects></Projects>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;