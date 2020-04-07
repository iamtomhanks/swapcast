// Modules
import { useState } from 'react';

// Interfaces
import { FormField, OnChange } from 'Interfaces/Form';

const useForm = (fields: FormField[]) => {
  const [form, setForm] = useState([ ...fields ]);

  const formOnChange = ({ id, value }: OnChange) => {
    const newForm = [ ...form ];
    const updatedField = newForm.find((field => field.id === id));

    // sanity check + typescript yelled at me
    if (updatedField) {
      updatedField.value = value;
      setForm(newForm);
    }
  };

  return {
    form,
    formOnChange,
  };
};

export {
  useForm,
};