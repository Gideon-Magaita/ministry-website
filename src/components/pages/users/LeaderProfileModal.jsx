import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function LeaderProfileModal({ leader, show, onHide }) {
  if (!leader) return null;

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
      className="leader-profile-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Leadership Profile</Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0">
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={leader.image}
              alt={leader.name}
              className="profile-photo"
            />
          </div>

          <div className="col-md-7 p-4 p-lg-5">
            <div className="profile-role mb-2">{leader.role}</div>
            <h2 className="fw-bold mb-3">{leader.name}</h2>

            {leader.bio ? (
              <p className="text-secondary lh-lg">{leader.bio}</p>
            ) : (
              <p className="text-secondary lh-lg">
                Profile information for this ministry leader will be published
                here.
              </p>
            )}

            {leader.education && (
              <>
                <h6 className="fw-bold mt-4">Education</h6>
                <p className="text-secondary">{leader.education}</p>
              </>
            )}

            {leader.experience && (
              <>
                <h6 className="fw-bold mt-4">Professional Experience</h6>
                <p className="text-secondary">{leader.experience}</p>
              </>
            )}
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-primary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
