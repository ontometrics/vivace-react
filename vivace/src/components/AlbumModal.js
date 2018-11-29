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
            {this.props.modalData.cd_name}
          </ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-md-7">
                <img
                  src={this.props.modalData.image_url}
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-md-5">Tracks</div>
            </div>
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
