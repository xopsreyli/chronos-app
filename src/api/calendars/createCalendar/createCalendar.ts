import type { Calendar } from '../../../types/calendar/types.ts'

type CalendarCreationData = Omit<Calendar, 'id'>

const createCalendar = async (
    data: CalendarCreationData,
): Promise<Calendar> => {
    const response = await fetch(import.meta.env.VITE_APP_API + '/calendars', {
        method: 'POST',
        body: JSON.stringify({ ...data }),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    })

    const json = await response.json()

    if (!response.ok) {
        throw json
    }

    return json
}

export default createCalendar
