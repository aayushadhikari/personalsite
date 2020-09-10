import React, { useRef } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Typical from "react-typical";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  function aboutClick() {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }
  function contactClick() {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }
  return (
    <div className="navigation">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">Aayush Adhikari</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link onClick={aboutClick}>About</Nav.Link>
            <Nav.Link eventKey={2} onClick={contactClick}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Head>
        <title>Aayush Adhikari</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img className={styles.image} src="/aayush.jpg" />
        <br />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxygen+Mono&family=Ravi+Prakash&family=VT323&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        ></link>
        <p className={styles.typical}>
          I am{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Aayush Adhikari",
              1000,
              "a software engineer",
              1000,
              "a singer/songwriter",
              1000,
              "a storyteller",
              1000,
            ]}
          ></Typical>
        </p>

        <div className={styles.grid}>
          <a
            target="blank"
            href="https://github.com/aayushadhikari/versioncontrol"
            className={styles.card}
          >
            <h3>Version Control System</h3>
            <p>
              A multithreaded client/server version controlling system
              implemented in C
            </p>
          </a>

          <a
            target="blank"
            href="https://github.com/aayushadhikari/kickstarter"
            className={styles.card}
          >
            <h3>Kickstarter Clone</h3>
            <p>
              A decentralized application to raise money for campaign, built on
              React, Solidity on the Ethereum Network.{" "}
            </p>
          </a>
        </div>
      </main>
      <hr />
      <div className={styles.skills} ref={aboutRef}>
        <Fade top>
          <div className={styles.skillsHead}>
            <h2>My Tech Stack</h2>
          </div>
        </Fade>

        <section className={styles.sticky}>
          <Fade left>
            <img className={styles.logos} src="/react.svg" />
          </Fade>
          <Fade top>
            <img className={styles.logos} src="/sql.png" />
          </Fade>
          <Fade right>
            <img className={styles.logos} src="/node.jpg" />
          </Fade>
          <Fade right>
            <img className={styles.logos} src="/angular.png" />
          </Fade>
        </section>

        <section className={styles.sticky}>
          <Fade left>
            <img className={styles.logos} src="/docker.png" />
          </Fade>
          <Fade bottom>
            <img className={styles.logos} src="/kubernetes.png" />
          </Fade>
          <Fade right>
            <img className={styles.logos} src="/aws.png" />
          </Fade>
        </section>
      </div>

      <hr />

      <div className={styles.contact} ref={contactRef}>
        <section className={styles.sticky}>
          <Fade left>
            <a
              className={styles.github}
              rel="noopener noreferrer"
              href="https://github.com/aayushadhikari"
              target="_blank"
            >
              <i className="fa fa-github" aria-hidden="true" />
            </a>
          </Fade>
          <Fade left>
            <a
              className={styles.instagram}
              rel="noopener noreferrer"
              href="https://www.instagram.com/aayush_adhikari_/?hl=en"
              target="_blank"
            >
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </Fade>
          <Fade right>
            <a
              className={styles.linkedin}
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/aayush-adhikari-702707148/"
              target="_blank"
            >
              <i className="fa fa-linkedin" aria-hidden="true" />
            </a>
          </Fade>
          <Fade right>
            <a
              className={styles.twitter}
              rel="noopener noreferrer"
              href="https://twitter.com/aayushdai"
              target="_blank"
            >
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
          </Fade>
        </section>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://github.com/aayushadhikari"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Aayush Adhikari{" "}
        </a>
      </footer>
    </div>
  );
}
