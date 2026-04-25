import { Box } from '@mui/material'

type Props = {
    color: string
}

const EventIndicator = ({ color }: Props) => {
    return (
        <Box
            component={'span'}
            sx={{
                width: 6,
                aspectRatio: 1,
                borderRadius: '50%',
                backgroundColor: color,
            }}
        ></Box>
    )
}

export default EventIndicator
