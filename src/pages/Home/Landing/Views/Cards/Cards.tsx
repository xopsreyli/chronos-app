import { Stack } from '@mui/material'
import type { ViewCardProps } from './ViewCard/ViewCard.tsx'
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth'
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek'
import EventIcon from '@mui/icons-material/Event'
import ViewCard from './ViewCard/ViewCard.tsx'

const cards: ViewCardProps[] = [
    { icon: CalendarViewMonthIcon, title: 'Monthly View' },
    { icon: CalendarViewWeekIcon, title: 'Weekly View' },
    { icon: EventIcon, title: 'Day View' },
]

const Cards = () => {
    return (
        <Stack
            direction="row"
            spacing={3}
            useFlexGap
            sx={{
                pt: 4,
            }}
        >
            {cards.map((card) => (
                <ViewCard
                    key={card.title}
                    icon={card.icon}
                    title={card.title}
                />
            ))}
        </Stack>
    )
}

export default Cards
