import { AppBar, Container, Toolbar } from '@mui/material'
import Logo from './Logo/Logo.tsx'
import AuthButtons from './AuthButtons/AuthButtons.tsx'

const Header = () => {
    return (
        <AppBar>
            <Container maxWidth="lg">
                <Toolbar
                    disableGutters
                    sx={{ justifyContent: 'space-between' }}
                >
                    <Logo />
                    <AuthButtons />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
