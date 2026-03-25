import { Stack } from '@mui/material'
import { Outlet } from 'react-router'
import Logo from "../../ui/common/Logo/Logo.tsx";

const AuthLayout = () => {
    return (
        <Stack
            sx={{
                minHeight: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Logo
                icon={{
                    size: 40
                }}
                nameSize={20}
            />
            <Outlet />
        </Stack>
    )
}

export default AuthLayout
