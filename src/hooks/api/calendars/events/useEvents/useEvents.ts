import { useQuery } from '@tanstack/react-query'
import getEvents from '../../../../../api/calendars/events/getEvents/getEvents.ts'
import { useQueryState } from 'nuqs'
import calculateEventsRange from '../../../../../utils/eventsRange/calculateEventsRange.ts'
import dayjs from 'dayjs'
import { useParams } from 'react-router'
import { UPCOMING } from '../../../../../enums/views/enums.ts'
import type { View } from '../../../../../types/views/types.ts'

const useEvents = () => {
    const { id } = useParams()
    const calendarId = Number(id)
    const [view] = useQueryState('view', {
        defaultValue: UPCOMING,
    })
    const [date] = useQueryState('date', {
        defaultValue: dayjs().format('YYYY-MM-DD'),
    })
    const [from, to] = calculateEventsRange(view as View, date)

    return useQuery({
        queryKey: ['events', calendarId, view, date],
        queryFn: () => getEvents(calendarId, from, to),
    })
}

export default useEvents
