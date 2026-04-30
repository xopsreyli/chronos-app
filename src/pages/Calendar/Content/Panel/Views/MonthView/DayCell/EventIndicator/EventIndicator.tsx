import { Box } from '@mui/material'
import type { EventType } from '../../../../../../../../types/events/types.ts'
import useEventColor from '../../../../../../../../hooks/ui/useEventColor/useEventColor.ts'

type Props = {
    type: EventType
}

const EventIndicator = ({ type }: Props) => {
    const color = useEventColor(type)

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
