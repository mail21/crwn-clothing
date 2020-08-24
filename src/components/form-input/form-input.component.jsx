import React from 'react';

import { Group, GroupFormInput, FormInputLabel } from './form-input.style';

const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <Group className="group">
      <GroupFormInput type="email" onChange={handleChange} {...props} />
      {label ? (
        <FormInputLabel className={`${props.value.length ? 'shrink' : ''}`}>
          {label}
        </FormInputLabel>
      ) : null}
    </Group>
  );
};

export default FormInput;
