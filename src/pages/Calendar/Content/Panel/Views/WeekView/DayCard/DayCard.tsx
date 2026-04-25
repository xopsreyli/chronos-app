import { Card, CardContent, Stack, Typography } from '@mui/material'
import EventCard from './Event/Event'
import { type Event } from '../../../../../../../types/events/types.ts'
import { type Dayjs } from 'dayjs'

type Props = {
    day: Dayjs
    events: Event[]
}

const DayCard = ({ day, events }: Props) => {
    return (
        <Card
            elevation={0}
            sx={{
                cursor: 'pointer',
                aspectRatio: 1,
                overflow: 'visible',
                flex: 1,
                border: '1px solid',
                borderColor: 'grey.100',
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
                    color="text.secondary"
                    sx={{
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
                        mb: 1,
                    }}
                >
                    {day.date()}
                </Typography>
                <Stack spacing={0.5} useFlexGap>
                    {events.map((event) => (
                        <EventCard key={event.id} title={event.title} />
                    ))}
                </Stack>
            </CardContent>
        </Card>
    )
}

export default DayCard
