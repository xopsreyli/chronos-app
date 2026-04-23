import { useQuery } from '@tanstack/react-query'
import getEvents from '../../../../api/calendars/events/getEvents/getEvents.ts'
import { useQueryState } from 'nuqs'
import calculateEventsRange from '../../../../utils/eventsRange/calculateEventsRange.ts'
import dayjs from 'dayjs'

const useEvents = (calendarId: number) => {
    const [view] = useQueryState('view', {
        defaultValue: 'upcoming',
    })
    const [date] = useQueryState('date', {
        defaultValue: dayjs().format('YYYY-MM-DD'),
    })
    const [from, to] = calculateEventsRange(view, date)

    return useQuery({
        queryKey: ['events', calendarId, view, date],
        queryFn: () => getEvents(calendarId, from, to),
    })
}

export default useEvents
