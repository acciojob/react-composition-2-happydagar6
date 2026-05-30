import React from 'react'

const Modal = ({ show, onClose, children }) => {

    if (!show) {
        return null;
    }
  return (
    <div className="modal-overlay" style={{ padding: "20px", backgroundColor: "#add8e6", marginTop: "10px" }}>
        <button className="model-close" onClick={onClose} style={{ backgroundColor: "#d9534f", color: "white", padding: "5px 10px", border: "none", cursor: "pointer" }}>
            Close
        </button>

        <p className="model-p">
            {children}
        </p>
      
    </div>
  )
}

export default Modal
