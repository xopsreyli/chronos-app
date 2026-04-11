const getCalendars = async () => {
    const response = await fetch(import.meta.env.VITE_APP_API + '/calendars', {
        method: 'GET',
        credentials: 'include',
    })

    const json = await response.json()

    if (!response.ok) {
        throw json
    }

    return json
}

export default getCalendars
