import { Box, Stack } from '@mui/material'
import EventIcon from '@mui/icons-material/Event'
import NotificationsIcon from '@mui/icons-material/Notifications'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import StatItem from './StatItem/StatItem.tsx'
import SectionTitle from '../../../../components/ui/app/Calendar/Sidebar/SectionTitle/SectionTitle.tsx'
import useEvents from '../../../../hooks/calendars/events/useEvents/useEvents.ts'

const Overview = () => {
    const { data: events } = useEvents()

    if (!events) return null

    return (
        <Box component="section">
            <SectionTitle title="Overview" />
            <Stack spacing={2} useFlexGap>
                <StatItem
                    Icon={EventIcon}
                    name="Arrangements"
                    amount={events.arrangements.length}
                />
                <StatItem
                    Icon={NotificationsIcon}
                    name="Reminders"
                    amount={events.reminders.length}
                />
                <StatItem
                    Icon={TaskAltIcon}
                    name="Tasks"
                    amount={events.tasks.length}
                />
            </Stack>
        </Box>
    )
}

export default Overview
