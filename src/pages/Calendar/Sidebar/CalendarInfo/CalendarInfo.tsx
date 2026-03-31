import { Box, Stack, Typography } from '@mui/material'
import RoundIcon from '../../../../components/ui/common/RoundIcon/RoundIcon.tsx'
import EventIcon from '@mui/icons-material/Event'

const CalendarInfo = () => {
    return (
        <Stack
            component="section"
            direction="row"
            spacing={2}
            useFlexGap
            sx={{
                alignItems: 'center',
            }}
        >
            <RoundIcon Icon={EventIcon} iconSize={24} color="#7FFFD4" />
            <Box>
                <Typography
                    variant="h6"
                    sx={{
                        textTransform: 'capitalize',
                    }}
                >
                    Fitness
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Workout schedule and health appointments
                </Typography>
            </Box>
        </Stack>
    )
}

export default CalendarInfo
