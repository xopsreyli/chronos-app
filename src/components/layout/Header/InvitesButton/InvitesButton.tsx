import NotificationsIcon from '@mui/icons-material/Notifications'
import { Badge, IconButton } from '@mui/material'
import useInvites from '../../../../hooks/api/calendars/invites/useInvites/useInvites.ts'
import useDrawerStore from '../../../../stores/useDrawerStore/useDrawerStore.ts'
import Invites from '../../../ui/app/Invites/Invites.tsx'

const InvitesButton = () => {
    const { data: invites } = useInvites()
    const open = useDrawerStore((state) => state.open)

    const onClick = () => {
        if (!invites?.length) return

        open('right', <Invites />)
    }

    return (
        <IconButton onClick={onClick}>
            <Badge
                badgeContent={invites?.length}
                variant={'dot'}
                overlap={'circular'}
                color="primary"
            >
                <NotificationsIcon />
            </Badge>
        </IconButton>
    )
}

export default InvitesButton
