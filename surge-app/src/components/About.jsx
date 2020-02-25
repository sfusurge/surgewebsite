import React, { Component } from "react";
import "../App.css";
import aboutUsTitle from "../assets/ABOUT US.png";
import rect from "../assets/rectangle.png";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid" id="aboutUsHeaderImg">
          <section id="pgHeading">
            <div className="titleDiv">
              <img
                className="img-fluid"
                src={aboutUsTitle}
                alt=""
                id="pageTitle"
              />
            </div>

            <div>
              <p className="description">
                SFU Surge is an all-inclusive organization to promote{" "}
                <b>curiosity and excitement for a future in technology,</b>{" "}
                while guiding students on their paths to <b>career success</b>.
                An innovative community which empowers students to gain access
                to readily available networking, and connect their shared
                experiences with designers, engineers, programmers and
                developers alike. We want to make an impact to offer resources,
                support, and opportunities to ensure each <b>project</b> is
                presentable to potential employers – and give students more
                experience before they head out into the real world. The{" "}
                <b>events</b> challenge participants to be ambitious about their
                process and end goals, with plenty of room to improve and
                accelerate. Guidance in <b>mentorship sessions, mixers,</b> and{" "}
                <b>talks</b> help students succeed and encourage them through
                personal and inspirational connections.
              </p>
            </div>

            <div>
              <p className="description">
                SFU Surge is an all-inclusive organization to promote{" "}
                <b>curiosity and excitement for a future in technology,</b>{" "}
                while guiding students on their paths to <b>career success</b>.
                An innovative community which empowers students to gain access
                to readily available networking, and connect their shared
                experiences with designers, engineers, programmers and
                developers alike. We want to make an impact to offer resources,
                support, and opportunities to ensure each <b>project</b> is
                presentable to potential employers – and give students more
                experience before they head out into the real world. The{" "}
                <b>events</b> challenge participants to be ambitious about their
                process and end goals, with plenty of room to improve and
                accelerate. Guidance in <b>mentorship sessions, mixers,</b> and{" "}
                <b>talks</b> help students succeed and encourage them through
                personal and inspirational connections.
              </p>
            </div>
          </section>
        </div>
        <div className="container-fluid p-5" id="bluebg">
          <section id="surgeTeam">
            <h1 className="boldHeader">Our Team</h1>
            <div className="row">
              <div className="col-sm">
                <img className="figure-img" src={rect} alt="" />
                <figcaption className="font-weight-bold">
                  Jeffrey Leung
                </figcaption>
                <figcaption className="position">Co-President</figcaption>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Hilal Asmat
                  </figcaption>
                  <figcaption className="position">Co-President</figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Praneer Shrestha
                  </figcaption>
                  <figcaption className="position">Vice-President</figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Naomi Tran
                  </figcaption>
                  <figcaption className="position">Secretary</figcaption>
                </figure>
              </div>
              <div className="w-100"></div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Dani Braceros
                  </figcaption>
                  <figcaption className="position">
                    Director of Operations
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Joseph Chao
                  </figcaption>
                  <figcaption className="position">
                    Director of Internal Relations
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Noble Tran
                  </figcaption>
                  <figcaption className="position">
                    Director of Logistics
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Vivian Wong
                  </figcaption>
                  <figcaption className="position">
                    Director of Logistics
                  </figcaption>
                </figure>
              </div>
              <div className="w-100"></div>
              <div className="col-sm">
                <img className="figure-img" src={rect} alt="" />
                <figcaption className="font-weight-bold">
                  Kaveh Alemi
                </figcaption>
                <figcaption className="position">
                  Director of External Relations
                </figcaption>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="font-weight-bold">Fiona Wu</figcaption>
                  <figcaption className="position">
                    Director of Finance
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Ali Khamesy
                  </figcaption>
                  <figcaption className="position">
                    Director of Finance
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Ishaan Bedi
                  </figcaption>
                  <figcaption className="position">
                    Director of Events
                  </figcaption>
                </figure>
              </div>
              <div className="w-100"></div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Julia Kim
                  </figcaption>
                  <figcaption className="position">
                    Director of Events
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="font-weight-bold">Emma Wu</figcaption>
                  <figcaption className="position">
                    Director of Marketing
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Kim Regala
                  </figcaption>
                  <figcaption className="position">
                    Social Media Director
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Michelle Swolfs
                  </figcaption>
                  <figcaption className="position">
                    Creative Director
                  </figcaption>
                </figure>
              </div>
              <div className="w-100"></div>
              <div className="col-sm-3 ">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="font-weight-bold">Art Yang</figcaption>
                  <figcaption className="position">
                    Executive at Large
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-1">
                <h1 className="hashtag">#TechStartsHere</h1>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
