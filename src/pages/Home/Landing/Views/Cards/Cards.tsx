import { Stack } from '@mui/material'
import type { ViewCardProps } from './ViewCard/ViewCard.tsx'
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth'
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek'
import EventIcon from '@mui/icons-material/Event'
import ViewCard from './ViewCard/ViewCard.tsx'

const CARDS_CONTENT: ViewCardProps[] = [
    { Icon: CalendarViewMonthIcon, title: 'Monthly View' },
    { Icon: CalendarViewWeekIcon, title: 'Weekly View' },
    { Icon: EventIcon, title: 'Day View' },
]

const Cards = () => {
    return (
        <Stack direction="row" spacing={3} useFlexGap>
            {CARDS_CONTENT.map((card) => (
                <ViewCard
                    key={card.title}
                    Icon={card.Icon}
                    title={card.title}
                />
            ))}
        </Stack>
    )
}

export default Cards
