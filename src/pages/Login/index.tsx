import React, { useCallback, useState, useEffect } from 'react';
import { useTransition } from 'react-spring';
import { useRouteMatch } from 'react-router-dom';

import LoginContent from '../../components/login';
import RegisterContent from '../../components/signup';

import { Container, Content } from './styles';

// import { Loader } from '../../components/common';

interface SessionData {
  showLogin?: boolean;
  showRegister?: boolean;
}

interface RepositoryParams {
  repository: string;
}

const Login: React.FC = () => {
  const { path } = useRouteMatch<RepositoryParams>();

  const [options, setOptions] = useState<SessionData>(() => {
    return {
      showLogin: path.includes('/login'),
      showRegister: path.includes('/signup'),
    };
  });

  useEffect(() => {
    setOptions({
      showLogin: path.includes('/login'),
      showRegister: path.includes('/signup'),
    });
  }, [path]);

  const handleShow = useCallback((nextSession: string) => {
    setOptions({
      showLogin: false,
      showRegister: false,
    });

    setTimeout(() => {
      setOptions((state) => ({ ...state, [nextSession]: true }));
    }, 400);
  }, []);

  return (
    <Container>
      <Content>
        <LoginContent showSession={!!options.showLogin} />
        <RegisterContent showSession={!!options.showRegister} />
      </Content>
      {/* <Loader isActivity={isLoading} /> */}
    </Container>
  );
};

export default Login;
