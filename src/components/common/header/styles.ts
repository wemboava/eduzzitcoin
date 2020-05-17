import styled, { keyframes } from 'styled-components';

const appearFromTop = keyframes`
  from{
    opacity: 0;
    transform: translateY(-50px);
  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }
`;

const HeaderStyles = styled.div`
  width: 95%;
  margin: auto;
  background-color: #fff;
  border-radius: 0 0 30px 30px;
  box-shadow: 0px 0px 14px 0px rgba(74, 82, 93, 0.1);
  animation: ${appearFromTop} 1s;

  header {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;

    .logo-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 45px;
        margin-left: -10px;
      }
      span {
        font-family: 'Ubuntu', sans-serif;
        font-size: 22px;
        color: #000;
        border-right: 0.5px solid rgba(181, 176, 176, 0.5);
        padding-right: 25px;
      }
    }
    .nav {
      &__options {
        &__item {
          & > a {
            color: #a7a7a7;
            font-weight: 700;
          }
        }
      }
    }
  }
`;

export { HeaderStyles };
