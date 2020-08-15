import React from 'react';

import './form-input.style.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  console.log('forminput', otherProps);
  return (
    <div className="group">
      <input type="email" className="form-input" onChange={handleChange} {...otherProps} />
      {label ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : ''}
    </div>
  );
};

export default FormInput;