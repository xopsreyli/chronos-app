import { Box, Stack } from '@mui/material'
import EventIcon from '@mui/icons-material/Event'
import NotificationsIcon from '@mui/icons-material/Notifications'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import StatItem from './StatItem/StatItem.tsx'
import SectionTitle from '../../../../components/ui/app/Calendar/Sidebar/SectionTitle/SectionTitle.tsx'

const Overview = () => {
    return (
        <Box component="section">
            <SectionTitle title="Overview" />
            <Stack spacing={2} useFlexGap>
                <StatItem Icon={EventIcon} name="Events" amount={3} />
                <StatItem
                    Icon={NotificationsIcon}
                    name="Reminders"
                    amount={1}
                />
                <StatItem Icon={TaskAltIcon} name="Tasks" amount={2} />
            </Stack>
        </Box>
    )
}

export default Overview
