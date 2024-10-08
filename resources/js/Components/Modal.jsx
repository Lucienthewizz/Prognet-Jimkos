// Modal.jsx
import React from 'react';

const Modal = ({ showModal, closeModal, isRegister }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${showModal ? '' : 'hidden'}`}>
      <div className="modal bg-white bg-opacity-90 backdrop-blur-lg rounded-lg p-6 shadow-lg">
        <button className="absolute top-2 right-2 text-primary" onClick={closeModal}>
          ×
        </button>
        <h2 className="text-center text-2xl mb-4">{isRegister ? 'Daftar' : 'Login'}</h2>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="border border-secondary rounded w-full p-2 mb-4"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-secondary rounded w-full p-2 mb-4"
            required
          />
          {isRegister && (
            <input
              type="password"
              placeholder="Konfirmasi Password"
              className="border border-secondary rounded w-full p-2 mb-4"
              required
            />
          )}
          <button type="submit" className="bg-primary text-white rounded px-4 py-2 w-full">
            {isRegister ? 'Daftar' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
