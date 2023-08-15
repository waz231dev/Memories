import React from 'react'
import './Overlay.scss'

const Overlay = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className='overlay' onClick={onClose}></div>
    )
}

export default Overlay