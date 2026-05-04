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
import { DARK } from '../../../enums/theme/enums.ts'

const Header = () => {
    const { data: user } = useUser()
    const { data: calendars } = useCalendars()

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
                        borderColor: 'background.paper',
                        backgroundColor: `color-mix(in srgb, var(--mui-palette-background-paper) 90%, transparent)`,
                        color: 'text.primary',
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
                            color: 'primary.contrastText',
                        }}
                    >
                        {user?.nickname}
                    </Typography>
                    <Typography
                        sx={{
                            color: 'secondary.contrastText',
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
                            icon={<CalendarMonthIcon color={'inherit'} />}
                            size={'small'}
                            sx={[
                                (theme) => ({
                                    backgroundColor: alpha(
                                        theme.palette.background.paper,
                                        0.8,
                                    ),
                                    color: 'primary.contrastText',
                                }),
                                (theme) =>
                                    theme.applyStyles(DARK, {
                                        backgroundColor: alpha(
                                            theme.palette.primary.contrastText,
                                            0.8,
                                        ),
                                        color: 'text.primary',
                                    }),
                            ]}
                        />
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default Header
