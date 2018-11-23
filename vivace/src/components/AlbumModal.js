import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class AlbumModal extends React.Component {
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.props.toggleAlbumModal}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.props.albumModal}
          toggle={this.props.toggleAlbumModal}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.toggleAlbumModal}>
            Modal title
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.toggleAlbumModal}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.props.toggleAlbumModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AlbumModal;
