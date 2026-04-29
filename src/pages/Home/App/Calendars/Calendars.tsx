import { Stack } from '@mui/material'
import CalendarCard from './CalendarCard/CalendarCard.tsx'
import CreateNewButton from './CreateNewButton/CreateNewButton.tsx'
import useCalendars from '../../../../hooks/api/calendars/useCalendars/useCalendars.ts'
import Loader from '../../../../components/ui/common/Loader/Loader.tsx'
import type { Types } from '../../../../types/calendar/types.ts'

const Calendars = () => {
    const { data: calendars, isPending } = useCalendars()

    if (isPending) {
        return <Loader />
    }

    return (
        <Stack direction="row">
            {calendars.map((calendar: Types) => (
                <CalendarCard key={calendar.id} {...calendar} />
            ))}
            <CreateNewButton />
        </Stack>
    )
}

export default Calendars
