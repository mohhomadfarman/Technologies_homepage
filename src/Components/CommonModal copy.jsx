import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function CommonModal({ show, size, handleClose, modalHeading, ModalBody, className, bodyClass }) {
  return (
    <Modal size={size} centered className={className} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      <span></span>
        {modalHeading && <Modal.Title>{modalHeading}</Modal.Title>}
      </Modal.Header>
      <Modal.Body className={bodyClass}>
        {ModalBody}
      </Modal.Body>
    </Modal>
  );
}

export default CommonModal;
