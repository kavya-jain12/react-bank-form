import React from 'react';
import { Checkbox, FormControl, FormControlLabel } from '@mui/material';
import { Question } from 'lib/types';

const CheckboxQuestion: React.FC<{ question: Question; handleChange: any }> = ({
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
      <FormControlLabel
        control={
          <Checkbox
            id={question.name}
            sx={{
              textTransform: 'capitalize',
            }}
            required={question.required}
          />
        }
        id={question.name}
        name={question.name}
        label={question.name.replace(/_/g, ' ')}
        onChange={handleChange}
      />
    </FormControl>
  );
};

export default CheckboxQuestion;
