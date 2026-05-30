import React, { useState } from 'react';
import Modal from './Modal'; // Import the separated Modal component

const App = () => {
  // State to remember if the modal should be visible or not
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      
      {/* Button to open the modal */}
      <button 
        onClick={() => setIsModalVisible(true)}
        style={{ backgroundColor: '#d9534f', color: 'white', padding: '10px 15px', border: 'none', cursor: 'pointer' }}
      >
        Show Modal
      </button>

      {/* Use the Modal component and pass the required props */}
      <Modal 
        show={isModalVisible} 
        onClose={() => setIsModalVisible(false)}
      >
        {/* This text is automatically passed as the "children" prop */}
        This is the content of the modal.
      </Modal>

    </div>
  );
};

export default App;