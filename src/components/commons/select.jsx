import React from 'react';

const Select = ({ name, label, options = [], onChange }) => {
  return (
    <div className="row">
      <div className="form-group col-sm-7">
        <label htmlFor={name}>{label}</label>
        <select
          onChange={onChange}
          className="form-control"
          name={name}
          id={name}
        >
          <option value="" />
          {options.map(item => (
            <option value={item.name}>{item.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
