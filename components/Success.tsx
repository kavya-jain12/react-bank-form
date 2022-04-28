import { Alert } from "@mui/material"
import { CustomLink } from "./Button"

type SuccessProps = {
    text: string
}

const Success = ({ text }: SuccessProps): JSX.Element => {
    return (
        <>
            <Alert severity="success" sx={{ marginBottom: 4 }}>
                {text}
            </Alert>
            <CustomLink
                href={'/'}
                type='button'
                variant='button'
                color='secondary'
                text='home'
                underline='none'
            />
        </>
    )
}

export default Success