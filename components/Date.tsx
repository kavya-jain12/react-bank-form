import React from 'react';
import { QuestionProps } from 'lib/types';
import { TextField } from '@mui/material';

const Date: React.FC<{ question: QuestionProps; handleChange: any }> = ({
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
      data-testid={question.name}
    />
  );
};

export default Date;
