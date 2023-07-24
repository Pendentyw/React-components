import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const container = document.querySelector('.modal-container');

  return ReactDOM.createPortal(
    <div className='flex justify-center items-center'>
      <div
        onClick={onClose}
        className='fixed inset-0 bg-gradient-to-r from-gray-200 to-gray-400 opacity-80'></div>
      <div className='fixed object-center p-6 top-1/3 bg-white shadow-lg  shadow-gray-400'>
        <div className='flex flex-col h-full'>
          {children}
          <div className='flex justify-end mt-5'> {actionBar}</div>
        </div>
      </div>
    </div>,
    container
  );
}

export default Modal;
