import React, { Component } from "react";
import "../style/home.css";
import homeTitle from "../assets/SURGETITLE.png";
import whoAreWe from "../assets/whoAreWe.png";
import rect from "../assets/rectangle.png";
import whatWeDoImg1 from "../assets/whatWeDoImg1.png"
import whatWeDoImg2 from "../assets/whatWeDoImg2.png"
import whatWeDoImg3 from "../assets/whatWeDoImg3.png"
import eventsBgRectangle from "../assets/eventsBgRectangle.png"
import eventImg1 from "../assets/eventImg1.png"
import eventImg2 from "../assets/eventImg2.png"
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
            <p className="EEI">
              <b>Engage • Empower • Innovate </b>
            </p>
          </div>
        </div>

        <div className="container-fluid">
          <div className="imgAndText">
            <div className="whoAreWeDiv">
              <img
                className="img-fluid"
                src={whoAreWe}
                alt=""
              />
            </div>

            <div className = "imgText">
              <p className="whoAreWeHeading">Who Are We</p>
              <p className="whoAreWeText"> SFU Surge is an all-inclusive organization to promote curiosity and excitement for a future in technology, while guiding students on their paths to career success.</p>
            </div>
          </div>
        </div>

        <div className="container-fluid" id="bluebg">
          <div className="sectionHeadingDiv">
            <p  className="sectionHeading">What We Do</p>
          </div>
          <div className="whatWeDoDiv">
            <div className="whatWeDoImg1">
              <img
                className="img-fluid"
                src={whatWeDoImg1}
                alt=""
              />
              <p className="whatWeDoImgText1">Projects</p>
            </div>
            <div className="whatWeDoImg2">
              <img
                className="img-fluid"
                src={whatWeDoImg2}
                alt=""
              />
            </div>
            <p className="whatWeDoImgText2">Workshops</p>
            <div className="whatWeDoImg3">
              <img
                className="img-fluid"
                src={whatWeDoImg3}
                alt=""
              />
            </div>
            <p className="whatWeDoImgText3">Events</p>
          </div>
        </div>

        <div className="container-fluid">
          <div className="sectionHeadingDiv">
            <p  className="sectionHeading">Upcoming Events</p>
          </div>

          <div className="eventsDiv">
            <div className="eventsBgRectangle1">
              <img
                className="img-fluid"
                src={eventsBgRectangle}
                alt=""
              />
            </div>
            <div className="eventImg1">
              <img
                className="img-fluid"
                src={eventImg1}
                alt=""
              />
            </div>
            <div className="eventText1">
              <h className="eventHeadingStyle">TECH Talk</h>
              <p className="eventTextStyle">Want to learn more about the process of entrepreneurship and the intersections between business and technology? We are thrilled to announce TECH Talk with guest speaker Jeremy Becker!</p>
            </div>
            <div className="learnMore1">
              <a href="" className="learnMoreStyle">Learn More</a>
            </div>

            <div className="eventsBgRectangle2">
              <img
                className="img-fluid"
                src={eventsBgRectangle}
                alt=""
              />
              <div className="eventImg2">
                <img
                  className="img-fluid"
                  src={eventImg2}
                  alt=""
                />
              </div>
              <div className="eventText2">
                <h className="eventHeadingStyle">Linux Workshop</h>
                <p className="eventTextStyle">On November 22, Kasra Jamshidi will be teaching the basic skills and foundation needed to operate and run Linux. A majority (if not all) of tech-related jobs and classes rely heavily on this system, especially scripting.</p>
              </div>
              <div className="learnMore2">
                <a href="" className="learnMoreStyle">Learn More</a>
              </div>
            </div>

            <div className="eventsBgRectangle3">
              <img
                className="img-fluid"
                src={eventsBgRectangle}
                alt=""
              />
            </div>

            <div className="moreComing">
              <p className="moreComingStyle">More Events Comming Soon!</p>
            </div>
          </div>

        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Home;
