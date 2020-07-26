import React from "react";
import "./App.css";
import { Layout, Navigation, Drawer, Header, Content, Footer } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          transparent
          className="header-color"
          title="Aayush Adhikari"
          scroll
        >
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>

        <Content>
          <div className="page-content">
            <Main />
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
