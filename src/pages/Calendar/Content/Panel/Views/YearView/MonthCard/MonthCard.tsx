import { alpha, Card, CardContent, Typography } from '@mui/material'
import dayjs from 'dayjs'
import { useQueryState } from 'nuqs'
import { MONTH } from '../../../../../../../enums/views/enums.ts'

type Props = {
    monthIndex: number
    numberOfEvents: number
}

const MonthCard = ({ monthIndex, numberOfEvents }: Props) => {
    const [, setView] = useQueryState('view')
    const [date, setDate] = useQueryState('date', {
        defaultValue: dayjs().format('YYYY-MM-DD'),
    })
    const current = dayjs(date)
    const today = dayjs()
    const isCurrentMonth =
        current.isSame(today, 'year') && monthIndex === today.month()

    const handleClick = () => {
        setDate(current.set('month', monthIndex).format('YYYY-MM-DD'))
        setView(MONTH)
    }

    return (
        <Card
            onClick={handleClick}
            elevation={0}
            sx={(theme) => ({
                cursor: 'pointer',
                border: '1px solid',
                borderColor: isCurrentMonth ? 'primary.main' : 'grey.100',
                backgroundColor: isCurrentMonth
                    ? alpha(theme.palette.secondary.main, 0.1)
                    : 'background.paper',
                transition: 'all 0.2s ease',
                '&:hover': {
                    borderColor: 'primary.light',
                    transform: 'scale(1.02)',
                },
            })}
        >
            <CardContent>
                <Typography
                    sx={{
                        color: isCurrentMonth ? 'primary.main' : 'text.primary',
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
