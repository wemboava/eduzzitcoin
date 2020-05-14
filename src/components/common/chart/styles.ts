import styled from 'styled-components';

interface ModalProps {
  isActivity: boolean;
}

const Modal = styled.div<ModalProps>`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 105;
  display: flex;
  transition: visibility 0.1s linear, opacity 0.2s ease;
  visibility: ${(props) => (props.isActivity ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isActivity ? '1' : '0')};
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.7);
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 45px;
    & > span {
      margin-top: 10px;
      margin-right: 40px;
      color: #0081c8;
    }
  }
`;

export { Modal, ModalContent };
