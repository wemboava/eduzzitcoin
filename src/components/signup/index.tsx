import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Form } from '@rocketseat/unform';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';
import { InputDefault } from '../common';
import { Content } from './styles';

import Logo from '../../assets/images/bitcoin-logo.png';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Enter a valid email!')
    .required('Email is require'),
  password: Yup.string().required('Password is require'),
});

interface RegisterPropsData {
  showSession: boolean;
}

const SignUp: React.FC<RegisterPropsData> = ({ showSession }) => {
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        await api.post('/account', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Registration completed!',
          description: 'You can now login to Eduzzticoin!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          return;
        }

        addToast({
          type: 'error',
          title: 'Registration error',
          description: 'An error occurred while registering, please try again.',
        });
      }
    },
    [addToast, history],
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
        id="signup-form"
        autoComplete="off"
      >
        <InputDefault label="Name" icon="user-male" name="name" />
        <InputDefault label="Email" icon="email" name="email" />
        <InputDefault
          label="Password"
          icon="password--v1"
          name="password"
          isPassword
        />
      </Form>

      <div className="login-footer">
        <div className="login-footer__login-button">
          <button form="signup-form" type="submit">
            Create account
          </button>
        </div>
        <span>Do you already have an account?</span>
        <button type="submit" onClick={() => history.push('/login')}>
          Login
        </button>
      </div>
    </Content>
  );
};

export default SignUp;
