import { useQuery } from '@tanstack/react-query'
import getUsers from '../../../../api/users/getUsers/getUsers.ts'

const useUsers = (page: number, nickname: string) => {
    return useQuery({
        queryKey: ['users', page, nickname],
        queryFn: () => getUsers({ nickname, page }),
    })
}

export default useUsers
