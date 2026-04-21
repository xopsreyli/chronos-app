import { useMutation, useQueryClient } from '@tanstack/react-query'
import createEvent from '../../../../api/calendars/events/createEvent/createEvent.ts'
import type {
    EventCreationData,
    EventType,
    Event,
    Events,
} from '../../../../types/events/types.ts'

const useCreateEvent = (calendarId: number, type: EventType) => {
    const queryClient = useQueryClient()

    const eventsKeysByType: Record<EventType, keyof Events> = {
        arrangement: 'arrangements',
        reminder: 'reminders',
        task: 'tasks',
    }

    return useMutation({
        mutationFn: (data: EventCreationData) =>
            createEvent(calendarId, type, data),
        onSuccess: (data: Event) => {
            queryClient.setQueryData(
                ['events', calendarId],
                (events: Events) => {
                    return {
                        ...events,
                        [eventsKeysByType[type]]: [
                            ...events[eventsKeysByType[type]],
                            data,
                        ],
                    }
                },
            )
        },
    })
}

export default useCreateEvent
