import { useQuery } from '@tanstack/react-query'
import getUser from '../../api/user/current/getUser/getUser.ts'

const useUser = () =>
    useQuery({
        queryKey: ['user'],
        queryFn: getUser,
        staleTime: Infinity,
        gcTime: Infinity,
        retry: false,
    })

export default useUser
