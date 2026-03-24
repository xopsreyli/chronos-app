import { Button, Stack } from '@mui/material'
import { Link as RRLink } from 'react-router'

const AuthButtons = () => {
    return (
        <Stack direction="row" spacing={2} useFlexGap>
            <Button
                to="/signin"
                component={RRLink}
                sx={{
                    color: 'text.secondary',
                    textTransform: 'capitalize',
                }}
            >
                sign in
            </Button>
            <Button
                to="/signup"
                component={RRLink}
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
