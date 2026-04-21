import { useMutation, useQueryClient } from '@tanstack/react-query'
import createCalendar from '../../../api/calendars/createCalendar/createCalendar.ts'
import { useNavigate } from 'react-router'
import type { Calendar } from '../../../types/calendar/types.ts'
import useDialogStore from '../../../stores/useDialogStore/useDIalogStore.ts'

const useCreateCalendar = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const close = useDialogStore((state) => state.close)

    return useMutation({
        mutationFn: createCalendar,
        onSuccess: (data) => {
            queryClient.setQueryData<Calendar[]>(['calendars'], (calendars) => [
                ...(calendars ?? []),
                data,
            ])
            close()
            navigate(`/calendars/${data.id}`)
        },
    })
}

export default useCreateCalendar
