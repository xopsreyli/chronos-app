import { Box, Button, Stack, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const Header = () => {
    return (
        <Stack
            direction="row"
            sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 4,
            }}
        >
            <Box>
                <Typography
                    variant="h4"
                    sx={{
                        textTransform: 'capitalize',
                        mb: 0.5,
                    }}
                >
                    my calendars
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Manage and view all your calendars in one place
                </Typography>
            </Box>
            <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{
                    textTransform: 'capitalize',
                }}
            >
                new calendar
            </Button>
        </Stack>
    )
}

export default Header
