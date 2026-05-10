import { AppBar, Container, Stack, Toolbar } from '@mui/material'
import Logo from '../../ui/common/Logo/Logo.tsx'
import AuthButtons from './AuthButtons/AuthButtons.tsx'
import useUser from '../../../hooks/api/users/current/useUser/useUser.ts'
import UserMenu from './UserMenu/UserMenu.tsx'
import InvitesButton from './InvitesButton/InvitesButton.tsx'

const Header = () => {
    const { data: user } = useUser()

    return (
        <AppBar>
            <Container maxWidth="lg">
                <Toolbar
                    disableGutters
                    sx={{ justifyContent: 'space-between' }}
                >
                    <Logo />
                    {user ? (
                        <Stack
                            direction={'row'}
                            spacing={2}
                            useFlexGap
                            sx={{
                                alignItems: 'center',
                            }}
                        >
                            <InvitesButton />
                            <UserMenu />
                        </Stack>
                    ) : (
                        <AuthButtons />
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
