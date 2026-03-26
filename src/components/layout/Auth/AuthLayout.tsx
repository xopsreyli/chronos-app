import { Box, Container, Stack } from '@mui/material'
import { Outlet } from 'react-router'
import Logo from '../../ui/common/Logo/Logo.tsx'

const AuthLayout = () => {
    return (
        <Container maxWidth="sm">
            <Stack
                sx={{
                    minHeight: '100vh',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        mb: 2,
                    }}
                >
                    <Logo
                        icon={{
                            size: 40,
                        }}
                        nameSize={20}
                    />
                </Box>
                <Outlet />
            </Stack>
        </Container>
    )
}

export default AuthLayout
