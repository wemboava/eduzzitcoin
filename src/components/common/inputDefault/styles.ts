import styled from 'styled-components';

interface InputProps {
  isLastField: boolean;
}

export const InputWrapper = styled.div<InputProps>`
  .input-group {
    margin-bottom: ${(props) => (props.isLastField ? '0' : '35px')};
    position: relative;
    background-color: #eef4fb;

    & span {
      position: absolute;
      color: #ff4747;
      font-size: 0.9em;
      bottom: -16px;
      animation: shake 15ms 60 linear;
    }
  }
  @keyframes shake {
    0% {
      transform: translate(3px, 0);
    }
    50% {
      transform: translate(-3px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  .input {
    display: block;
    width: 100%;
    height: 30px;
    border: 0;
    border-bottom: 1px solid #b1b1b1;
    padding: 1.2em 1.2em 1.2em 2.5em;
    font-size: 16px;
    box-sizing: border-box;
    background-color: #eef4fb;
    outline: none;
    color: #1b1b1b;
    transition: all 0.2s ease-in;
  }

  .input:focus {
    border-bottom: 1px solid #f79318;
  }

  label {
    position: absolute;
    top: 35%;
    left: 39px;
    color: #b0bec5;
    pointer-events: none;
    font-size: medium;
    transition: all 0.3s ease;
  }

  .input-group input:focus + label,
  .input-group input:focus + span + label,
  .input-group input:valid + label,
  .input-group input:valid + span + label,
  .input-group input.has-value + label {
    top: -10px;
    font-size: 11px;
    color: #f79318;
  }
  .input-group input:focus,
  .input-group input:valid,
  .input-group input.has-value {
    border-bottom: 1px solid #f79318;
  }

  .icon {
    width: 25px;
    position: absolute;
    bottom: 9px;
  }
`;
