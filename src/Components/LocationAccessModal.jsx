import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const LocationAccessModal = () => {
  return (
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Allow Location Access</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Start your journey with us by allowing access to your location.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary">Allow</Button>
          <Button variant="secondary">Set Location</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default LocationAccessModal;
