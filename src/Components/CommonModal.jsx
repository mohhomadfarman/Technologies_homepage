import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

function CommonModal({ show, size, handleClose, modalHeading, ModalBody, className, bodyClass }) {
  return (
    <Modal size={size} centered className={className} show={show} onHide={handleClose}>
      <Modal.Header >
        <span></span>
        {modalHeading && <Modal.Title className='sm:text-[20px] md:text-[28px] sm:ml-0 md-[60px]'>{modalHeading}</Modal.Title>}
           <span style={{cursor:"pointer"}} className='pointer' onClick={handleClose}><FaPlus style={{rotate:"45deg"}}/></span>
      </Modal.Header>
      <Modal.Body className={bodyClass}>
        {ModalBody}
      </Modal.Body>
    </Modal>
  );
}

export default CommonModal;
