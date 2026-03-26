import { Typography } from '@mui/material'

type Props = {
    phrase: string
}

const GreetingPhrase = ({ phrase }: Props) => {
    return (
        <Typography
            variant="body1"
            color="text.secondary"
            sx={{
                mb: 4,
            }}
        >
            {phrase}
        </Typography>
    )
}

export default GreetingPhrase
