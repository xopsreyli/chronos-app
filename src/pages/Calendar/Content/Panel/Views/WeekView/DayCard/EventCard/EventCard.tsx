import { type MouseEvent } from 'react'
import { alpha, Box, Typography } from '@mui/material'
import type { Event } from '../../../../../../../../types/events/types.ts'
import useDrawerStore from '../../../../../../../../stores/useDrawerStore/useDrawerStore.ts'
import EventDetails from '../../../../../../../../components/ui/app/EventDetails/EventDetails.tsx'
import useEventColor from '../../../../../../../../hooks/ui/useEventColor/useEventColor.ts'

type Props = {
    event: Event
}

const EventCard = ({ event }: Props) => {
    const color = useEventColor(event.type)
    const open = useDrawerStore((state) => state.open)

    const handleClick = (e: MouseEvent) => {
        e.stopPropagation()
        open('right', <EventDetails event={event} />)
    }

    return (
        <Box
            onClick={handleClick}
            sx={{
                backgroundColor: `${alpha(color, 0.1)}`,
                borderLeft: '2px solid',
                borderColor: color,
                borderRadius: 1,
                px: 1,
                py: 0.5,
                transition: 'all 0.2s ease',
                '&:hover': {
                    color: color,
                    transform: 'translateX(4px)',
                },
            }}
        >
            <Typography
                sx={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1,
                    overflow: 'hidden',
                    color: 'inherit',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    transition: 'all 0.2s ease',
                }}
            >
                {event.title}
            </Typography>
        </Box>
    )
}

export default EventCard
