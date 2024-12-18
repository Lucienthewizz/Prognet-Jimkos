// resources/js/Base/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, title, children, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="flex fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50">
            <div className="relative p-6 w-full max-w-md bg-white rounded-lg shadow-lg">
                <div className="flex justify-end">
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        &times;
                    </button>
                </div>
                <div className="flex items-center mb-4">
                    <div className="flex justify-center items-center w-10 h-10 bg-gray-100 rounded-full">
                        <i className="text-2xl text-primary ri-error-warning-line"></i>
                    </div>
                    <h3 className="ml-3 text-lg font-semibold text-gray-800">{title || 'Default Title'}</h3>
                </div>
                <div className="mb-4 text-sm text-gray-600">
                    {children}
                </div>
                <div className="flex justify-start mt-4 space-x-2">
                    <button onClick={onConfirm} className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
                        Daftar Sekarang
                    </button>
                    <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-blue-700 bg-white rounded border border-gray-300 hover:bg-gray-100">
                        Batal
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;