import React from 'react';
import { QuestionProps, QuestionType } from 'lib/types';
import text from './Text';
import number from './Number';
import email from './Email';
import date from './Date';
import select from './Select';
import checkbox from './Checkbox';

type Props = {
  formData: any;
  question: QuestionProps;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type QuestionFactory = {
  [key in QuestionType]: React.FC<Props>;
};

const Factory: QuestionFactory = {
  text,
  number,
  email,
  date,
  select,
  checkbox,
};

const questionNode = ({
  formData,
  question,
  handleChange
}: Props): JSX.Element => {
  const Component = Factory[question.type];

  if (!Component) {
    return <></>;
  }

  return (
    <Component
      formData={formData}
      question={question}
      handleChange={handleChange}
    />
  );
};

const Component: React.FC<Props> = ({ formData, question, handleChange }) => {
  return questionNode({ formData, question, handleChange });
};

export default Component;
