import { Typography } from '@mui/material'

type Props = {
    subtitle: string
}

const Subtitle = ({ subtitle }: Props) => {
    return (
        <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            sx={{
                maxWidth: '480px',
            }}
        >
            {subtitle}
        </Typography>
    )
}

export default Subtitle
