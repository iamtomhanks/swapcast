// Modules
import React from 'react';

// Styles
import './Form.scss';

// Interfaces
import { FormField } from 'Interfaces/Form';
import { RequestStatus } from 'Interfaces/Requests';

// Hooks
import { useForm } from 'Hooks/useForm';

// Components
import { FormFieldComponent } from './FormField';

type Props = {
  fields: FormField[];
  submit(): Promise<unknown>;
  submitText: string;
  submitStatus: RequestStatus;
};

const Form = (props: Props) => {
  const { fields, submit, submitText } = props;
  
  const { formOnChange } = useForm(fields);

  return (
    <div className='form-component'>
      {fields.map((field: FormField) => {
        return (
          <FormFieldComponent
            field={field}
            key={field.id}
            onChange={formOnChange}
          />
        );
      })}

      <button
        type='button'
        onClick={submit}
        className='submit-btn'
      >
        {submitText}
      </button>
    </div> 
  );
};

export {
  Form,
};