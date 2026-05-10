import { useQuery } from '@tanstack/react-query'
import getInvites from '../../../../../api/calendars/invites/getInvites/getInvites.ts'

const useInvites = () => {
    return useQuery({
        queryKey: ['invites'],
        queryFn: getInvites,
        staleTime: 60 * 1000,
    })
}

export default useInvites
