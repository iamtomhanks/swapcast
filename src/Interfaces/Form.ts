export enum FormFieldType {
  text = 'text',
  number = 'number',
  password = 'password',
}

export interface FormField {
  id: string;
  value: FormFieldVal;
  type: FormFieldType;
  label: string;
  maxChars?: number;
}

export interface OnChange {
  id: string;
  value: FormFieldVal;
}

export interface FormSubmitVals {
  [key: string]: FormFieldVal;
}

export type FormFieldVal = string|number;