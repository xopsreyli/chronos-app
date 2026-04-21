import { Box, Stack, Typography } from '@mui/material'
import RoundIcon from '../../../../components/ui/common/RoundIcon/RoundIcon.tsx'
import EventIcon from '@mui/icons-material/Event'
import useCalendar from '../../../../hooks/calendars/useCalendar/useCalendar.ts'
import { useParams } from 'react-router'

const CalendarInfo = () => {
    const { id } = useParams()
    const { data: calendar } = useCalendar(Number(id))

    if (!calendar) return null

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
            <RoundIcon Icon={EventIcon} iconSize={24} color={calendar.color} />
            <Box>
                <Typography
                    variant="h6"
                    sx={{
                        textTransform: 'capitalize',
                    }}
                >
                    {calendar.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {calendar.description}
                </Typography>
            </Box>
        </Stack>
    )
}

export default CalendarInfo
