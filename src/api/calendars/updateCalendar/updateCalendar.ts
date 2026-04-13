import type { Calendar } from '../../../types/calendar/types.ts'

type CalendarUpdateData = Pick<Calendar, 'id'> & Partial<Omit<Calendar, 'id'>>

const updateCalendar = async (
    calendarUpdateData: CalendarUpdateData,
): Promise<Calendar> => {
    const { id, ...data } = calendarUpdateData
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
