import { useMutation, useQueryClient } from '@tanstack/react-query'
import createEvent from '../../../../api/calendars/events/createEvent/createEvent.ts'
import type {
    EventCreationData,
    EventType,
} from '../../../../types/events/types.ts'

const useCreateEvent = (calendarId: number, type: EventType) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: EventCreationData) =>
            createEvent(calendarId, type, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['events', calendarId] })
        },
    })
}

export default useCreateEvent
