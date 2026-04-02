import { alpha, Box, Typography } from '@mui/material'

type Props = {
    title: string
}

const Event = ({ title }: Props) => {
    return (
        <Box
            sx={{
                backgroundColor: `${alpha('#7FFFD4', 0.1)}`,
                borderLeft: '2px solid',
                borderLeftColor: '#7FFFD4',
                borderRadius: 1,
                px: 1,
                py: 0.5,
            }}
        >
            <Typography
                sx={{
                    fontSize: '0.75rem',
                    fontWeight: '500',
                }}
            >
                {title}
            </Typography>
        </Box>
    )
}

export default Event
