import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  toggleCategories = () => {
    switch (this.state.activeTab) {
      case 0:
        return (
          <div className="project-deck">
            <Card
              shadow={5}
              style={{
                minWidth: "450",
                margin: "auto",
                borderRadius: "20px",
                height: "270px",
              }}
            >
              <CardTitle
                style={{
                  color: "black",
                  height: "150px",
                }}
              >
                Version Control System
              </CardTitle>
              <CardText>
                A multithreaded client server version controlling system
                implemented in C.
              </CardText>
              <CardActions border>
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/aayushadhikari/versionControl"
                  target="_blank"
                >
                  <Button colored>Github</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            <Card
              shadow={5}
              style={{
                minWidth: "450",
                margin: "auto",
                borderRadius: "20px",
                height: "270px",
              }}
            >
              <CardTitle
                style={{
                  color: "black",
                  height: "150px",
                }}
              >
                KickStarter
              </CardTitle>
              <CardText>
                A decentralized application to raise money for campaign, built
                on React, Solidity on the Ethereum Network.
              </CardText>
              <CardActions border>
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/aayushadhikari/kickstarter"
                  target="_blank"
                >
                  <Button colored>Github</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
    }
  };

  render() {
    return (
      <div className="category-tabs">
        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
