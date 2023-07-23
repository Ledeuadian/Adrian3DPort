import React from 'react'

const Modal = ({isVisible, onClose, imgSrc}) => {
    if (!isVisible) return null;
  return (
    <div 
        className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center backdrop-blur-sm z-50'
        onClick={onClose}
    >
        <div onClick={onClose} className='rounded bg-neutral-500 bg-opacity-70'  >
        <img 
            src={imgSrc} alt="image"
            className='h-[80vh] w-full p-5' 
        />
        </div>
    </div>
  )
}

export default Modal