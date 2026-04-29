import useEvents from '../../../../../../hooks/api/calendars/events/useEvents/useEvents.ts'
import { useMemo } from 'react'
import { Stack, Typography } from '@mui/material'
import type { Event } from '../../../../../../types/events/types.ts'
import { ARRANGEMENT } from '../../../../../../enums/events/enums.ts'
import dayjs from 'dayjs'
import UpcomingEventCard from '../UpcomingView/UpcomingEventCard/UpcomingEventCard.tsx'

const getEventDate = (event: Event) => {
    if (event.type === ARRANGEMENT) return dayjs(event.from)
    return dayjs(event.dateTime)
}

const DayView = () => {
    const { data: events } = useEvents()

    const sortedEvents = useMemo(() => {
        if (!events) return []

        return [
            ...events.arrangements,
            ...events.reminders,
            ...events.tasks,
        ].sort((a, b) => (getEventDate(a).isBefore(getEventDate(b)) ? -1 : 1))
    }, [events])

    if (sortedEvents.length === 0) {
        return (
            <Typography variant="body2" color={'text.secondary'}>
                No events this day.
            </Typography>
        )
    }

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

export default DayView
