import { Stack } from '@mui/material'
import DayCard from './DayCard/DayCard.tsx'
import useEvents from '../../../../../../hooks/calendars/events/useEvents/useEvents.ts'
import { useMemo } from 'react'
import dayjs from 'dayjs'
import type { Event } from '../../../../../../types/events/types.ts'
import { useQueryState } from 'nuqs'

const WeekView = () => {
    const [date] = useQueryState('date', {
        defaultValue: dayjs().format('YYYY-MM-DD'),
    })
    const { data: events } = useEvents()
    const current = dayjs(date)

    const days = useMemo(() => {
        return Array.from({ length: 7 }, (_, i) =>
            current.startOf('week').add(i, 'day'),
        )
    }, [date])

    const eventsByDay = useMemo(() => {
        const result: Record<number, Event[]> = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
        }

        if (!events) return result

        events.arrangements.forEach((arrangement) => {
            const from = dayjs(arrangement.from)
            const to = dayjs(arrangement.to)
            const startDate = from.isBefore(current.startOf('week'))
                ? 0
                : from.day()
            const finishDate = to.isAfter(current.endOf('week')) ? 6 : to.day()
            for (let i = startDate; i <= finishDate; i++) {
                result[i].push(arrangement)
            }
        })
        events.reminders.forEach((reminder) => {
            const weekDayIndex = dayjs(reminder.dateTime).day()
            result[weekDayIndex].push(reminder)
        })
        events.tasks.forEach((task) => {
            const weekDayIndex = dayjs(task.dateTime).day()
            result[weekDayIndex].push(task)
        })

        return result
    }, [events])

    return (
        <Stack direction="row" spacing={1} useFlexGap>
            {days.map((day) => (
                <DayCard
                    key={day.date()}
                    day={day}
                    events={eventsByDay[day.day()]}
                />
            ))}
        </Stack>
    )
}

export default WeekView
