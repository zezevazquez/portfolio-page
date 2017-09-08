import React, { Component } from 'react';
import { Button, ButtonGroup,ButtonToolbar, Modal } from 'react-bootstrap';
import SocialIcons from './SocialMediaIcons';

export default class ConnectWithMe extends Component {
  constructor() {
    super();
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

    this.state = {
      open: false
    }
  }

  closeModal() {
    this.setState({open: false})
  }

  openModal() {
    this.setState({open: true})
  }

  render() {
    return (
      <p>
        <Button bsStyle='primary' bsSize='large' onClick={this.openModal} active>Connect »</Button>
        <Modal animation show={this.state.open} onHide={this.closeModal}>
          <Modal.Header style={{textAlign: "center"}} closeButton>
            <Modal.Title>Connect with me!</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{textAlign: "center"}}>
            <SocialIcons style={{ height: 50, width: 50 }}/>
          </Modal.Body>
          <Modal.Footer>
            <ButtonToolbar>
              <ButtonGroup vertical block>
                <Button bsSize='large' onClick={this.closeModal} active>Close</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>
      </p>
    );
  }
}
