import {
    alpha,
    Avatar,
    Box,
    Chip,
    Container,
    Stack,
    Typography,
} from '@mui/material'
import useUser from '../../../hooks/api/users/current/useUser/useUser.ts'
import useCalendars from '../../../hooks/api/calendars/useCalendars/useCalendars.ts'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

const Header = () => {
    const { data: user } = useUser()
    const { data: calendars } = useCalendars()

    console.log(calendars)

    return (
        <Box
            sx={(theme) => ({
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                py: 4,
            })}
        >
            <Container
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    gap: 3,
                }}
            >
                <Avatar
                    sx={{
                        width: 100,
                        height: 100,
                        border: '4px solid',
                        borderColor: '#fff',
                        backgroundColor: alpha('#fff', 0.9),
                        color: '#1a3a2f',
                        fontSize: '2.5rem',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                    }}
                >
                    {user?.nickname[0].toUpperCase()}
                </Avatar>
                <Box>
                    <Typography
                        variant={'h4'}
                        sx={{
                            color: '#1a3a2f',
                        }}
                    >
                        {user?.nickname}
                    </Typography>
                    <Typography
                        sx={{
                            color: '#1a3a1f',
                            mb: 1.5,
                        }}
                    >
                        {user?.email}
                    </Typography>
                    <Stack
                        direction={'row'}
                        spacing={1}
                        useFlexGap
                        sx={{
                            flexWrap: 'wrap',
                        }}
                    >
                        <Chip
                            label={`${calendars?.length} Calendars`}
                            icon={<CalendarMonthIcon />}
                            size={'small'}
                            sx={{
                                backgroundColor: alpha('#fff', 0.8),
                                color: '#1a3a2f',
                            }}
                        />
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default Header
