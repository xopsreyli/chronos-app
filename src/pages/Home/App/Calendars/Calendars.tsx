import { Stack } from '@mui/material'
import CalendarCard from './CalendarCard/CalendarCard.tsx'
import CreateNewButton from './CreateNewButton/CreateNewButton.tsx'

const CALENDARS = [
    {
        id: 1,
        name: 'Personal',
        description: 'My personal calendar for daily activities',
    },
    {
        id: 2,
        name: 'Work',
        description: 'Professional meetings and deadlines',
    },
    {
        id: 3,
        name: 'Fitness',
        description: 'Workout schedule and health appointments',
    },
]

const Calendars = () => {
    return (
        <Stack direction="row">
            {CALENDARS.map((calendar) => (
                <CalendarCard key={calendar.id} {...calendar} />
            ))}
            <CreateNewButton />
        </Stack>
    )
}

export default Calendars
