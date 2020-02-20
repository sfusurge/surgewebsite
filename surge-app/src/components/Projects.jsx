import React, { Component } from "react";
import "../App.css";
import projectsTitle from "../assets/PROJECTSTITLE.png";
import rect from "../assets/rectangle.png";

class Projects extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid" id="projectsHeaderImg">
          <section id="pgHeading">
            <div id="overlay-div">
              <img
                className="img-fluid"
                src={projectsTitle}
                alt=""
                id="pageTitle"
              />
            </div>

            <p>
              Project Hub is is a student-run software engineering team devoted
              to building software projects in a collaborative and professional
              environment. Our primary objective is to be the best space at SFU
              for students to meet other tech enthusiasts, build projects in a
              team setting, gain experience with professional development tools
              and principles, and share their knowledge with others. We form
              teams based on common interests and project ideas of our own
              choosing, and hack on our projects to completion!
            </p>
          </section>
        </div>
        <div className="container-fluid p-5" id="bluebg">
          <section id="projectExecs">
            <h1 className="boldHeader">Project Executives</h1>
            <div className="row">
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt="" />
                  <figcaption className="figure-caption">Grace</figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="figure-caption">Name</figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="figure-caption">Name</figcaption>
                </figure>
              </div>
              <div className="w-100"></div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="figure-caption">Name</figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="figure-caption">Name</figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="figure-caption">Name</figcaption>
                </figure>
              </div>
            </div>
          </section>
        </div>
        <div className="container-fluid p-5">
          <section>
            <h1 className="boldHeader">Our Projects</h1>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
