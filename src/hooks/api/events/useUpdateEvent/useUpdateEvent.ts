import { useMutation, useQueryClient } from '@tanstack/react-query'
import updateEvent from '../../../../api/events/updateEvent/updateEvent.ts'
import type {
    Event,
    EventUpdationData,
} from '../../../../types/events/types.ts'

const useUpdateEvent = (event?: Event) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: EventUpdationData) => {
            if (!event) return Promise.reject('No event provided')
            return updateEvent(event.id, event.type, data)
        },
        onSuccess: (updatedEvent: Event) => {
            queryClient.invalidateQueries({
                queryKey: ['events', updatedEvent.calendarId],
            })
        },
    })
}

export default useUpdateEvent
