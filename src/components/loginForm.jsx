import React from 'react';

import Joi from 'joi-browser';

import Form from './commons/form';

class LoginForm extends Form {
  state = {
    data: {
      username: '',
      password: ''
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label('Username'),
    password: Joi.string()
      .required()
      .label('Password')
  };

  doSubmit = () => {
    // submit to server
    console.log('Submitted');
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="mb-3">Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}

          {this.renderSubmit('Login')}
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
