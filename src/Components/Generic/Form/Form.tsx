// Modules
import React from 'react';

// Styles
import './Form.scss';

// Interfaces
import { FormField, FormSubmitVals } from 'Interfaces/Form';
import { RequestStatus } from 'Interfaces/Requests';

// Hooks
import { useForm } from 'Hooks/useForm';

// Components
import { Loader } from 'Components/Generic/Loader';
import { FormFieldComponent } from './FormField';

type Props = {
  fields: FormField[];
  submit(submitVals: FormSubmitVals): void;
  submitText: string;
  submitStatus: RequestStatus;
};

const Form = (props: Props) => {
  const { fields, submit, submitText, submitStatus } = props;
  
  const { form, formOnChange } = useForm(fields);


  // Loop through form fields and generate
  // object w/ field id's as keys and field values
  const getValObj = (finalForm: FormField[]) => {
    const valObj: FormSubmitVals = {};

    finalForm.forEach((field: FormField) => {
      valObj[field.id] = field.value;
    });

    submit(valObj);
  };

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

      {submitStatus === RequestStatus.STARTED &&
        <Loader />
      }

      {submitStatus === RequestStatus.NOT_STARTED &&
        <button
          type='button'
          onClick={() => getValObj(form)}
          className='submit-btn'
        >
          {submitText}
        </button>
      }
    </div> 
  );
};

export {
  Form,
};