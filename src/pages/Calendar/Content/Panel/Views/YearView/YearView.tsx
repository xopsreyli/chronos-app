import { Grid } from '@mui/material'
import MonthCard from './MonthCard/MonthCard.tsx'
import useEvents from '../../../../../../hooks/calendars/events/useEvents/useEvents.ts'
import { useMemo } from 'react'
import dayjs from 'dayjs'
import { useQueryState } from 'nuqs'

const YearView = () => {
    const [date] = useQueryState('date', {
        defaultValue: dayjs().format('YYYY-MM-DD'),
    })
    const { data: events } = useEvents()
    const current = dayjs(date)

    const eventsPerMonth: number[] = useMemo(() => {
        const result: number[] = Array.from({ length: 12 }, () => 0)

        if (events) {
            events.arrangements.forEach((arrangement) => {
                const from = dayjs(arrangement.from)
                const to = dayjs(arrangement.to)
                const startMonth: number =
                    from.year() === current.year() ? from.month() : 0
                const finishMonth: number =
                    to.year() === current.year() ? to.month() : 11
                for (let month = startMonth; month <= finishMonth; month++) {
                    result[month] += 1
                }
            })
            events.reminders.forEach((reminder) => {
                const month: number = dayjs(reminder.dateTime).month()
                result[month] += 1
            })
            events.tasks.forEach((task) => {
                const month: number = dayjs(task.dateTime).month()
                result[month] += 1
            })
        }

        return result
    }, [events, date])

    return (
        <Grid container columns={4} spacing={2}>
            {eventsPerMonth.map((events, i) => (
                <Grid size={1} key={i}>
                    <MonthCard monthIndex={i} numberOfEvents={events} />
                </Grid>
            ))}
        </Grid>
    )
}

export default YearView
