export type QuestionType =
  | 'text'
  | 'email'
  | 'date'
  | 'number'
  | 'select'
  | 'checkbox';

export type Question = {
  name: string;
  type: QuestionType;
  required?: boolean;
  options?: [];
};
