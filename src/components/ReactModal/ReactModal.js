import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./ReactModal.css";

const ReactModal = (props) => {
  const { title, image, description, price, category, rating } = props.product;
  console.log(props.product);
  const [show, setShow] = useState(false);
  return (
    <>
      <Button variant="success" onClick={() => setShow(true)}>
        Details
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <button
            onClick={() => setShow(false)}
            className="btn btn-outline-secondary"
          >
            Close
          </button>
        </Modal.Header>

        <Modal.Title className="modalTitle mt-3" id="example-custom-modal-styling-title">
          {title}
        </Modal.Title>

        <Modal.Body className="d-flex align-items-center">
          <img src={image} className="modalImage" alt="..." />
          <p>{description}</p>
        </Modal.Body>
        <h4 className="text-center">Price: {price}$</h4>
        <div className="modalExternalInfo p-3 d-flex justify-content-between">
            <p>Category: {category}</p>
            <p>Rating: {rating.rate}</p>
        </div>
      </Modal>
    </>
  );
};
export default ReactModal;
