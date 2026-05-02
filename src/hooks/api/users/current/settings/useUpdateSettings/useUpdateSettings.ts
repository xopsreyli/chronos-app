import { useMutation, useQueryClient } from '@tanstack/react-query'
import updateSettings from '../../../../../../api/users/current/settings/updateSettings/updateSettings.ts'
import type { Settings } from '../../../../../../types/settings/types.ts'

const useUpdateSettings = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: updateSettings,
        onSuccess: (updatedSettings: Settings) => {
            queryClient.setQueryData(['settings'], updatedSettings)
        },
    })
}

export default useUpdateSettings
