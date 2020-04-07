// Modules
import React from 'react';

// Styles
import './SignInForm.scss';

// Interfaces
import { FormField, FormFieldType } from 'Interfaces/Form';

// Components
import { Form } from 'Components/Generic/Form';

interface Props {
}

const SignInForm = (props: Props) => {

  const formFields: FormField[] = [
    {
      type: FormFieldType.text,
      label: 'Username',
      id: 'username',
      value: '',
    },
    {
      type: FormFieldType.password,
      label: 'Password',
      id: 'password',
      value: '',
    },
  ];

  return (
    <div className='sign-in-form-component'> 
      <Form
        submitStatus={ye}
        fields={formFields}
        submitText='Sign In'
        submit={() => { return new Promise(resolve => resolve('ye')); }}
      />
    </div>
  );
};

export {
  SignInForm,
};