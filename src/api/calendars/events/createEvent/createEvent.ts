import {
    type Event,
    type EventCreationData,
    type EventType,
} from '../../../../types/events/types.ts'

const createEvent = async (
    calendarId: number,
    type: EventType,
    data: EventCreationData,
): Promise<Event> => {
    const response = await fetch(
        import.meta.env.VITE_APP_API +
            `/calendars/${calendarId}/events?type=${type}`,
        {
            method: 'POST',
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

export default createEvent
