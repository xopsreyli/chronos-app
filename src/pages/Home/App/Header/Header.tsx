import { Box, Stack, Typography } from '@mui/material'
import NewCalendarButton from './NewCalendarButton/NewCalendarButton.tsx'

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
            <NewCalendarButton />
        </Stack>
    )
}

export default Header
