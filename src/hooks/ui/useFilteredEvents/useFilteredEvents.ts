import useEvents from '../../api/calendars/events/useEvents/useEvents.ts'
import useEventsFilter from '../../../stores/useEventsFilter/useEventsFilter.ts'
import { useMemo } from 'react'
import { ARRANGEMENT, REMINDER, TASK } from '../../../enums/events/enums.ts'

const useFilteredEvents = () => {
    const { data: events, ...rest } = useEvents()
    const filters = useEventsFilter((state) => state.filters)

    const filteredEvents = useMemo(() => {
        if (!events) return undefined

        return {
            arrangements: filters[ARRANGEMENT] ? events.arrangements : [],
            reminders: filters[REMINDER] ? events.reminders : [],
            tasks: filters[TASK] ? events.tasks : [],
        }
    }, [events, filters])

    return {
        data: filteredEvents,
        ...rest,
    }
}

export default useFilteredEvents
