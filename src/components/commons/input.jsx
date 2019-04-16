import React from 'react';

const Input = ({ type, label, name, data, error, onChange }) => {
  return (
    <div className="row">
      <div className="form-group col-sm-7">
        <label htmlFor={name}>{label}</label>
        <input
          value={data.name}
          name={name}
          type={type}
          className="form-control"
          id={name}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default Input;
