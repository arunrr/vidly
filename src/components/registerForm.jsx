import React from 'react';

import Joi from 'joi-browser';

import Form from './commons/form';

class RegisterForm extends Form {
  state = {
    data: {
      username: '',
      password: '',
      fullName: ''
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .email()
      .required()
      .label('Username'),
    password: Joi.string()
      .min(5)
      .required()
      .label('Password'),
    fullName: Joi.string()
      .required()
      .label('Name')
  };

  doSubmit = () => {
    // submit to server
    console.log('Submitted');
  };

  render() {
    return (
      <React.Fragment>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username', 'email')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('fullName', 'Name')}
          {this.renderSubmit('Register')}
        </form>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
