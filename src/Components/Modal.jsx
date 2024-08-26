// Components/Modal.js
import React from 'react';
import './Modal.css'; // Ensure this CSS file exists
import Signup from './Signup';

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <Signup />
      </div>
    </div>
  );
};

export default Modal;
