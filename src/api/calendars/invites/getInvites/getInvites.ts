import type { Invite } from '../../../../types/calendar/invite/types.ts'

const getInvites = async (): Promise<Invite[]> => {
    const response = await fetch(
        import.meta.env.VITE_APP_API + '/api/calendars/invites',
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

export default getInvites
