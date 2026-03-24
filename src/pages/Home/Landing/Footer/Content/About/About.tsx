import { Box, Stack, Typography } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

const About = () => {
    return (
        <Box>
            <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{
                    alignItems: 'center',
                    mb: 2,
                }}
            >
                <CalendarMonthIcon
                    sx={{
                        color: 'primary.light',
                        fontSize: 28,
                    }}
                />
                <Typography
                    component="h6"
                    sx={{
                        textTransform: 'capitalize',
                        color: '#fff',
                        fontWeight: 'bold',
                    }}
                >
                    chronos
                </Typography>
            </Stack>
            <Typography
                variant="body2"
                color="grey.400"
                sx={{
                    maxWidth: 300,
                }}
            >
                Your personal calendar companion for organizing life, work, and
                everything in between.
            </Typography>
        </Box>
    )
}

export default About
