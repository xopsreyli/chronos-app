import { Stack } from '@mui/material'
import useInvites from '../../../../hooks/api/calendars/invites/useInvites/useInvites.ts'
import InviteCard from './InviteCard/InviteCard.tsx'

const Invites = () => {
    const { data: invites } = useInvites()

    return (
        <Stack spacing={1} useFlexGap>
            {invites?.map((invite) => (
                <InviteCard key={invite.id} invite={invite} />
            ))}
        </Stack>
    )
}

export default Invites
