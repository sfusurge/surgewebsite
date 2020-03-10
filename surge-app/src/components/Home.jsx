import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";


import "../style/home.css";
import homeTitle from "../assets/SURGETITLE.png";
import whoAreWe from "../assets/whoAreWe.png";
import rect from "../assets/rectangle.png";
import whatWeDoImg1 from "../assets/whatWeDoImg1.png";
import whatWeDoImg2 from "../assets/whatWeDoImg2.png";
import whatWeDoImg3 from "../assets/whatWeDoImg3.png";
import eventsBgRectangle from "../assets/eventsBgRectangle.png";
import eventImg1 from "../assets/eventImg1.png";
import eventImg2 from "../assets/eventImg2.png";
import Footer from "./Navigation/Footer.js";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment className="appContainer">
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
                      SFU Surge is an all-inclusive organization to promote
                      curiosity and excitement for a future in technology, while
                      guiding students on their paths to career success.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </div>

            
            
        <div className="container-fluid" id="bluebg">
            
          <div className="sectionHeadingDiv">
            <p className="sectionHeading">What We Do</p>
          </div>
          <div className="whatWeDoDiv">
            <Container>
              <Row>
                <Col lg={4} md={4} sm={6} xs={4}>
                  <div class="whatWeDoImgs">
                    <p className="whatWeDoImgText1">Projects</p>
                    <Image className="img-fluid" src={whatWeDoImg1} fluid />
                  </div>
                </Col>
                <Col lg={4} md={4} sm={6} xs={4}>
                  <div class="whatWeDoImgs">
                    <p className="whatWeDoImgText2">Workshops</p>
                    <Image className="img-fluid" src={whatWeDoImg2} fluid />
                  </div>
                </Col>
                <Col lg={4} md={4} sm={6} xs={4}>
                  <div class="whatWeDoImgs">
                    <p className="whatWeDoImgText3">Events</p>
                    <Image className="img-fluid" src={whatWeDoImg3} fluid />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

            
            
        <div className="container-fluid">
          <div className="sectionHeadingDiv">
            <p className="sectionHeading">Upcoming Events</p>
          </div>

          <Container>
            <div className="eventsDiv">
              {/*  EVENT1  */}
              <Container>
                <Row>
                  <Col>
                    <div className="eventsBgRectangles">
                      <div className="eventImgs">
                        <Image className="img-fluid" src={eventImg1} />
                      </div>
                      <div className="eventTexts">
                        <h className="eventHeadingStyle">TECH Talk</h>
                        <p className="eventTextStyle">
                          Want to learn more about the process of
                          entrepreneurship and the intersections between
                          business and technology? We are thrilled to announce
                          TECH Talk with guest speaker Jeremy Becker!{" "}
                          <a href="" className="learnMoreStyle">
                            Learn More
                          </a>
                        </p>
                      </div>
                    </div>
                  </Col>
                  {/*  EVENT2  */}
                  <Col>
                    <div className="eventsBgRectangles">
                      <div className="eventImgs">
                        <Image className="img-fluid" src={eventImg2} />
                      </div>
                      <div className="eventTexts">
                        <h className="eventHeadingStyle">Linux Workshop</h>
                        <p className="eventTextStyle">
                          On November 22, Kasra Jamshidi will be teaching the
                          basic skills and foundation needed to operate and run
                          Linux. A majority (if not all) of tech-related jobs
                          and classes rely heavily on this system, especially
                          scripting.{" "}
                          <a href="" className="learnMoreStyle">
                            Learn More
                          </a>
                        </p>
                      </div>
                    </div>
                  </Col>
                  {/* Copy-paste above if want more cards */}
                  {/*  COMING SOON */}
                  <Col>
                    <div className="moreComing">
                      <p className="moreComingStyle">
                        More Events Coming Soon!
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Container>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Home;
