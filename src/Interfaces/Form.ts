export enum FormFieldType {
  text = 'text',
  number = 'number',
  password = 'password',
}

export interface FormField {
  id: string;
  value: string|number;
  type: FormFieldType;
  label: string;
  maxChars?: number;
}

export interface OnChange {
  id: string;
  value: string|number;
}