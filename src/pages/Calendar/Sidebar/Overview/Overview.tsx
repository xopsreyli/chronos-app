import { Box, Stack } from '@mui/material'
import StatItem from './StatItem/StatItem.tsx'
import SectionTitle from '../../../../components/ui/app/Calendar/Sidebar/SectionTitle/SectionTitle.tsx'
import useEvents from '../../../../hooks/calendars/events/useEvents/useEvents.ts'
import getEventIcon from '../../../../utils/getEventIcon/getEventIcon.ts'
import { ARRANGEMENT, REMINDER, TASK } from '../../../../enums/events/enums.ts'

const Overview = () => {
    const { data: events } = useEvents()

    if (!events) return null

    return (
        <Box component="section">
            <SectionTitle title="Overview" />
            <Stack spacing={2} useFlexGap>
                <StatItem
                    Icon={getEventIcon(ARRANGEMENT)}
                    name={ARRANGEMENT}
                    amount={events.arrangements.length}
                />
                <StatItem
                    Icon={getEventIcon(REMINDER)}
                    name={REMINDER}
                    amount={events.reminders.length}
                />
                <StatItem
                    Icon={getEventIcon(TASK)}
                    name={TASK}
                    amount={events.tasks.length}
                />
            </Stack>
        </Box>
    )
}

export default Overview
