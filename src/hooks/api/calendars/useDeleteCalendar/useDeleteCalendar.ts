import { useMutation, useQueryClient } from '@tanstack/react-query'
import deleteCalendar from '../../../../api/calendars/deleteCalendar/deleteCalendar.ts'
import type { Calendar } from '../../../../types/calendar/types.ts'

const useDeleteCalendar = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: deleteCalendar,
        onSuccess: (id: number) => {
            queryClient.setQueryData<Calendar[]>(['calendars'], (calendars) =>
                calendars!.filter((calendar) => calendar.id !== id),
            )
            queryClient.removeQueries({ queryKey: ['calendar', id] })
        },
    })
}

export default useDeleteCalendar
