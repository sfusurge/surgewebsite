import React, { Component } from "react";
import "../App.css";
import projectsTitle from "../assets/PROJECTSTITLE.png";
import rect from "../assets/rectangle.png";
import cardRect from "../assets/cardRect.png";
import NavBar from "./Navigation/NavBar";
import Footer from "./Navigation/Footer";

class Projects extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
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

            <p className="description">
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
                  <figcaption className="font-weight-bold">
                    Grace Luo
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Rauf Shimarov
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Jocelyn Gao
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
        </div>
        <div className="container-fluid p-5">
          <section>
            <h1 className="boldHeader">Our Projects</h1>

            <div
              id="projectsCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <ul className="carousel-indicators">
                <li
                  data-target="#projectsCarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#projectsCarousel" data-slide-to="1"></li>
              </ul>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card-deck">
                    <div className="card">
                      <img className="card-img-top" src={cardRect} alt="" />
                      <div className="card-body">
                        <h2 className="boldHeader">Pac Macro</h2>
                        <p className="card-text">
                          Play Pac-Man in real life across 5 square blocks of
                          Downtown Vancouver. Track the locations of other enemy
                          players through an application on your phone, and hunt
                          them down mercilessly.
                        </p>
                        <a href="">—View Project</a>
                      </div>
                    </div>

                    <div className="card">
                      <img className="card-img-top" src={cardRect} alt="" />
                      <div className="card-body">
                        <h2 className="boldHeader">Degree Navigator</h2>
                        <p className="card-text">
                          Degree Navigator is aimed to incorporate the power of
                          web scraping and data visualization to aggregate
                          information about every SFU course and present them to
                          the user in a visual and interactive way.
                        </p>
                        <a href="">—View Project</a>
                      </div>
                    </div>

                    <div className="card">
                      <img className="card-img-top" src={cardRect} alt="" />
                      <div className="card-body">
                        <h2 className="boldHeader">Storm Area 52</h2>
                        <p className="card-text">
                          Aliens, future tech, Shrek 5. All that and more are
                          kept in the top secret military base Area 52. Team up
                          with a friend to grab as much evidence as you can and
                          get out before the alarms go off.
                        </p>
                        <a href="">—View Project</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="card-deck">
                    <div className="card">
                      <img className="card-img-top" src={cardRect} alt="" />
                      <div className="card-body">
                        <h2 className="boldHeader">Pac Macro</h2>
                        <p className="card-text">
                          Play Pac-Man in real life across 5 square blocks of
                          Downtown Vancouver. Track the locations of other enemy
                          players through an application on your phone, and hunt
                          them down mercilessly.
                        </p>
                        <a href="">—View Project</a>
                      </div>
                    </div>

                    <div className="card">
                      <img className="card-img-top" src={cardRect} alt="" />
                      <div className="card-body">
                        <h2 className="boldHeader">Pac Macro</h2>
                        <p className="card-text">
                          Play Pac-Man in real life across 5 square blocks of
                          Downtown Vancouver. Track the locations of other enemy
                          players through an application on your phone, and hunt
                          them down mercilessly.
                        </p>
                        <a href="">—View Project</a>
                      </div>
                    </div>

                    <div className="card">
                      <img className="card-img-top" src={cardRect} alt="" />
                      <div className="card-body">
                        <h2 className="boldHeader">Pac Macro</h2>
                        <p className="card-text">
                          Play Pac-Man in real life across 5 square blocks of
                          Downtown Vancouver. Track the locations of other enemy
                          players through an application on your phone, and hunt
                          them down mercilessly.
                        </p>
                        <a href="">—View Project</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Projects;
