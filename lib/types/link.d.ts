type LinkColor =
    | 'inherit'
    | 'secondary'
    | 'primary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'

type LinkType =
    | 'button'
    | 'submit'
    | 'reset'

type LinkVariant =
    | 'button'
    | 'inherit'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'overline'

type LinkUnderline =
    | 'none'
    | 'hover'
    | 'always'

export type CustomLinkTypes = {
    href?: string;
    text: string;
    color?: LinkColor;
    type?: LinkType;
    variant?: LinkVariant;
    underline?: LinkUnderline
};
