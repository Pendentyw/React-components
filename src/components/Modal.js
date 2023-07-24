function Modal() {
  return (
    <div>
      <div className='absolute inset-0 bg-gradient-to-r from-blue-200 to-gray-400 opacity-80 backdrop-blur-lg'></div>
      <div className='absolute inset-40 p-10 bg-gray-100 shadow-lg shadow-gray-400'>
        I'm a module
      </div>
    </div>
  );
}

export default Modal;
