import { useMutation, useQueryClient } from '@tanstack/react-query'
import deleteEvent from '../../../../api/events/deleteEvent/deleteEvent.ts'
import type { Event } from '../../../../types/events/types.ts'

const useDeleteEvent = (event: Event) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: () => deleteEvent(event.id, event.type),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['events', event.calendarId],
            })
        },
    })
}

export default useDeleteEvent
