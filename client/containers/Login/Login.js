import Helmet from 'react-helmet';
import React from 'react';

import LoginForm from 'components/LoginForm';
import RegisterForm from 'components/RegisterForm';

const Login = () => (
  <div>
    <Helmet title="Login" />
    <h1>Login / Register</h1>
    <LoginForm />
    <RegisterForm />
  </div>
);

export default Login;
