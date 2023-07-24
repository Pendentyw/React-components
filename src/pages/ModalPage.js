import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <Button
      onClick={handleClose}
      primary>
      <span className='text-xs'>I Accept</span>
    </Button>
  );

  const modal = (
    <Modal
      onClose={handleClose}
      actionBar={actionBar}>
      <p className='w-4/5 text-sm mb-2'>Would you like to save your progress</p>
    </Modal>
  );

  return (
    <div>
      <Button
        onClick={handleClick}
        primary>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
