import { Grid, Typography } from '@mui/material'
import DayCell from './DayCell/DayCell.tsx'
import { useQueryState } from 'nuqs'
import dayjs from 'dayjs'
import { useMemo } from 'react'
import useEvents from '../../../../../../hooks/calendars/events/useEvents/useEvents.ts'

const WEEK_DAYS: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const MonthView = () => {
    const [date] = useQueryState('date', {
        defaultValue: dayjs().format('YYYY-MM-DD'),
    })
    const { data: events } = useEvents()
    const current = dayjs(date)

    const daysInMonth: number = current.daysInMonth()
    const weekIndexOfFirst = current.startOf('month').day()
    const dates: number[] = useMemo(
        () => [
            ...Array(weekIndexOfFirst).fill(0),
            ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
        ],
        [date],
    )

    const isEventsByDay = useMemo(() => {
        if (!events) return {}

        const result: Record<
            number,
            {
                isArrangement: boolean
                isReminder: boolean
                isTask: boolean
            }
        > = {}

        events.arrangements.forEach((arrangement) => {
            const from = dayjs(arrangement.from)
            const to = dayjs(arrangement.to)
            const startDate: number = from.isBefore(current.startOf('month'))
                ? 1
                : from.date()
            const finishDate: number = to.isAfter(current.endOf('month'))
                ? current.endOf('month').date()
                : to.date()
            for (let i = startDate; i <= finishDate; i++) {
                if (!result[i]) {
                    result[i] = {
                        isArrangement: true,
                        isReminder: false,
                        isTask: false,
                    }
                } else {
                    result[i].isArrangement = true
                }
            }
        })
        events.reminders.forEach((reminder) => {
            const reminderDate = dayjs(reminder.dateTime).date()
            if (!result[reminderDate]) {
                result[reminderDate] = {
                    isArrangement: false,
                    isReminder: true,
                    isTask: false,
                }
            } else {
                result[reminderDate].isReminder = true
            }
        })
        events.tasks.forEach((task) => {
            const taskDate = dayjs(task.dateTime).date()
            if (!result[taskDate]) {
                result[taskDate] = {
                    isArrangement: false,
                    isReminder: false,
                    isTask: true,
                }
            } else {
                result[taskDate].isTask = true
            }
        })

        return result
    }, [events, date])

    return (
        <Grid container columns={7} spacing={0.5}>
            {WEEK_DAYS.map((weekDay) => (
                <Grid key={weekDay} size={1}>
                    <Typography
                        align={'center'}
                        color={'text.secondary'}
                        sx={{
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            p: 1,
                        }}
                    >
                        {weekDay}
                    </Typography>
                </Grid>
            ))}
            {dates.map((d, i) => (
                <Grid key={i} size={1}>
                    {d !== 0 && (
                        <DayCell
                            date={d}
                            isArrangement={
                                isEventsByDay[d]?.isArrangement ?? false
                            }
                            isReminder={isEventsByDay[d]?.isReminder ?? false}
                            isTask={isEventsByDay[d]?.isTask ?? false}
                        />
                    )}
                </Grid>
            ))}
        </Grid>
    )
}

export default MonthView
