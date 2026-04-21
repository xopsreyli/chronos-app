import { Box, Container, Stack } from '@mui/material'
import { Outlet, useNavigate } from 'react-router'
import Logo from '../../ui/common/Logo/Logo.tsx'
import useUser from '../../../hooks/users/current/useUser/useUser.ts'
import { useEffect } from 'react'

const AuthLayout = () => {
    const navigate = useNavigate()
    const { data: user } = useUser()

    useEffect(() => {
        if (user) navigate('/', { replace: true })
    }, [user, navigate])

    return (
        <Container component="main" maxWidth="sm">
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
