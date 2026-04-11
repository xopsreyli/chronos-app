const deleteCalendar = async (id: number) => {
    const response = await fetch(
        import.meta.env.VITE_APP_API + `/calendars/${id}`,
        {
            method: 'DELETE',
            credentials: 'include',
        },
    )

    if (!response.ok) {
        throw await response.json()
    }

    return id
}

export default deleteCalendar
