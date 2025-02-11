import React, { useState } from 'react';
import Modal from './Modal.jsx';
import './Modal.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>Portals</h1>
      <button onClick={openModal}>Show</button>

      {isModalOpen && <Modal message="Hello, this is a modal!" onClose={closeModal} />}
    </div>
  );
}

export default App;
