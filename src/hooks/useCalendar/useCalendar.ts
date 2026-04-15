import { useQuery, useQueryClient } from '@tanstack/react-query'
import getCalendar from '../../api/calendars/getCalendar/getCalendar.ts'
import type { Calendar } from '../../types/calendar/types.ts'

const useCalendar = (id: number) => {
    const queryClient = useQueryClient()

    return useQuery({
        queryKey: ['calendar', id],
        queryFn: () => getCalendar(id),
        staleTime: Infinity,
        initialData: () => {
            const calendars = queryClient.getQueryData<Calendar[]>([
                'calendars',
            ])
            return calendars?.find((calendar) => calendar.id === id)
        },
    })
}

export default useCalendar
