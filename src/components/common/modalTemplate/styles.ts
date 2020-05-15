import styled from 'styled-components';

interface StylesProps {
  isActivity: boolean;
}

const Modal = styled.div<StylesProps>`
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
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalContent = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.14);
  position: relative;
  z-index: 109;
  color: #000;
  margin: 0 10px;
  padding: 10px;
  border-radius: 20px;
  border: 0.5px solid rgb(118, 118, 118, 0.5);
  .close-button {
    width: 100%;
    height: 0;
    display: flex;
    justify-content: flex-end;
    &__icon {
      height: 16px;
      width: 16px;
      margin: 5px -5px;
      fill: rgb(118, 118, 118);
      position: absolute;
      z-index: 9;
    }
    cursor: pointer;
  }
`;

export { Modal, ModalContent };
