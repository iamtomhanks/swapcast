// Modules
import React from 'react';

// Styles
import './FormField.scss';

// Interfaces
import { FormField, FormFieldType, OnChange } from 'Interfaces/Form';

// Components

type Props = {
  field: FormField;
  onChange(evt: OnChange): void;
};

const FormFieldComponent = ({ field, onChange }: Props) => {
  const { label, value, id, type } = field;
  const fieldId = `form-field-${id}`;

  return (
    <div className='form-field-component'>
      <label htmlFor={fieldId}>{label}</label>

      { type === FormFieldType.text &&
        <input
          type='text'
          id={fieldId}
          value={value}
          onChange={(e) => onChange({ id, value: e.target.value })}
        />
      }
      { type === FormFieldType.password &&
        <input
          type='password'
          id={fieldId}
          value={value}
          onChange={(e) => onChange({ id, value: e.target.value })}
        />
      }
    </div> 
  );
};

export {
  FormFieldComponent,
};