import { useQuery } from '@tanstack/react-query'
import getCalendars from '../../api/calendars/getCalendars/getCalendars.ts'

const useCalendars = () =>
    useQuery({
        queryKey: ['calendars'],
        queryFn: getCalendars,
        staleTime: Infinity,
        gcTime: Infinity,
    })

export default useCalendars
