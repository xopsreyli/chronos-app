import { alpha, Card, CardContent, Typography } from '@mui/material'
import dayjs from 'dayjs'
import { useQueryState } from 'nuqs'

type Props = {
    monthIndex: number
    numberOfEvents: number
}

const MonthCard = ({ monthIndex, numberOfEvents }: Props) => {
    const [date] = useQueryState('date', {
        defaultValue: dayjs().format('YYYY-MM-DD'),
    })
    const current = dayjs(date)
    const today = dayjs()
    const isCurrentMonth =
        current.isSame(today, 'year') && monthIndex === today.month()

    return (
        <Card
            elevation={0}
            sx={{
                cursor: 'pointer',
                border: '1px solid',
                borderColor: isCurrentMonth ? '#7FFFD4' : 'grey.100',
                backgroundColor: isCurrentMonth
                    ? alpha('#7FFF94', 0.1)
                    : '#ffffff',
                transition: 'all 0.2s ease',
                '&:hover': {
                    borderColor: 'primary.light',
                    transform: 'scale(1.02)',
                },
            }}
        >
            <CardContent>
                <Typography
                    sx={{
                        color: isCurrentMonth ? '#7FFFD4' : 'inherit',
                        fontWeight: 500,
                        mb: 2,
                    }}
                >
                    {dayjs().month(monthIndex).format('MMMM')}
                </Typography>
                <Typography
                    color="text.secondary"
                    sx={{
                        fontSize: '0.75rem',
                    }}
                >
                    {`${numberOfEvents} events`}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default MonthCard
