import React from 'react';

// The Modal component accepts show, onClose, and children as props
const Modal = ({ show, onClose, children }) => {
  
  // If 'show' is false, return null (render nothing)
  if (!show) {
    return null;
  }

  // If 'show' is true, render the modal UI
  return (
    // REQUIRED: Class name 'model-overlay'
    <div className="model-overlay" style={{ padding: '20px', backgroundColor: '#add8e6', marginTop: '10px' }}>
      
      {/* REQUIRED: Class name 'model-close' */}
      {/* Clicking this triggers the onClose function passed from the parent */}
      <button 
        className="model-close" 
        onClick={onClose} 
        style={{ backgroundColor: '#d9534f', color: 'white', padding: '5px 10px', border: 'none', cursor: 'pointer' }}
      >
        Close
      </button>

      {/* REQUIRED: Class name 'model-p' */}
      {/* This renders whatever is placed between the <Modal> tags in App.js */}
      <p className="model-p">
        {children}
      </p>
      
    </div>
  );
};

export default Modal;