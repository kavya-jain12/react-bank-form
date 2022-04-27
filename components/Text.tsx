import React from 'react';
import { TextField } from '@mui/material';
import { Question } from 'lib/types';

const Text: React.FC<{ question: Question; handleChange: any }> = ({
  question,
  handleChange,
}) => {
  return (
    <TextField
      fullWidth
      margin="normal"
      autoComplete="text"
      id={question.name}
      name={question.name}
      required={question.required}
      label={question.name.replace(/_/g, ' ')}
      sx={{
        marginTop: 1,
        textTransform: 'capitalize',
      }}
      onChange={handleChange}
    />
  );
};

export default Text;
