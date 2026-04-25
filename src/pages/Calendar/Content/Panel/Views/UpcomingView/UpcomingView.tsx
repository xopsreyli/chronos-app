import { Stack } from '@mui/material'
import UpcomingEventCard from './UpcomingEventCard/UpcomingEventCard.tsx'
import useEvents from '../../../../../../hooks/calendars/events/useEvents/useEvents.ts'
import type { Event } from '../../../../../../types/events/types.ts'
import dayjs from 'dayjs'
import { useMemo } from 'react'
import { ARRANGEMENT } from '../../../../../../enums/events/enums.ts'

const getEventDate = (event: Event) => {
    if (event.type === ARRANGEMENT) return dayjs(event.from)
    return dayjs(event.dateTime)
}

const UpcomingView = () => {
    const { data: events } = useEvents()

    const sortedEvents = useMemo(() => {
        if (!events) return []

        return [
            ...events.arrangements,
            ...events.reminders,
            ...events.tasks,
        ].sort((a, b) => (getEventDate(a).isBefore(getEventDate(b)) ? -1 : 1))
    }, [events])

    return (
        <Stack spacing={2} useFlexGap>
            {sortedEvents.map((event) => (
                <UpcomingEventCard
                    key={`${event.type}-${event.id}`}
                    event={event}
                />
            ))}
        </Stack>
    )
}

export default UpcomingView
