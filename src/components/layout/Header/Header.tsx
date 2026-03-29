import { AppBar, Container, Toolbar } from '@mui/material'
import Logo from '../../ui/common/Logo/Logo.tsx'
// import AuthButtons from './AuthButtons/AuthButtons.tsx'
import UserMenu from './UserMenu/UserMenu.tsx'

const Header = () => {
    return (
        <AppBar>
            <Container maxWidth="lg">
                <Toolbar
                    disableGutters
                    sx={{ justifyContent: 'space-between' }}
                >
                    <Logo />
                    {/*<AuthButtons />*/}
                    <UserMenu />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
