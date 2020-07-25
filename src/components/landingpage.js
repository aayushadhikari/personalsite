import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import avatar from "./avatar.png";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={avatar} alt="avatar" className="avatar-image" />

            <Slider>
              <div className="banner-text">
                <h1 style={{ fontFamily: "'Monoton', cursive" }}>
                  Made with Love
                </h1>
                <hr />
                <p>
                  {" "}
                  And With
                  <br />
                  HTML/CSS | Bootstrap | JavaScript | React
                </p>
                <div className="social-links">
                  <a
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/aayush-adhikari-702707148/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/aayush.adhikari17"
                    target="_blank"
                  >
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://github.com/aayushadhikari"
                    target="_blank"
                  >
                    <i className="fa fa-github" aria-hidden="true" />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/aayush_adhikari_/?hl=en"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="banner-text">
                <h1 style={{ fontFamily: "'Monoton', cursive" }}>
                  Software Engineer
                </h1>
                <hr />
                <p>
                  Internet | BlockChain | Machine Learning | Web Development
                </p>
                <div className="social-links">
                  <a
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/aayush-adhikari-702707148/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/aayush.adhikari17"
                    target="_blank"
                  >
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://github.com/aayushadhikari"
                    target="_blank"
                  >
                    <i className="fa fa-github" aria-hidden="true" />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/aayush_adhikari_/?hl=en"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Slider>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
