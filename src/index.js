import React from 'react';
import { render } from 'react-dom';
import App from './Welcome';

import { PageHeader, Grid, Row, Col, Image } from 'react-bootstrap';

render(
  <div>
    <App />
    <PageHeader>
      Example page header <small>Subtext for header</small>
    </PageHeader>
    <h1>
      <Grid>
        <Row>
          <Col xs={3} md={2}>
            <Image src="../assets/runningze.jpg" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="/thumbnail.png" circle />
          </Col>
        </Row>
      </Grid>
    </h1>
  </div>,
  document.querySelector('#app')
);
