import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import LoginContent from '../../components/login';
import RegisterContent from '../../components/signup';

import { Container, Content } from './styles';

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

  return (
    <Container>
      <Content>
        <LoginContent showSession={!!options.showLogin} />
        <RegisterContent showSession={!!options.showRegister} />
      </Content>
    </Container>
  );
};

export default Login;
