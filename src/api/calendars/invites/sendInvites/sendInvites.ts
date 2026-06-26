const sendInvites = async (id: number, userIds: number[]) => {
    const response = await fetch(
        import.meta.env.VITE_APP_API + `/api/calendars/${id}/invite`,
        {
            method: 'POST',
            body: JSON.stringify({
                userIds,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        },
    )

    if (!response.ok) {
        throw await response.json()
    }
}

export default sendInvites
