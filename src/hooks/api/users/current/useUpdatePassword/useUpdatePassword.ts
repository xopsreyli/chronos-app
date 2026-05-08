import { useMutation } from '@tanstack/react-query'
import updatePassword from '../../../../../api/users/current/updatePassword/updatePassword.ts'

const useUpdatePassword = () => {
    return useMutation({
        mutationFn: updatePassword,
    })
}

export default useUpdatePassword
