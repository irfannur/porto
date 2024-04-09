import React, { useRef, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

interface LargeModalProps {
    onClose: () => void;
    title: string;
    content: React.ReactNode;
    image: string;
}

const Modal: React.FC<LargeModalProps> = ({ onClose, title, content, image }) => {

    //click out modal close
    const handleClickOutside = () => {
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={handleClickOutside}>
            <div className="modal">
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button className="close-button" onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>
                <div className="modal-body">
                    <img src={image} alt={title} className="modal-image" />
                    <div className="content">{content}</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
