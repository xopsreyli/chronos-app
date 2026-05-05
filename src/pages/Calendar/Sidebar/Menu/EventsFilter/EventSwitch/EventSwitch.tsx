import { Stack, Switch, Typography } from '@mui/material'
import type { EventType } from '../../../../../../types/events/types.ts'
import getEventIcon from '../../../../../../utils/getEventIcon/getEventIcon.ts'
import useEventColor from '../../../../../../hooks/ui/useEventColor/useEventColor.ts'
import useEventsFilter from '../../../../../../stores/useEventsFilter/useEventsFilter.ts'

type Props = {
    eventType: EventType
}

const EventSwitch = ({ eventType }: Props) => {
    const filters = useEventsFilter((state) => state.filters)
    const toggleFilter = useEventsFilter((state) => state.toggleFilter)
    const color = useEventColor(eventType)
    const Icon = getEventIcon(eventType)

    const handleToggle = () => {
        toggleFilter(eventType)
    }

    return (
        <Stack
            direction="row"
            sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{
                    alignItems: 'center',
                }}
            >
                <Icon
                    fontSize="small"
                    sx={{
                        color: color,
                    }}
                />
                <Typography
                    variant={'body2'}
                    sx={{
                        textTransform: 'capitalize',
                    }}
                >
                    {eventType}
                </Typography>
            </Stack>
            <Switch
                checked={filters[eventType]}
                onChange={handleToggle}
                sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                        color: color,
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: color,
                    },
                }}
            />
        </Stack>
    )
}

export default EventSwitch
