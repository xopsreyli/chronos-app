import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import logout from '../../../api/auth/logout/logout.ts'

const useLogout = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation({
        mutationFn: logout,
        onSuccess: () => {
            queryClient.setQueryData(['user'], null)
            queryClient.clear()
            navigate('/')
        },
    })
}

export default useLogout
