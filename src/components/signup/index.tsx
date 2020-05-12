import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Form } from '@rocketseat/unform';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';
// import UserService from '../../services/user';
import { InputDefault } from '../common';
import { Content } from './styles';

import Logo from '../../assets/images/bitcoin-logo.png';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um email válido!')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
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
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer o login no Eduzzticoin!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          console.log('yup error', err);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
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
        id="register-form"
        autoComplete="off"
      >
        <InputDefault label="Nome" icon="user-male" name="name" />
        <InputDefault label="Email" icon="email" name="email" />
        <InputDefault
          label="Senha"
          icon="password--v1"
          name="password"
          isPassword
        />
      </Form>

      <div className="login-footer">
        <div className="login-footer__login-button">
          <button form="register-form" type="submit">
            Criar conta
          </button>
        </div>
        <span>Ja tem uma conta?</span>
        <button type="submit" onClick={() => history.push('/login')}>
          Entrar
        </button>
      </div>
    </Content>
  );
};

export default SignUp;
