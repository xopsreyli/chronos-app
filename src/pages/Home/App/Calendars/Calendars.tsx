import { Stack } from '@mui/material'
import CalendarCard from './CalendarCard/CalendarCard.tsx'
import CreateNewButton from './CreateNewButton/CreateNewButton.tsx'
import useCalendars from '../../../../hooks/api/calendars/useCalendars/useCalendars.ts'
import Loader from '../../../../components/ui/common/Loader/Loader.tsx'
import type { Calendar } from '../../../../types/calendar/types.ts'

const Calendars = () => {
    const { data: calendars, isPending } = useCalendars()

    if (isPending || !calendars) {
        return <Loader />
    }

    return (
        <Stack direction="row">
            {calendars.map((calendar: Calendar) => (
                <CalendarCard key={calendar.id} {...calendar} />
            ))}
            <CreateNewButton />
        </Stack>
    )
}

export default Calendars
