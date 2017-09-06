import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export default class Footer extends Component {
  render() {
    return (
      <Grid>
        <hr />
        <footer>
          <p>Brought to you by José "Zézé" Vázquez</p>
        </footer>
      </Grid>
    );
  }
}
