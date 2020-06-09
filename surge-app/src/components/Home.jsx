import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

import "../style/home.css";
import homeTitle from "../assets/SURGETITLE.png";
import whoAreWe from "../assets/whoAreWe.png";
import rect from "../assets/rectangle.png";
import whatWeDoImg1 from "../assets/Projects.jpg";
import whatWeDoImg2 from "../assets/Workshops.jpg";
import whatWeDoImg3 from "../assets/Events.jpg";
import eventsBgRectangle from "../assets/eventsBgRectangle.png";
import cardRect from "../assets/cardRect.png";
import leetcode from "../assets/leetcodeParties.jpg";
import Footer from "./Navigation/Footer.js";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid" id="homeHeaderImg">
          <section id="pgHeadingHome">
            <div className="titleDiv">
              <img
                className="img-fluid"
                src={homeTitle}
                alt=""
                id="homeTitle"
              />
            </div>
          </section>

          <div className="EEIdiv">
            <Container>
              <Row>
                <Col md={({ offset: 6 }, 12)} xs={11} sm={12}>
                  <p className="EEI">
                    <b>Engage • Empower • Innovate </b>
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="mobileEEIdiv">
            <Container>
              <Row>
                <div className="EEItext">
                  <b>Engage • Empower • Innovate </b>
                </div>
              </Row>
            </Container>
          </div>
        </div>

        <div className="container-fluid">
          <div className="imgAndText">
            <Container>
              <div className="whoAreWeDiv">
                <Row>
                  <Col lg={6}>
                    <Image className="img-fluid" src={whoAreWe} />
                  </Col>
                  <Col lg={6}>
                    <p className="whoAreWeHeading">Who Are We</p>
                    <p className="whoAreWeText">
                      {" "}
                      SFU Surge is an all-inclusive organization to promote{" "}
                      <b>
                        curiosity and excitement for a future in technology,
                      </b>{" "}
                      while guiding students on their paths to{" "}
                      <b>career success</b>.
                    </p>
                    <div className="action-btns">
                      <a
                        role="button"
                        id="joinNewsletterBtn"
                        className="btn btn-primary"
                        href={
                          "https://gmail.us4.list-manage.com/subscribe/post?u=33345c9bc17f10bac6afdd0ac&id=736d801cb8"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Join our newsletter!
                      </a>
                      <Link to="/about">
                        <button
                          type="button"
                          id="learnMoreButton"
                          className="btn btn-secondary"
                        >
                          Learn more
                        </button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </div>

        <div className="container-fluid" id="bluebg">
          <section>
            <div className="sectionHeadingDiv">
              <p className="sectionHeading">What We Do</p>
            </div>
            <div className="whatWeDoDiv">
              <Container>
                <div className="row">
                  <div className="col-sm">
                    <div className="whatWeDoImgs">
                      <Image className="img-fluid" src={whatWeDoImg1} fluid />
                      <div className="whatWeDoImgText1">Projects</div>
                    </div>
                  </div>

                  <div className="col-sm">
                    <div className="whatWeDoImgs">
                      <div className="whatWeDoImgText2">Workshops</div>
                      <Image className="img-fluid" src={whatWeDoImg2} fluid />
                    </div>
                  </div>

                  <div className="col-sm">
                    <div className="whatWeDoImgs">
                      <div className="whatWeDoImgText3">Events</div>
                      <Image className="img-fluid" src={whatWeDoImg3} fluid />
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </section>
        </div>

        <div className="container-fluid">
          <section>
            <div className="sectionHeadingDiv">
              <p className="sectionHeading">Upcoming Events</p>
            </div>

            <div
              id="eventsCarousel"
              className="carousel slide"
              /*data-ride="carousel"*/
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card-deck">
                    <div className="card" id="bluebg">
                      <img className="card-img-top" src={leetcode} alt="" />
                      <div className="card-body">
                        <h2 className="boldHeader">LEETCODE Parties</h2>
                        <div className="scrollableText">
                          <p className="card-text">
                            Starting June 1st, Surge will be hosting weekly
                            LeetCode workshops online! Leetcode is an online
                            platform that serves as a gateway to entering the
                            professional world of the tech industry. It is an
                            essential tool that helps students to excel in
                            technical interviews. Our workshops will allow you
                            to collaborate and tackle different problems of
                            varying skill levels. Each session will be
                            instructed by former Microsoft intern Ali Khamesy.
                          </p>
                        </div>
                        <div className="eventLink">
                          <a
                            className="boldHeader"
                            href="https://www.facebook.com/events/2951965301517769/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            —Learn more
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="card" id="bluebg">
                      <img className="card-img-top" src={cardRect} alt="" />
                      <div className="card-body">
                        <h2 className="boldHeader">PROJECTS Showcase</h2>
                        <div className="scrollableText">
                          <p className="card-text">
                            Join us on Tuesday, March 31st for a showcase of the
                            projects that SFU Surge has been working hard on for
                            the past months. Come out for food and an
                            opportunity to see what our talented teams have been
                            building and designing!
                          </p>
                        </div>
                        <div className="eventLink">
                          <a
                            className="boldHeader"
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            —Learn more
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="card text-center" id="bluebg">
                      <div className="card-body" id="moreComingBody">
                        <div className="moreComing">
                          <p className="card-text" id="moreComingStyle">
                            MORE EVENTS COMING SOON!
                          </p>
                        </div>
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

export default Home;
