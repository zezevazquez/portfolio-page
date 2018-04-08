import React, { Component } from 'react';
import { Button, Grid, Image, Jumbotron, Row, Col } from 'react-bootstrap';
import ConnectWithMe from './ConnectWithMe';

export default class Body extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <Col xs={12} md={8}>
              <ConnectWithMe />
              <h1>Hello, world!</h1>
              <p>This is Zezes portfolio page</p>
            </Col>
            <Col xs={6} md={4}>
              <Image src="./assets/runningze.jpg" responsive />
            </Col>
          </Grid>
        </Jumbotron>
        <Grid>
          <Row>
            <Col md={4}>
              <h2>Experience</h2>
              <p>
                I am a Software Engineer with a background in Sales and Business
                Development across a variety of industries.
              </p>
              <p>
                <Button>View details »</Button>
              </p>
            </Col>
            <Col md={4}>
              <h2>About Me</h2>
              <p>
                I love to run and have completed 4 full marathons. Im a lifelong
                learner and student of Philosophy.{' '}
              </p>
              <p>
                <Button>View details »</Button>
              </p>
            </Col>
            <Col md={4}>
              <h2>Projects</h2>
              <div>
                <ul>
                  <li>GrannyMeds</li>
                  <li>MarkdownParsingApp</li>
                  <li>TetrisReact</li>
                </ul>
              </div>
              <p>
                <Button>View details »</Button>
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
