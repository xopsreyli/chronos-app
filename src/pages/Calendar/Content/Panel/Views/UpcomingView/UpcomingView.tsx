import { Stack } from '@mui/material'
import UpcomingEventCard from './UpcomingEventCard/UpcomingEventCard.tsx'

const UpcomingView = () => {
    return (
        <Stack spacing={2} useFlexGap>
            <UpcomingEventCard />
            <UpcomingEventCard />
            <UpcomingEventCard />
        </Stack>
    )
}

export default UpcomingView
