// Modules
import React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Action } from 'redux';

// Styles
import './SignInForm.scss';

// Interfaces
import { FormField, FormFieldType, FormSubmitVals } from 'Interfaces/Form';
import { AppState } from 'Interfaces/redux';
import { RequestStatus } from 'Interfaces/Requests';
import { SignInParams } from 'Interfaces/Server/routes';

// Components
import { Form } from 'Components/Generic/Form';

// Actions
import { signIn as signInAction } from 'Redux/Actions/user';

interface Props {
  signInReqStatus: RequestStatus;
  signIn(submitVals: SignInParams): void;
}

const SignInForm = (props: Props) => {
  const { signInReqStatus, signIn } = props;

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

  const submit = (fields: FormSubmitVals) => {
    const signInParams:SignInParams = {
      username: fields.username as string,
      password: fields.password as string,
    };

    signIn(signInParams);
  };

  return (
    <div className='sign-in-form-component'> 
      <Form
        submitStatus={signInReqStatus}
        fields={formFields}
        submitText='Sign In'
        submit={submit}
      />
    </div>
  );
};

const MapStateToProps = (state: AppState) => {
  return {
    signInReqStatus: state.requests.signIn.status,
  };
};

const MapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, void, Action>
) => {
  return {
    signIn: (params: SignInParams) => dispatch(signInAction(params)),
  };
};

const ConnectedSignInForm = connect(
  MapStateToProps,
  MapDispatchToProps
)(SignInForm);

export {
  ConnectedSignInForm as SignInForm,
};