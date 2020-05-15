import React from 'react';

import { Modal, ModalContent } from './styles';

interface PropsData {
  toggleModal(): void;
  isActivity: boolean;
}

const ModalTemplate: React.FC<PropsData> = ({
  toggleModal,
  isActivity,
  children,
}) => {
  const handleToggleModal = () => {
    toggleModal();
  };
  return (
    <Modal onClick={() => handleToggleModal()} isActivity={isActivity}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <div className="close-button">
          <svg
            onClick={() => handleToggleModal()}
            className="close-button__icon"
            viewBox="0 0 24 24"
            role="img"
            aria-label="Fechar"
            focusable="false"
          >
            <path
              d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div>{children}</div>
      </ModalContent>
    </Modal>
  );
};

export default ModalTemplate;
