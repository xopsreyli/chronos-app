import { Box, Stack } from '@mui/material'
import StatItem from './StatItem/StatItem.tsx'
import SectionTitle from '../../../../components/ui/app/Calendar/Sidebar/SectionTitle/SectionTitle.tsx'
import useEvents from '../../../../hooks/api/calendars/events/useEvents/useEvents.ts'
import getEventIcon from '../../../../utils/getEventIcon/getEventIcon.ts'
import { ARRANGEMENT, REMINDER, TASK } from '../../../../enums/events/enums.ts'

const Overview = () => {
    const { data: events } = useEvents()

    return (
        <Box component="section">
            <SectionTitle title="Overview" />
            <Stack spacing={2} useFlexGap>
                <StatItem
                    Icon={getEventIcon(ARRANGEMENT)}
                    eventType={ARRANGEMENT}
                    amount={events?.arrangements.length}
                />
                <StatItem
                    Icon={getEventIcon(REMINDER)}
                    eventType={REMINDER}
                    amount={events?.reminders.length}
                />
                <StatItem
                    Icon={getEventIcon(TASK)}
                    eventType={TASK}
                    amount={events?.tasks.length}
                />
            </Stack>
        </Box>
    )
}

export default Overview
