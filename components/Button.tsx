import { Button, Link } from "@mui/material";
import { ButtonTypes, CustomLinkTypes } from "lib/types";

export const CustomButton: React.FC<ButtonTypes> = ({ text, type, size, color, variant}) => {
    return (
        <Button
            type={type}
            variant={variant}
            size={size}
            color={color}
            sx={{ textTransform: 'capitalize', marginTop: 4 }}
        >
            {text}
        </Button>
    );
};

export const CustomLink: React.FC<CustomLinkTypes> = ({ text, color, href, variant, underline }) => {
    return (
        <Link color={color} variant={variant} href={href} underline={underline}>{text}</Link>
    );
};

