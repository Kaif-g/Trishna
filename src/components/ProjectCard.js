import React, { useState } from "react";
import { Col, Modal, Button, Image } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, pdfUrl, registrationUrl }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={imgUrl} fluid />
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <h4 style={{ fontFamily: 'Young Heart, sans-serif', fontSize: '2em', fontWeight: 'bold', color: '#333' }}>{title}</h4>
            <p>{description}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => window.open(pdfUrl, "_blank")}>
            Details
          </Button>
          <Button variant="success" onClick={() => window.open(registrationUrl, "_blank")}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};
