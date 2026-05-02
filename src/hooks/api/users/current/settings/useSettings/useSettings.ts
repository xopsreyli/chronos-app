import { useQuery } from '@tanstack/react-query'
import getSettings from '../../../../../../api/users/current/settings/getSettings/getSettings.ts'

const useSettings = () =>
    useQuery({
        queryKey: ['settings'],
        queryFn: getSettings,
        staleTime: Infinity,
        gcTime: Infinity,
    })

export default useSettings
