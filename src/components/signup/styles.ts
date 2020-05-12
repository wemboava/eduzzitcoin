import styled from 'styled-components';

interface RegisterProps {
  showSession: boolean;
}

export const Content = styled.div<RegisterProps>`
  width: 100%;
  height: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 35px 35px 35px;

  position: absolute;
  left: 0;
  /* left: ${(props) => (props.showSession ? '0' : '-100%')}; */
  transition: .5s ease;
  transition-delay: .1s;

  visibility: ${(props) => (props.showSession ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.showSession ? '1' : '0')};
  @media(min-width: 768px) {
    width: 40%;
    max-width: 450px;
    min-width: 350px;
    background-color: #0E0E0E;
    box-shadow: -3px 0px 13px 1px rgba(0, 0, 0, 0.15);
    left: auto;
    right: ${(props) => (props.showSession ? '0' : '-50%')};
  }

  .logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 90px;
      margin-left: -20px;
    }
    span {
      font-family: 'Ubuntu', sans-serif;
      font-size: 48px;
      color: #FFF;
    }
  }
  form {
    /* margin-top: 150px; */
  }

  .login-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &__login-button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
      & > button {
        display: block;
        width: 200px;
        border: none;
        border-radius: 35px;
        padding: 14px;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        color: #fff;
        font-size: 1.3em;
        cursor: pointer;
        font-weight: bold;
        outline: none;
        box-shadow: 0 10px 20px 0 rgba(0,0,0,.15);
        transition: .8s cubic-bezier(.2,1,.2,1);
        /* background: #00AEEF; */
        background: #f79318;
      }
      & > button:active, & > button:hover{
        /* background-color: #0081C8; */
        transform: translateY(-2px);
        box-shadow: 0 10px 30px 0 rgba(0,0,0,.25);
      }
    }

    & span {
      color: #FFF;
    }
    & > button {
      color: #f79318;
      border: none;
      background-color: transparent;
      font-weight: bold;
      padding: 3px;
      cursor: pointer;
    }
  }
`;
