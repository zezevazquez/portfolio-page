import React from 'react';
import {Button, Grid, Image, Jumbotron, Row, Col} from 'react-bootstrap'
import ConnectWithMe from './ConnectWithMe';

export default class Body extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <Col xs={12} md={8}>
              <h1>Hello, world!</h1>
              <p>This is Zeze's portfolio page</p>
              <ConnectWithMe />
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
              <p>I am a Software Engineer with a background in Sales and Business Development across a variety of industries.</p>
              <p><Button>View details »</Button></p>
            </Col>
            <Col md={4}>
              <h2>About Me</h2>
              <p>I love to run and have completed 4 full marathons. I'm a lifelong learner and student of Philosophy. </p>
              <p><Button>View details »</Button></p>
            </Col>
            <Col md={4}>
              <h2>Projects</h2>
              <p>
                <ul>
                  <li>GrannyMeds</li>
                  <li>MarkdownParsingApp</li>
                  <li>TetrisReact</li>
                </ul>
              </p>
              <p><Button>View details »</Button></p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
