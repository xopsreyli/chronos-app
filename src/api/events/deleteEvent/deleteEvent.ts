import type { EventType } from '../../../types/events/types.ts'

const deleteEvent = async (id: number, type: EventType): Promise<void> => {
    const response = await fetch(
        import.meta.env.VITE_APP_API + `/events/${id}?type=${type}`,
        {
            method: 'DELETE',
            credentials: 'include',
        },
    )

    if (!response.ok) {
        throw await response.json()
    }
}

export default deleteEvent
