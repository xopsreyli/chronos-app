import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router'

const useSign = <T>(mutationFn: (data: T) => Promise<unknown>) => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation({
        mutationFn,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user'] })
            navigate('/')
        },
    })
}

export default useSign
