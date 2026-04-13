import { Button, Stack } from '@mui/material'
import { Link } from 'react-router'

const AuthButtons = () => {
    return (
        <Stack direction="row" spacing={2} useFlexGap>
            <Button
                to="/signin"
                component={Link}
                sx={{
                    color: 'text.secondary',
                    textTransform: 'capitalize',
                }}
            >
                sign in
            </Button>
            <Button
                to="/signup"
                component={Link}
                variant="contained"
                color="primary"
                sx={{
                    textTransform: 'capitalize',
                }}
            >
                get started
            </Button>
        </Stack>
    )
}

export default AuthButtons
