import { alpha, Box, Typography } from '@mui/material'
import type { Event } from '../../../../../../../../types/events/types.ts'

type Props = {
    event: Event
}

const EventCard = ({ event }: Props) => {
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
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1,
                    overflow: 'hidden',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                }}
            >
                {event.title}
            </Typography>
        </Box>
    )
}

export default EventCard
