import type {
    EventType,
    EventUpdationData,
} from '../../../types/events/types.ts'

const updateEvent = async (
    id: number,
    type: EventType,
    data: EventUpdationData,
) => {
    const response = await fetch(
        import.meta.env.VITE_APP_API + `/events/${id}?type=${type}`,
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

export default updateEvent
