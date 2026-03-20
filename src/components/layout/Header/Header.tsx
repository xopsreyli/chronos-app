import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import {
    AppBar,
    Button,
    Container,
    Stack,
    Toolbar,
    Typography,
} from '@mui/material'
import { Link as RRLink } from 'react-router'

const Header = () => {
    return (
        <AppBar position="fixed">
            <Container maxWidth="lg">
                <Toolbar
                    disableGutters
                    sx={{ justifyContent: 'space-between' }}
                >
                    <RRLink
                        to={'/'}
                        style={{
                            textDecoration: 'none',
                        }}
                    >
                        <Stack
                            direction="row"
                            spacing={1}
                            useFlexGap
                            sx={{
                                alignItems: 'center',
                            }}
                        >
                            <CalendarMonthIcon
                                sx={{
                                    color: 'primary.main',
                                    fontSize: 32,
                                }}
                            />
                            <Typography
                                sx={{
                                    color: 'text.primary',
                                    fontSize: '1.125rem',
                                    fontWeight: 'bold',
                                    textTransform: 'capitalize',
                                }}
                            >
                                chronos
                            </Typography>
                        </Stack>
                    </RRLink>
                    <Stack direction="row" spacing={2} useFlexGap>
                        <Button
                            to="/signin"
                            component={RRLink}
                            sx={{
                                color: 'text.secondary',
                                textTransform: 'capitalize',
                            }}
                        >
                            sign in
                        </Button>
                        <Button
                            to="/signup"
                            component={RRLink}
                            variant="contained"
                            color="primary"
                            sx={{
                                textTransform: 'capitalize',
                            }}
                        >
                            get started
                        </Button>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
