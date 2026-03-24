import { Box } from '@mui/material'
import { Outlet } from 'react-router'

const AuthLayout = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Outlet />
        </Box>
    )
}

export default AuthLayout
