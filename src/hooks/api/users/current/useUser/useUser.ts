import { useQuery } from '@tanstack/react-query'
import getUser from '../../../../../api/users/current/getUser/getUser.ts'

const useUser = () =>
    useQuery({
        queryKey: ['user'],
        queryFn: getUser,
        staleTime: Infinity,
        gcTime: Infinity,
    })

export default useUser
