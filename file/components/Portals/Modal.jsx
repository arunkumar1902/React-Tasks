import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ message, onClose }) {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <h2>{message}</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('modal-root') // modal-root div in index.html
  );
}

export default Modal;
