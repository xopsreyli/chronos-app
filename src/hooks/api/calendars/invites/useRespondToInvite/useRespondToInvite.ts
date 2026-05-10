import { useMutation, useQueryClient } from '@tanstack/react-query'
import respondToInvite from '../../../../../api/calendars/invites/respondToInvite/RespondToInvite.ts'
import type { Invite } from '../../../../../types/calendar/invite/types.ts'

type MutationFnProps = {
    isAccepted: boolean
}

const useRespondToInvite = (id: number) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ isAccepted }: MutationFnProps) =>
            respondToInvite(id, isAccepted),
        onSuccess: () => {
            queryClient.setQueryData(['invites'], (invites: Invite[]) =>
                invites.filter((invite) => invite.id !== id),
            )
            queryClient.invalidateQueries({ queryKey: ['calendars'] })
        },
    })
}

export default useRespondToInvite
