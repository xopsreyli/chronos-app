import type { Calendar } from '../../../types/calendar/types.ts'

const getCalendar = async (id: number): Promise<Calendar> => {
    console.log('got called')
    const response = await fetch(
        import.meta.env.VITE_APP_API + `/calendars/${id}`,
        {
            method: 'GET',
            credentials: 'include',
        },
    )

    const json = await response.json()

    if (!response.ok) {
        throw json
    }

    return json
}

export default getCalendar
