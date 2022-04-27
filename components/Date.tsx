import React from 'react';
import { Question } from 'lib/types';
import { TextField } from '@mui/material';

const Date: React.FC<{ question: Question; handleChange: any }> = ({
  question,
  handleChange,
}) => {
  return (
    <TextField
      fullWidth
      type="date"
      id={question.name}
      name={question.name}
      onChange={handleChange}
      defaultValue="1995-02-12"
      required={question.required}
      label={question.name.replace(/_/g, ' ')}
      sx={{
        marginTop: 1,
        textTransform: 'capitalize',
      }}
    />
  );
};

export default Date;
