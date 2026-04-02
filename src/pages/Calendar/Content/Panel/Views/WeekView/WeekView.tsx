import { Stack } from '@mui/material'
import DayCard from './DayCard/DayCard.tsx'

const WEEK_DAYS: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const WeekView = () => {
    return (
        <Stack direction="row" spacing={1} useFlexGap>
            {WEEK_DAYS.map((weekDay) => (
                <DayCard key={weekDay} weekDay={weekDay} date={10} />
            ))}
        </Stack>
    )
}

export default WeekView
