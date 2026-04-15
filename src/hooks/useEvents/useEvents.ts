import { useQuery } from '@tanstack/react-query'
import getEvents from '../../api/calendars/events/getEvents/getEvents.ts'

const useEvents = (calendarId: number) =>
    useQuery({
        queryKey: ['events', calendarId],
        queryFn: () => getEvents(calendarId),
        staleTime: Infinity,
    })

export default useEvents
