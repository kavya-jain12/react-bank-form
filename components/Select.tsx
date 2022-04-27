import React from 'react';
import { Question } from 'lib/types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select } from '@mui/material';

const SelectQuestion: React.FC<{ question: Question; handleChange: any }> = ({
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
        id={question.name}
        sx={{
          textTransform: 'capitalize',
        }}
      >
        {question.name.replace(/_/g, ' ')}
      </InputLabel>
      <Select
        id={question.name}
        name={question.name}
        onChange={handleChange}
        required={question.required}
        label={question.name.replace(/_/g, ' ')}
      >
        {question.options ? (
          question.options.map((option: string, index: number) => {
            return (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            );
          })
        ) : (
          <div>
            <MenuItem key={'female'} value={'female'}>
              Female
            </MenuItem>
            <MenuItem key={'male'} value={'male'}>
              Male
            </MenuItem>
          </div>
        )}
      </Select>
    </FormControl>
  );
};

export default SelectQuestion;
