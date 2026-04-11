import { Typography } from '@mui/material'

type Props = {
    message: string
    sx?: object
}

const ErrorMessage = ({ message, sx }: Props) => {
    return (
        <Typography variant={'body2'} color={'error.main'} sx={sx}>
            {message}
        </Typography>
    )
}

export default ErrorMessage
