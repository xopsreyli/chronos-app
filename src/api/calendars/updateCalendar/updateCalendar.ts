import type { Calendar } from '../../../types/calendar/types.ts'

type CalendarUpdateData = Pick<Calendar, 'id'> & Partial<Omit<Calendar, 'id'>>

const updateCalendar = async (calendar: CalendarUpdateData) => {
    const { id, ...data } = calendar
    const response = await fetch(
        import.meta.env.VITE_APP_API + `/calendars/${id}`,
        {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        },
    )

    const json = await response.json()

    if (!response.ok) {
        throw json
    }

    return json
}

export default updateCalendar
