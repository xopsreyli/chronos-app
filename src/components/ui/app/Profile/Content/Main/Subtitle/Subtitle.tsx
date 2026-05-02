import { Typography } from '@mui/material'

type Props = {
    subtitle: string
}

const Subtitle = ({ subtitle }: Props) => {
    return (
        <Typography
            variant="body2"
            color={'text.secondary'}
            sx={{
                mb: 3,
            }}
        >
            {subtitle}
        </Typography>
    )
}

export default Subtitle
