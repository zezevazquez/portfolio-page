import React, { Component } from 'react';
import { Button, Grid, Image, Jumbotron, Row, Col} from 'react-bootstrap'
import ConnectWithMe from './ConnectWithMe';

export default class Body extends Component {
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
              <p>Adipisicing ratione incidunt eaque expedita rerum porro inventore. Nihil sit ipsam iure officiis sit eos at quibusdam natus dignissimos natus dolore! Vel doloremque ipsa alias nihil harum laborum necessitatibus rerum?</p>
              <p><Button>View details »</Button></p>
            </Col>
            <Col md={4}>
              <h2>About Me</h2>
              <p>Sit quia nemo quis enim provident porro eaque accusamus tenetur provident aliquid commodi? Velit nesciunt maiores obcaecati totam praesentium sint vitae exercitationem quaerat maxime iusto et! Consequatur aspernatur sit impedit.</p>
              <p><Button>View details »</Button></p>
            </Col>
            <Col md={4}>
              <h2>Heading</h2>
              <p>Dolor aliquid dolores perferendis repellendus cum! Quam maiores blanditiis cupiditate voluptatibus voluptas aliquid nisi placeat tempora. Rem debitis accusamus pariatur officia corrupti. Architecto fuga reiciendis quos rem hic? Suscipit dignissimos.</p>
              <p><Button>View details »</Button></p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
