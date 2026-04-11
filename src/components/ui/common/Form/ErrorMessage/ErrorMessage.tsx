import { Typography } from '@mui/material'

type Props = {
    message: string
}

const ErrorMessage = ({ message }: Props) => {
    return (
        <Typography variant={'body2'} color={'error.main'}>
            {message}
        </Typography>
    )
}

export default ErrorMessage
