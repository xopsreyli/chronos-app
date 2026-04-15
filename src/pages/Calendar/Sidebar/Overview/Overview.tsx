import { Box, Stack } from '@mui/material'
import EventIcon from '@mui/icons-material/Event'
import NotificationsIcon from '@mui/icons-material/Notifications'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import StatItem from './StatItem/StatItem.tsx'
import SectionTitle from '../../../../components/ui/app/Calendar/Sidebar/SectionTitle/SectionTitle.tsx'
import useEvents from '../../../../hooks/useEvents/useEvents.ts'
import { useParams } from 'react-router'

const Overview = () => {
    const { id } = useParams()
    const { data: events } = useEvents(Number(id))

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
