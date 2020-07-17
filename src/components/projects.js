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
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "150px",
                  background:
                    "url(https://wallpaperset.com/w/full/d/e/3/113004.jpg) center / cover",
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

            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "150px",
                  background:
                    "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1920px-React-icon.svg.png) center / cover",
                }}
              >
                React Project
              </CardTitle>
              <CardText>dshfhsd hdjsfhkjds dfhkjdshf dfjhkjadh</CardText>
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
          </div>
        );
      case 1:
        return (
          <div>
            <h1>This is angular</h1>
          </div>
        );
      case 2:
        return (
          <div>
            <h1>This is vue</h1>
          </div>
        );
      case 3:
        return (
          <div>
            <h1>This is MongoDB</h1>
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
