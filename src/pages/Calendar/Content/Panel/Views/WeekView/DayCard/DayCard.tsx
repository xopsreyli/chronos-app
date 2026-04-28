import { alpha, Card, CardContent, Stack, Typography } from '@mui/material'
import EventCard from './EventCard/EventCard.tsx'
import { type Event } from '../../../../../../../types/events/types.ts'
import dayjs, { type Dayjs } from 'dayjs'
import { useQueryState } from 'nuqs'
import { DAY } from '../../../../../../../enums/views/enums.ts'

type Props = {
    day: Dayjs
    events: Event[]
}

const DayCard = ({ day, events }: Props) => {
    const [, setView] = useQueryState('view')
    const [date, setDate] = useQueryState('date', {
        defaultValue: dayjs().format('YYYY-MM-DD'),
    })
    const current = dayjs(date)
    const today = dayjs()
    const isCurrentDay =
        current.isSame(today, 'month') && day.date() === today.date()

    const handleClick = () => {
        setDate(current.set('date', day.date()).format('YYYY-MM-DD'))
        setView(DAY)
    }

    return (
        <Card
            onClick={handleClick}
            elevation={0}
            sx={{
                cursor: 'pointer',
                aspectRatio: 1,
                overflow: 'visible',
                flex: 1,
                border: '1px solid',
                borderColor: isCurrentDay ? '#7FFFD4' : 'grey.100',
                backgroundColor: isCurrentDay ? alpha('#7FFF94', 0.1) : '#fff',
                transition: 'all 0.2s ease',
                '&:hover': {
                    borderColor: 'primary.light',
                    transform: 'scale(1.02)',
                },
            }}
        >
            <CardContent
                sx={{
                    p: 1.5,
                    '&:last-child': {
                        p: 1.5,
                    },
                }}
            >
                <Typography
                    sx={{
                        color: isCurrentDay ? '#7FFFD4' : '#64748b',
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        mb: 0.5,
                    }}
                >
                    {day.format('ddd')}
                </Typography>
                <Typography
                    variant="subtitle2"
                    sx={{
                        color: isCurrentDay ? '#7FFFD4' : 'inherit',
                        mb: 1,
                    }}
                >
                    {day.date()}
                </Typography>
                <Stack spacing={0.5} useFlexGap>
                    {events.map((event) => (
                        <EventCard
                            key={`${event.type}-${event.id}`}
                            event={event}
                        />
                    ))}
                </Stack>
            </CardContent>
        </Card>
    )
}

export default DayCard
