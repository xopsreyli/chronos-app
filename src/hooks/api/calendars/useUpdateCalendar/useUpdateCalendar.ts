import useDialogStore from '../../../../stores/useDialogStore/useDIalogStore.ts'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import updateCalendar from '../../../../api/calendars/updateCalendar/updateCalendar.ts'
import type { Calendar } from '../../../../types/calendar/types.ts'

const useUpdateCalendar = () => {
    const queryClient = useQueryClient()
    const close = useDialogStore((state) => state.close)

    return useMutation({
        mutationFn: updateCalendar,
        onSuccess: (updatedCalendar: Calendar) => {
            queryClient.setQueryData<Calendar[]>(['calendars'], (calendars) =>
                calendars!.map((calendar) =>
                    calendar.id === updatedCalendar.id
                        ? updatedCalendar
                        : calendar,
                ),
            )
            queryClient.setQueryData<Calendar>(
                ['calendar', updatedCalendar.id],
                updatedCalendar,
            )
            close()
        },
    })
}

export default useUpdateCalendar
