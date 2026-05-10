import {
    alpha,
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material'
import type { Invite } from '../../../../../types/calendar/invite/types.ts'
import useRespondToInvite from '../../../../../hooks/api/calendars/invites/useRespondToInvite/useRespondToInvite.ts'

type Props = {
    invite: Invite
}

const InviteCard = ({ invite }: Props) => {
    const { mutate } = useRespondToInvite(invite.id)

    const onDecline = () => {
        mutate({ isAccepted: false })
    }

    const onAccept = () => {
        mutate({ isAccepted: true })
    }

    return (
        <Card>
            <CardContent>
                <Typography
                    variant="body2"
                    sx={{
                        mb: 1,
                    }}
                >
                    <Typography
                        variant="body2"
                        component="span"
                        color="primary.light"
                    >
                        {invite.inviter.nickname}
                    </Typography>{' '}
                    invited you to:
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 700,
                    }}
                >
                    {invite.calendar.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    onClick={onDecline}
                    variant={'contained'}
                    color={'error'}
                    size={'small'}
                    fullWidth
                    sx={(theme) => ({
                        '&:hover': {
                            boxShadow: `0 4px 12px ${alpha(theme.palette.error.main, 0.4)}`,
                        },
                    })}
                >
                    decline
                </Button>
                <Button
                    onClick={onAccept}
                    variant={'contained'}
                    size={'small'}
                    fullWidth
                >
                    accept
                </Button>
            </CardActions>
        </Card>
    )
}

export default InviteCard
