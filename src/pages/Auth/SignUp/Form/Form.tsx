import { Box, Button, Stack, TextField } from '@mui/material'

const Form = () => {
    return (
        <Box component="form">
            <Stack
                spacing={2.5}
                useFlexGap
                sx={{
                    mb: 3,
                }}
            >
                <TextField
                    type="text"
                    label="Nickname"
                    fullWidth
                    helperText="Max 16 characters"
                    name="nickname"
                    required
                />
                <TextField
                    type="email"
                    label="Email Address"
                    fullWidth
                    name="email"
                    required
                />
                <TextField
                    type="password"
                    label="Password"
                    fullWidth
                    helperText="At least 8 characters"
                    name="password"
                    required
                />
                <TextField
                    type="password"
                    label="Confirm Password"
                    fullWidth
                    name="confirmPassword"
                    required
                />
            </Stack>
            <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                    textTransform: 'capitalize',
                    fontSize: 15,
                }}
            >
                Create Account
            </Button>
        </Box>
    )
}

export default Form
