import { Box, Button, Stack, TextField } from '@mui/material'
import CustomLink from '../../../../components/ui/auth/CustomLink/CustomLink.tsx'

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
                    type="email"
                    label="Email Address"
                    fullWidth
                    name="email"
                    required
                />
                <Box>
                    <TextField
                        type="password"
                        label="Password"
                        fullWidth
                        name="password"
                        required
                    />
                    <Box
                        sx={{
                            textAlign: 'right',
                            mt: 1,
                        }}
                    >
                        <CustomLink href="#">Forgot password?</CustomLink>
                    </Box>
                </Box>
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
                sign in
            </Button>
        </Box>
    )
}

export default Form
