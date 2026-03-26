import { Divider } from '@mui/material'

const AuthDivider = () => {
    return (
        <Divider
            textAlign="center"
            sx={{
                color: 'text.secondary',
                fontSize: '0.875rem',
            }}
        >
            or
        </Divider>
    )
}

export default AuthDivider
