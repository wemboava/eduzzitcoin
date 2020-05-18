import React from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { MdError } from 'react-icons/md';
import ModalTemplate from '../modalTemplate';
import { Content } from './styles';

interface PropsData {
  toggleModal(): void;
  opened: boolean;
  message: string;
  isError?: boolean;
}

const SuccessModal: React.FC<PropsData> = ({
  toggleModal,
  opened,
  message,
  isError = false,
}) => {
  return (
    <ModalTemplate isActivity={opened} toggleModal={toggleModal}>
      <Content>
        <div className="modal-header">
          {isError ? <MdError size={90} /> : <IoIosCheckmarkCircle size={90} />}
        </div>
        <div className="modal-text">
          <span>{message}</span>
        </div>
        <button type="button" onClick={toggleModal}>
          Ok
        </button>
      </Content>
    </ModalTemplate>
  );
};

export default SuccessModal;
