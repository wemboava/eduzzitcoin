import React from 'react';
import { Modal, ModalContent } from './styles';

interface LoaderProps {
  isActivity: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isActivity }) => {
  return (
    <Modal isActivity={isActivity}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <div className="loader">
          <span>Carregando...</span>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default Loader;
