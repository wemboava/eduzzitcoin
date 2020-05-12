import React, { useCallback } from 'react';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@rocketseat/unform';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { Content } from './styles';
import { InputDefault } from '../common';

import Logo from '../../assets/images/bitcoin-logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido!')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

interface LoginPropsData {
  showSession: boolean;
}

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC<LoginPropsData> = ({ showSession }) => {
  const handleSubmit2 = useCallback(() => {
    // this.props.handleLoader();
    // AuthService.login(data)
    //   .then((response) => {
    //     console.log('client_token', response.data.token);
    //     SessionService.setCookie('client_token', {
    //       token: response.data.token,
    //     });
    //     setTimeout(() => {
    //       // this.props.handleLoader();
    //       // this.props.history.push('/dashboard');
    //     }, 1500);
    //   })
    //   .catch((error) => {
    //     setTimeout(() => {
    //       // this.props.handleLoader();
    //     }, 1500);
    //   });
    console.log('Loginnnn');
  }, []);

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
          console.log('YUP error', err);
          // const errors = getValidationErrors(err);

          // formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
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
        <InputDefault label="Usuário" icon="user-male" name="email" />
        <InputDefault
          label="Senha"
          icon="password--v1"
          name="password"
          isPassword
        />
      </Form>

      <div className="login-footer">
        <div className="login-footer__login-button">
          <button form="login-form" type="submit">
            Entrar
          </button>
        </div>
        <span>Ainda não tem conta?</span>
        <button type="submit" onClick={() => history.push('/signup')}>
          {/* <button type="submit" onClick={() => handleShow('showRegister')}> */}
          Cadastre-se!
        </button>
        {/* <a onClick={() => handleShow('showRegister')}>Cadastre-se!</a> */}
      </div>
    </Content>
  );
};

//   render() {
//     const { showSession, handleShow } = this.props;

//   }
// }

export default Login;
