import type { Events } from '../../../../types/events/types.ts'

const getEvents = async (
    calendarId: number,
    from: string,
    to: string,
): Promise<Events> => {
    const response = await fetch(
        import.meta.env.VITE_APP_API +
            `/calendars/${calendarId}/events?from=${from}&to=${to}`,
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

export default getEvents
