import styled from 'styled-components';

const HeaderStyles = styled.header`
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  @media (min-width: 768px) {
    padding: 0 40px;
  }
  .logo {
    height: 30px;
  }
  .nav {
    &__options {
      &__item {
        & > a {
          color: #fff;
          font-weight: 500;
        }
      }
    }
  }
`;

export { HeaderStyles };
