import React, { Component } from "react";
import aboutUsTitle from "../assets/ABOUT US.png";
import TechStartsHere from "../assets/#TechStartsHere.png";
import rect from "../assets/rectangle.png";
import jeffrey from "../assets/headshots/jeffrey.JPG";
import ali from "../assets/headshots/ali.JPG";
import praneer from "../assets/headshots/praneer.JPG";
import art from "../assets/headshots/art.JPG";
import emma from "../assets/headshots/emma.JPG";
import julia from "../assets/headshots/julia.JPG";
import vivian from "../assets/headshots/vivian.JPG";
import joseph from "../assets/headshots/joseph.JPG";
import kim from "../assets/headshots/kim.JPG";
import noble from "../assets/headshots/noble.JPG";
import hilal from "../assets/headshots/hilal.JPG";
import naomi from "../assets/headshots/naomi.JPG";
import michelle from "../assets/headshots/michelle.JPG";
import ishaan from "../assets/headshots/ishaan.JPG";
import fiona from "../assets/headshots/fiona.JPG";

import Footer from "./Navigation/Footer";

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

            <p className="contactDescription">
              You can get in contact with us by emailing sfusurge@gmail.com, or
              by messaging us on{" "}
              <a
                href={"https://www.facebook.com/sfusurge"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              ,{" "}
              <a
                href={"https://www.instagram.com/sfusurge/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              , or{" "}
              <a
                href={"https://twitter.com/sfusurge"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              . Also, be sure to sign up for our{" "}
              <a
                href={
                  "https://gmail.us4.list-manage.com/subscribe/post?u=33345c9bc17f10bac6afdd0ac&id=736d801cb8"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Newsletter
              </a>{" "}
              to stay up to date with all our events!
            </p>
          </section>
        </div>
        <div className="container-fluid p-5" id="bluebg">
          <section id="surgeTeam">
            <h1 className="boldHeader">Our Team</h1>
            <div className="row">
              <div className="col-sm">
                <img className="figure-img" src={jeffrey} alt="" />
                <figcaption className="font-weight-bold">
                  Jeffrey Leung
                </figcaption>
                <figcaption className="position">Co-President</figcaption>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={hilal} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Hilal Asmat
                  </figcaption>
                  <figcaption className="position">Co-President</figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={praneer} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Praneer Shrestha
                  </figcaption>
                  <figcaption className="position">Vice-President</figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={naomi} alt=""></img>
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
                  <img className="figure-img" src={joseph} alt=""></img>
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
                  <img className="figure-img" src={noble} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Noble Tan
                  </figcaption>
                  <figcaption className="position">
                    Director of Logistics
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={vivian} alt=""></img>
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
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Kaveh Alemi
                  </figcaption>
                  <figcaption className="position">
                    Director of External Relations
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Nargis Ghiasi
                  </figcaption>
                  <figcaption className="position">
                    External Relations Coordinator
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={fiona} alt=""></img>
                  <figcaption className="font-weight-bold">Fiona Wu</figcaption>
                  <figcaption className="position">
                    Director of Finance
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={ali} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Ali Khamesy
                  </figcaption>
                  <figcaption className="position">
                    Director of Finance
                  </figcaption>
                </figure>
              </div>
              <div className="w-100"></div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={ishaan} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Ishaan Bedi
                  </figcaption>
                  <figcaption className="position">
                    Director of Events
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={julia} alt=""></img>
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
                  <img className="figure-img" src={emma} alt=""></img>
                  <figcaption className="font-weight-bold">Emma Wu</figcaption>
                  <figcaption className="position">
                    Director of Marketing
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={kim} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Kim Regala
                  </figcaption>
                  <figcaption className="position">
                    Social Media Director
                  </figcaption>
                </figure>
              </div>
              <div className="w-100"></div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={michelle} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Michelle Swolfs
                  </figcaption>
                  <figcaption className="position">
                    Creative Director
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={rect} alt=""></img>
                  <figcaption className="font-weight-bold">
                    Lauren Mok
                  </figcaption>
                  <figcaption className="position">
                    Marketing Assistant
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure className="figure">
                  <img className="figure-img" src={art} alt=""></img>
                  <figcaption className="font-weight-bold">Art Yang</figcaption>
                  <figcaption className="position">
                    Executive at Large
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm">
              </div>
            </div>
          </section>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default About;
