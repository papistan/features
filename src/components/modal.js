import React, { useEffect } from "react"
import Modal from "react-modal"
import "../styles/modal.scss"

const modalStyles = {
  overlay: {
    backgroundColor: "white",
    zIndex: "401",
  },
}

function ModalComponent({ toggleModal, isOpen, children }) {
  useEffect(() => {
    Modal.setAppElement(".wrapper")
  }, [])
  return (
    <Modal
      className="placeholder"
      style={modalStyles}
      role="dialog"
      closeTimeoutMS={1000}
      isOpen={isOpen}
      onRequestClose={toggleModal}
    >
      <button
        className="modal-button"
        aria-label="close"
        onClick={toggleModal}
      />
      {children}
    </Modal>
  )
}

export default ModalComponent
