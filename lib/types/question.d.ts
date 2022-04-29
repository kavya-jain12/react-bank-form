export type QuestionType =
  | 'text'
  | 'email'
  | 'date'
  | 'number'
  | 'select'
  | 'checkbox';

export type QuestionProps = {
  name: string;
  type: QuestionType;
  required?: boolean;
  options?: [];
};
