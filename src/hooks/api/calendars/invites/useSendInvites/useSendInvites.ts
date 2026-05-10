import { useMutation } from '@tanstack/react-query'
import sendInvites from '../../../../../api/calendars/invites/sendInvites/sendInvites.ts'

type MutationFnParams = {
    id: number
    userIds: number[]
}

const useSendInvites = () => {
    return useMutation({
        mutationFn: ({ id, userIds }: MutationFnParams) =>
            sendInvites(id, userIds),
    })
}

export default useSendInvites
