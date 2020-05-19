import React, { useCallback } from 'react';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { Form } from '@rocketseat/unform';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { Content } from './styles';
import { InputDefault } from '../common';

import Logo from '../../assets/images/bitcoin-logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email!')
    .required('Email is required'),
  password: Yup.string().required('Password is require'),
});

interface LoginPropsData {
  showSession: boolean;
}

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC<LoginPropsData> = ({ showSession }) => {
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          return;
        }

        addToast({
          type: 'error',
          title: 'Authentication error',
          description: 'There was an error signing in, check credentials',
        });
      }
    },
    [signIn, history, addToast],
  );

  return (
    <Content showSession={showSession}>
      <div className="logo-wrapper">
        <img src={Logo} alt="logo" />
        <span>Eduzzticoin</span>
      </div>

      <Form
        onSubmit={handleSubmit}
        schema={schema}
        id="login-form"
        autoComplete="off"
      >
        <InputDefault label="User" icon="user-male" name="email" />
        <InputDefault
          label="Password"
          icon="password--v1"
          name="password"
          isPassword
        />
      </Form>

      <div className="login-footer">
        <div className="login-footer__login-button">
          <button form="login-form" type="submit">
            Login
          </button>
        </div>
        <span>Don't have an account?</span>
        <button type="submit" onClick={() => history.push('/signup')}>
          Sign up!
        </button>
      </div>
    </Content>
  );
};

export default Login;
