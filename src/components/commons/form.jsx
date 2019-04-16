import React, { Component } from 'react';

import Joi from 'joi-browser';

import Input from './input';
import Select from './select';

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  handleValidation = () => {
    const errors = {};
    const options = { abortEarly: false };

    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return;

    error.details.map(item => (errors[item.path[0]] = item.message));

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleValidateProperty = input => {
    const obj = { [input.name]: input.value };
    const schema = {
      [input.name]: this.schema[input.name]
    };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    const errors = { ...this.state.errors };
    const errorMessage = this.handleValidateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.handleValidation();
    this.setState({ errors: errors || {} });

    if (errors) return;

    this.doSubmit();
  };

  renderSubmit = label => {
    return (
      <button disabled={this.handleValidation()} className="btn btn-primary">
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = 'text') => {
    const { errors, data } = this.state;
    return (
      <Input
        type={type}
        label={label}
        name={name}
        error={errors[name]}
        data={data}
        onChange={this.handleChange}
      />
    );
  };

  renderSelect = (name, label, options = []) => {
    return (
      <Select
        name={name}
        label={label}
        options={options}
        onChange={this.handleChange}
      />
    );
  };
}

export default Form;
