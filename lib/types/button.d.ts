type ButtonSize =
    | 'small'
    | 'medium'
    | 'large';

type ButtonColor =
    | 'inherit'
    | 'secondary'
    | 'primary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'

type ButtonType =
    | 'button'
    | 'submit'
    | 'reset'

type ButtonVariant =
    | 'text'
    | 'contained'
    | 'outlined'


export type ButtonTypes = {
    size?: ButtonSize;
    color?: ButtonColor;
    text: string;
    type?: ButtonType;
    variant?: ButtonVariant
};
