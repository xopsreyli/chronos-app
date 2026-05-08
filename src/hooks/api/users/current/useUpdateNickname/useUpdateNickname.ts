import { useMutation, useQueryClient } from '@tanstack/react-query'
import updateNickname from '../../../../../api/users/current/updateNickname/updateNickname.ts'
import type { User } from '../../../../../types/user/types.ts'

const useUpdateNickname = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: updateNickname,
        onSuccess: (updatedUser: User) => {
            queryClient.setQueryData(['user'], updatedUser)
        },
    })
}

export default useUpdateNickname
