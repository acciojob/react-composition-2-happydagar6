import React from 'react';

const Modal = ({ show, onClose, children }) => {
  
  if (!show) {
    return null;
  }

  return (
    // FIX 1: Overlay par onClick={onClose} lagaya. 
    // Ab user Modal ke bahar (background/overlay) click karega toh modal band ho jayega.
    <div className="model-overlay" onClick={onClose} style={{ padding: '20px', backgroundColor: '#add8e6', marginTop: '10px' }}>
      
      {/* FIX 2: Ek naya div jisme class "model" hai (Cypress isi ko dhundh raha tha). */}
      {/* e.stopPropagation() ka matlab hai ki agar user is white box ke andar click kare, toh click bahar overlay tak na jaye (warna modal andar click karne se bhi band ho jata). */}
      <div className="model" onClick={(e) => e.stopPropagation()}>
        
        <button 
          className="model-close" 
          onClick={onClose} 
          style={{ backgroundColor: '#d9534f', color: 'white', padding: '5px 10px', border: 'none', cursor: 'pointer' }}
        >
          Close
        </button>

        <p className="model-p">
          {children}
        </p>

      </div>
      
    </div>
  );
};

export default Modal;