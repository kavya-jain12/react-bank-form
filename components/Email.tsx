import React from 'react';
import { TextField } from '@mui/material';
import { Question } from 'lib/types';

const email: React.FC<{
  question: Question;
  formData: any;
  handleChange: any;
}> = ({ question, formData, handleChange }) => {
  const validateEmail = (formData: any): boolean => {
    if (!formData.email) return false;
    else if (
      String(formData.email)
        .toLowerCase()
        .match(/\S+@\S+\.\S+/) === null
    )
      return true;
    else return false;
  };

  return (
    <TextField
      fullWidth
      margin="normal"
      autoComplete="email"
      id={question.name}
      name={question.name}
      required={question.required}
      label={question.name.replace(/_/g, ' ')}
      sx={{
        marginTop: 1,
        textTransform: 'capitalize',
      }}
      onChange={handleChange}
      error={validateEmail(formData)}
    />
  );
};

export default email;
