import { AppBar, Container, Toolbar } from '@mui/material'
import Logo from '../../ui/common/Logo/Logo.tsx'
import AuthButtons from './AuthButtons/AuthButtons.tsx'
import useUser from '../../../hooks/api/users/current/useUser/useUser.ts'
import UserMenu from './UserMenu/UserMenu.tsx'

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
                    {user ? <UserMenu /> : <AuthButtons />}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
