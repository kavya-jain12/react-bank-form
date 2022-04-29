import React from 'react';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { QuestionProps } from 'lib/types';

const Number: React.FC<{ question: QuestionProps; handleChange: any }> = ({
  question,
  handleChange,
}) => {
  return (
    <FormControl
      fullWidth       
      sx={{
        marginTop: 1,
      }}
    >
      <InputLabel
        htmlFor={question.name}
        sx={{
          textTransform: 'capitalize',
        }}
      >
        {question.name.replace(/_/g, ' ')}
      </InputLabel>
      <OutlinedInput
        id={question.name}
        type={question.type}
        name={question.name}
        label={question.name.replace(/_/g, ' ')}
        onChange={handleChange}
        startAdornment={<InputAdornment position="start">£</InputAdornment>}
        data-testid={question.name}
      />
    </FormControl>
  );
};

export default Number;
